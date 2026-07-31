import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { Building2, Users, Package, Zap, Rocket, Target, Eye, Bell, Lock, Smartphone, Check } from "lucide-react";

const STAGES = [
  {
    n: 1,
    icon: <Building2 size={24} color="#fff" />,
    color: "var(--tt-trail-green)",
    title: "Nonprofits are nominated",
    body: "Trail of Mastery and Guided Trail learners nominate nonprofits facing significant Salesforce challenges. The TT community votes on the shortlist. One organization is selected per Expedition.",
    when: "60-90 days before",
  },
  {
    n: 2,
    icon: <Users size={24} color="#fff" />,
    color: "var(--tt-deep-teal)",
    title: "Teams are assembled",
    body: "Guided Trail and Trail of Mastery participants register. Teams are formed across roles — BA, PO, Admin, Advanced Admin, Solutions Consultant — mirroring a real Salesforce delivery team.",
    when: "2-3 weeks before",
  },
  {
    n: 3,
    icon: <Package size={24} color="#fff" />,
    color: "var(--tt-sun-amber)",
    title: "The Trail Box ships",
    body: "Your collector's edition Expedition Trail Box arrives before the weekend. Everything inside is yours to open — except the sealed Expedition Brief. That waits.",
    when: "Week before",
  },
  {
    n: 4,
    icon: <Zap size={24} color="#fff" />,
    color: "var(--tt-trail-green)",
    title: "72 hours. Clock starts Friday.",
    body: "Opening ceremony Friday evening — the Brief is opened together. Discovery begins. Saturday is the build — observers welcome. Sunday afternoon, every team presents their solution to the nonprofit, the sponsors, and the community. The nonprofit selects what gets implemented.",
    when: "The weekend",
  },
  {
    n: 5,
    icon: <Rocket size={24} color="#fff" />,
    color: "var(--tt-deep-teal)",
    title: "The solution ships",
    body: "The selected solution goes into implementation. The nonprofit gets real Salesforce work completed. Every participant adds a documented Expedition deliverable to their portfolio. The Expedition patch is earned.",
    when: "After",
  },
];

const PARTICIPANTS = [
  {
    accent: "var(--tt-trail-green)",
    icon: <Target size={24} color="var(--tt-trail-green)" />,
    title: "Learners",
    body: "Guided Trail graduates and Trail of Mastery learners form the build teams. You work in your role — BA, PO, Admin, Advanced Admin, or Solutions Consultant — delivering a real solution for a real nonprofit under a real time constraint. The most intense portfolio experience in any TT program.",
    badge: "GUIDED TRAIL + TRAIL OF MASTERY",
  },
  {
    accent: "var(--tt-sun-amber)",
    icon: <Building2 size={24} color="var(--tt-sun-amber)" />,
    title: "Nonprofits",
    body: "Apply to have your Salesforce challenge tackled by a coached team over a weekend. One organization selected per Expedition. The work that gets done is real — not a prototype, not a pitch deck. A solution designed for implementation.",
    badge: "APPLY TO BE SELECTED",
  },
  {
    accent: "var(--tt-deep-teal)",
    icon: <Users size={24} color="var(--tt-deep-teal)" />,
    title: "Sponsors",
    body: "The TT Expedition Series is built for sponsorship — a virtual event with a measurable nonprofit outcome, a documented participant community, and social sharing built into the experience from the moment the Trail Box ships. Get in early.",
    badge: "PRESENTING SPONSOR AVAILABLE",
  },
  {
    accent: "var(--tt-teal-300)",
    icon: <Eye size={24} color="var(--tt-teal-300)" />,
    title: "Observers",
    body: "Explorer's Trail members, alumni, and the broader TT community are welcome to observe Saturday's build session and attend Sunday's closing presentations. Watch professional Salesforce delivery happen in real time.",
    badge: "EXPLORER'S TRAIL COMMUNITY",
  },
];

