# Contributing to the TT Public Website

Thanks for contributing. This guide covers the basics of getting set up, making changes, and getting your code merged.

## Who contributes

This repo is maintained by the Transition Trails founding team and approved collaborators. If you're an external contributor, please open an Issue first before writing code — that way we can confirm the direction before you invest time.

## Getting started

**Prerequisites:** Node 24, pnpm 9+

```bash
# Install dependencies
pnpm install

# Start the frontend dev server (preview at localhost)
pnpm --filter @workspace/transition-trails run dev

# Start the API server
pnpm --filter @workspace/api-server run dev

# Typecheck everything
pnpm run typecheck

# Lint the frontend
pnpm --filter @workspace/transition-trails run lint
```

## Branch strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production. Protected — PRs only, CI must pass, 1 review required. |
| `feature/*` | New pages or features |
| `fix/*` | Bug fixes |
| `content/*` | Copy edits, JSON data updates, new testimonials |
| `chore/*` | Dependencies, CI, tooling |

Branch off `main`, keep branches short-lived, and open a PR when ready for review.

## Making content changes

Most text content lives in `artifacts/transition-trails/src/content/`. These JSON files are the source of truth for copy, testimonials, team bios, and program details.

```
src/content/
  site.json           # Global: nav, footer, action banner
  testimonials.json   # All testimonials
  team.json           # Founder bios and skills
  programs.json       # Program cards
  pages/
    home.json         # Home page sections
    about.json        # About page copy and timeline
```

**To add or update a testimonial:** edit `testimonials.json`.  
**To update team bios:** edit `team.json`.  
**To change site-wide copy (footer, banner):** edit `site.json`.

## Code style

- **TypeScript** for anything in `lib/` and `artifacts/api-server/`
- **JSX** for page and component files in `artifacts/transition-trails/src/`
- **No `console.log`** in server code — use the request logger (`req.log`) or the singleton `logger`
- **Tailwind v4** for styling — use existing brand tokens before adding new colors
- Run `pnpm run typecheck` and `pnpm --filter @workspace/transition-trails run lint` before pushing

## Pull requests

- Fill out the PR template completely
- Include before/after screenshots for any visual change
- Keep PRs focused — one feature or fix per PR
- Reference the related Issue (`Fixes #123`)

## CI checks

CI runs on every push and PR to `main`:

| Check | Command |
|-------|---------|
| Typecheck | `pnpm run typecheck` |
| Lint | `pnpm --filter @workspace/transition-trails run lint` |
| API build | `pnpm --filter @workspace/api-server run build` |

All checks must be green before a PR can be merged.

## Questions?

Open an Issue or [schedule time with the team](https://calendar.app.google/t1THqhnCWacFyCu2A).
