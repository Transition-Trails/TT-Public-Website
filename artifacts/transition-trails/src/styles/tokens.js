/**
 * ─────────────────────────────────────────────────────────────────
 *  TRANSITION TRAILS — JS TOKEN MIRROR
 *
 *  !! AUTO-GENERATED — DO NOT EDIT BY HAND !!
 *
 *  Generated from: src/styles/tokens.css
 *  Generator:      src/styles/generate-tokens.js
 *
 *  To update this file:
 *    1. Edit tokens.css
 *    2. Run:  pnpm --filter @workspace/transition-trails run generate:tokens
 *    3. Commit both tokens.css and this file together.
 *
 *  Values are CSS var() references so they resolve at runtime through
 *  the same cascade as the CSS system — no hex duplication needed.
 *
 *  DO NOT use raw hex strings in component or constant files.
 *  Import from here instead.
 * ─────────────────────────────────────────────────────────────────
 */

// ── Core brand ──────────────────────────────────────
export const TT_TRAIL_GREEN = "var(--tt-trail-green)";  // primary brand green
export const TT_DEEP_TEAL   = "var(--tt-deep-teal)";  // navigation, secondary brand
export const TT_SKY_BLUE    = "var(--tt-sky-blue)";  // light accent / eyebrows
export const TT_SUN_AMBER   = "var(--tt-sun-amber)";  // primary CTA — one per screen

// ── Green ramp ──────────────────────────────────────
export const TT_GREEN_100 = "var(--tt-green-100)";
export const TT_GREEN_300 = "var(--tt-green-300)";
export const TT_GREEN_400 = "var(--tt-green-400)";  // gradient mid-point between green-500 and teal-300
export const TT_GREEN_500 = "var(--tt-green-500)";  // = --tt-trail-green
export const TT_GREEN_700 = "var(--tt-green-700)";
export const TT_GREEN_MID = "var(--tt-green-mid)";  // alias used in ExplorersTrail gradient

// ── Amber ramp ──────────────────────────────────────
export const TT_AMBER_100 = "var(--tt-amber-100)";
export const TT_AMBER_300 = "var(--tt-amber-300)";
export const TT_AMBER_500 = "var(--tt-amber-500)";  // = --tt-sun-amber
export const TT_AMBER_700 = "var(--tt-amber-700)";

// ── Teal ramp (new) ─────────────────────────────────
export const TT_TEAL_100 = "var(--tt-teal-100)";
export const TT_TEAL_300 = "var(--tt-teal-300)";  // = --tt-sky-blue
export const TT_TEAL_500 = "var(--tt-teal-500)";  // = --tt-deep-teal
export const TT_TEAL_700 = "var(--tt-teal-700)";
export const TT_SKY_TINT = "var(--tt-sky-tint)";  // lightest teal wash

// ── Neutrals ────────────────────────────────────────
export const TT_WHITE       = "var(--tt-white)";
export const TT_TRAIL_LIGHT = "var(--tt-trail-light)";  // page background
export const TT_WARM_GRAY   = "var(--tt-warm-gray)";  // dividers, borders
export const TT_COOL_GRAY   = "var(--tt-cool-gray)";  // secondary labels, placeholder text
export const TT_SLATE       = "var(--tt-slate)";  // body text
export const TT_CHARCOAL    = "var(--tt-charcoal)";  // headings, dark sections
export const TT_MUTED_TEXT  = "var(--tt-muted-text)";  // captions, secondary text
export const TT_MUTED_FILL  = "var(--tt-muted-fill)";  // subtle backgrounds

// ── Semantic ────────────────────────────────────────
export const TT_DANGER       = "var(--tt-danger)";
export const TT_DANGER_TINT  = "var(--tt-danger-tint)";
export const TT_ERROR        = "var(--tt-error)";  // bright red — board/alert indicators
export const TT_ERROR_TINT   = "var(--tt-error-tint)";  // bright red tint
export const TT_SUCCESS      = "var(--tt-success)";
export const TT_SUCCESS_TINT = "var(--tt-success-tint)";

// ── Expedition / very-dark backgrounds ──────────────
export const TT_NEAR_BLACK = "var(--tt-near-black)";  // Expedition alternating dark section
export const TT_OFF_BLACK  = "var(--tt-off-black)";  // Expedition primary dark background

// ── Dark-section palette ────────────────────────────
export const TT_DARK_SURFACE      = "var(--tt-dark-surface)";
export const TT_DARK_TEXT_PRIMARY = "var(--tt-dark-text-primary)";
export const TT_DARK_TEXT_MUTED   = "var(--tt-dark-text-muted)";
export const TT_DARK_TEXT_FAINT   = "var(--tt-dark-text-faint)";
export const TT_DARK_RULE         = "var(--tt-dark-rule)";
export const TT_DARK_FILL         = "var(--tt-dark-fill)";
export const TT_DARK_ACCENT_GREEN = "var(--tt-dark-accent-green)";  // green readable on charcoal
export const TT_DARK_ACCENT_AMBER = "var(--tt-dark-accent-amber)";  // amber readable on charcoal

// ── Typography ──────────────────────────────────────
export const TT_FONT_DISPLAY = "var(--tt-font-display)";  // H1, H2 only
export const TT_FONT_HEADING = "var(--tt-font-heading)";  // H3–H4, buttons, labels
export const TT_FONT_BODY    = "var(--tt-font-body)";
export const TT_FONT_ACCENT  = "var(--tt-font-accent)";

// ── Spacing (8px scale) ─────────────────────────────
export const TT_SPACE_1  = "var(--tt-space-1)";
export const TT_SPACE_2  = "var(--tt-space-2)";
export const TT_SPACE_4  = "var(--tt-space-4)";
export const TT_SPACE_6  = "var(--tt-space-6)";
export const TT_SPACE_8  = "var(--tt-space-8)";
export const TT_SPACE_12 = "var(--tt-space-12)";
export const TT_SPACE_16 = "var(--tt-space-16)";

// ── Radius ──────────────────────────────────────────
export const TT_RADIUS_SM   = "var(--tt-radius-sm)";
export const TT_RADIUS_MD   = "var(--tt-radius-md)";
export const TT_RADIUS_LG   = "var(--tt-radius-lg)";
export const TT_RADIUS_PILL = "var(--tt-radius-pill)";

// ── Elevation ───────────────────────────────────────
export const TT_SHADOW_CARD       = "var(--tt-shadow-card)";
export const TT_SHADOW_SOFT       = "var(--tt-shadow-soft)";
export const TT_SHADOW_AMBER_GLOW = "var(--tt-shadow-amber-glow)";

// ── Approved gradients (135deg) ─────────────────────
export const TT_GRADIENT_GREEN = "var(--tt-gradient-green)";
export const TT_GRADIENT_TEAL  = "var(--tt-gradient-teal)";
export const TT_GRADIENT_DEEP  = "var(--tt-gradient-deep)";