const SPONSOR_TIERS = [
  {
    borderClass: "border-2 border-sun-amber",
    badge: { text: "AVAILABLE", textClass: "text-sun-amber", bgClass: "bg-sun-amber/10" },
    checkClass: "text-sun-amber",
    title: "Presenting Sponsor",
    amount: "Contact us",
    amountClass: "text-sun-amber",
    items: [
      "The TT Expedition, presented by [Your Organization]",
      "Logo on Trail Box and all event materials",
      "Speaking moment at opening or closing ceremony",
      "Logo on Expedition patch — collector's edition",
      "5 observer seats",
      "Recognition in all pre-event communications",
      "Post-event impact report with your branding",
    ],
  },
  {
    borderClass: "border border-trail-green",
    checkClass: "text-trail-green",
    title: "Summit Sponsor",
    amount: "Contact us",
    amountClass: "text-green-700",
    items: [
      "Logo on event materials",
      "Recognition in all communications",
      "2 observer seats",
      "Post-event impact report",
    ],
  },
  {
    borderClass: "border border-deep-teal",
    checkClass: "text-deep-teal",
    title: "Basecamp Sponsor",
    amount: "Contact us",
    amountClass: "text-teal-300",
    items: [
      "Logo on event program",
      "Recognition in communications",
      "1 observer seat",
    ],
  },
  {
    borderClass: "border border-teal-300",
    checkClass: "text-teal-300",
    title: "Trail Box Sponsor",
    amount: "Contact us",
    amountClass: "text-teal-300",
    body: "Contribute a branded item to the Expedition Trail Box. Your product in the hands of every participant — unboxed, photographed, shared.",
    items: [
      "Product in Trail Box",
      "Social sharing moment",
      "Recognition in event program",
    ],
  },
];

const CTA_CARDS = [
  {
    icon: <Bell size={24} color="var(--tt-sun-amber)" />,
    title: "Get Notified",
    body: "Be the first to know when Expedition I applications open — for learners, nonprofits, and sponsors.",
    buttonLabel: "Notify Me →",
    buttonClass: "bg-sun-amber text-charcoal",
    href: "mailto:hello@transitiontrails.org?subject=TT%20Expedition%20Series%20-%20Notify%20Me",
  },
  {
    icon: <Building2 size={24} color="var(--tt-trail-green)" />,
    title: "Nominate a Nonprofit",
    body: "Know a nonprofit facing a significant Salesforce challenge? Nominate them for Expedition I consideration.",
    buttonLabel: "Submit a Nomination →",
    buttonClass: "bg-trail-green text-white",
    href: "mailto:hello@transitiontrails.org?subject=TT%20Expedition%20-%20Nonprofit%20Nomination",
  },
  {
    icon: <Users size={24} color="var(--tt-deep-teal)" />,
    title: "Sponsorship Inquiry",
    body: "Interested in sponsoring The TT Expedition Series? We are building the sponsorship program now and welcoming early conversations.",
    buttonLabel: "Inquire About Sponsorship →",
    buttonClass: "bg-deep-teal text-white",
    href: "mailto:hello@transitiontrails.org?subject=TT%20Expedition%20-%20Sponsorship%20Inquiry",
  },
];

