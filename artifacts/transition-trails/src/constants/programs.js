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

// Internal route — all trail enrollments funnel to the on-site waitlist page
const WAITLIST = "/waitlist";

export const PROGRAMS = [
  {
    slug: "explorers-trail",
    name: "Explorer's Trail",
    accent: "#7FAFC6",
    tier: "AWARENESS TIER",
    price: "$47/mo",
    priceNote: "or $397/yr",
    highlight: "No prerequisites",
    cta: "Join the Waitlist",
    ctaHref: WAITLIST,
    ctaAmber: false,
    whoFor: "No prerequisites — curious about Salesforce",
  },
  {
    slug: "foundations-trail",
    name: "Foundations Trail",
    accent: "#2F6B3F",
    tier: "ENTRY TIER",
    price: "$997",
    priceNote: "or $497 scholarship",
    highlight: "12 weeks · HCH capstone build",
    cta: "Join the Waitlist",
    ctaHref: WAITLIST,
    ctaAmber: false,
    whoFor: "Platform Foundations cert (or in progress)",
  },
  {
    slug: "guided-trail",
    name: "Guided Trail",
    accent: "#1E4A2A",
    tier: "BRIDGE TIER",
    price: "$1,497",
    priceNote: "or $747 scholarship",
    highlight: "Real nonprofit client · 12 weeks",
    cta: "Join the Waitlist",
    ctaHref: WAITLIST,
    ctaAmber: true,
    mostPopular: true,
    whoFor: "Salesforce certified, not yet employed",
  },
  {
    slug: "trail-of-mastery",
    name: "Trail of Mastery",
    accent: "#2F6F7E",
    tier: "ADVANCEMENT TIER",
    price: "$1,997",
    priceNote: "or $1,597 employer-sponsored",
    highlight: "Real DC clients · RESOLVE pipeline",
    cta: "Join the Waitlist",
    ctaHref: WAITLIST,
    ctaAmber: false,
    whoFor: "Certified AND currently employed in Salesforce",
  },
  {
    slug: "digital-compass",
    name: "Digital Compass",
    accent: "#2F6F7E",
    tier: "NONPROFIT MEMBERSHIP",
    price: "$149/mo",
    priceNote: "Entry · Mid $349 · Full $749",
    highlight: "Membership · Project support",
    cta: "Free Assessment",
    // Internal page — do NOT use the external JotForm URL for site CTAs
    ctaHref: "/nonprofit-assessment",
    ctaAmber: false,
    whoFor: "Nonprofit organizations",
  },
];
