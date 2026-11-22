# Social graphics: Replit App Storage to Buffer

Canva remains the design source. Export only the approved final PNG. The website
stores that export in a dedicated private App Storage bucket and serves the
image from a stable URL that Buffer can fetch without signing in. Adding a new
approved graphic does not require a website redeploy.

## One-time setup (after review)

1. In the **Transition Trails Public Site** Replit project, create a dedicated
   App Storage bucket for approved public social graphics. Keep the backing
   bucket private; do not reuse a bucket for internal or user-uploaded files.
   Set the bucket's ID as `SOCIAL_MEDIA_BUCKET_ID` for the intended deployment.
2. Generate a separate 32-byte random upload token (64 lowercase hex characters).
   Save it as the deployment secret `SOCIAL_MEDIA_UPLOAD_TOKEN` and in the
   approved automation's secret store. Never put it in a URL, Canva, Buffer,
   chat, logs, or the Git repository. Give it only to the automation that
   handles approved PNGs. Without valid configuration the upload route is off.
3. Test on a staging deployment with a **separate** bucket and token; then
   deploy through the normal website release process after review. Check that
   the published site routes `/api/media/` to the API server and returns image
   bytes rather than the website's HTML fallback. Leave the existing web
   routes, DNS, and other integrations unchanged.

## Upload an approved export

The automation sends the raw PNG file (not JSON, not a Canva share URL) as a
`PUT /api/media/<slug>`. Use a simple lowercase slug such as
`career-story-permit`, with letters, digits and hyphens. Set
`Content-Type: image/png` and send the upload token in the Authorization bearer
header. The endpoint accepts an uncompressed HTTP request body up to 5 MiB.

For an authorized staging smoke test, inject the token from a secret store;
do not run with shell tracing or verbose HTTP logging.

```sh
DEPLOYMENT_ORIGIN=https://your-staging-origin.example \
  node scripts/upload-social-media.mjs career-story-permit approved.png
```

This helper uploads, performs the unauthenticated verification GET and prints
`{url, sha256}` on success. It does not write to Buffer. A workflow runner that
does not use Node can make the same upload call directly:

```sh
curl --fail-with-body --silent --show-error \
  --request PUT \
  --header "Authorization: Bearer ${SOCIAL_MEDIA_UPLOAD_TOKEN}" \
  --header "Content-Type: image/png" \
  --data-binary @approved.png \
  "${DEPLOYMENT_ORIGIN}/api/media/career-story-permit"
```

A successful response contains `path` and `sha256`. Combine `path` with the
configured deployment's HTTPS origin. The URL contains the file's SHA-256:
retrying the same upload gives the same path, while a changed image gets a
new path. Keep older versions reachable while they are referenced by unsent
posts. No one should upload unapproved files or sensitive information; the
returned image URL is public immediately.

## Attach to the existing Buffer draft

1. From outside Replit, GET the exact URL without credentials or redirects.
   Verify HTTP 200, `Content-Type: image/png`, and bytes matching the returned
   SHA-256. Treat HTML, authentication prompts, or a mismatch as a hard stop.
2. Read the exact Buffer post by ID. Confirm the organization and channel,
   `status: draft`, and the expected existing media. If the wanted URL is
   already attached, stop successfully. If other media or a link card is
   present, stop for review rather than replacing it.
3. Use Buffer's `editPost` for that same post ID, with `saveToDraft: true` and
   the verified URL as its image asset. Preserve the original copy, dates,
   scheduling mode, tags, and other metadata. If the client requires
   scheduling fields, pass the values from the fresh read (including any
   existing planned date) rather than supplying a new time. Do not call
   `createPost`, queue the draft, or publish it.
4. Read the draft again. Confirm its ID, channel, image, draft status, copy,
   and planned date. If Buffer returns its own media URL, verify the resulting
   attachment rather than requiring that URL to equal the website URL. Report
   verification failures instead of claiming the attachment is ready. Claude
   continues to manage posting dates separately.

Use one approved image and one existing draft for the first live pilot. Before
rolling out, test a missing or invalid token, a wrong content type, an
oversized upload, an unknown image URL, repeat upload, and a revised PNG.
Never automatically purge an image that Buffer might still need.

- [Replit App Storage](https://docs.replit.com/features/data-and-storage/object-storage)
- [Buffer media hosting requirements](https://developers.buffer.com/guides/hosting-media.html)
