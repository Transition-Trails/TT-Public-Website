import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";

const UNIVERSAL_BENEFITS = [
  {
    icon: "📅",
    title: "Weekly Office Hours",
    badge: "ALL TIERS · WEEKLY",
    body: "Live weekly group sessions with the TT team — bring your Salesforce questions, challenges, and roadblocks. Entry members join the shared weekly group session. Mid members get the weekly group session plus one private monthly session with their team. Full Partner members have their own dedicated weekly private session.",
  },
  {
    icon: "📚",
    title: "TrailKit Content Library",
    badge: "ALL TIERS",
    body: "Access to TT's library of Salesforce how-to content — guides, walkthroughs, and resources built specifically for nonprofits navigating the Salesforce ecosystem.",
  },
  {
    icon: "💬",
    title: "Slack Community",
    badge: "ALL TIERS",
    body: "A members-only Slack workspace connecting Digital Compass nonprofits with the TT team, TT coaches, and each other. Ask questions between sessions, share what you're learning, and tap into the collective expertise of the community.",
  },
];

const WHO_CARDS = [
  {
    icon: "🌱",
    title: "Just getting started",
    body: "Your nonprofit has Salesforce — or is about to get it through the Power of Us grant — but you do not have dedicated Salesforce staff. Digital Compass gives you expert guidance and support without the cost of a full-time admin or a consulting retainer.",
  },
  {
    icon: "⚙️",
    title: "Growing and stuck",
    body: "You have been using Salesforce for a while but it is not doing what you need it to do. Data is inconsistent. Processes are manual. Reports do not reflect reality. Digital Compass helps you diagnose what is wrong and fix it systematically.",
  },
  {
    icon: "🚀",
    title: "Ready to scale",
    body: "Your Salesforce org is working but you need a strategic partner to help you grow it alongside your mission. Digital Compass Full Partner gives you ongoing project delivery, priority access to TT's learner teams, and a monthly strategic review.",
  },
];

const PROJECT_COLS = [
  {
    icon: "📋",
    title: "What counts as a project request",
    body: "Configuration-based Salesforce work: adding fields and updating page layouts, building flows to automate a process, setting up reports and dashboards, configuring permission sets, building a web-to-case intake form, data cleanup and deduplication, and more. Always declarative — no Apex code, no custom development.",
  },
  {
    icon: "👥",
    title: "Who does the work",
    body: "Project requests are delivered by TT coaches and, where appropriate, matched to Guided Trail or Trail of Mastery learner teams under coach supervision. Full Partner members receive priority matching to learner teams — giving them both faster delivery and the benefit of supporting TT's learner pipeline.",
  },
  {
    icon: "⚡",
    title: "Scope and timeline",
    body: "TT reviews every project request for scope before beginning. Requests that fall within the membership model are delivered within an agreed timeline. Requests that are too large in scope for the membership model will be flagged — TT will advise on options including a dedicated project engagement.",
  },
];

const ASSESSMENT_COVERS = [
  "Your organization's current Salesforce setup",
  "What is working and what is not",
  "Your team's Salesforce capacity",
  "What you actually need — not what we want to sell you",
  "Which Digital Compass tier fits your situation",
];


function Check({ color = "#2F6F7E" }) {
  return <span className="shrink-0 font-bold" style={{ color }}> ✓</span>;
}
function Cross() {
  return <span className="shrink-0 font-bold text-[#8C8882]">×</span>;
}

