import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";
import { Compass, Target, RefreshCw, Building2, Search, MessageCircle, Calendar, Rocket, Star, Check, Users, Mail } from "lucide-react";

const WHO_CARDS = [
  {
    borderClass: "border-l-[4px] border-l-teal-300",
    iconBgClass: "bg-teal-100",
    textClass: "text-teal-300",
    icon: <Compass size={24} className="text-teal-300" />,
    title: "Career Starters",
    subtitle: "Finding your direction",
    body: "Not sure if Salesforce is the right path for you? A coaching session helps you understand what a Salesforce career actually looks like, what it takes to get there, and whether it fits your goals, background, and timeline. No commitment required — just clarity.",
  },
  {
    borderClass: "border-l-[4px] border-l-trail-green",
    iconBgClass: "bg-green-100",
    textClass: "text-trail-green",
    icon: <Target size={24} className="text-trail-green" />,
    title: "Career Builders",
    subtitle: "Advancing your career",
    body: "You have the cert but the job search is not going the way you expected. Or you are in a role and want to move up. Coaching gives you a clear plan — resume review, interview prep, portfolio feedback, or technical skill development — whatever you need most right now.",
  },
  {
    borderClass: "border-l-[4px] border-l-green-700",
    iconBgClass: "bg-green-100",
    textClass: "text-green-700",
    icon: <RefreshCw size={24} className="text-green-700" />,
    title: "Career Pivoters",
    subtitle: "Making the pivot",
    body: "You are coming from another career and the path forward is not obvious. Coaching helps you map your existing skills to Salesforce roles, identify the fastest route to job-ready, and build the confidence to make the transition with a plan behind you.",
  },
  {
    borderClass: "border-l-[4px] border-l-deep-teal",
    iconBgClass: "bg-teal-100",
    textClass: "text-deep-teal",
    icon: <Building2 size={24} className="text-deep-teal" />,
    title: "Nonprofit Professionals",
    subtitle: "Nonprofit technology leadership",
    body: "You lead a nonprofit and need Salesforce guidance — strategy, implementation direction, or just a sounding board for decisions your team is facing. Coaching with the TT team gives you expert nonprofit Salesforce perspective without a consulting retainer.",
  },
];