export default function Expedition() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col min-h-screen bg-off-black">
      <PageMeta
        title="The TT Expedition Series | Coming Fall 2027 | Transition Trails"
        description="Twice yearly, a team of Salesforce professionals solves a real nonprofit challenge over 72 hours. Trail Box included. Collector's edition patches. Launching Fall 2027. Get notified."
        path="/expedition"
      />

      {/* HERO */}
      <section
        className="pt-28 pb-24 px-5 md:px-10 flex flex-col items-center text-center bg-off-black"
        style={{
          background: "radial-gradient(ellipse at center, rgba(47,107,63,0.25) 0%, rgba(26,26,26,1) 70%)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center text-center w-full">
            <motion.div variants={fadeUp}>
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-4 py-2 mb-8 text-sun-amber"
                style={{
                  background: "rgba(245,166,35,0.15)",
                  border: "1px solid rgba(245,166,35,0.40)",
                  borderRadius: "99px",
                }}
              >
                COMING · FALL 2027 · TWICE YEARLY
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] font-bold text-[64px] text-white leading-[1.05] mb-5 max-w-[860px]"
              style={{ letterSpacing: "-2px" }}
            >
              The TT Expedition Series.
            </motion.h1>

            <motion.p variants={fadeUp} className="font-['Poppins'] font-semibold text-[22px] text-teal-300 mb-8 leading-[1.5]">
              A weekend. A nonprofit. A team. A solution that ships.
            </motion.p>

            <div className="font-['Open_Sans'] text-[18px] leading-[1.7] max-w-[680px] mb-12 space-y-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>Twice a year, a team of Guided Trail and Trail of Mastery learners comes together — virtually, over a single weekend — to solve a real Salesforce challenge for a real nonprofit organization.</p>
              <p>The problem is significant. The timeline is tight. The solution ships.</p>
              <p>Every participant receives a Trail Box before the event. The sealed Expedition Brief inside stays closed until the opening ceremony — when everyone opens it together and the clock starts.</p>
            </div>

            {/* Stat boxes */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-[720px]">
              {[
                { value: "72 hours", label: "From brief to solution" },
                { value: "1 nonprofit", label: "Selected per Expedition" },
                { value: "2× per year", label: "Spring and Fall" },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="flex-1 flex flex-col items-center px-8 py-6 rounded-xl"
                  style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.25)" }}
                >
                  <span className="font-['Poppins'] font-bold text-[28px] leading-none mb-1 text-sun-amber">{stat.value}</span>
                  <span className="font-['Open_Sans'] text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</span>
                </div>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <a
                href="#interest-form"
                className="inline-flex items-center gap-2 bg-sun-amber text-charcoal font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-200 mb-4"
              >
                Get Notified →
              </a>
            </motion.div>

            <p className="font-['Open_Sans'] italic text-[12px]" style={{ color: "rgba(255,255,255,0.40)" }}>
              Expedition I · Fall 2027 · Virtual · Trail Box included
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Trail Box */}
      <section className="py-20 px-5 md:px-10 bg-near-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>THE EXPEDITION TRAIL BOX</div>
              <h2
                className="font-['Fraunces'] font-bold text-[38px] text-white mb-4"
                style={{ letterSpacing: "-0.8px" }}
              >
                Before the weekend begins, the box arrives.
              </h2>
              <p className="font-['Open_Sans'] text-[17px] max-w-[640px] mx-auto leading-[1.65]" style={{ color: "rgba(255,255,255,0.60)" }}>
                Every Expedition participant receives a collector's edition Trail Box — shipped before the event. It is not just gear. It is the start of the experience.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-[680px] mx-auto mb-10">
              <p className="font-['Open_Sans'] text-[17px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Each Trail Box is a collector's edition — branded, specific to that Expedition, and not available anywhere else. What's inside changes with every event. What doesn't change: the sealed Expedition Brief at the bottom of the box.
              </p>
              <p className="font-['Open_Sans'] text-[17px] leading-[1.7] mt-5" style={{ color: "rgba(255,255,255,0.65)" }}>
                Don't open it until the opening ceremony. Everyone opens it together. That's when the clock starts.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="max-w-[480px] mx-auto mb-10 text-center rounded-xl px-8 py-6"
              style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.25)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{ background: "rgba(255,255,255,0.08)" }}><Lock size={22} color="rgba(255,255,255,0.70)" /></div>
              <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-2">The Sealed Expedition Brief</h3>
              <p className="font-['Open_Sans'] text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.55)" }}>
                Inside: the nonprofit. The challenge. The constraints. Opens at the ceremony — and then the clock starts.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl p-6 max-w-[640px] mx-auto text-center"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{ background: "rgba(255,255,255,0.08)" }}><Smartphone size={22} color="rgba(255,255,255,0.70)" /></div>
              <p className="font-['Open_Sans'] text-[14px] leading-[1.65] mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                Trail Box unboxings happen the week before each Expedition. When yours arrives — share it. Tag us. The community opens their boxes together.
              </p>
              <p className="font-['Open_Sans'] font-semibold text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                #TTExpedition · @TransitionTrails
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section className="py-20 px-5 md:px-10 bg-off-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>THE EXPEDITION FORMAT</div>
              <h2 className="font-['Fraunces'] font-bold text-[38px] text-white">One weekend. Real work. Real outcome.</h2>
            </motion.div>

            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:flex gap-0 relative">
              <div className="absolute top-[32px] left-[10%] right-[10%] h-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              {STAGES.map((stage) => (
                <motion.div key={stage.n} variants={fadeUp} className="flex-1 flex flex-col items-center text-center px-3 relative">
                  <div
                    className="w-[64px] h-[64px] rounded-full flex items-center justify-center font-['Poppins'] font-bold text-[18px] mb-3 z-10 shrink-0"
                    style={{ background: stage.color, color: "#fff", boxShadow: `0 0 20px ${stage.color}40` }}
                  >
                    {stage.icon}
                  </div>
                  <span
                    className="font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-[1px] px-2 py-1 rounded mb-3"
                    style={{ background: `${stage.color}20`, color: stage.color }}
                  >
                    {stage.when}
                  </span>
                  <h3 className="font-['Poppins'] font-semibold text-[13px] text-white mb-2 leading-tight">{stage.title}</h3>
                  <p className="font-['Open_Sans'] text-[12px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.50)" }}>{stage.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile: vertical timeline */}
            <div className="lg:hidden relative">
              <div className="absolute left-[31px] top-6 bottom-6 w-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="space-y-8">
                {STAGES.map(stage => (
                  <motion.div key={stage.n} variants={fadeUp} className="flex gap-5">
                    <div
                      className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-[24px] shrink-0 z-10"
                      style={{ background: stage.color, boxShadow: `0 0 16px ${stage.color}40` }}
                    >
                      {stage.icon}
                    </div>
                    <div className="flex-1 pt-3">
                      <span
                        className="font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded mr-2"
                        style={{ background: `${stage.color}20`, color: stage.color }}
                      >
                        {stage.when}
                      </span>
                      <h3 className="font-['Poppins'] font-semibold text-[15px] text-white mt-2 mb-1">{stage.title}</h3>
                      <p className="font-['Open_Sans'] text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.55)" }}>{stage.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Who Participates */}
      <section className="py-20 px-5 md:px-10 bg-near-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>WHO IT IS FOR</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-white">Four ways to be part of The Expedition.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PARTICIPANTS.map(p => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div className="p-7 flex-1">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${p.accent}20` }}>{p.icon}</div>
                    <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-3">{p.title}</h3>
                    <p className="font-['Open_Sans'] text-[13px] leading-[1.65] mb-4" style={{ color: "rgba(255,255,255,0.60)" }}>{p.body}</p>
                    <span
                      className="inline-block font-['Open_Sans'] font-semibold text-[9px] uppercase tracking-[1px] px-2 py-1 rounded"
                      style={{ background: `${p.accent}20`, color: p.accent }}
                    >
                      {p.badge}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Sponsorship */}
      <section className="py-20 px-5 md:px-10 bg-off-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>SPONSORSHIP</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-white mb-4">Get in front of a community of practicing Salesforce professionals.</h2>
              <p className="font-['Open_Sans'] text-[16px] max-w-[680px] mx-auto leading-[1.65]" style={{ color: "rgba(255,255,255,0.60)" }}>
                The TT Expedition Series attracts Guided Trail graduates, Trail of Mastery learners, Explorer's Trail members, coaches, and the broader Salesforce nonprofit community — all watching a real solution get built in real time. Sponsor visibility extends from Trail Box to opening ceremony to closing presentation to social sharing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {SPONSOR_TIERS.map(tier => (
                <motion.div
                  key={tier.title}
                  variants={fadeUp}
                  className={`rounded-xl p-6 flex flex-col ${tier.borderClass}`}
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {tier.badge && (
                    <span
                      className={`font-['Open_Sans'] font-bold text-[9px] uppercase tracking-[1.5px] px-2 py-1 rounded self-start mb-3 ${tier.badge.textClass} ${tier.badge.bgClass}`}
                    >
                      {tier.badge.text}
                    </span>
                  )}
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-white mb-1">{tier.title}</h3>
                  <div className={`font-['Poppins'] font-bold text-[22px] mb-4 ${tier.amountClass}`}>
                    {tier.amount}
                  </div>
                  {tier.body && (
                    <p className="font-['Open_Sans'] text-[12px] leading-[1.65] mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{tier.body}</p>
                  )}
                  <ul className="space-y-1.5 flex-1">
                    {tier.items.map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.60)" }}>
                        <Check size={12} className={`shrink-0 mt-0.5 ${tier.checkClass}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="font-['Open_Sans'] italic text-[12px] text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
              The TT Expedition Series is a program of Transition Trails, a 501(c)(3) nonprofit. Sponsorships may be tax-deductible — consult your tax advisor. Grant funding opportunities available for workforce development and digital equity funders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Get Involved */}
      <section id="interest-form" className="py-20 px-5 md:px-10 bg-near-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>GET INVOLVED</div>
              <h2 className="font-['Fraunces'] font-bold text-[38px] text-white mb-3">Expedition I · Fall 2027</h2>
              <p className="font-['Open_Sans'] text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>We are building this. Be part of it from the beginning.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {CTA_CARDS.map(card => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="rounded-xl p-8 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.08)" }}>{card.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-3">{card.title}</h3>
                  <p className="font-['Open_Sans'] text-[14px] leading-[1.65] flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>{card.body}</p>
                  <a
                    href={card.href}
                    className={`mt-4 inline-flex items-center gap-2 font-['Open_Sans'] font-bold text-[13px] px-5 py-2.5 rounded-lg transition-colors duration-200 ${card.buttonClass}`}
                  >
                    {card.buttonLabel}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6 py-8">
              <p className="font-['Open_Sans'] text-[15px] text-white/70 leading-relaxed">Expedition I launches Fall 2027. Join the interest list and we will reach out when registration opens.</p>
              <a
                href="https://form.jotform.com/261877267351062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sun-amber text-charcoal font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-200"
              >
                Join the Interest List →
              </a>
              <p className="font-['Open_Sans'] text-[12px] text-white/40 italic">No commitment required. We will be in touch when registration opens.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
