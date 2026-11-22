import assert from "node:assert/strict";
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { test, type TestContext } from "node:test";
import { crc32, deflateSync } from "node:zlib";
import express from "express";
import { createMediaRouter } from "../src/routes/media";
import {
  imageHash,
  isBoundedPng,
  MAX_PNG_BYTES,
  mediaStorageFor,
  mediaStorageKey,
  type MediaStorage,
} from "../src/lib/media-storage";

const token = "a".repeat(64);
const auth = { Authorization: `Bearer ${token}`, "Content-Type": "image/png" };
const route = "/api/media/proof-of-skill";

function pngChunk(name: string, data: Buffer): Buffer {
  const result = Buffer.alloc(data.length + 12);
  result.writeUInt32BE(data.length, 0);
  result.write(name, 4, "ascii");
  data.copy(result, 8);
  result.writeUInt32BE(crc32(result.subarray(4, -4)), result.length - 4);
  return result;
}

function makePng(pixel = 255, width = 1): Buffer {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(1, 4);
  header[8] = 8;
  header[9] = 2;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk("IHDR", header),
    pngChunk("IDAT", deflateSync(Buffer.from([0, pixel, 0, 0]))),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

async function mounted(t: TestContext, storage?: MediaStorage, uploadToken?: string) {
  const app = express();
  app.use("/api/media", createMediaRouter(storage, uploadToken));
  app.use(express.json());
  app.get("/api/healthz", (_req, res) => res.json({ status: "ok" }));
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise<void>((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
    server.closeAllConnections();
  }));
  const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  return (path: string, init?: RequestInit) => fetch(origin + path, init);
}

function memoryStorage() {
  const objects = new Map<string, Buffer>();
  const storage: MediaStorage = {
    async read(key) { return objects.get(key) ?? null; },
    async write(key, bytes) { objects.set(key, Buffer.from(bytes)); },
  };
  return { objects, storage };
}

test("config gates upload separately from existing public files", async (t) => {
  assert.equal(mediaStorageFor(undefined), undefined);
  assert.equal(mediaStorageFor("  "), undefined);
  const png = makePng();
  const disabled = await mounted(t, undefined, token);
  assert.equal((await disabled(route, { method: "PUT", headers: auth, body: png })).status, 404);
  assert.equal((await disabled(`${route}/${imageHash(png)}.png`)).status, 404);
  assert.equal((await disabled("/api/healthz")).status, 200);

  const { storage, objects } = memoryStorage();
  objects.set(mediaStorageKey("proof-of-skill", imageHash(png)), png);
  const readOnly = await mounted(t, storage, "short");
  assert.equal((await readOnly(route, { method: "PUT", headers: auth, body: png })).status, 404);
  assert.equal((await readOnly(`${route}/${imageHash(png)}.png`)).status, 200);
});

test("auth comes before body parsing; credentials are required on every write", async (t) => {
  const { storage, objects } = memoryStorage();
  const request = await mounted(t, storage, token);
  const noToken = await request(route, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: "{malformed-json",
  });
  assert.equal(noToken.status, 401);
  assert.equal(noToken.headers.get("WWW-Authenticate"), "Bearer");
  assert.equal(noToken.headers.get("cache-control"), "no-store");
  const wrongToken = await request(route, {
    method: "PUT",
    headers: { ...auth, Authorization: `Bearer ${"b".repeat(64)}` },
    body: makePng(),
  });
  assert.equal(wrongToken.status, 401);
  assert.equal(objects.size, 0);
});

test("writes only safe slugs and bounded PNG containers, including chunked bodies", async (t) => {
  const { storage, objects } = memoryStorage();
  const request = await mounted(t, storage, token);
  const png = makePng();
  const invalidCrc = Buffer.from(png);
  invalidCrc[invalidCrc.length - 1] ^= 1;
  const tooBig = Buffer.alloc(MAX_PNG_BYTES + 1);
  const badCases = [
    { path: "/api/media/unsafe%2Fslug", headers: auth, body: png, status: 400 },
    { path: "/api/media/UPPERCASE", headers: auth, body: png, status: 400 },
    { path: route, headers: { ...auth, "Content-Type": "image/svg+xml" }, body: png, status: 415 },
    { path: route, headers: { ...auth, "Content-Encoding": "gzip" }, body: png, status: 415 },
    { path: route, headers: auth, body: Buffer.from("<svg/>"), status: 422 },
    { path: route, headers: auth, body: png.subarray(0, -2), status: 422 },
    { path: route, headers: auth, body: invalidCrc, status: 422 },
    { path: route, headers: auth, body: makePng(0, 4097), status: 422 },
    { path: route, headers: auth, body: Buffer.concat([png, Buffer.from("<svg/>")]), status: 422 },
    { path: route, headers: auth, body: tooBig, status: 413 },
  ];
  for (const { path, headers, body, status } of badCases) {
    assert.equal((await request(path, { method: "PUT", headers, body })).status, status);
  }
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(tooBig.subarray(0, MAX_PNG_BYTES));
      controller.enqueue(tooBig.subarray(MAX_PNG_BYTES));
      controller.close();
    },
  });
  const chunked = { method: "PUT", headers: auth, body, duplex: "half" } as RequestInit;
  assert.equal((await request(route, chunked)).status, 413);
  assert.equal(objects.size, 0);
});

test("PNG versions have distinct immutable URLs and support anonymous GET and HEAD", async (t) => {
  const { storage, objects } = memoryStorage();
  const request = await mounted(t, storage, token);
  const first = makePng();
  const changed = makePng(0);
  assert(isBoundedPng(first));
  const write = async (body: Buffer) => {
    const response = await request(route, { method: "PUT", headers: auth, body });
    assert.equal(response.status, 201);
    const digest = imageHash(body);
    const path = `${route}/${digest}.png`;
    assert.deepEqual(await response.json(), { path, sha256: digest });
    assert.equal(response.headers.get("location"), path);
    assert.equal(response.headers.get("cache-control"), "no-store");
    return path;
  };
  const path = await write(first);
  assert.equal(await write(first), path);
  assert.notEqual(await write(changed), path);
  assert.equal(objects.size, 2);

  const image = await request(path);
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/png");
  assert.equal(image.headers.get("x-content-type-options"), "nosniff");
  assert.equal(image.headers.get("cache-control"), "public, max-age=31536000, immutable");
  assert.equal(image.headers.get("etag"), `"${imageHash(first)}"`);
  assert.deepEqual(Buffer.from(await image.arrayBuffer()), first);

  const head = await request(path, { method: "HEAD" });
  assert.equal(head.status, 200);
  assert.equal(head.headers.get("content-length"), String(first.length));
  assert.equal(await head.text(), "");
  assert.equal((await request(path, { headers: { "If-None-Match": image.headers.get("etag")!, "Cache-Control": "max-age=0" } })).status, 304);
  assert.equal((await request("/api/media")).status, 404);
  assert.equal((await request(path, { method: "DELETE", headers: auth })).status, 404);
  assert.equal((await request(`${route}/${"0".repeat(64)}.png`)).status, 404);
  assert.equal((await request(path.replace(".png", ".svg"))).status, 404);

  objects.set(mediaStorageKey("proof-of-skill", imageHash(first)), changed);
  const corrupt = await request(path);
  assert.equal(corrupt.status, 502);
  assert.equal(corrupt.headers.get("cache-control"), "no-store");
});
