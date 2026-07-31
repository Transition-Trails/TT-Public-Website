#!/usr/bin/env node
/**
 * check-token-imports.js
 * ─────────────────────────────────────────────────────────────────
 * Verifies that every named import of a token from tokens.js in any
 * component/constant file actually exists as a live export in tokens.js.
 *
 * Problem it prevents:
 *   When a token is renamed or removed from tokens.js, files that
 *   still import the old name receive `undefined` at runtime with no
 *   build-time warning. This script catches that gap before merge.
 *
 * What it checks:
 *   For every file under src/ (except tokens.js itself and the check
 *   scripts), any import of the form:
 *
 *     import { TT_SOME_TOKEN, TT_OTHER } from "…/tokens.js"
 *     import { TT_SOME_TOKEN, TT_OTHER } from "…/tokens"
 *
 *   Each named import must match an `export const <NAME>` in tokens.js.
 *
 * Exit 0 = all imports are live.
 * Exit 1 = at least one stale or unknown import found.
 * ─────────────────────────────────────────────────────────────────
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_ROOT  = join(__dirname, "..");   // artifacts/transition-trails/src/
const JS_PATH   = join(__dirname, "tokens.js");

// Files to skip — they are the token definitions / infrastructure, not consumers.
const SKIP_FILES = new Set([
  join(__dirname, "tokens.js"),
  join(__dirname, "check-tokens-sync.js"),
  join(__dirname, "check-token-imports.js"),
  join(__dirname, "check-nav-contrast.js"),
]);

// ── Step 1: Collect all exported names from tokens.js ────────────

const jsSource = readFileSync(JS_PATH, "utf8");

// Match every:  export const TT_SOME_NAME = …
const EXPORT_RE = /^export\s+const\s+(\w+)\s*=/gm;
const liveExports = new Set();
let m;
while ((m = EXPORT_RE.exec(jsSource)) !== null) {
  liveExports.add(m[1]);
}

// ── Step 2: Walk src/ recursively, collect source files ──────────

const SOURCE_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx"]);

function walkDir(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkDir(full, files);
    } else if (SOURCE_EXTENSIONS.has(entry.slice(entry.lastIndexOf(".")))) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = walkDir(SRC_ROOT).filter((f) => !SKIP_FILES.has(f));

// ── Step 3: For each file, extract imports from tokens.js ─────────
//
// Handles multi-line imports such as:
//
//   import {
//     TT_TEAL_300,
//     TT_TRAIL_GREEN,
//   } from "../styles/tokens.js";
//
// Strategy: find every import block whose "from" clause ends with
// /tokens.js or /tokens (without extension), then extract the named
// specifiers from the braces.

/**
 * Returns an array of { file, importedName } objects for every named
 * import from a tokens.js-like path in the given source text.
 */
function extractTokenImports(source, filePath) {
  const results = [];

  // Match a complete import statement (possibly multi-line).
  // We look for: import { … } from "…/tokens[.js]"
  // The [\s\S]*? inside { } covers newlines in multi-line imports.
  const IMPORT_BLOCK_RE =
    /import\s*\{([\s\S]*?)\}\s*from\s*["']([^"']+\/tokens(?:\.js)?)["']/g;

  let imp;
  while ((imp = IMPORT_BLOCK_RE.exec(source)) !== null) {
    const specifierBlock = imp[1]; // everything between { and }

    // Split on commas; each piece may be "NAME" or "NAME as ALIAS"
    for (const raw of specifierBlock.split(",")) {
      const part = raw.trim().replace(/\s+as\s+\w+$/, "").trim();
      if (part) {
        results.push({ file: filePath, importedName: part });
      }
    }
  }

  return results;
}

// ── Step 4: Collect all problems ─────────────────────────────────

const errors = [];

for (const filePath of allFiles) {
  let source;
  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    // Unreadable file — skip silently (not a token-import problem).
    continue;
  }

  const imports = extractTokenImports(source, filePath);
  for (const { file, importedName } of imports) {
    if (!liveExports.has(importedName)) {
      const rel = relative(SRC_ROOT, file);
      errors.push(
        `  STALE IMPORT: "${importedName}" imported in ${rel} ` +
        `does not exist in tokens.js`
      );
    }
  }
}

// ── Step 5: Report ───────────────────────────────────────────────

if (errors.length === 0) {
  const fileCount = allFiles.length;
  const exportCount = liveExports.size;
  console.log(
    `✓ All token imports are live ` +
    `(${exportCount} exported tokens checked across ${fileCount} source files).`
  );
  process.exit(0);
} else {
  console.error(
    `✗ Stale token imports found (${errors.length} problem${errors.length === 1 ? "" : "s"}):\n`
  );
  for (const err of errors) {
    console.error(err);
  }
  console.error(
    "\nFix: update the import to match the current export name in tokens.js,\n" +
    "then re-run:\n" +
    "  pnpm --filter @workspace/transition-trails run check:imports"
  );
  process.exit(1);
}
