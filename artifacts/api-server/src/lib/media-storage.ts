import { createHash } from "node:crypto";
import { addAbortSignal } from "node:stream";
import { crc32 } from "node:zlib";
import { Client, StreamRequestError } from "@replit/object-storage";

export const MAX_PNG_BYTES = 5 * 1024 * 1024;
const MAX_EDGE = 4096;
const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const BIT_DEPTHS: Readonly<Record<number, readonly number[]>> = {
  0: [1, 2, 4, 8, 16],
  2: [8, 16],
  3: [1, 2, 4, 8],
  4: [8, 16],
  6: [8, 16],
};

export interface MediaStorage {
  read(key: string): Promise<Buffer | null>;
  write(key: string, bytes: Buffer): Promise<void>;
}

export function mediaStorageFor(bucketId: string | undefined): MediaStorage | undefined {
  // Never fall back to the app's default bucket; this namespace is public.
  if (!bucketId?.trim()) return undefined;

  let client: Client | undefined;
  const getClient = () => (client ??= new Client({ bucketId: bucketId.trim() }));
  return {
    async read(key) {
      let length = 0;
      const chunks: Buffer[] = [];
      try {
        const stream = addAbortSignal(
          AbortSignal.timeout(10_000),
          getClient().downloadAsStream(key, { decompress: false }),
        );
        for await (const chunk of stream) {
          const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
          length += bytes.length;
          if (length > MAX_PNG_BYTES) throw new Error("Stored image exceeds the limit");
          chunks.push(bytes);
        }
        return Buffer.concat(chunks, length);
      } catch (error) {
        if (error instanceof StreamRequestError && error.getRequestError().statusCode === 404) {
          return null;
        }
        throw error;
      }
    },
    async write(key, bytes) {
      const result = await getClient().uploadFromBytes(key, bytes, { compress: false });
      if (!result.ok) throw new Error("Unable to store image");
    },
  };
}

export function imageHash(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

export function mediaStorageKey(slug: string, hash: string): string {
  return `public-social-png/v1/${slug}/${hash}.png`;
}

// Validate the PNG container without inflating untrusted compressed data. A
// fixed content type, nosniff, and no trailing bytes prevent serving other formats.
export function isBoundedPng(bytes: Buffer): boolean {
  if (
    bytes.length < 57 ||
    bytes.length > MAX_PNG_BYTES ||
    !bytes.subarray(0, 8).equals(PNG_SIGNATURE)
  ) return false;

  let pos = 8;
  let colorType = -1;
  let bitDepth = 0;
  let hasPalette = false;
  let idatBytes = 0;
  let pastIdat = false;

  for (let chunks = 0; chunks < 1024 && pos + 12 <= bytes.length; chunks++) {
    const size = bytes.readUInt32BE(pos);
    const data = pos + 8;
    const end = data + size;
    if (end + 4 > bytes.length) return false;

    const name = bytes.toString("latin1", pos + 4, data);
    if (!/^[A-Za-z]{2}[A-Z][A-Za-z]$/.test(name)) return false;
    if (crc32(bytes.subarray(pos + 4, end)) !== bytes.readUInt32BE(end)) return false;

    if (chunks === 0) {
      if (name !== "IHDR" || size !== 13) return false;
      const width = bytes.readUInt32BE(data);
      const height = bytes.readUInt32BE(data + 4);
      bitDepth = bytes[data + 8];
      colorType = bytes[data + 9];
      if (
        width < 1 || width > MAX_EDGE || height < 1 || height > MAX_EDGE ||
        !BIT_DEPTHS[colorType]?.includes(bitDepth) ||
        bytes[data + 10] !== 0 || bytes[data + 11] !== 0 || bytes[data + 12] > 1
      ) return false;
    } else if (name === "PLTE") {
      if (
        hasPalette || idatBytes > 0 || colorType === 0 || colorType === 4 ||
        size === 0 || size % 3 !== 0 || size > 768 ||
        (colorType === 3 && size / 3 > 2 ** bitDepth)
      ) return false;
      hasPalette = true;
    } else if (name === "IDAT") {
      if (pastIdat || (colorType === 3 && !hasPalette)) return false;
      idatBytes += size;
    } else if (name === "IEND") {
      return size === 0 && idatBytes > 0 && end + 4 === bytes.length;
    } else {
      // Reject unknown critical chunks, including duplicate IHDR; ancillary
      // chunks may follow image data but the IDAT chunks must be consecutive.
      if (/^[A-Z]/.test(name)) return false;
      if (idatBytes > 0) pastIdat = true;
    }

    pos = end + 4;
  }

  return false;
}
