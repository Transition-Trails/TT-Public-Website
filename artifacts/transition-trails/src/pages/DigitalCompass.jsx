import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";
import { Calendar, BookOpen, Users, Lightbulb, TrendingUp, Rocket, ClipboardList, Zap, Check, X } from "lucide-react";
import testimonialContent from "../content/testimonials.json";

const UNIVERSAL_BENEFITS = [
  {
    icon: <Calendar size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "Weekly Office Hours",
    body: "Live weekly group sessions with the TT team — bring your Salesforce questions, challenges, and roadblocks. Entry members join the shared weekly group session. Mid members get the weekly group session plus one private monthly session with their team. Full Partner members have their own dedicated weekly private session.",
  },
  {
    icon: <BookOpen size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "TrailKit Content Library",
    body: "Access to TT's library of Salesforce how-to content — guides, walkthroughs, and resources built specifically for nonprofits navigating the Salesforce ecosystem.",
  },
  {
    icon: <Users size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "Slack Community",
    body: "A members-only Slack workspace connecting Digital Compass nonprofits with the TT team, TT coaches, and each other. Ask questions between sessions, share what you're learning, and tap into the collective expertise of the community.",
  },
];

const WHO_CARDS = [
  {
    icon: <Lightbulb size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "Just getting started",
    body: "Your nonprofit has Salesforce — or is about to get it through the Power of Us grant — but you do not have dedicated Salesforce staff. Digital Compass gives you expert guidance and support without the cost of a full-time admin or a consulting retainer.",
  },
  {
    icon: <TrendingUp size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "Growing and stuck",
    body: "You have been using Salesforce for a while but it is not doing what you need it to do. Data is inconsistent. Processes are manual. Reports do not reflect reality. Digital Compass helps you diagnose what is wrong and fix it systematically.",
  },
  {
    icon: <Rocket size={24} color="var(--tt-trail-green)" />,
    iconBg: "bg-green-100",
    title: "Ready to scale",
    body: "Your Salesforce org is working but you need a strategic partner to help you grow it alongside your mission. Digital Compass Full Partner gives you ongoing project delivery, priority access to TT's learner teams, and a monthly strategic review.",
  },
];

