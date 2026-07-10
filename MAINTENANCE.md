# Transition Trails — Site Maintenance Guide

## Repository Backup
The canonical source of truth for this site is the GitHub repository:
**Transition Trails Organization** — https://github.com/Transition-Trails

Always push changes to GitHub before deploying. Replit retains only the 5 most recent
deployment builds — GitHub is the permanent backup.

## Publishing a New Blog Post
1. Write and publish the article on Substack at https://transitiontrails.substack.com
2. The blog at /blog updates automatically within 30 minutes (RSS feed cache)
3. No manual site updates needed

## Adding a New Page
1. Create the page component in artifacts/transition-trails/src/pages/
2. Add a lazy import in artifacts/transition-trails/src/App.tsx
3. Add the Route in the Switch block in App.tsx
4. Add the Seo component at the top of the new page
5. Add the route to public/sitemap.xml
6. Deploy via Replit

## Updating JotForm IDs
All JotForm form IDs are centralized in:
artifacts/transition-trails/src/config/env.ts
Update the fallback values there — no need to hunt through individual pages.

## Environment Variables
Set in Replit Secrets (Publishing pane). Prefix all client-side variables with VITE_.
WARNING: All VITE_ variables are publicly visible in the browser bundle.
Never store API keys or secrets with the VITE_ prefix.

## Deployment
Site deploys via Replit Autoscale. To deploy:
1. Make changes in Replit workspace
2. Click Deploy in the Replit UI
3. Replit builds and publishes automatically

## Emergency Rollback
Replit supports one-click rollback to any of the 5 most recent deployments.
Go to Deployments tab → select previous build → click Restore.

## Dependency Updates
Dependabot is configured to open weekly PRs for dependency updates.
Review and merge cautiously — wait at least 7 days after a package release
before merging to protect against supply chain attacks.

## Analytics
Google Analytics 4 property: G-NDNF9XXH8Z
View at: https://analytics.google.com

## Performance Monitoring
Run bundle analysis: cd artifacts/transition-trails && npm run analyze
Opens dist/stats.html with visual bundle breakdown.
