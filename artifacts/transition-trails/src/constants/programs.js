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
    highlight: "Community · Coaching · Content · Coaching Pipeline",
    cta: "Join the Waitlist",
    ctaHref: WAITLIST,
    ctaAmber: false,
    whoFor: "Everyone — no prerequisites. Career Starters, Career Builders, Career Pivoters, and TT alumni.",
    description: "Your entry point into the TT ecosystem. Three membership tiers — from Community Pass ($27/mo) to Full Membership ($97/mo annual) to Full + Coaching ($1,464/yr) — with time-gated content, Trail Missions, Build With Me videos, Monthly Virtual Trail Talk, and optional coaching. Month-to-month or annual commitment.",
    priceNote: "or $1,164/yr Full Membership · $1,464/yr Full + Coaching (4 quarterly coaching sessions)",
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
    whoFor: "Career Starters — working toward or recently earned Platform Foundations cert",
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
    whoFor: "Career Builders — Salesforce certified, ready to turn it into a career",
  },
  {
    slug: "trail-of-mastery",
    name: "Trail of Mastery",
    accent: "#2F6F7E",
    tier: "ADVANCEMENT TIER",
    price: "Contact us",
    priceNote: "Pricing analysis in progress · Employer-sponsored available · Scholarships available",
    highlight: "Team apprenticeship · CI/CD pipeline · Real clients · 5 tracks",
    cta: "Join the Waitlist",
    ctaHref: WAITLIST,
    ctaAmber: false,
    whoFor: "Working Salesforce professionals — certified and employed. External professionals welcome. No TT program completion required.",
    description: "A supervised team apprenticeship — real clients, real pipeline, real roles. Five tracks across 8-16 weeks. Mixed-role cohorts of 4-5 learners. No code. Always configuration. Always RESOLVE.",
  },
  {
    slug: "digital-compass",
    name: "Digital Compass",
    accent: "#2F6F7E",
    tier: "NONPROFIT MEMBERSHIP",
    price: "$149/mo",
    priceNote: "or $3,490/yr (Guided) · $7,490/yr (Full Partner) — annual service contracts",
    highlight: "Weekly Office Hours · Project Delivery",
    cta: "Book Free Assessment",
    // Internal page — do NOT use the external JotForm URL for site CTAs
    ctaHref: "/nonprofit-assessment",
    ctaAmber: false,
    whoFor: "Nonprofit organizations at any stage of their Salesforce journey.",
    description: "Ongoing Salesforce support membership for nonprofits. Weekly office hours, project delivery, and expert guidance from the TT leadership team — from $149/month.",
  },
];
