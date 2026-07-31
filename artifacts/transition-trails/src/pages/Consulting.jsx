import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";
import { Search, Settings, Wrench, Building2, Briefcase, Rocket, Check } from "lucide-react";

const SERVICES = [
  {
    accent: "var(--tt-trail-green)",
    badge: "START HERE · FREE",
    icon: <Search size={22} color="var(--tt-trail-green)" />,
    title: "Free Org Assessment",
    tagline: "You know your system could do more. We help you see exactly where to start.",
    problem: "You know your Salesforce org could be doing more — but you do not know where the gaps are, what to prioritize, or what it would take to fix.",
    process: "We spend up to 1 hour reviewing your current environment — security settings, data structure, automation, and how your team is actually using the platform.",
    outcome: "You receive a Strategic Discovery Summary — a document you can use to justify budget, guide your next internal project, or make an informed decision about a consulting engagement.",
    cta: "Get Your Free Assessment →",
    ctaHref: "#assessment",
    sub: "No commitment. No pitch. Just clarity.",
  },
  {
    accent: "var(--tt-deep-teal)",
    badge: "RETAINER · ONGOING",
    icon: <Settings size={22} color="var(--tt-deep-teal)" />,
    title: "Salesforce Administration Support",
    tagline: "Your team should focus on the mission — not the software.",
    problem: "Your team is too busy to manage updates, user permissions, data quality, and report building. Things are falling through the cracks and your Salesforce org is not keeping up with your organization.",
    process: "We act as your Admin on Call — handling the day-to-day technical work that keeps your Salesforce org running cleanly and efficiently. Monthly health checks, workflow automation, data maintenance, user support, and proactive recommendations.",
    outcome: "A Salesforce environment your team actually uses — clean data, automated workflows, high user adoption, and a system that works the way your organization works. Your staff focuses on the mission, not the software.",
    cta: "Contact Us →",
    ctaHref: "mailto:hello@transitiontrails.org?subject=Salesforce%20Administration%20Support%20Inquiry",
    sub: "Pricing based on org size and scope — contact us to discuss.",
  },
  {
    accent: "var(--tt-green-700)",
    badge: "PROJECT-BASED",
    icon: <Wrench size={22} color="var(--tt-green-700)" />,
    title: "Solution Design",
    tagline: "Build it right the first time.",
    problem: "You are outgrowing your current tools, facing a complex implementation, or need specific functionality built from scratch. You need someone who can think architecturally — not just configure what you ask for.",
    process: "We lead a deep-dive design phase using the RESOLVE methodology — mapping your business processes to Salesforce features, identifying the right tools and integrations, documenting constraints and trade-offs, and delivering a blueprint before a single field is created.",
    outcome: "A solution blueprint that ensures your technology scales with you — not against you. Clear architecture, documented decisions, and a build plan your internal team or an implementation partner can execute with confidence.",
    cta: "Contact Us →",
    ctaHref: "mailto:hello@transitiontrails.org?subject=Solution%20Design%20Inquiry",
    sub: "Project-based pricing — contact us to scope your engagement.",
  },
];

const RESOLVE_PHASES = [
  { letter: "R", name: "Recognize" },
  { letter: "E", name: "Explore" },
  { letter: "S", name: "Select" },
  { letter: "O", name: "Outline" },
  { letter: "L", name: "Launch" },
  { letter: "V", name: "Verify" },
  { letter: "E", name: "Evolve" },
];

const CONSULTANTS = [
  {
    key: "AL",
    accent: "var(--tt-trail-green)",
    initials: "AL",
    name: "Angela Landrith",
    title: "Co-Founder & CEO",
    specialties: "CRM Business Strategy · Change Management · Platform Adoption · AI Adoption and Usage · Requirements and Process Mapping · Vision and Roadmapping",
    bestFor: "Enterprise-scale thinking applied to nonprofit and SMB context. Strategic planning, platform adoption, and organizational change management.",
  },
  {
    key: "KB",
    accent: "var(--tt-deep-teal)",
    initials: "KB",
    name: "Kim Barnes",
    title: "Co-Founder & COO",
    specialties: "Salesforce Solution Design · Salesforce Architecture · Business Analysis · Nonprofit Technology · System Integration · Salesforce Troubleshooting",
    bestFor: "Solution design, org assessments, nonprofit Salesforce implementation, and technical architecture for complex requirements.",
  },
  {
    key: "HR",
    accent: "var(--tt-green-700)",
    initials: "HR",
    name: "Hugh Richardson",
    title: "Co-Founder & CTO",
    specialties: "Solution Design · Requirements and Process Mapping · Security and Sharing · Architectural Best Practices · AI Integration · Troubleshooting",
    bestFor: "Complex requirements mapping, security architecture, technical troubleshooting, and implementation oversight.",
  },
];

