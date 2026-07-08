---
name: Transition Trails pre-existing typecheck errors
description: Explains why `pnpm --filter @workspace/transition-trails run typecheck` fails with TS7016 errors on every .jsx page/component import, and how to confirm a new failure isn't your fault.
---

Running typecheck on `artifacts/transition-trails` produces ~27 `TS7016: Could not find a declaration file for module './pages/X'` errors, one for every `.jsx` file imported from `App.tsx` (and `PageMeta.jsx` from `not-found.tsx`). This is a structural condition of the package's `tsconfig.json`/`tsconfig.base.json` (no `allowJs`/declaration setup for `.jsx` files under strict mode), not something introduced by ordinary page edits.

**Why:** Confirmed by observing the identical error fire on `.jsx` pages that were never touched in a session (e.g. `Home.jsx`, `Programs.jsx`) alongside newly added ones — the error count scales with the number of `.jsx` imports in `App.tsx`, not with any specific change.

**How to apply:** When you add or edit a `.jsx` page in this artifact and see TS7016 on it, don't treat it as a regression to fix — verify instead via the running dev server (screenshot/browser console) that the page renders without runtime errors. Only escalate/investigate the tsconfig itself if the user explicitly asks for a clean typecheck on this artifact, since fixing it repo-wide is a separate, out-of-scope structural change.
