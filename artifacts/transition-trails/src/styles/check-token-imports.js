#!/usr/bin/env node
/**
 * check-token-imports.js
 * ─────────────────────────────────────────────────────────────────
 * Verifies that every token reference in any component/constant file
 * actually exists as a live export in tokens.js.
 *
 * Problem it prevents:
 *   When a token is renamed or removed from tokens.js, files that
 *   still reference the old name receive `undefined` at runtime with
 *   no build-time warning. This script catches that gap before merge.
 *
 * What it checks (two complementary passes):
 *
 *   Pass A — Named ES-module imports
 *     import { TT_SOME_TOKEN, TT_OTHER } from "…/tokens.js"
 *     import { TT_SOME_TOKEN, TT_OTHER } from "…/tokens"
 *     Each named import must match an `export const <NAME>` in tokens.js.
 *
 *   Pass B — String / template-context references
 *     1. Dot-notation access:    obj.TT_NAME
 *        (e.g. namespace imports: `import * as tokens from "…/tokens.js"`
 *         followed by `tokens.TT_TRAIL_GREEN` or `${tokens.TT_TRAIL_GREEN}`)
 *     2. Bracket-notation access: obj['TT_NAME']  obj["TT_NAME"]
 *     3. Template-expression body: ${… TT_NAME …}
 *
 *   Only TT_* names whose entire body is SCREAMING_SNAKE_CASE are
 *   flagged — this filters out asset file-name fragments such as
 *   "TT_Badge_1024px_transparent.png" (which contain lowercase letters).
 *
 * Exit 0 = all references are live.
 * Exit 1 = at least one stale or unknown reference found.
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

// ── Step 3a: Pass A — extract named ES-module imports ─────────────
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

// ── Step 3b: Pass B — extract string / template-context refs ──────
//
// Catches token names that appear outside named imports:
//
//   1. Dot-notation:    tokens.TT_TRAIL_GREEN
//      (common with namespace imports: import * as tokens from "…/tokens.js")
//
//   2. Bracket-notation: tokens['TT_TRAIL_GREEN'] / tokens["TT_TRAIL_GREEN"]
//      (dynamic property access via string literal)
//
//   3. Template-expression: ${tokens.TT_TRAIL_GREEN}  or  ${TT_TRAIL_GREEN}
//      Dot-notation inside `${}` is caught by rule 1. Standalone identifiers
//      in `${}` are included for completeness.
//
// Only SCREAMING_SNAKE_CASE TT_* names are considered (i.e. the entire name
// after TT_ must be [A-Z0-9_]+).  This rejects file-name fragments like
// "TT_Badge_1024px" which contain lowercase letters.

/**
 * SCREAMING_SNAKE token pattern — matches TT_ followed by one uppercase
 * letter then zero-or-more uppercase letters, digits, or underscores.
 * A word boundary at the end prevents partial matches inside longer words.
 */
const SCREAMING_TOKEN_RE = /\bTT_[A-Z][A-Z0-9_]*\b/g;

/**
 * Returns { file, name, context } for every TT_* name found in
 * string/template contexts that is NOT a named import specifier.
 *
 * @param {string} source    - full file text
 * @param {string} filePath  - absolute path (for error reporting)
 * @param {Set<string>} namedImports - names already captured by Pass A
 *                                     (excluded to avoid double-reporting)
 */