const ASSESSMENT_COVERS = [
  "Current org configuration and health",
  "Security settings and sharing model review",
  "Data structure and quality assessment",
  "Automation and workflow evaluation",
  "How your team is actually using the platform",
  "Prioritized recommendations for improvement",
  "Strategic Discovery Summary document delivered after",
];

export default function Consulting() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Salesforce Consulting | Transition Trails | Nonprofits and Small Business"
        description="Project-based and retainer Salesforce consulting for nonprofits and small-to-midsize businesses. Free org assessment included. Led by TT founders using the RESOLVE methodology. Dallas TX."
        path="/consulting"
      />

      {/* HERO */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, var(--tt-teal-700) 0%, var(--tt-deep-teal) 55%, var(--tt-green-700) 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
            <span>/</span>
            <span className="text-white/80">Consulting</span>
          </div>

          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            <div className="flex-1 max-w-[700px]">
              <motion.div
                variants={fadeUp}
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
                style={{ color: "var(--tt-sun-amber)", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
              >
                SALESFORCE CONSULTING  ·  NONPROFITS AND SMALL BUSINESS  ·  RESOLVE METHODOLOGY
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Fraunces'] font-bold text-[52px] text-white leading-[1.1] mb-5"
                style={{ letterSpacing: "-1.5px" }}
              >
                Empowering your mission with expert Salesforce strategy.
              </motion.h1>

              <motion.p variants={fadeUp} className="font-['Fraunces'] font-normal text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
                Project-based and retainer Salesforce consulting — delivered by practitioners who have done this work for real organizations.
              </motion.p>

              <motion.div variants={fadeUp} className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4 mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
                <p>Transition Trails provides Salesforce consulting services for nonprofits and small-to-midsize businesses that need expert guidance on implementation, architecture, or ongoing administration — without the overhead of a large consulting firm.</p>
                <p>Every engagement is led by TT founders and delivered using the RESOLVE methodology — the same professional delivery framework we teach in every TT program.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#assessment"
                  className="h-[52px] px-7 rounded-[8px] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                  style={{ background: "var(--tt-sun-amber)", color: "var(--tt-charcoal)" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--tt-amber-700)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--tt-sun-amber)"}
                >
                  Get a Free Assessment →
                </a>
                <a
                  href="#services"
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white hover:bg-white/10 font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  See our services ↓
                </a>
              </motion.div>
            </div>

            <motion.div variants={stagger} className="flex flex-row xl:flex-col gap-4 w-full xl:w-[240px]">
              {[
                { value: "Free", label: "Org Assessment — Strategic Discovery Summary included", color: "var(--tt-trail-green)" },
                { value: "RESOLVE", label: "Governs every engagement", color: "var(--tt-deep-teal)" },
                { value: "Market rates", label: "Nonprofit discount available — ask us", color: "var(--tt-teal-300)" },
              ].map(s => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="flex-1 xl:flex-none rounded-xl p-6"
                  style={{ background: "rgba(255,255,255,0.08)", borderTop: `4px solid ${s.color}`, border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="font-['Poppins'] font-bold text-[24px] text-white mb-1">{s.value}</div>
                  <div className="font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.60)" }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">WHO WE WORK WITH</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-charcoal">Built for organizations that need real Salesforce expertise — not a generic consultant.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="bg-white border-[1.5px] border-warm-gray rounded-2xl overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Building2 size={24} color="var(--tt-trail-green)" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Nonprofits</h3>
                  <div className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] space-y-4 mb-5 flex-1">
                    <p>Mission-driven organizations that need Salesforce to work better — whether you are starting from scratch, cleaning up a messy org, or designing a solution for a complex program.</p>
                    <p>TT consulting is distinct from Digital Compass membership. Digital Compass is an ongoing community membership for nonprofits who want consistent, accessible support. Consulting is for organizations with a specific project, implementation, or architectural challenge that needs dedicated expert attention.</p>
                    <p>Not sure which is right for you? Start with a free assessment and we will point you in the right direction.</p>
                  </div>
                  <Link href="/programs/digital-compass" className="font-['Open_Sans'] font-semibold text-[13px] hover:underline" style={{ color: "var(--tt-trail-green)" }}>
                    Learn about Digital Compass →
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border-[1.5px] border-warm-gray rounded-2xl overflow-hidden flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                    <Briefcase size={24} color="var(--tt-deep-teal)" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Small to Midsize Businesses</h3>
                  <div className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] space-y-4">
                    <p>Growing businesses that have outgrown their current Salesforce setup — or are implementing Salesforce for the first time — and need an experienced consulting partner who understands how to build solutions that scale with the organization.</p>
                    <p>TT brings the same RESOLVE methodology and professional delivery standards to business clients as we do to nonprofit partners. The process is the same. The outcome is the same. A Salesforce environment that works the way your team needs it to.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE SERVICES */}
      <section id="services" className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">OUR SERVICES</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-charcoal mb-4">Three ways we help.</h2>
              <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
                Every engagement starts with a free org assessment. From there, we recommend the right service based on what your organization actually needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {SERVICES.map(svc => (
                <motion.div
                  key={svc.title}
                  variants={fadeUp}
                  className="bg-white border-[1.5px] border-warm-gray rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <span
                      className="inline-block font-['Open_Sans'] font-bold text-[11px] tracking-[1px] uppercase mb-4"
                      style={{ color: svc.accent }}
                    >
                      {svc.badge}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: svc.accent + "20" }}
                    >
                      {svc.icon}
                    </div>
                    <h3 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-2">{svc.title}</h3>
                    <p className="font-['Open_Sans'] font-semibold text-[14px] mb-5" style={{ color: svc.accent }}>{svc.tagline}</p>

                    <div className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65] space-y-3 mb-6 flex-1">
                      <p><span className="font-bold text-charcoal">The Problem: </span>{svc.problem}</p>
                      <p><span className="font-bold text-charcoal">The Process: </span>{svc.process}</p>
                      <p><span className="font-bold text-charcoal">The Outcome: </span>{svc.outcome}</p>
                    </div>

                    <a
                      href={svc.ctaHref}
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 text-white font-['Open_Sans'] font-bold text-[14px] px-6 py-3 rounded-lg transition-colors duration-200"
                      style={{ backgroundColor: svc.accent }}
                    >
                      {svc.cta}
                    </a>
                    <p className="text-center font-['Open_Sans'] italic text-[12px] mt-3 text-muted-text">{svc.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-center font-['Open_Sans'] italic text-[13px] text-slate">
              Prepackaged solutions with defined scope and pricing are coming. Contact us for current availability and to discuss your specific needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* RESOLVE METHODOLOGY */}
      <section className="bg-charcoal py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>OUR METHODOLOGY</motion.div>
              <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[34px] text-white mb-8">Every engagement is governed by RESOLVE.</motion.h2>
              <motion.div variants={stagger} className="font-['Open_Sans'] text-[16px] leading-[1.65] max-w-[560px] space-y-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                <motion.p variants={fadeUp}>RESOLVE is TT's proprietary delivery methodology — developed and proven across years of real work in change management, software development, and Salesforce implementation. Every consulting engagement we take on follows the same seven-phase framework.</motion.p>
                <motion.p variants={fadeUp}>This means you always know what phase you are in, what is being decided, and what comes next. No ambiguity. No scope creep without documentation. No surprises at go-live.</motion.p>
                <motion.p variants={fadeUp}>The same methodology we teach in every TT program is the one we use when we work with your organization. That consistency is deliberate — and it is what makes our work defensible, scalable, and repeatable.</motion.p>
              </motion.div>
            </div>

            <div>
              <motion.p variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase mb-6" style={{ color: "rgba(255,255,255,0.40)" }}>THE SEVEN PHASES</motion.p>
              <motion.div variants={stagger} className="space-y-4 mb-8">
                {RESOLVE_PHASES.map(phase => (
                  <motion.div key={phase.name} variants={fadeUp} className="flex items-center gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "var(--tt-deep-teal)" }}
                    >
                      <span className="font-['Poppins'] font-bold text-white text-[14px]">{phase.letter}</span>
                    </div>
                    <span className="font-['Poppins'] font-bold text-[20px] text-white">{phase.name}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="font-['Open_Sans'] italic text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Proprietary. Applied in every TT consulting engagement.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONSULTING TEAM */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">WHO DELIVERS IT</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-charcoal mb-4">Led by practitioners. Not account managers.</h2>
              <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
                TT consulting engagements are led by TT founders — people who have delivered real Salesforce solutions for real organizations, not consultants who manage projects from a distance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {CONSULTANTS.map(c => (
                <motion.div
                  key={c.key}
                  variants={fadeUp}
                  className="bg-white rounded-xl overflow-hidden flex flex-col"
                  style={{ border: "1px solid var(--tt-warm-gray)" }}
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ background: c.accent }}
                    >
                      <span className="font-['Poppins'] font-bold text-white text-lg">{c.initials}</span>
                    </div>
                    <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-1">{c.name}</h3>
                    <p className="font-['Open_Sans'] font-semibold text-[13px] mb-4" style={{ color: c.accent }}>{c.title}</p>
                    <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65] mb-4">{c.specialties}</p>
                    <div className="mt-auto">
                      <p className="font-['Open_Sans'] font-bold text-[11px] mb-1.5" style={{ color: c.accent, letterSpacing: "1px" }}>BEST FOR</p>
                      <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.6]">{c.bestFor}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl p-7 md:p-8 flex flex-col md:flex-row gap-5"
              style={{ background: "var(--tt-green-100)" }}
            >
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                <Rocket size={22} color="var(--tt-trail-green)" />
              </div>
              <div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] mb-3" style={{ color: "var(--tt-green-700)" }}>Building our consulting team.</h3>
                <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] mb-3">
                  Our consulting practice is led by TT founders today. As our practice grows, we will be hiring associate consultants directly from our program graduates — creating a direct pathway from TT program completion to professional Salesforce consulting work. This is one of the ways TT connects program outcomes to real career placement.
                </p>
                <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] mb-4">
                  Interested in becoming an associate consultant? Complete the Guided Trail or Trail of Mastery — then watch for opportunities as our consulting practice expands.
                </p>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-trail-green text-white font-['Open_Sans'] font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Learn about TT programs →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FREE ASSESSMENT CTA */}
      <section id="assessment" className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">GET STARTED</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-charcoal mb-5">Start with a free assessment.</h2>
              <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[680px] mx-auto leading-[1.65]">
                Not sure where to begin or which service is right for your organization? Start here. A free assessment (up to 1 hour) gives you a clear picture of where your Salesforce org stands and what would actually help.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl"
              style={{ border: "1px solid var(--tt-warm-gray)", padding: "40px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[17px] text-charcoal mb-4">What the free assessment covers:</h3>
                  <ul className="space-y-2.5 mb-5">
                    {ASSESSMENT_COVERS.map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-slate">
                        <Check size={16} color="var(--tt-trail-green)" className="shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-['Open_Sans'] font-semibold text-[13px] text-charcoal">Up to 1 hour · Delivered within 3 business days</p>
                </div>

                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[17px] text-charcoal mb-4">Request your assessment:</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65] mb-6">
                    Tell us a little about your organization and your Salesforce situation. We will schedule a session (up to 1 hour) and deliver your Strategic Discovery Summary within 3 business days.
                  </p>
                  <Link
                    href="/nonprofit-assessment"
                    className="w-full inline-flex items-center justify-center gap-2 bg-trail-green text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Book a Free Assessment →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
