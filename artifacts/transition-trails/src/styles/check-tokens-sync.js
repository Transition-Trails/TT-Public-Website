#!/usr/bin/env node
/**
 * check-tokens-sync.js
 * ─────────────────────────────────────────────────────────────────
 * Verifies that tokens.css and tokens.js are in lockstep.
 *
 * Rules enforced:
 *   1. Every --tt-* custom property declared in tokens.css must have a
 *      matching JS export in tokens.js whose value is "var(--tt-<name>)".
 *   2. Every var(--tt-*) reference in tokens.js must correspond to a
 *      --tt-* custom property declared in tokens.css.
 *
 * CSS name → JS export name conversion:
 *   --tt-trail-green  →  TT_TRAIL_GREEN
 *   --tt-green-100    →  TT_GREEN_100
 *
 * Exit 0 = in sync. Exit 1 = diverged (lists all problems).
 * ─────────────────────────────────────────────────────────────────
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_PATH = join(__dirname, "tokens.css");
const JS_PATH  = join(__dirname, "tokens.js");

// ── Helpers ──────────────────────────────────────────────────────

/** Convert a CSS custom-property name to its expected JS export name.
 *  --tt-trail-green  →  TT_TRAIL_GREEN */
function cssNameToJsExport(cssName) {
  // Strip leading "--" then uppercase and replace hyphens with underscores
  return cssName.slice(2).toUpperCase().replace(/-/g, "_");
}

// ── Parse tokens.css ─────────────────────────────────────────────

const cssSource = readFileSync(CSS_PATH, "utf8");

// Match every  --tt-<name>  that appears as a property declaration
// (i.e. followed by optional whitespace then colon).
const CSS_PROP_RE = /(--tt-[\w-]+)\s*:/g;
const cssTokens = new Set();
let m;
while ((m = CSS_PROP_RE.exec(cssSource)) !== null) {
  cssTokens.add(m[1]);
}

// ── Parse tokens.js ──────────────────────────────────────────────

const jsSource = readFileSync(JS_PATH, "utf8");

// Match every  export const <NAME> = "var(--tt-<name>)";
const JS_EXPORT_RE = /export\s+const\s+(\w+)\s*=\s*"var\((--tt-[\w-]+)\)"/g;

/** Map: JS export name → CSS var name it references */
const jsExports = new Map();
while ((m = JS_EXPORT_RE.exec(jsSource)) !== null) {
  jsExports.set(m[1], m[2]);
}

// ── Check 1: Every CSS token must have a matching JS export ──────

const errors = [];

for (const cssName of cssTokens) {
  const expectedExport = cssNameToJsExport(cssName);
  if (!jsExports.has(expectedExport)) {
    errors.push(
      `  MISSING JS EXPORT: ${cssName} in tokens.css has no matching ` +
      `"export const ${expectedExport}" in tokens.js`
    );
  } else if (jsExports.get(expectedExport) !== cssName) {
    errors.push(
      `  WRONG REFERENCE: export const ${expectedExport} in tokens.js ` +
      `references "${jsExports.get(expectedExport)}" but should reference "${cssName}"`
    );
  }
}

// ── Check 2: Every JS var() reference must exist in CSS ──────────

for (const [exportName, cssRef] of jsExports) {
  if (!cssTokens.has(cssRef)) {
    errors.push(
      `  STALE JS EXPORT: export const ${exportName} references ${cssRef} ` +
      `which is NOT declared in tokens.css`
    );
  }
}

// ── Report ───────────────────────────────────────────────────────

if (errors.length === 0) {
  const count = cssTokens.size;
  console.log(`✓ tokens.css and tokens.js are in sync (${count} tokens checked).`);
  process.exit(0);
} else {
  console.error(`✗ tokens.css / tokens.js are OUT OF SYNC (${errors.length} problem${errors.length === 1 ? "" : "s"}):\n`);
  for (const err of errors) {
    console.error(err);
  }
  console.error(
    "\nFix: add/remove the matching entry in the other file, then re-run:\n" +
    "  pnpm --filter @workspace/transition-trails run check:tokens"
  );
  process.exit(1);
}
