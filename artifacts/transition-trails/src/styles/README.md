# Design System Tokens

This directory contains the files that define every brand value used across Transition Trails.

## Files

| File | Purpose |
|---|---|
| `tokens.css` | **Single source of truth.** All `--tt-*` CSS custom properties live here and are loaded globally by `index.css`. |
| `tokens.js` | **Auto-generated JS mirror.** `var(--tt-*)` string constants for use in JavaScript. **Do not edit by hand** — regenerate with `generate:tokens`. |
| `generate-tokens.js` | Generator script that reads `tokens.css` and writes `tokens.js`. |
| `check-tokens-sync.js` | Validation script that ensures `tokens.css` and `tokens.js` stay in lockstep. |

## Naming convention

```
CSS custom property    →  JS export constant
--tt-trail-green       →  TT_TRAIL_GREEN
--tt-green-100         →  TT_GREEN_100
--tt-dark-accent-amber →  TT_DARK_ACCENT_AMBER
```

Rule: strip `--`, replace every `-` with `_`, uppercase.

## Workflow: editing tokens

`tokens.js` is auto-generated — **never edit it directly**. The flow is:

1. **Edit `tokens.css`** — add, rename, or remove a `--tt-*` custom property.
2. **Regenerate `tokens.js`**:
   ```bash
   pnpm --filter @workspace/transition-trails run generate:tokens
   ```
3. **Commit both files together** — `tokens.css` and the regenerated `tokens.js`.

The generator preserves section groupings and inline comments from the CSS source, so the output stays readable.

## Sync validation

A sync check runs automatically as part of the project validation suite and acts as a safety net in case the generator was not re-run:

```bash
pnpm --filter @workspace/transition-trails run check:tokens
```

`check-tokens-sync.js` will:
- Fail loudly if a CSS property has no matching JS export.
- Fail loudly if a JS export references a CSS property that doesn't exist.
- Print a clear list of every problem so you can fix it quickly.

The check is registered as the `tokens-sync` validation command and is enforced before any PR merge.

## Usage in components

```js
// ✅ Correct — import from tokens.js
import { TT_TRAIL_GREEN, TT_SUN_AMBER } from "@/styles/tokens.js";

// ❌ Wrong — never write raw hex values in components
const color = "#2F6B3F";
```

CSS utilities and Tailwind classes sourced from these tokens are registered in `index.css`.
