#!/usr/bin/env node
/**
 * check-nav-contrast.js
 * ─────────────────────────────────────────────────────────────────
 * WCAG AA colour-contrast audit for Nav.jsx.
 *
 * Statically checks every text/background pair used in both the
 * desktop nav bar, desktop dropdown menus, and the mobile menu.
 *
 * WCAG AA thresholds (per WCAG 2.1 SC 1.4.3):
 *   Normal text (< 18pt regular / < 14pt bold): contrast ≥ 4.5 : 1
 *   Large text  (≥ 18pt regular / ≥ 14pt bold): contrast ≥ 3.0 : 1
 *
 *   At 96 dpi:  18pt = 24 px,  14pt ≈ 18.67 px
 *
 * Alpha-composited colours (e.g. text-white/90) are blended onto
 * the opaque background before the contrast calculation so the
 * effective perceived colour is what gets measured.
 *
 * Exit 0 = all pairs pass.
 * Exit 1 = one or more pairs fail (full list printed).
 * ─────────────────────────────────────────────────────────────────
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_PATH  = join(__dirname, "tokens.css");

// ── 1. Parse tokens.css → { "--tt-foo": "#RRGGBB" } ─────────────

const cssSource = readFileSync(CSS_PATH, "utf8");

/** Extract every custom-property declaration that has a hex value on the
 *  same line.  Handles both `#RGB` and `#RRGGBB` forms. */
