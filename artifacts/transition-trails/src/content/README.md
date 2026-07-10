# Content Layer

This folder contains all editable site content as JSON files.
Non-developers can edit these files in GitHub or Replit to update
site content without touching React components.

## Files

- **programs.json** — Program pricing, status, descriptions, highlights
- **team.json** — Founder bios, skills, and contact info
- **testimonials.json** — Approved testimonials with attribution
- **site.json** — Global CTAs, footer content, nav labels
- **pages/home.json** — Home page copy and section content
- **pages/about.json** — About page copy and origin story

## How to Edit

### Updating a program price
Open `programs.json`, find the program, update the `price` or `priceNote` field.

### Adding a testimonial
Open `testimonials.json`, add a new object to the `testimonials` array following the existing format.

### Changing launch dates
Open `programs.json`, update the `launchDate` field for the relevant program.
Update `site.json` `actionBanner.body` if the banner text references the date.

### Updating the action banner
Open `site.json`, edit the `actionBanner` object fields.

## Important
After editing, the site must be redeployed for changes to appear.
Commit changes to GitHub before deploying.
