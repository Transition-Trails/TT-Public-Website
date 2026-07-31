# Design System Tokens

This directory contains the two files that together define every brand value used across Transition Trails.

## Files

| File | Purpose |
|---|---|
| `tokens.css` | **Single source of truth.** All `--tt-*` CSS custom properties live here and are loaded globally by `index.css`. |
| `tokens.js` | **JS mirror.** `var(--tt-*)` string constants for use in JavaScript (accent arrays, inline styles, etc.). Values resolve at runtime through the same CSS cascade — no hex duplication. |

## Naming convention

```
CSS custom property   →  JS export constant
--tt-trail-green      →  TT_TRAIL_GREEN
--tt-green-100        →  TT_GREEN_100
--tt-dark-accent-amber→  TT_DARK_ACCENT_AMBER
```

Rule: strip `--`, replace every `-` with `_`, uppercase.

## Keeping the two files in sync

**When you add a token to `tokens.css` you must also add a matching export to `tokens.js`, and vice-versa.**

A sync check runs automatically as part of the project validation suite:

```bash
pnpm --filter @workspace/transition-trails run check:tokens
```

This script (`check-tokens-sync.js` in this directory) will:
- Fail loudly if a CSS property has no matching JS export.
- Fail loudly if a JS export references a CSS property that doesn't exist.
- Print a clear list of every problem so you can fix it quickly.

The check is also registered as the `tokens-sync` validation command and will be caught before any PR merge.

## Usage in components

```js
// ✅ Correct — import from tokens.js
import { TT_TRAIL_GREEN, TT_SUN_AMBER } from "@/styles/tokens.js";

// ❌ Wrong — never write raw hex values in components
const color = "#2F6B3F";
```

CSS utilities and Tailwind classes sourced from these tokens are registered in `index.css`.