const CSS_HEX_RE = /(--tt-[\w-]+)\s*:\s*(#[0-9A-Fa-f]{3,8})/g;
const cssVars = new Map();
let m;
while ((m = CSS_HEX_RE.exec(cssSource)) !== null) {
  cssVars.set(m[1], m[2].toUpperCase());
}

/** Resolve a CSS variable name to a hex string, following one level of
 *  `var(--tt-*)` aliases (e.g. --tt-green-mid → var(--tt-green-400)). */
function resolveToken(name) {
  const raw = cssVars.get(name);
  if (!raw) throw new Error(`Token not found in tokens.css: ${name}`);
  return raw;
}

// ── 2. Named colours used in Nav.jsx ─────────────────────────────
//
// Brand tokens from tokens.css:
const DEEP_TEAL        = resolveToken("--tt-deep-teal");    // #2F6F7E  — nav bg
const WHITE            = resolveToken("--tt-white");         // #FFFFFF
const TRAIL_LIGHT      = resolveToken("--tt-trail-light");   // #FAFAF7  — dropdown hover bg
const CHARCOAL         = resolveToken("--tt-charcoal");      // #2A2E2C  — dropdown item label
const MUTED_TEXT       = resolveToken("--tt-muted-text");    // #8C8882  — captions/descs
const TRAIL_GREEN      = resolveToken("--tt-trail-green");   // #2F6B3F  — hover label colour
const SUN_AMBER        = resolveToken("--tt-sun-amber");     // #F5A623  — mobile accent links
const DARK_ACCENT_GREEN = resolveToken("--tt-dark-accent-green"); // #6BBF85 — mobile green link

// Tailwind built-in colours used directly in Nav (not in tokens.css):
const TW_AMBER_100 = "#FEF3C7"; // bg-amber-100  (Flagship badge bg)
const TW_AMBER_700 = "#B45309"; // text-amber-700 (Flagship badge text, accent variant)

// ── 3. Colour math ────────────────────────────────────────────────

/** Parse a 6-digit hex string → { r, g, b } in 0–255. */
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  if (h.length === 3) {
    return {
      r: parseInt(h[0] + h[0], 16),
      g: parseInt(h[1] + h[1], 16),
      b: parseInt(h[2] + h[2], 16),
    };
  }
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

/** Alpha-composite a foreground colour with opacity onto an opaque background.
 *  @param fgHex  Hex string of the foreground colour at 100% opacity
 *  @param alpha  Opacity of the foreground (0–1)
 *  @param bgHex  Hex string of the opaque background
 *  @returns      Effective opaque hex colour as perceived by the viewer */
function blendAlpha(fgHex, alpha, bgHex) {
  const fg = hexToRgb(fgHex);
  const bg = hexToRgb(bgHex);
  const blend = (c) => Math.round(bg[c] + alpha * (fg[c] - bg[c]));
  const r = blend("r"), g = blend("g"), b = blend("b");
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0").toUpperCase()).join("");
}

/** Convert an 8-bit channel value (0–255) to a linear-light value. */
function toLinear(c8bit) {
  const c = c8bit / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** Compute relative luminance of a hex colour (WCAG formula). */
function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/** Compute the WCAG contrast ratio between two hex colours. */
function contrastRatio(hex1, hex2) {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker  = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ── 4. Composite colours (alpha-blended on their actual backgrounds) ──

// text-white/90  = rgba(255,255,255,0.9) blended on deep-teal nav bar
const WHITE_90_ON_TEAL  = blendAlpha(WHITE, 0.90, DEEP_TEAL);
// text-white/40  = rgba(255,255,255,0.4) blended on deep-teal nav bar
const WHITE_40_ON_TEAL  = blendAlpha(WHITE, 0.40, DEEP_TEAL);

// ── 5. Text-size helpers ──────────────────────────────────────────
//
// WCAG defines "large text" as ≥ 18pt regular (24 px at 96 dpi) or
// ≥ 14pt bold (≈ 18.67 px at 96 dpi).  "Bold" for WCAG = font-weight ≥ 700.
// Semibold (600) is NOT considered bold under WCAG.

/** @returns "large" | "normal" */
function textSize(pxSize, fontWeight) {
  const isBold = fontWeight >= 700;
  if (pxSize >= 24) return "large";
  if (isBold && pxSize >= 18.67) return "large";
  return "normal";
}

/** WCAG AA minimum contrast for a given text size category. */
function minContrast(size) {
  return size === "large" ? 3.0 : 4.5;
}

// ── 6. Colour pairs to audit ──────────────────────────────────────
//
// Each entry describes ONE text/background pair in Nav.jsx.
// Fields:
//   label    — human-readable name shown in the report
//   state    — which UI state: "desktop-nav" | "desktop-dropdown" | "mobile"
//   textHex  — effective (already blended if necessary) text colour
//   bgHex    — opaque background colour
//   pxSize   — CSS font-size in pixels
//   weight   — CSS font-weight as a number
//   note     — (optional) extra context

const PAIRS = [
  // ── Desktop nav bar (bg: deep-teal) ────────────────────────────
  {
    label: "Desktop nav: active link (text-white on deep-teal)",
    state: "desktop-nav",
    textHex: WHITE,
    bgHex:   DEEP_TEAL,
    pxSize:  15, weight: 600,
  },
  {
    label: "Desktop nav: inactive link (text-white/90 on deep-teal)",
    state: "desktop-nav",
    textHex: WHITE_90_ON_TEAL,
    bgHex:   DEEP_TEAL,
    pxSize:  15, weight: 600,
  },
  {
    label: "Desktop nav: 'Donate' link (text-white/90 on deep-teal)",
    state: "desktop-nav",
    textHex: WHITE_90_ON_TEAL,
    bgHex:   DEEP_TEAL,
    pxSize:  15, weight: 600,
  },
  {
    label: "Desktop nav: 'Join the Waitlist' CTA (text-deep-teal on white bg)",
    state: "desktop-nav",
    textHex: DEEP_TEAL,
    bgHex:   WHITE,
    pxSize:  14, weight: 700,
  },

  // ── Desktop dropdown menus (bg: white) ─────────────────────────
  {
    label: "Dropdown: item label (text-charcoal on white)",
    state: "desktop-dropdown",
    textHex: CHARCOAL,
    bgHex:   WHITE,
    pxSize:  14, weight: 600,
  },
  {
    label: "Dropdown: item label hover (text-trail-green on trail-light bg)",
    state: "desktop-dropdown",
    textHex: TRAIL_GREEN,
    bgHex:   TRAIL_LIGHT,
    pxSize:  14, weight: 600,
  },
  {
    label: "Dropdown: accent variant label (text-amber-700 on white) — 'Start Free Assessment', 'Donate'",
    state: "desktop-dropdown",
    textHex: TW_AMBER_700,
    bgHex:   WHITE,
    pxSize:  14, weight: 600,
  },
  {
    label: "Dropdown: item description (text-muted-text on white)",
    state: "desktop-dropdown",
    textHex: MUTED_TEXT,
    bgHex:   WHITE,
    pxSize:  12, weight: 400,
    note: "12px body text — requires ≥ 4.5:1",
  },
  {
    label: "Dropdown: group label (text-muted-text on white) — 'FEATURED', 'ALL PROGRAMS'",
    state: "desktop-dropdown",
    textHex: MUTED_TEXT,
    bgHex:   WHITE,
    pxSize:  10, weight: 600,
    note: "10px uppercase label — requires ≥ 4.5:1",
  },
  {
    label: "Dropdown: 'Flagship' badge text (text-amber-700 on bg-amber-100)",
    state: "desktop-dropdown",
    textHex: TW_AMBER_700,
    bgHex:   TW_AMBER_100,
    pxSize:  10, weight: 700,
    note: "10px badge — requires ≥ 4.5:1",
  },

  // ── Mobile menu (bg: deep-teal) ─────────────────────────────────
  {
    label: "Mobile: main link (text-white on deep-teal) — 'Find Your Trail', 'Blog'",
    state: "mobile",
    textHex: WHITE,
    bgHex:   DEEP_TEAL,
    pxSize:  18, weight: 700,
  },
  {
    label: "Mobile: section header button (text-white/90 on deep-teal) — 'Programs', 'About' etc.",
    state: "mobile",
    textHex: WHITE_90_ON_TEAL,
    bgHex:   DEEP_TEAL,
    pxSize:  18, weight: 700,
  },
  {
    label: "Mobile: sub-link (text-white/90 on deep-teal) — 'All Programs', 'Volunteer' etc.",
    state: "mobile",
    textHex: WHITE_90_ON_TEAL,
    bgHex:   DEEP_TEAL,
    pxSize:  16, weight: 400,
  },
  {
    label: "Mobile: section label (text-white/40 on deep-teal) — 'FEATURED', 'ALL PROGRAMS'",
    state: "mobile",
    textHex: WHITE_40_ON_TEAL,
    bgHex:   DEEP_TEAL,
    pxSize:  10, weight: 600,
    note: "Decorative section divider label — still audited for WCAG",
  },
  {
    label: "Mobile: scholarship link (text-dark-accent-green on deep-teal) — 'Trail Forward Scholarship'",
    state: "mobile",
    textHex: DARK_ACCENT_GREEN,
    bgHex:   DEEP_TEAL,
    pxSize:  16, weight: 600,
  },
  {
    label: "Mobile: accent link (text-sun-amber on deep-teal) — 'Start Free Assessment', 'Donate'",
    state: "mobile",
    textHex: SUN_AMBER,
    bgHex:   DEEP_TEAL,
    pxSize:  16, weight: 600,
  },
  {
    label: "Mobile: 'Join the Waitlist' CTA (text-deep-teal on white bg)",
    state: "mobile",
    textHex: DEEP_TEAL,
    bgHex:   WHITE,
    pxSize:  16, weight: 700,
  },
];

// ── 7. Run the audit ──────────────────────────────────────────────

const STATE_LABELS = {
  "desktop-nav":      "Desktop nav bar",
  "desktop-dropdown": "Desktop dropdown",
  "mobile":           "Mobile menu",
};

let lastState = null;
const failures = [];
const passes   = [];

for (const pair of PAIRS) {
  const ratio    = contrastRatio(pair.textHex, pair.bgHex);
  const size     = textSize(pair.pxSize, pair.weight);
  const required = minContrast(size);
  const ok       = ratio >= required;

  const entry = { ...pair, ratio, size, required, ok };
  (ok ? passes : failures).push(entry);
}

// ── 8. Print report ───────────────────────────────────────────────

console.log("\nWCAG AA colour-contrast audit — Nav.jsx\n");
console.log("  State               Text hex   Bg hex    Ratio   Min   Size    Result");
console.log("  ─────────────────── ─────────  ─────────  ──────  ────  ──────  ──────");

// Print all pairs in original order, grouped by state
for (const pair of PAIRS) {
  const ratio    = contrastRatio(pair.textHex, pair.bgHex);
  const size     = textSize(pair.pxSize, pair.weight);
  const required = minContrast(size);
  const ok       = ratio >= required;
  const icon     = ok ? "✓" : "✗";

  if (pair.state !== lastState) {
    lastState = pair.state;
    console.log(`\n  ── ${STATE_LABELS[pair.state]} ──`);
  }

  const ratioStr   = ratio.toFixed(2) + ":1";
  const requiredStr = required.toFixed(1) + ":1";
  console.log(
    `  ${icon} ${pair.label}\n` +
    `    text ${pair.textHex}  bg ${pair.bgHex}  ` +
    `ratio ${ratioStr.padEnd(7)} min ${requiredStr}  ${size.padEnd(6)} ${ok ? "PASS" : "FAIL"}` +
    (pair.note ? `\n    note: ${pair.note}` : "")
  );
}

// ── 9. Summary and exit ───────────────────────────────────────────

console.log("\n");

if (failures.length === 0) {
  console.log(`✓ All ${PAIRS.length} colour pairs pass WCAG AA contrast.\n`);
  process.exit(0);
} else {
  console.error(
    `✗ ${failures.length} of ${PAIRS.length} pair${failures.length === 1 ? "" : "s"} ` +
    `fail WCAG AA contrast:\n`
  );
  for (const f of failures) {
    const ratio    = contrastRatio(f.textHex, f.bgHex);
    const size     = textSize(f.pxSize, f.weight);
    const required = minContrast(size);
    console.error(
      `  ✗ ${f.label}\n` +
      `    ratio ${ratio.toFixed(2)}:1 < required ${required.toFixed(1)}:1 (${size} text)\n` +
      `    text ${f.textHex}  bg ${f.bgHex}\n` +
      (f.note ? `    note: ${f.note}\n` : "")
    );
  }
  console.error(
    "Fix: update the colour token values in tokens.css or adjust the\n" +
    "component classes in Nav.jsx, then re-run:\n" +
    "  pnpm --filter @workspace/transition-trails run check:contrast\n"
  );
  process.exit(1);
}