export default function DigitalCompass() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Digital Compass | Nonprofit Salesforce Support Membership | Transition Trails"
        description="Ongoing Salesforce support for nonprofits. Weekly office hours, project delivery, and expert guidance from $149/month. Led by Kim Barnes, Co-Founder of Transition Trails. Free assessment available."
        path="/programs/digital-compass"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4F5C 0%, #2F6F7E 55%, #1E4A2A 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Digital Compass</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            {/* Left copy */}
            <div className="flex-1 max-w-[700px]">
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
                style={{ color: "#F5A623", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
              >
                NONPROFIT MEMBERSHIP  ·  ONGOING SALESFORCE SUPPORT  ·  NO LONG-TERM CONTRACT
              </div>

              <h1
                className="font-['Poppins'] font-bold text-[52px] text-white leading-[1.1] mb-5"
                style={{ letterSpacing: "-1.5px" }}
              >
                Digital Compass.
              </h1>

              <p className="font-['Poppins'] font-semibold text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
                Ongoing Salesforce support for nonprofits — without the consulting retainer price tag.
              </p>

              <div className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4 mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
                <p>Traditional Salesforce consulting runs $75–$150 per hour, or $1,000–$3,000 per month in retainer fees. Digital Compass delivers consistent, expert-level Salesforce support for a fraction of that cost — with weekly access, real project delivery, and a team that understands how nonprofits actually work.</p>
                <p>Digital Compass is led by Kim Barnes, Co-Founder and COO of Transition Trails.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/nonprofit-assessment"
                  className="h-[52px] px-7 rounded-[8px] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                  style={{ background: "#F5A623", color: "#2A2E2C" }}
                >
                  Book a Free Assessment →
                </Link>
                <a
                  href="#tiers"
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white hover:bg-white/10 font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  See membership tiers ↓
                </a>
              </div>
            </div>

            {/* Right stat boxes */}
            <div className="flex flex-row xl:flex-col gap-4 w-full xl:w-[240px]">
              {[
                { value: "$149/mo", label: "Entry membership — less than 2hrs of consulting", color: "#2F6F7E" },
                { value: "3 tiers", label: "Entry · Mid · Full Partner", color: "#2F6B3F" },
                { value: "Free", label: "Initial Salesforce assessment", color: "#F5A623" },
              ].map(s => (
                <div
                  key={s.label}
                  className="flex-1 xl:flex-none rounded-xl p-6"
                  style={{ background: "rgba(255,255,255,0.08)", borderTop: `4px solid ${s.color}`, border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="font-['Poppins'] font-bold text-[24px] text-white mb-1">{s.value}</div>
                  <div className="font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.60)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who It Serves */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">WHO IT SERVES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Built for nonprofits that run on Salesforce — or want to.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              Digital Compass is for nonprofit organizations at any stage of their Salesforce journey — from just getting started to managing a complex multi-program org.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {WHO_CARDS.map(c => (
              <div
                key={c.title}
                className="bg-white border border-[#E2E4E1] rounded-xl p-7"
                style={{ borderLeft: "4px solid #2F6F7E" }}
              >
                <div className="text-[28px] mb-3">{c.icon}</div>
                <h3 className="font-['Open_Sans'] font-bold text-[15px] text-[#2F6F7E] mb-2">{c.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{c.body}</p>
              </div>
            ))}
          </div>

          {/* ROI callout */}
          <div
            className="rounded-xl p-7 flex flex-col md:flex-row items-center gap-8"
            style={{ background: "#E0F0F3", borderTop: "3px solid #2F6F7E" }}
          >
            <div className="shrink-0 text-center md:text-left">
              <div className="font-['Poppins'] font-bold text-[28px] text-[#2F6F7E]">1/7th the cost</div>
              <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">of the cheapest traditional Salesforce consulting retainer</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#2F6F7E]/20 shrink-0" />
            <p className="font-['Open_Sans'] italic text-[14px] text-[#4A4F4D] leading-[1.65] max-w-[480px]">
              Full Partner at $749/mo vs. a freelance Salesforce consultant at $45–$150/hr × 10hrs/month = $450–$1,500. Digital Compass delivers more consistent value at lower or comparable cost.
            </p>
          </div>

          <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mt-8">
            Have a specific project, implementation, or architectural challenge that needs dedicated expert attention rather than ongoing membership support? TT also offers{" "}
            <Link href="/consulting" className="text-[#2F6F7E] font-semibold hover:underline">Salesforce consulting →</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 4: Universal Benefits */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">UNIVERSAL BENEFITS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">Every Digital Compass member gets this.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {UNIVERSAL_BENEFITS.map(b => (
              <div
                key={b.title}
                className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden"
                style={{ borderTop: "4px solid #2F6F7E" }}
              >
                <div className="p-7">
                  <div className="text-[28px] mb-3">{b.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">{b.title}</h3>
                  <span className="inline-block font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase text-[#2F6F7E] bg-[#E0F0F3] px-2 py-0.5 rounded mb-3">{b.badge}</span>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Membership Tiers */}
      <section id="tiers" className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">MEMBERSHIP TIERS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Choose the level of support your organization needs.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              All tiers are month-to-month — no long-term contract required. Annual plans save two months. Start with Entry and upgrade as your needs grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {/* Tier 1 — Entry Community */}
            <div className="bg-white border-[1.5px] border-[#E2E4E1] rounded-2xl overflow-hidden flex flex-col" style={{ borderTop: "6px solid #2F6F7E" }}>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-['Open_Sans'] font-bold text-[11px] tracking-[1px] uppercase text-[#2F6F7E] mb-3">ENTRY</span>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-4">Community</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-['Poppins'] font-bold text-[36px] text-[#2F6F7E]">$149</span>
                  <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">/month</span>
                </div>
                <p className="font-['Open_Sans'] text-[12px] text-[#8C8882] mb-6">$1,490/yr — 2 months free</p>

                <div className="h-px bg-[#E2E4E1] mb-5" />

                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Weekly group Office Hours session (shared)",
                    "TrailKit content library",
                    "Members-only Slack community",
                    "Month-to-month — cancel anytime",
                  ].map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <Check />{item}
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-[#E2E4E1] mb-4" />

                <ul className="space-y-2 mb-6">
                  {[
                    "Private office hours session",
                    "Project requests",
                    "Priority learner team matching",
                    "Monthly strategic review call",
                  ].map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[12px] text-[#8C8882]">
                      <Cross />{item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/nonprofit-assessment"
                  className="w-full h-[44px] rounded-[8px] font-['Open_Sans'] font-semibold text-[14px] flex items-center justify-center transition-colors"
                  style={{ background: "#E0F0F3", color: "#2F6F7E" }}
                >
                  Get Started →
                </Link>
                <p className="font-['Open_Sans'] text-[12px] text-center text-[#4A4F4D] mt-3">
                  <Link href="/nonprofit-assessment" className="text-[#2F6F7E] hover:underline">Start with a free assessment →</Link>
                </p>
              </div>
            </div>

            {/* Tier 2 — Mid Guided */}
            <div className="bg-white border-[2px] border-[#2F6B3F] rounded-2xl overflow-hidden flex flex-col" style={{ borderTop: "6px solid #2F6B3F" }}>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-['Open_Sans'] font-bold text-[11px] tracking-[1px] uppercase text-[#2F6B3F] mb-3">MID · GUIDED</span>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-4">Guided</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-['Poppins'] font-bold text-[36px] text-[#2F6B3F]">$3,490</span>
                  <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">/year</span>
                </div>
                <p className="font-['Open_Sans'] text-[12px] text-[#8C8882] mb-6">Annual service contract — billed yearly</p>

                <div className="h-px bg-[#E2E4E1] mb-5" />

                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Everything in Community",
                    "Weekly group Office Hours session (shared)",
                    "1 monthly private Office Hours session — your team only",
                    "1 project request per quarter — must fit within standard quarterly project scope. Requests exceeding scope will be discussed as a consulting engagement.",
                  ].map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <Check color="#2F6B3F" />{item}
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-[#E2E4E1] mb-4" />

                <ul className="space-y-2 mb-6">
                  {[
                    "Unlimited project requests",
                    "Priority learner team matching",
                    "Monthly strategic review call",
                  ].map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[12px] text-[#8C8882]">
                      <Cross />{item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/nonprofit-assessment"
                  className="w-full h-[44px] rounded-[8px] font-['Open_Sans'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors hover:opacity-90"
                  style={{ background: "#2F6B3F" }}
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Tier 3 — Full Partner */}
            <div className="bg-white border-[1.5px] border-[#E2E4E1] rounded-2xl overflow-hidden flex flex-col" style={{ borderTop: "6px solid #1E4A2A" }}>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-['Open_Sans'] font-bold text-[11px] tracking-[1px] uppercase text-[#1E4A2A] mb-3">FULL PARTNER</span>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-4">Full Partner</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-['Poppins'] font-bold text-[36px] text-[#1E4A2A]">$7,490</span>
                  <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">/year</span>
                </div>
                <p className="font-['Open_Sans'] text-[12px] text-[#8C8882] mb-6">Annual service contract — billed yearly</p>

                <div className="h-px bg-[#E2E4E1] mb-5" />

                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Everything in Guided",
                    "Weekly private Office Hours session — your team only (no group session needed)",
                    "Unlimited project requests*",
                    "Priority matching to Guided Trail and Trail of Mastery learner teams",
                    "Monthly strategic review call with TT leadership",
                  ].map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <Check color="#1E4A2A" />{item}
                    </li>
                  ))}
                </ul>

                <p className="font-['Open_Sans'] italic text-[11px] text-[#8C8882] mb-4">*TT reserves the right to scope-gate requests that require a dedicated project engagement beyond the membership model.</p>

                <Link
                  href="/nonprofit-assessment"
                  className="w-full h-[44px] rounded-[8px] font-['Open_Sans'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors hover:opacity-90"
                  style={{ background: "#1E4A2A" }}
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>

          {/* Annual savings callout */}
          <div className="rounded-xl p-6 text-center" style={{ background: "#E6F3EA", borderTop: "3px solid #2F6B3F" }}>
            <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">The Community tier is available month-to-month at $149/mo. The Guided and Full Partner tiers are annual service contracts at $3,490/yr and $7,490/yr respectively.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Entry: $1,490/yr", "Guided: $3,490/yr", "Full Partner: $7,490/yr"].map(p => (
                <span
                  key={p}
                  className="bg-white border border-[#E2E4E1] font-['Open_Sans'] font-semibold text-[13px] text-[#2A2E2C] rounded-lg px-4 py-1.5"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Project Requests */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">PROJECT DELIVERY</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Real Salesforce work. Delivered by real people.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              Guided and Full Partner members can submit project requests — specific Salesforce configuration work that TT delivers within the membership. All work is declarative configuration — no code, ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROJECT_COLS.map(c => (
              <div key={c.title} className="p-7 rounded-xl border border-[#E2E4E1]">
                <div className="text-[28px] mb-4">{c.icon}</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">{c.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-['Open_Sans'] italic text-[12px] text-[#8C8882] mt-6">Project requests must fit within standard quarterly project scope. Requests exceeding scope will be discussed as a consulting engagement.</p>
        </div>
      </section>

      {/* Hartford Promises Testimonial */}
      <section className="bg-white px-5 md:px-10 py-12">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="relative"
            style={{
              background: "#E0F0F3",
              borderLeft: "5px solid #2F6F7E",
              borderRadius: "12px",
              padding: "32px 40px",
            }}
          >
            <div
              className="absolute font-['Poppins'] leading-none select-none"
              style={{ top: "12px", left: "20px", fontSize: "80px", color: "rgba(47,111,126,0.20)" }}
            >"</div>
            <p
              className="font-['Poppins'] font-medium italic leading-[1.6] mb-5 relative z-10 max-w-[840px]"
              style={{ fontSize: "18px", color: "#1E4F5C" }}
            >
              Transition Trails Salesforce Experts go beyond! After working with the team, our productivity and data accuracy soared — and we felt supported every step of the way.
            </p>
            <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6F7E]">Hartford Promises</div>
            <div className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">Nonprofit Partner · Digital Compass Member · Hartford, CT</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Free Assessment */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>START HERE</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white mb-5">Not sure where to start? That is what the free assessment is for.</h2>
            <p className="font-['Open_Sans'] text-[16px] max-w-[760px] mx-auto leading-[1.65]" style={{ color: "rgba(255,255,255,0.72)" }}>
              Before you choose a membership tier, we want to understand your organization and your Salesforce situation. The free assessment (up to 1 hour) with the TT team gives you clarity on where your org stands, what would actually help, and which Digital Compass tier — if any — is the right fit.
              <br /><br />
              No pitch. No obligation. Just a real conversation with someone who understands nonprofit Salesforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-5">In up to 1 hour we cover:</h3>
              <ul className="space-y-3">
                {ASSESSMENT_COVERS.map(item => (
                  <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                    <Check />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center px-4">
              <h3 className="font-['Poppins'] font-semibold text-[16px] mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>Conducted by TT leadership.</h3>
              <p className="font-['Open_Sans'] text-[14px] leading-[1.65] mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
                Your free assessment is conducted by the Transition Trails leadership team — people who understand nonprofit Salesforce challenges and will give you an honest picture of where your org stands and what would actually help.
                <br /><br />
                No pitch. No obligation. Just a real conversation.
              </p>
              <a
                href="mailto:hello@transitiontrails.org"
                className="font-['Open_Sans'] font-semibold text-[14px] text-[#F5A623] hover:underline"
              >
                hello@transitiontrails.org
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/nonprofit-assessment"
              className="h-[56px] px-10 rounded-[8px] font-['Poppins'] font-bold text-[15px] inline-flex items-center justify-center transition-colors"
              style={{ background: "#F5A623", color: "#2A2E2C" }}
            >
              Book Your Free Assessment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
