#!/usr/bin/env node
/**
 * generate-tokens.js
 * ─────────────────────────────────────────────────────────────────
 * Reads tokens.css and writes tokens.js automatically.
 *
 * Usage:
 *   node src/styles/generate-tokens.js
 *   pnpm --filter @workspace/transition-trails run generate:tokens
 *
 * After running, commit both tokens.css and the regenerated tokens.js.
 * The tokens-sync check (check:tokens) remains in place as a safety net
 * to catch any case where the generator was not re-run.
 * ─────────────────────────────────────────────────────────────────
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_PATH = join(__dirname, "tokens.css");
const JS_PATH  = join(__dirname, "tokens.js");

// ── Helpers ──────────────────────────────────────────────────────

/** Convert a CSS custom-property name to its JS export name.
 *  --tt-trail-green  →  TT_TRAIL_GREEN */
function cssNameToJsExport(cssName) {
  return cssName.slice(2).toUpperCase().replace(/-/g, "_");
}

/** Pad a string on the right to a given length. */
function rpad(str, len) {
  return str.length >= len ? str : str + " ".repeat(len - str.length);
}

// ── Parse tokens.css ─────────────────────────────────────────────

const cssSource = readFileSync(CSS_PATH, "utf8");

/**
 * Walk the CSS source line by line, collecting:
 *   - Section heading comments (lines matching /──.*──/)
 *   - Token declarations  --tt-<name>: <value>;  with optional trailing comment
 *
 * We group tokens under the section heading they appear after.
 */

const SECTION_RE = /\/\*\s*──\s*(.+?)\s*─+\s*\*\//;
const TOKEN_RE   = /^\s*(--tt-[\w-]+)\s*:[^;]+;(?:\s*\/\*(.+?)\*\/)?/;

const sections = []; // [{ heading: string, tokens: [{ name, comment }] }]
let currentSection = null;

for (const line of cssSource.split("\n")) {
  const sectionMatch = SECTION_RE.exec(line);
  if (sectionMatch) {
    currentSection = { heading: sectionMatch[1].trim(), tokens: [] };
    sections.push(currentSection);
    continue;
  }

  const tokenMatch = TOKEN_RE.exec(line);
  if (tokenMatch && currentSection) {
    currentSection.tokens.push({
      name:    tokenMatch[1].trim(),
      comment: tokenMatch[2] ? tokenMatch[2].trim() : null,
    });
  }
}

// ── Build tokens.js content ───────────────────────────────────────

const lines = [];

lines.push(
  "/**",
  " * ─────────────────────────────────────────────────────────────────",
  " *  TRANSITION TRAILS — JS TOKEN MIRROR",
  " *",
  " *  !! AUTO-GENERATED — DO NOT EDIT BY HAND !!",
  " *",
  " *  Generated from: src/styles/tokens.css",
  " *  Generator:      src/styles/generate-tokens.js",
  " *",
  " *  To update this file:",
  " *    1. Edit tokens.css",
  " *    2. Run:  pnpm --filter @workspace/transition-trails run generate:tokens",
  " *    3. Commit both tokens.css and this file together.",
  " *",
  " *  Values are CSS var() references so they resolve at runtime through",
  " *  the same cascade as the CSS system — no hex duplication needed.",
  " *",
  " *  DO NOT use raw hex strings in component or constant files.",
  " *  Import from here instead.",
  " * ─────────────────────────────────────────────────────────────────",
  " */",
  ""
);

for (const section of sections) {
  if (section.tokens.length === 0) continue;

  // Section comment — match the style used in the original file
  const bar = "─".repeat(Math.max(0, 48 - section.heading.length));
  lines.push(`// ── ${section.heading} ${bar}`);

  // Find max export-name length for alignment within this section
  const maxLen = section.tokens.reduce(
    (max, t) => Math.max(max, cssNameToJsExport(t.name).length),
    0
  );

  for (const token of section.tokens) {
    const exportName = cssNameToJsExport(token.name);
    const lhs = `export const ${rpad(exportName, maxLen)}`;
    const rhs = `"var(${token.name})"`;
    const comment = token.comment ? `  // ${token.comment}` : "";
    lines.push(`${lhs} = ${rhs};${comment}`);
  }

  lines.push("");
}

// Remove trailing blank line, add a final newline
while (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
lines.push(""); // single trailing newline

const output = lines.join("\n");

// ── Write ─────────────────────────────────────────────────────────

writeFileSync(JS_PATH, output, "utf8");

const totalTokens = sections.reduce((n, s) => n + s.tokens.length, 0);
console.log(
  `✓ tokens.js generated from tokens.css (${totalTokens} tokens across ${sections.length} sections).`
);