const PACKAGES = [
  {
    borderTopClass: "border-t-[5px] border-t-trail-green",
    accentBgClass: "bg-trail-green",
    accentTextClass: "text-trail-green",
    checkClass: "text-trail-green",
    icon: <Search size={24} className="text-trail-green" />,
    title: "Discovery Call",
    price: "Free",
    sub: "30 minutes · No commitment",
    body: [
      "Not sure where to start? Begin here. A 30-minute conversation with a TT coach to understand your goals, your current situation, and the right next step — whether that's a coaching package, a TT program, or something else entirely.",
      "Every coaching relationship starts with a discovery call. No pressure. No pitch. Just a real conversation.",
    ],
    expect: [
      "We listen to where you are and where you want to go",
      "We explore your specific goals and challenges",
      "We recommend the right next step for your situation",
      "No obligation to purchase anything",
    ],
    cta: "Book a Discovery Call →",
    etNote: "Free for everyone — no membership required",
  },
  {
    borderTopClass: "border-t-[5px] border-t-deep-teal",
    accentBgClass: "bg-deep-teal",
    accentTextClass: "text-deep-teal",
    checkClass: "text-deep-teal",
    icon: <MessageCircle size={24} className="text-deep-teal" />,
    title: "Single Session",
    price: "$150",
    priceSuffix: "/hr",
    sub: "per hour · 1-on-1 with your coach",
    etPrice: "Explorer's Trail members: $100/hr",
    body: [
      "A full hour focused entirely on your agenda. Use it for whatever you need most — resume and LinkedIn review, interview preparation, technical skill development, career strategy, org assessment, or navigating a specific workplace challenge.",
      "You bring the topic. Your coach brings the expertise.",
    ],
    expect: [
      "60 minutes of dedicated 1-on-1 time",
      "Your agenda — you decide the focus",
      "Actionable next steps at the end of every session",
      "Session notes shared after the call",
    ],
    cta: "Book a Session →",
    etNote: "Members save $50/hr — join Explorer's Trail →",
    etLink: "/programs/explorers-trail",
  },
  {
    borderTopClass: "border-t-[5px] border-t-trail-green",
    accentBgClass: "bg-trail-green",
    accentTextClass: "text-trail-green",
    checkClass: "text-trail-green",
    badge: "POPULAR",
    icon: <Calendar size={24} className="text-trail-green" />,
    title: "3-Session Bundle",
    price: "$400",
    sub: "3 hours · Save $50 vs single sessions",
    etPrice: "Explorer's Trail members: $275",
    body: [
      "Three focused sessions with the same coach — ideal for anyone working through a specific goal or transition over 4-6 weeks. Between sessions, you have time to apply what you learned and come back with real progress to build on.",
      "Popular for: job search strategy, cert prep accountability, career pivot planning, or technical skill development in a specific area.",
    ],
    expect: [
      "3 × 60-minute sessions scheduled on your timeline",
      "Consistent coach relationship — same person each time",
      "Progress check-in at the start of each session",
      "Summary and next steps after each session",
      "Email support between sessions",
    ],
    cta: "Get Started →",
    etNote: "Members save $125 on this bundle",
  },
  {
    borderTopClass: "border-t-[5px] border-t-green-700",
    accentBgClass: "bg-green-700",
    accentTextClass: "text-green-700",
    checkClass: "text-green-700",
    icon: <Rocket size={24} className="text-green-700" />,
    title: "6-Session Bundle",
    price: "$750",
    sub: "6 hours · Best value · Save $150 vs single sessions",
    etPrice: "Explorer's Trail members: $525",
    body: [
      "Six sessions over 8-12 weeks — a sustained coaching engagement for people navigating a significant transition or working toward a specific milestone. This is the package for Career Pivoters, serious job seekers, and anyone who wants consistent expert support through a major career move.",
      "Most clients who choose this package reach their primary goal before all six sessions are complete.",
    ],
    expect: [
      "6 × 60-minute sessions — flexible scheduling",
      "Goal-setting session at the start",
      "Mid-point progress review",
      "Accountability between sessions",
      "Summary documentation of your journey and outcomes",
    ],
    cta: "Get Started →",
    etNote: "Members save $225 on this bundle",
  },
];

const COACHES = [
  {
    key: "AL",
    accentBgClass: "bg-trail-green",
    accentTextClass: "text-trail-green",
    accentBorderClass: "border-trail-green",
    initials: "AL",
    name: "Angela Landrith",
    title: "Co-Founder & CEO",
    tagline: "20+ years leading Salesforce transformations. From self-taught SQL analyst to SVP — and now building the pathway for others.",
    skills: ["Career Progression", "CRM Business Strategy", "Change Management", "Vision and Roadmapping", "Platform Adoption", "AI Adoption and Usage", "RESOLVE Trainer", "Requirements and Process Mapping", "Mentoring and Coaching"],
    bestFor: "Career Builders and Pivoters who need strategic direction, leadership development, or a big-picture roadmap for their Salesforce career. Angela specializes in helping people see the full arc of where they are going — not just the next step.",
    cta: "Book with Angela →",
    contactLabel: "Schedule directly →",
    contactHref: LINKS.angelaCalendar,
    external: true,
    pillBgClass: "bg-green-100",
  },
  {
    key: "KB",
    accentBgClass: "bg-deep-teal",
    accentTextClass: "text-deep-teal",
    accentBorderClass: "border-deep-teal",
    initials: "KB",
    name: "Kim Barnes",
    title: "Co-Founder & COO · Digital Compass Lead",
    tagline: "Solutions Architect and nonprofit technology specialist. If your Salesforce org is not working the way it should — Kim knows why.",
    skills: ["Salesforce Solution Design", "Salesforce Architecture", "Business Analysis", "Nonprofit Technology", "Notion", "Zapier", "AI Tools", "RESOLVE Trainer", "Salesforce Troubleshooting"],
    bestFor: "Nonprofit professionals who need technical guidance, solution design support, or help making sense of a complex Salesforce situation. Also ideal for Career Builders who want to develop their BA or solution design skills with an architect's perspective.",
    cta: "Book with Kim →",
    contactLabel: "kim@transitiontrails.org",
    contactHref: "mailto:kim@transitiontrails.org",
    external: true,
    pillBgClass: "bg-teal-100",
  },
  {
    key: "HR",
    accentBgClass: "bg-green-700",
    accentTextClass: "text-green-700",
    accentBorderClass: "border-green-700",
    initials: "HR",
    name: "Hugh Richardson",
    title: "Co-Founder & CTO · Solutions Architect",
    tagline: "Drove trucks for 16 years. Now a Solutions Architect. Hugh is the proof the pivot is possible — and he coaches like someone who has lived it.",
    skills: ["Solution Design", "Requirements and Process Mapping", "Security and Sharing", "Architectural Best Practices", "AI Integration", "Troubleshooting", "Resume Writing", "Interview Prep", "Mentoring and Coaching", "RESOLVE Trainer"],
    bestFor: "Career Pivoters who need someone who genuinely understands what it feels like to start over. Hugh specializes in resume and interview prep, confidence building, and helping people from non-technical backgrounds find their footing in Salesforce. He is also the go-to for architectural questions and troubleshooting.",
    cta: "Book with Hugh →",
    contactLabel: "hello@transitiontrails.org",
    contactHref: "mailto:hello@transitiontrails.org?subject=Coaching%20with%20Hugh",
    external: true,
    pillBgClass: null, // rgba(30,74,42,0.08) has no Tailwind equivalent — kept as inline
  },
];

