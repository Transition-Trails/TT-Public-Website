/**
 * ─────────────────────────────────────────────────────────────────
 *  TRANSITION TRAILS — JS TOKEN MIRROR
 *  Single source of truth for brand token references in JavaScript.
 *
 *  These constants mirror the CSS custom properties in tokens.css.
 *  When a token name changes in tokens.css, update it here so that
 *  all JS accent arrays and other JS colour references stay in sync.
 *
 *  Values are CSS var() references so they resolve at runtime through
 *  the same cascade as the CSS system — no hex duplication needed.
 *
 *  DO NOT use raw hex strings in component or constant files.
 *  Import from here instead.
 * ─────────────────────────────────────────────────────────────────
 */

// ── Core brand ──────────────────────────────────────────────────
export const TT_TRAIL_GREEN = "var(--tt-trail-green)";   // primary brand green
export const TT_DEEP_TEAL   = "var(--tt-deep-teal)";     // navigation, secondary brand
export const TT_SKY_BLUE    = "var(--tt-sky-blue)";      // light accent / eyebrows
export const TT_SUN_AMBER   = "var(--tt-sun-amber)";     // primary CTA — one per screen

// ── Green ramp ───────────────────────────────────────────────────
export const TT_GREEN_100 = "var(--tt-green-100)";
export const TT_GREEN_300 = "var(--tt-green-300)";
export const TT_GREEN_400 = "var(--tt-green-400)";       // gradient mid-point
export const TT_GREEN_500 = "var(--tt-green-500)";       // = TT_TRAIL_GREEN
export const TT_GREEN_700 = "var(--tt-green-700)";
export const TT_GREEN_MID = "var(--tt-green-mid)";       // alias → green-400

// ── Amber ramp ───────────────────────────────────────────────────
export const TT_AMBER_100 = "var(--tt-amber-100)";
export const TT_AMBER_300 = "var(--tt-amber-300)";
export const TT_AMBER_500 = "var(--tt-amber-500)";       // = TT_SUN_AMBER
export const TT_AMBER_700 = "var(--tt-amber-700)";

// ── Teal ramp ────────────────────────────────────────────────────
export const TT_TEAL_100  = "var(--tt-teal-100)";
export const TT_TEAL_300  = "var(--tt-teal-300)";        // = TT_SKY_BLUE
export const TT_TEAL_500  = "var(--tt-teal-500)";        // = TT_DEEP_TEAL
export const TT_TEAL_700  = "var(--tt-teal-700)";
export const TT_SKY_TINT  = "var(--tt-sky-tint)";

// ── Neutrals ─────────────────────────────────────────────────────
export const TT_WHITE       = "var(--tt-white)";
export const TT_TRAIL_LIGHT = "var(--tt-trail-light)";
export const TT_WARM_GRAY   = "var(--tt-warm-gray)";
export const TT_COOL_GRAY   = "var(--tt-cool-gray)";
export const TT_SLATE       = "var(--tt-slate)";
export const TT_CHARCOAL    = "var(--tt-charcoal)";
export const TT_MUTED_TEXT  = "var(--tt-muted-text)";
export const TT_MUTED_FILL  = "var(--tt-muted-fill)";

// ── Semantic ─────────────────────────────────────────────────────
export const TT_DANGER       = "var(--tt-danger)";
export const TT_DANGER_TINT  = "var(--tt-danger-tint)";
export const TT_ERROR        = "var(--tt-error)";
export const TT_ERROR_TINT   = "var(--tt-error-tint)";
export const TT_SUCCESS      = "var(--tt-success)";
export const TT_SUCCESS_TINT = "var(--tt-success-tint)";

// ── Dark-section palette ─────────────────────────────────────────
export const TT_NEAR_BLACK         = "var(--tt-near-black)";
export const TT_OFF_BLACK          = "var(--tt-off-black)";
export const TT_DARK_SURFACE       = "var(--tt-dark-surface)";
export const TT_DARK_TEXT_PRIMARY  = "var(--tt-dark-text-primary)";
export const TT_DARK_TEXT_MUTED    = "var(--tt-dark-text-muted)";
export const TT_DARK_TEXT_FAINT    = "var(--tt-dark-text-faint)";
export const TT_DARK_RULE          = "var(--tt-dark-rule)";
export const TT_DARK_FILL          = "var(--tt-dark-fill)";
export const TT_DARK_ACCENT_GREEN  = "var(--tt-dark-accent-green)";
export const TT_DARK_ACCENT_AMBER  = "var(--tt-dark-accent-amber)";