function extractStringTokenRefs(source, filePath, namedImports) {
  const results = [];

  // De-duplicate within this file: report each (name, context-type) once.
  const seen = new Set();

  function record(name, context) {
    const key = `${context}:${name}`;
    if (!seen.has(key)) {
      seen.add(key);
      results.push({ file: filePath, name, context });
    }
  }

  // ── Rule 1: dot-notation — .TT_NAME ──────────────────────────────
  //
  // Match a dot immediately followed by a SCREAMING_SNAKE TT_* identifier.
  // The look-behind (?<=\.) is NOT used for broad Node compatibility;
  // instead we capture group 1 as the name after the dot.
  const DOT_RE = /\.(\bTT_[A-Z][A-Z0-9_]*\b)/g;
  let d;
  while ((d = DOT_RE.exec(source)) !== null) {
    record(d[1], "dot-access");
  }

  // ── Rule 2: bracket-notation — ['TT_NAME'] / ["TT_NAME"] ─────────
  const BRACKET_RE = /\[['"](\bTT_[A-Z][A-Z0-9_]*\b)['"]\]/g;
  let b;
  while ((b = BRACKET_RE.exec(source)) !== null) {
    record(b[1], "bracket-string");
  }

  // ── Rule 3: template-expression body — ${ … TT_NAME … } ──────────
  //
  // Extract the content of every ${...} expression in the source, then
  // look for TT_* identifiers within that expression.  Dot-notation hits
  // inside template expressions are already caught by Rule 1, so the names
  // are de-duplicated via `seen` and won't be double-reported.
  //
  // Note: this regex handles simple (non-nested) template expressions; for
  // nested template literals a full parser would be required, but in practice
  // token references are always at the top expression level.
  const TMPL_EXPR_RE = /\$\{([^}]*)\}/g;
  let t;
  while ((t = TMPL_EXPR_RE.exec(source)) !== null) {
    const expr = t[1];
    SCREAMING_TOKEN_RE.lastIndex = 0;
    let n;
    while ((n = SCREAMING_TOKEN_RE.exec(expr)) !== null) {
      record(n[0], "template-expression");
    }
  }

  // Exclude names that were already picked up as named ES imports in this
  // file — those are reported separately by Pass A, with a clearer message.
  return results.filter(({ name }) => !namedImports.has(name));
}

// ── Step 4: Collect all problems ─────────────────────────────────

const errorsA = []; // Pass A — named imports
const errorsB = []; // Pass B — string/template refs

for (const filePath of allFiles) {
  let source;
  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    // Unreadable file — skip silently (not a token-import problem).
    continue;
  }

  // Pass A
  const imports = extractTokenImports(source, filePath);
  const namedImportNames = new Set(imports.map((i) => i.importedName));

  for (const { file, importedName } of imports) {
    if (!liveExports.has(importedName)) {
      const rel = relative(SRC_ROOT, file);
      errorsA.push(
        `  STALE IMPORT: "${importedName}" imported in ${rel} ` +
        `does not exist in tokens.js`
      );
    }
  }

  // Pass B
  const refs = extractStringTokenRefs(source, filePath, namedImportNames);
  for (const { file, name, context } of refs) {
    if (!liveExports.has(name)) {
      const rel = relative(SRC_ROOT, file);
      errorsB.push(
        `  STALE REF (${context}): "${name}" referenced in ${rel} ` +
        `does not exist in tokens.js`
      );
    }
  }
}

// ── Step 5: Report ───────────────────────────────────────────────

const allErrors = [...errorsA, ...errorsB];

if (allErrors.length === 0) {
  const fileCount = allFiles.length;
  const exportCount = liveExports.size;
  console.log(
    `✓ All token references are live ` +
    `(${exportCount} exported tokens checked across ${fileCount} source files, ` +
    `including named imports and string/template-context references).`
  );
  process.exit(0);
} else {
  const aCount = errorsA.length;
  const bCount = errorsB.length;
  const parts = [];
  if (aCount > 0) parts.push(`${aCount} stale named import${aCount === 1 ? "" : "s"}`);
  if (bCount > 0) parts.push(`${bCount} stale string/template reference${bCount === 1 ? "" : "s"}`);

  console.error(`✗ Stale token references found (${parts.join(", ")}):\n`);
  for (const err of allErrors) {
    console.error(err);
  }
  console.error(
    "\nFix: update the reference to match the current export name in tokens.js,\n" +
    "then re-run:\n" +
    "  pnpm --filter @workspace/transition-trails run check:imports"
  );
  process.exit(1);
}