const WORKSHOP_TOPICS = [
  "Salesforce configuration deep-dives (flows, reports, security)",
  "Resume and LinkedIn optimization for Salesforce roles",
  "Interview preparation and mock interviews",
  "Career pivot strategy sessions",
  "RESOLVE methodology introduction sessions",
  "Nonprofit Salesforce best practices",
  "AI tools for Salesforce professionals",
  "New topics added regularly based on community requests",
];

const PRICING_ROWS = [
  { label: "Discovery Call", standard: "Free", member: "Free" },
  { label: "Single Session", standard: "$150/hr", member: "$100/hr" },
  { label: "3-Session Bundle", standard: "$400", member: "$275" },
  { label: "6-Session Bundle", standard: "$750", member: "$525" },
  { label: "Group Workshops", standard: "$75/session", member: "Free/Reduced" },
];

export default function Coaching() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Individual Coaching | Transition Trails | Salesforce Career and Technical Coaching"
        description="1-on-1 Salesforce coaching with Angela Landrith, Kim Barnes, and Hugh Richardson. Career strategy, technical development, resume prep, interview coaching, and nonprofit Salesforce guidance. Discovery call free. Explorer's Trail members save on all packages."
        path="/coaching"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10 bg-gradient-deep"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
            <span>/</span>
            <span className="text-white/80">Coaching</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            <div className="flex-1 max-w-[700px]">
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7 text-sun-amber"
                style={{ background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
              >
                INDIVIDUAL COACHING  ·  1-ON-1  ·  EXPERT COACHES
              </div>

              <h1
                className="font-['Poppins'] font-bold text-[52px] text-white leading-[1.1] mb-5"
                style={{ letterSpacing: "-1.5px" }}
              >
                Personalized coaching from people who have done the work.
              </h1>

              <p className="font-['Poppins'] font-semibold text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
                Clarity, confidence, and a clear next step — in one session.
              </p>

              <div className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4 mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
                <p>Whether you are figuring out if Salesforce is the right path, preparing for your first interview, navigating a career pivot, or working through a specific technical challenge — TT coaching gives you dedicated time with someone who has been exactly where you are trying to go.</p>
                <p>Every TT coach has real implementation experience, real client delivery experience, and a genuine commitment to helping you move forward.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#discovery"
                  className="h-[52px] px-7 rounded-[8px] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors bg-sun-amber text-charcoal"
                  onMouseEnter={e => e.currentTarget.style.background = "var(--tt-amber-700)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--tt-sun-amber)"}
                >
                  Book a Discovery Call →
                </a>
                <a
                  href="#packages"
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white hover:bg-white/10 font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  See coaching packages ↓
                </a>
              </div>
            </div>

            <div className="flex flex-row xl:flex-col gap-4 w-full xl:w-[240px]">
              {[
                { value: "Free", label: "Discovery call — 30 minutes", borderTopClass: "border-t-[4px] border-t-trail-green" },
                { value: "$150/hr", label: "Standard 1-on-1 rate", borderTopClass: "border-t-[4px] border-t-deep-teal" },
                { value: "$100/hr", label: "Explorer's Trail member rate", borderTopClass: "border-t-[4px] border-t-teal-300" },
              ].map(s => (
                <div
                  key={s.label}
                  className={`flex-1 xl:flex-none rounded-xl p-6 ${s.borderTopClass}`}
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="font-['Poppins'] font-bold text-[24px] text-white mb-1">{s.value}</div>
                  <div className="font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.60)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Coaching Is For */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">WHO IT SERVES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal">Coaching meets you exactly where you are.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHO_CARDS.map(card => (
              <div
                key={card.title}
                className={`bg-white border border-warm-gray rounded-xl p-7 flex flex-col ${card.borderClass}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${card.iconBgClass}`}>{card.icon}</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-1">{card.title}</h3>
                <p className={`font-['Open_Sans'] font-semibold text-[13px] mb-3 ${card.textClass}`}>{card.subtitle}</p>
                <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Coaching Packages */}
      <section id="packages" className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">COACHING PACKAGES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal">Choose the support that fits where you are.</h2>
          </div>

          <div
            className="max-w-[760px] mx-auto flex items-start gap-3 rounded-lg mb-10 bg-amber-100 border border-sun-amber"
            style={{ padding: "16px 24px" }}
          >
            <Star size={18} className="text-sun-amber shrink-0" />
            <p className="font-['Open_Sans'] text-[14px] text-charcoal leading-[1.6]">
              Explorer's Trail members receive discounted coaching rates on all packages. Annual + Coaching members ($597/yr) receive one quarterly coaching session included with their membership.{" "}
              <Link href="/programs/explorers-trail" className="font-semibold text-trail-green hover:underline">Learn about Explorer's Trail →</Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.title}
                className={`bg-white border border-warm-gray rounded-xl overflow-hidden flex flex-col relative ${pkg.borderTopClass}`}
              >
                {pkg.badge && (
                  <span
                    className="absolute top-4 right-4 font-['Open_Sans'] font-bold text-[10px] px-2 py-1 rounded bg-sun-amber text-charcoal"
                  >
                    {pkg.badge}
                  </span>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-[32px] mb-3">{pkg.icon}</div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-2">{pkg.title}</h3>
                  <div className={`font-['Poppins'] font-bold text-[32px] leading-none mb-2 ${pkg.accentTextClass}`}>
                    {pkg.price}{pkg.priceSuffix && <span className="font-['Open_Sans'] font-normal text-[15px] text-slate">{pkg.priceSuffix}</span>}
                  </div>
                  <p className="font-['Open_Sans'] text-[13px] text-slate mb-1">{pkg.sub}</p>
                  {pkg.etPrice && (
                    <p className="font-['Open_Sans'] font-semibold text-[14px] mb-4 text-teal-300">{pkg.etPrice}</p>
                  )}
                  <div className={`h-px bg-warm-gray ${pkg.etPrice ? "mb-5" : "mt-2 mb-5"}`} />

                  <div className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65] space-y-3 mb-5">
                    {pkg.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.expect.map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-slate">
                        <Check size={16} className={`shrink-0 ${pkg.checkClass}`} />{item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#discovery"
                    className={`mt-auto w-full h-[48px] rounded-[8px] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors ${pkg.accentBgClass}`}
                  >
                    {pkg.cta}
                  </a>
                  {pkg.etLink ? (
                    <Link href={pkg.etLink} className="text-center font-['Open_Sans'] text-[12px] mt-3 hover:underline text-trail-green">
                      {pkg.etNote}
                    </Link>
                  ) : (
                    <p className="text-center font-['Open_Sans'] italic text-[12px] mt-3 text-muted-text">{pkg.etNote}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Meet Your Coaches */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">YOUR COACHES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4">Three coaches. Real experience. Different specializations.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65] mb-12">
              Every TT coach has real Salesforce implementation experience and real client delivery experience. Choose the coach whose expertise matches what you need most — or let us recommend the right fit on your discovery call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {COACHES.map(coach => (
              <div
                key={coach.key}
                className="bg-white rounded-2xl overflow-hidden flex flex-col border-[1.5px] border-warm-gray"
              >
                <div className={`h-1.5 w-full ${coach.accentBgClass}`} />
                <div className="p-7 flex flex-col flex-1">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${coach.accentBgClass}`}>
                    <span className="font-['Poppins'] font-bold text-white text-xl">{coach.initials}</span>
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[20px] text-charcoal mb-1">{coach.name}</h3>
                  <p className={`font-['Open_Sans'] font-semibold text-[14px] mb-3 ${coach.accentTextClass}`}>{coach.title}</p>
                  <p className="font-['Open_Sans'] italic text-[13px] text-slate leading-[1.6] mb-4">{coach.tagline}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {coach.skills.map(skill => (
                      <span
                        key={skill}
                        className={`font-['Open_Sans'] font-semibold text-[10px] rounded px-2 py-1 ${coach.accentTextClass} ${coach.pillBgClass ?? ""}`}
                        style={coach.pillBgClass ? undefined : { background: "rgba(30,74,42,0.08)" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className={`font-['Open_Sans'] font-bold text-[12px] mb-2 ${coach.accentTextClass}`} style={{ letterSpacing: "1px" }}>BEST FOR</p>
                    <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{coach.bestFor}</p>
                  </div>

                  <a
                    href="#discovery"
                    className={`mt-auto w-full h-[46px] rounded-[8px] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center bg-white transition-colors border-[1.5px] ${coach.accentBorderClass} ${coach.accentTextClass}`}
                  >
                    {coach.cta}
                  </a>
                  <a
                    href={coach.contactHref}
                    target={coach.external ? "_blank" : undefined}
                    rel={coach.external ? "noopener noreferrer" : undefined}
                    className={`text-center font-['Open_Sans'] text-[12px] mt-3 hover:underline ${coach.accentTextClass}`}
                  >
                    {coach.contactLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-['Open_Sans'] italic text-[13px] text-slate">
            Not sure which coach is the right fit? Book a discovery call and we will help you find the best match for your goals.
          </p>
        </div>
      </section>

      {/* SECTION 6: Group Workshops */}
      <section className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">GROUP WORKSHOPS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4">Learn alongside others who are on the same path.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
              TT group workshops are live, interactive sessions on specific Salesforce topics, career skills, and professional development. Explorer's Trail members attend free or at reduced rates — workshops are a core part of the community experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 border-l-[4px] border-l-trail-green">
              <h3 className="font-['Poppins'] font-semibold text-[16px] text-trail-green mb-5">Workshop topics include:</h3>
              <ul className="space-y-3">
                {WORKSHOP_TOPICS.map(item => (
                  <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-slate">
                    <Check size={16} className="text-trail-green shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-5">Workshop access</h3>
              <div className="space-y-5">
                <div>
                  <p className="font-['Open_Sans'] font-semibold text-[14px] text-trail-green mb-1">Explorer's Trail members</p>
                  <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.6]">Free or significantly reduced — workshops are part of your membership. Check the community calendar for upcoming sessions.</p>
                </div>
                <div>
                  <p className="font-['Open_Sans'] font-semibold text-[14px] text-charcoal mb-1">Non-members</p>
                  <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.6]">$75 per workshop session</p>
                </div>
                <div>
                  <p className="font-['Open_Sans'] font-semibold text-[14px] text-deep-teal mb-1">Organizations</p>
                  <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.6] mb-1">Private workshop for your team — contact us for pricing.</p>
                  <a href="mailto:hello@transitiontrails.org?subject=Private%20Workshop%20Inquiry" className="font-['Open_Sans'] font-semibold text-[13px] text-deep-teal hover:underline">→ hello@transitiontrails.org</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/programs/explorers-trail"
              className="inline-flex items-center justify-center h-[52px] px-7 rounded-[8px] border-[1.5px] border-trail-green text-trail-green font-['Poppins'] font-semibold text-[15px] hover:bg-trail-green/5 transition-colors mb-3"
            >
              Join Explorer's Trail to get workshop access →
            </Link>
            <p className="font-['Open_Sans'] text-[13px] text-slate">
              Or <a href="mailto:hello@transitiontrails.org?subject=Workshop%20Interest" className="text-trail-green font-semibold hover:underline">contact us about the next public workshop →</a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Discovery Call */}
      <section id="discovery" className="bg-charcoal py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>START HERE</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white mb-5">Not sure where to start? That is what the discovery call is for.</h2>
            <div className="font-['Open_Sans'] text-[16px] max-w-[760px] leading-[1.65] space-y-4" style={{ color: "rgba(255,255,255,0.72)" }}>
              <p>Every coaching relationship starts with a free 30-minute discovery call. We will listen to where you are, understand your goals, and recommend the right next step — whether that is a coaching package, a TT program, or something else entirely.</p>
              <p>No pressure. No pitch. Just a real conversation with someone who wants to help you move forward.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Calendar size={24} className="text-trail-green" />,
                title: "Book with Angela",
                body: "Career strategy, leadership development, big-picture roadmapping, and career progression.",
                cta: "Schedule →",
                href: LINKS.angelaCalendar,
                bgClass: "bg-trail-green",
              },
              {
                icon: <Mail size={24} className="text-deep-teal" />,
                title: "Book with Kim or Hugh",
                body: "Technical coaching, solution design, career pivot support, resume and interview prep, nonprofit Salesforce.",
                cta: "Contact Us →",
                href: "mailto:hello@transitiontrails.org?subject=Coaching%20Discovery%20Call%20Request",
                bgClass: "bg-deep-teal",
              },
              {
                icon: <Users size={24} className="text-white/70" />,
                title: "Not sure who to book with?",
                body: "Tell us a little about your situation and we will match you with the right coach.",
                cta: "Get Matched →",
                href: "mailto:hello@transitiontrails.org?subject=Coaching%20Match%20Request",
                outline: true,
              },
            ].map(opt => (
              <div
                key={opt.title}
                className="rounded-xl p-7 flex flex-col"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{background:"rgba(255,255,255,0.12)"}}>{opt.icon}</div>
                <h3 className="font-['Poppins'] font-semibold text-[15px] text-white mb-2">{opt.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] leading-[1.6] mb-6 flex-1" style={{ color: "rgba(255,255,255,0.60)" }}>{opt.body}</p>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-[44px] rounded-[8px] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center transition-colors ${opt.outline ? "bg-white/10 border border-white text-white" : `${opt.bgClass} text-white`}`}
                >
                  {opt.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center font-['Open_Sans'] italic text-[13px]" style={{ color: "rgba(255,255,255,0.40)" }}>
            Discovery calls are free for everyone — no Explorer's Trail membership required.
          </p>
        </div>
      </section>

      {/* SECTION 8: Explorer's Trail Coaching Benefit */}
      <section className="py-16 px-5 md:px-10 bg-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-green-700 mb-3">EXPLORER'S TRAIL MEMBERS</div>
            <h2 className="font-['Poppins'] font-bold text-[28px] text-green-700">Members save on every coaching package.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden border border-trail-green/20">
              <table className="w-full font-['Open_Sans'] text-[13px]">
                <thead>
                  <tr className="bg-trail-green">
                    <th className="text-left py-3 px-4 text-white font-semibold">Package</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Standard</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">ET Member</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 0 ? "white" : "var(--tt-green-100)" }}>
                      <td className="py-3 px-4 text-charcoal font-semibold">{row.label}</td>
                      <td className="py-3 px-4 text-slate">{row.standard}</td>
                      <td className="py-3 px-4 text-trail-green font-semibold">{row.member}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-green-700 mb-3">Annual + Coaching members get even more.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6] mb-5">
                Explorer's Trail Annual + Coaching members ($597/yr) receive one quarterly coaching session included with their membership — at no additional cost. That is up to $600 in coaching value included in your annual membership.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6 border-l-[4px] border-l-trail-green">
                <p className="font-['Open_Sans'] text-[13px] text-charcoal leading-[1.7]">
                  4 quarterly sessions × $150/hr = $600 coaching value<br />
                  Annual + Coaching membership = $597/yr<br />
                  <span className="font-semibold">You come out ahead before your first renewal.</span>
                </p>
              </div>
              <Link
                href="/programs/explorers-trail"
                className="inline-flex items-center justify-center h-[48px] px-7 rounded-[8px] bg-trail-green text-white font-['Poppins'] font-semibold text-[14px] hover:bg-green-700 transition-colors"
              >
                Join Explorer's Trail →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
