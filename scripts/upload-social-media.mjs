// Upload an already-approved social graphic and verify the public delivery URL.
// The caller must supply the upload token through its secret store.
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";

const maxBytes = 5 * 1024 * 1024;
const pngMagic = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

try {
  const [slug, file, ...extra] = process.argv.slice(2);
  if (!file || extra.length || !slug || slug.length > 80 ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Usage: node scripts/upload-social-media.mjs <slug> <approved.png>");
  }

  const token = process.env.SOCIAL_MEDIA_UPLOAD_TOKEN;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) {
    throw new Error("Set SOCIAL_MEDIA_UPLOAD_TOKEN from your secret store.");
  }

  const configuredOrigin = process.env.DEPLOYMENT_ORIGIN;
  if (!configuredOrigin) throw new Error("Set DEPLOYMENT_ORIGIN for the intended deployment.");
  const origin = new URL(configuredOrigin);
  if (origin.protocol !== "https:" || origin.username || origin.password ||
      origin.pathname !== "/" || origin.search || origin.hash) {
    throw new Error("DEPLOYMENT_ORIGIN must be a bare HTTPS origin.");
  }

  const info = await stat(file);
  if (!info.isFile() || info.size < pngMagic.length || info.size > maxBytes) {
    throw new Error("Expected a local PNG file no larger than 5 MiB.");
  }
  const bytes = await readFile(file);
  if (bytes.length > maxBytes || !bytes.subarray(0, pngMagic.length).equals(pngMagic)) {
    throw new Error("Expected PNG bytes no larger than 5 MiB.");
  }
  const digest = sha256(bytes);
  const writePath = `/api/media/${slug}`;
  const expectedPath = `${writePath}/${digest}.png`;

  const upload = await fetch(new URL(writePath, origin), {
    method: "PUT",
    headers: { authorization: `Bearer ${token}`, "content-type": "image/png" },
    body: bytes,
    redirect: "error",
    signal: AbortSignal.timeout(30_000),
  });
  if (!upload.ok) throw new Error(`Upload failed (HTTP ${upload.status}).`);
  const receipt = await upload.json();
  if (receipt.path !== expectedPath || receipt.sha256 !== digest) {
    throw new Error("Upload receipt did not match the expected image URL and hash.");
  }

  const url = new URL(expectedPath, origin);
  const download = await fetch(url, {
    redirect: "error",
    signal: AbortSignal.timeout(30_000),
  });
  if (download.status !== 200 || download.headers.get("content-type") !== "image/png") {
    throw new Error("The public URL did not return an image/png response.");
  }
  const hash = createHash("sha256");
  let downloaded = 0;
  for await (const chunk of download.body ?? []) {
    downloaded += chunk.length;
    if (downloaded > bytes.length) throw new Error("The public image was larger than expected.");
    hash.update(chunk);
  }
  if (downloaded !== bytes.length || hash.digest("hex") !== digest) {
    throw new Error("The public image did not match the approved PNG.");
  }
  console.log(JSON.stringify({ url: url.href, sha256: digest }));
} catch (error) {
  // Network/provider response bodies and credentials are never printed.
  console.error(error?.code ? "Could not read the input file." : error.message);
  process.exitCode = 1;
}
