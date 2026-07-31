/*
 * PROHIBITED TERMS — never use these Salesforce trademarks in any program
 * names, descriptions, or labels on this site:
 *   - Trailhead
 *   - Trailblazer / Trailblazers
 *   - Ohana
 *   - Ranger
 *   - Superbadge / Superbadges
 *
 * Use these alternatives instead:
 *   "Salesforce platform learning"  →  instead of "Trailhead"
 *   "Salesforce professional"       →  instead of "Trailblazer"
 *   "Salesforce community"          →  instead of "Ohana"
 *
 * This is a legal requirement. These are registered Salesforce trademarks and
 * Transition Trails is prohibited from using them.
 */

import programContent from "../content/programs.json";
import {
  TT_TEAL_300,
  TT_TRAIL_GREEN,
  TT_GREEN_700,
  TT_DEEP_TEAL,
} from "../styles/tokens.js";

// Per-program accent colors — maintained here because they are a visual/brand
// decision that belongs in code, not in the content JSON.
// Import token constants from tokens.js so a brand-color change only requires
// updating tokens.css + tokens.js — no hex hunting across component files.
const ACCENT_COLORS = {
  explorersTrail:   TT_TEAL_300,
  foundationsTrail: TT_TRAIL_GREEN,
  guidedTrail:      TT_GREEN_700,
  trailOfMastery:   TT_DEEP_TEAL,
  digitalCompass:   TT_DEEP_TEAL,
};

// Map JSON content fields → shape that ProgramCard and other components expect.
// JSON uses: tagline, path, isFeatured, featuredBadge, waitlistOpen
// Components use: whoFor, ctaHref, slug, mostPopular, ctaAmber, accent, cta
export const PROGRAMS = Object.entries(programContent).map(([key, program]) => ({
  // Derive slug from path so URL routing stays consistent
  slug: program.path.replace("/programs/", ""),
  // Visual / brand fields kept in code
  accent: ACCENT_COLORS[key] ?? TT_TRAIL_GREEN,
  // CTA label is always "Learn More" across program cards
  cta: "Learn More",
  ctaHref: program.path,
  // Amber CTA highlights the featured (most popular) program
  ctaAmber: program.isFeatured,
  mostPopular: program.isFeatured,
  // Field name translation: JSON "tagline" → component "whoFor"
  whoFor: program.tagline,
  // Pass all remaining fields through unchanged
  name: program.name,
  tier: program.tier,
  price: program.price,
  priceNote: program.priceNote,
  highlight: program.highlight,
  status: program.status,
  launchDate: program.launchDate ?? null,
  waitlistOpen: program.waitlistOpen,
  featuredBadge: program.featuredBadge ?? null,
}));

export default PROGRAMS;
