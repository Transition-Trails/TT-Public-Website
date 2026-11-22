import { timingSafeEqual } from "node:crypto";
import express, { type ErrorRequestHandler, type IRouter } from "express";
import { logger } from "../lib/logger";
import {
  imageHash,
  isBoundedPng,
  MAX_PNG_BYTES,
  mediaStorageKey,
  type MediaStorage,
} from "../lib/media-storage";

const SLUG = /^(?=.{1,80}$)[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PNG_FILE = /^([a-f0-9]{64})\.png$/;

export function createMediaRouter(storage?: MediaStorage, uploadToken?: string): IRouter {
  const router = express.Router({ caseSensitive: true, strict: true });
  const expectedToken = uploadToken && /^[a-f0-9]{64}$/i.test(uploadToken)
    ? Buffer.from(uploadToken, "ascii")
    : undefined;

  router.use((_req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });

  // Express also uses this handler for HEAD, omitting the body.
  router.get<{ slug: string; filename: string }>("/:slug/:filename", async (req, res) => {
    const { slug, filename } = req.params;
    const hash = PNG_FILE.exec(filename)?.[1];
    if (!storage || !SLUG.test(slug) || !hash) {
      res.status(404).json({ error: "Image not found" });
      return;
    }

    try {
      const bytes = await storage.read(mediaStorageKey(slug, hash));
      if (!bytes) {
        res.status(404).json({ error: "Image not found" });
        return;
      }
      if (!isBoundedPng(bytes) || imageHash(bytes) !== hash) {
        logger.warn("Published media failed integrity validation");
        res.status(502).json({ error: "Image temporarily unavailable" });
        return;
      }
      res.set({
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": "image/png",
        "Cross-Origin-Resource-Policy": "cross-origin",
        "X-Content-Type-Options": "nosniff",
        ETag: `"${hash}"`,
      }).send(bytes);
    } catch {
      logger.warn("Published media storage read failed");
      res.status(502).json({ error: "Image temporarily unavailable" });
    }
  });

  router.put<{ slug: string }>(
    "/:slug",
    (req, res, next) => {
      if (!storage || !expectedToken) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      const token = /^Bearer ([a-f0-9]{64})$/i.exec(req.get("Authorization") ?? "")?.[1];
      if (!token || !timingSafeEqual(Buffer.from(token, "ascii"), expectedToken)) {
        res.set("WWW-Authenticate", "Bearer").status(401).json({ error: "Unauthorized" });
        return;
      }
      if (!SLUG.test(req.params.slug)) {
        res.status(400).json({ error: "Invalid media slug" });
        return;
      }
      const encoding = req.get("Content-Encoding") ?? "identity";
      if (
        !/^image\/png$/i.test(req.get("Content-Type") ?? "") ||
        encoding.toLowerCase() !== "identity"
      ) {
        res.status(415).json({ error: "Expected an uncompressed image/png request" });
        return;
      }
      if (Number(req.get("Content-Length")) > MAX_PNG_BYTES) {
        res.status(413).json({ error: "Image exceeds the upload size limit" });
        return;
      }
      next();
    },
    // Auth first. Also limit chunked requests for which Content-Length is unavailable.
    express.raw({ type: () => true, limit: MAX_PNG_BYTES, inflate: false }),
    async (req, res) => {
      const bytes: unknown = req.body;
      if (!Buffer.isBuffer(bytes) || !isBoundedPng(bytes)) {
        res.status(422).json({ error: "Invalid or unsupported PNG image" });
        return;
      }
      const { slug } = req.params;
      const sha256 = imageHash(bytes);
      const path = `/api/media/${slug}/${sha256}.png`;
      try {
        // Same slug and bytes derive the same key; different bytes cannot
        // replace an already-published URL.
        await storage!.write(mediaStorageKey(slug, sha256), bytes);
        res.location(path).status(201).json({ path, sha256 });
      } catch {
        logger.warn("Published media storage write failed");
        res.status(502).json({ error: "Unable to store image" });
      }
    },
  );

  router.use((_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  const handleParseError: ErrorRequestHandler = (error: unknown, _req, res, next) => {
    if (res.headersSent) {
      next(error);
      return;
    }
    // In particular, do not log body-parser errors: an error may carry the body.
    const status = (error as { status?: number } | null)?.status;
    if (status === 413) {
      res.status(413).json({ error: "Image exceeds the upload size limit" });
    } else {
      res.status(400).json({ error: "Invalid media request" });
    }
  };
  router.use(handleParseError);

  return router;
}