const PROJECT_COLS = [
  {
    icon: <ClipboardList size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "What counts as a project request",
    body: "Configuration-based Salesforce work: adding fields and updating page layouts, building flows to automate a process, setting up reports and dashboards, configuring permission sets, building a web-to-case intake form, data cleanup and deduplication, and more. Always declarative — no Apex code, no custom development.",
  },
  {
    icon: <Users size={24} color="var(--tt-deep-teal)" />,
    iconBg: "bg-teal-100",
    title: "Who does the work",
    body: "Project requests are delivered by TT coaches and, where appropriate, matched to Guided Trail or Trail of Mastery learner teams under coach supervision. Full Partner members receive priority matching to learner teams — giving them both faster delivery and the benefit of supporting TT's learner pipeline.",
  },
  {
    icon: <Zap size={24} color="var(--tt-trail-green)" />,
    iconBg: "bg-green-100",
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


function CheckMark() {
  return <Check size={16} color="var(--tt-trail-green)" className="shrink-0 mt-0.5" />;
}
function CrossMark() {
  return <X size={16} color="var(--tt-muted-text)" className="shrink-0 mt-0.5" />;
}

export default function DigitalCompass() {
  const hartfordTestimonial = testimonialContent.testimonials.find(t => t.id === "hartford-promise");
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Digital Compass | Nonprofit Salesforce Support Membership | Transition Trails"
        description="Ongoing Salesforce support for nonprofits. Weekly office hours, project delivery, and expert guidance from $149/month. Free assessment available."
        path="/programs/digital-compass"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, var(--tt-teal-700) 0%, var(--tt-deep-teal) 55%, var(--tt-green-700) 100%)" }}
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
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7 text-sun-amber"
                style={{ background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
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
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/nonprofit-assessment"
                  className="h-[52px] px-7 rounded-[8px] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors bg-sun-amber text-charcoal"
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
                { value: "$149/mo", label: "Entry membership — less than 2hrs of consulting", color: "var(--tt-deep-teal)" },
                { value: "3 tiers", label: "Entry · Mid · Full Partner", color: "var(--tt-trail-green)" },
                { value: "Free", label: "Initial Salesforce assessment", color: "var(--tt-sun-amber)" },
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">WHO IT SERVES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4">Built for nonprofits that run on Salesforce — or want to.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
              Digital Compass is for nonprofit organizations at any stage of their Salesforce journey — from just getting started to managing a complex multi-program org.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {WHO_CARDS.map(c => (
              <div
                key={c.title}
                className="bg-white border border-warm-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center mb-3`}>
                  {c.icon}
                </div>
                <h3 className="font-['Open_Sans'] font-bold text-[15px] text-deep-teal mb-2">{c.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-teal-100 rounded-xl p-8 text-center">
            <p className="font-['Open_Sans'] text-[13px] font-semibold uppercase tracking-[0.12em] text-deep-teal mb-3">WHAT $149 GETS YOU</p>
            <p className="font-['Fraunces'] font-bold text-[clamp(1.5rem,3vw,2rem)] text-teal-700 leading-tight mb-4">"Less than a single hour of traditional Salesforce consulting — and you get ongoing access all month."</p>
            <p className="font-['Open_Sans'] text-[14px] text-deep-teal">Traditional Salesforce consulting runs $150–$300/hr. At Digital Compass Entry tier, $149/month gives your team consistent, expert support without the retainer.</p>
          </div>

          <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] mt-8">
            Have a specific project, implementation, or architectural challenge that needs dedicated expert attention rather than ongoing membership support? TT also offers{" "}
            <Link href="/consulting" className="text-deep-teal font-semibold hover:underline">Salesforce consulting →</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 4: Universal Benefits */}
      <section className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">UNIVERSAL BENEFITS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal">Every Digital Compass member gets this.</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {UNIVERSAL_BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`grid grid-cols-[auto_1fr] gap-x-6 items-start py-6${i < UNIVERSAL_BENEFITS.length - 1 ? " border-b border-warm-gray" : ""}`}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-teal-100 shrink-0">
                  {b.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal">{b.title}</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-cool-gray leading-relaxed">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Membership Tiers */}
      <section id="tiers" className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">MEMBERSHIP TIERS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4">Choose the level of support your organization needs.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
              Entry membership is month-to-month — join and cancel anytime. Mid and Full Partner memberships are annual service contracts, billed yearly. Annual contracts are recommended for grant-funded purchases.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">

            {/* Entry — Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white rounded-2xl shadow-sm border-[1.5px] border-warm-gray border-l-[4px] border-l-teal-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_180px_160px] gap-6 items-center p-6">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cool-gray mb-1">ENTRY</div>
                  <div className="font-['Fraunces'] font-bold text-[20px] text-charcoal">Community</div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Up to 3 team members included",
                    "Weekly group Office Hours session (shared)",
                    "TrailKit content library",
                    "Members-only Slack community",
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 font-['Open_Sans'] text-[13px] text-charcoal">
                      <Check size={14} color="var(--tt-trail-green)" className="shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="font-['Fraunces'] font-bold text-[26px] text-charcoal">$149</div>
                  <div className="font-['Open_Sans'] text-[11px] text-cool-gray mt-1">/month · or $1,490/yr</div>
                </div>
                <Link
                  href="/nonprofit-assessment"
                  className="w-full h-[44px] rounded-[8px] font-['Open_Sans'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors hover:opacity-90 bg-trail-green"
                >
                  Get Started →
                </Link>
              </div>
            </motion.div>

            {/* Mid — Guided (featured) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md border-2 border-trail-green border-l-[4px] border-l-trail-green"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_180px_160px] gap-6 items-center p-6">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cool-gray mb-1">MID · GUIDED</div>
                  <div className="font-['Fraunces'] font-bold text-[20px] text-charcoal">Guided</div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Everything in Community",
                    "1 monthly private Office Hours session — your team only",
                    "1 project request per quarter",
                    "Annual service contract",
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 font-['Open_Sans'] text-[13px] text-charcoal">
                      <Check size={14} color="var(--tt-trail-green)" className="shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="font-['Fraunces'] font-bold text-[26px] text-charcoal">$3,490</div>
                  <div className="font-['Open_Sans'] text-[11px] text-cool-gray mt-1">/year</div>
                </div>
                <Link
                  href="/nonprofit-assessment"
                  className="w-full h-[44px] rounded-[8px] font-['Open_Sans'] font-bold text-[14px] flex items-center justify-center transition-colors hover:opacity-90 text-white bg-trail-green"
                >
                  Get Started →
                </Link>
              </div>
            </motion.div>

            {/* Full Partner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm border-[1.5px] border-warm-gray border-l-[4px] border-l-deep-teal"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_180px_160px] gap-6 items-center p-6">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cool-gray mb-1">FULL PARTNER</div>
                  <div className="font-['Fraunces'] font-bold text-[20px] text-charcoal">Full Partner</div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Everything in Guided",
                    "Weekly private Office Hours session — your team only",
                    "Unlimited project requests*",
                    "Monthly strategic review call with TT leadership",
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2 font-['Open_Sans'] text-[13px] text-charcoal">
                      <Check size={14} color="var(--tt-trail-green)" className="shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="font-['Fraunces'] font-bold text-[26px] text-charcoal">$7,490</div>
                  <div className="font-['Open_Sans'] text-[11px] text-cool-gray mt-1">/year</div>
                </div>
                <Link
                  href="/nonprofit-assessment"
                  className="w-full h-[44px] rounded-[8px] font-['Open_Sans'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors hover:opacity-90 bg-trail-green"
                >
                  Get Started →
                </Link>
              </div>
            </motion.div>

          </div>

          <p className="text-[12px] font-['Open_Sans'] text-cool-gray text-center italic mt-4">
            Entry tier is month-to-month. Mid and Full Partner tiers are annual service contracts.
          </p>

        </div>
      </section>

      {/* SECTION 7: Project Requests */}
      <section className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">PROJECT DELIVERY</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4">Real Salesforce work. Delivered by real people.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
              Guided and Full Partner members can submit project requests — specific Salesforce configuration work that TT delivers within the membership. All work is declarative configuration — no code, ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROJECT_COLS.map(c => (
              <div key={c.title} className="p-7 rounded-xl border border-warm-gray shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className={`w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center mb-4`}>
                  {c.icon}
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-3">{c.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-['Open_Sans'] italic text-[12px] text-muted-text mt-6">Project requests must fit within standard quarterly project scope. Requests exceeding scope will be discussed as a consulting engagement.</p>
        </div>
      </section>

      {/* Hartford Promise Testimonial */}
      <section className="bg-white px-5 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative"
            style={{
              background: "var(--tt-teal-100)",
              borderRadius: "12px",
              padding: "32px 40px",
            }}
          >
            <div
              className="absolute font-['Poppins'] leading-none select-none"
              style={{ top: "12px", left: "20px", fontSize: "80px", color: "rgba(47,111,126,0.20)" }}
            >"</div>
            <p
              className="font-['Poppins'] font-medium italic leading-[1.6] mb-5 relative z-10 max-w-[840px] text-teal-700"
              style={{ fontSize: "18px" }}
            >
              {hartfordTestimonial.quote}
            </p>
            <div className="font-['Open_Sans'] font-semibold text-[14px] text-deep-teal">{hartfordTestimonial.name}</div>
            <div className="font-['Open_Sans'] text-[12px] text-slate">{hartfordTestimonial.attribution}</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Free Assessment */}
      <section className="bg-charcoal py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
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
              <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-5">In up to 1 hour we cover:</h3>
              <ul className="space-y-3">
                {ASSESSMENT_COVERS.map(item => (
                  <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-slate">
                    <CheckMark />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 flex flex-col justify-center">
              <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-3">Conducted by TT leadership.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] mb-5">
                Your free assessment is conducted by the Transition Trails leadership team — people who understand nonprofit Salesforce challenges and will give you an honest picture of where your org stands and what would actually help.
                <br /><br />
                No pitch. No obligation. Just a real conversation.
              </p>
              <a
                href="mailto:hello@transitiontrails.org"
                className="font-['Open_Sans'] font-semibold text-[14px] text-deep-teal hover:underline"
              >
                hello@transitiontrails.org
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/nonprofit-assessment"
              className="h-[56px] px-10 rounded-[8px] font-['Poppins'] font-bold text-[15px] inline-flex items-center justify-center transition-colors bg-trail-green text-white"
            >
              Book Your Free Assessment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
