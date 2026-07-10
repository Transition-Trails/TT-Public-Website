import { motion } from "framer-motion";
import { CheckCircle, Clock, Telescope, Users, Award, TrendingUp, Globe } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const phases = [
  {
    badge: "COMPLETED",
    badgeColor: "bg-[#EBF3EE] text-[#2F6B3F]",
    accentColor: "#2F6B3F",
    icon: <CheckCircle size={22} stroke="#2F6B3F" />,
    iconBg: "bg-[#EBF3EE]",
    number: "Phase 1",
    title: "Foundation.",
    description: "Before we launched anything publicly, we built the base. Four founders, all working full-time Salesforce careers, spending nights, weekends, and early mornings figuring out what would actually work.",
    items: [
      "Testing began in 2022 with small groups — before any public program existed",
      "Developed Guided Trail and ran Cohort 0 in August 2025",
      "Built Foundations Trail from what Cohort 0 revealed",
      "Launched Digital Compass to create the real client experience pipeline",
      "Built the technology platform to deliver programs",
      "Began grant preparedness work to meet standard grant requirements",
    ],
  },
  {
    badge: "UPCOMING",
    badgeColor: "bg-[#E8F3F6] text-[#2F6F7E]",
    accentColor: "#2F6F7E",
    icon: <Clock size={22} stroke="#2F6F7E" />,
    iconBg: "bg-[#E8F3F6]",
    number: "Phase 2",
    title: "Execution.",
    description: "Programs launch. The team expands. The community grows. This is where everything we built gets tested against reality — and we keep improving.",
    items: [
      "Explorer's Trail community opens October 1, 2026",
      "Guided Trail Cohort 1 launches October 2026",
      "Foundations Trail Cohort 1 opens after October 1, 2026",
      "Trail of Mastery Cohort 0 testing begins Q4 2026",
      "Supervised project teams delivering for Digital Compass nonprofit partners",
      "Expand Board and diversify membership beyond founders",
      "Launch the Expedition — a twice-yearly event for the TT community",
      "Complete grant preparedness work",
    ],
  },
  {
    badge: "FUTURE",
    badgeColor: "bg-[#FEF3DB] text-[#7A4F00]",
    accentColor: "#F5A623",
    icon: <Telescope size={22} stroke="#D4890A" />,
    iconBg: "bg-[#FEF3DB]",
    number: "Phase 3",
    title: "Outcomes.",
    description: "We measure what matters. We share what we learn. And we keep building toward a Salesforce ecosystem where background is never the barrier to entry.",
    items: [
      "Obtain workforce development grants",
      "Continued improvement in job placement rates for Guided Trail graduates",
      "Transparently share results, learnings, and areas for improvement across all programs",
      "Scale Digital Compass nonprofit partnerships to deepen real project experience",
    ],
    metrics: [
      { icon: <Award size={18} stroke="#2F6B3F" />, label: "Scholarships awarded and dispersed" },
      { icon: <Globe size={18} stroke="#2F6F7E" />, label: "Nonprofit projects completed successfully" },
      { icon: <TrendingUp size={18} stroke="#2F6B3F" />, label: "Job placement rates post-completion" },
      { icon: <Users size={18} stroke="#2F6F7E" />, label: "Volunteer coach participation hours" },
    ],
  },
];

export default function Impact() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Vision & Impact Roadmap | Transition Trails"
        description="Transition Trails builds in phases and shares progress openly. See where we have been, where we are going, and what we will measure along the way."
        path="/impact"
      />

      {/* HERO */}
      <section className="bg-[#2A2E2C] py-24 px-8">
        <motion.div className="max-w-7xl mx-auto" initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={fadeUp} className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A623] mb-3">ABOUT · VISION</motion.p>
          <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(2.5rem,5vw,3.75rem)] text-white leading-tight mb-6 max-w-3xl">Vision &amp; Impact Roadmap.</motion.h1>
          <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[18px] text-white/75 leading-relaxed max-w-2xl">We build in phases — and we share our progress openly. Here is where we have been, where we are going, and what we will measure along the way.</motion.p>
        </motion.div>
      </section>

      {/* PHASE TIMELINE */}
      <section className="bg-[#FAFAF7] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-16">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
              >
                {/* LEFT — Phase content */}
                <div>
                  <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full ${phase.badgeColor}`}>{phase.badge}</span>
                  </motion.div>
                  <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[13px] font-semibold uppercase tracking-[0.12em] text-[#6B7280] mb-1">{phase.number}</motion.p>
                  <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#2A2E2C] leading-tight mb-4">{phase.title}</motion.h2>
                  <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[16px] text-[#6B7280] leading-relaxed mb-8 max-w-xl">{phase.description}</motion.p>
                  <motion.div variants={stagger} className="flex flex-col gap-3">
                    {phase.items.map(item => (
                      <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                        <CheckCircle size={16} stroke={phase.accentColor} className="flex-shrink-0 mt-0.5" />
                        <span className="font-['Open_Sans'] text-[14px] text-[#2A2E2C] leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* RIGHT — Side card */}
                <motion.div variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-2xl shadow-sm p-8" style={{ borderLeft: `4px solid ${phase.accentColor}` }}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${phase.iconBg}`}>{phase.icon}</div>
                  {phase.metrics ? (
                    <>
                      <p className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-5">What we will measure:</p>
                      <div className="flex flex-col gap-4">
                        {phase.metrics.map(m => (
                          <div key={m.label} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#EBF3EE] flex-shrink-0">{m.icon}</div>
                            <span className="font-['Open_Sans'] text-[13px] text-[#6B7280] leading-relaxed">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : i === 0 ? (
                    <>
                      <p className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-3">Where we started:</p>
                      <p className="font-['Open_Sans'] text-[14px] text-[#6B7280] leading-relaxed italic">"Four co-founders. Zero funding. A clear gap in the Salesforce ecosystem. We built anyway — because we knew it was needed."</p>
                      <div className="mt-6 pt-6 border-t border-[#E2E4E1] flex flex-col gap-2">
                        <div className="flex items-center gap-2"><CheckCircle size={14} stroke="#2F6B3F" /><span className="font-['Open_Sans'] text-[12px] text-[#6B7280]">501(c)(3) certified · EIN 88-2746412</span></div>
                        <div className="flex items-center gap-2"><CheckCircle size={14} stroke="#2F6B3F" /><span className="font-['Open_Sans'] text-[12px] text-[#6B7280]">Founded 2020 · Effective May 15, 2022</span></div>
                        <div className="flex items-center gap-2"><CheckCircle size={14} stroke="#2F6B3F" /><span className="font-['Open_Sans'] text-[12px] text-[#6B7280]">Guided Trail Cohort 0 completed August 2025</span></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-3">What this means:</p>
                      <p className="font-['Open_Sans'] text-[14px] text-[#6B7280] leading-relaxed">"Learners will be matched with nonprofits, mentorship begins, and the real work starts. Every cohort that completes adds to the evidence that this model works."</p>
                      <div className="mt-6 pt-6 border-t border-[#E2E4E1]">
                        <p className="font-['Open_Sans'] text-[12px] text-[#6B7280]">Programs launching October 2026 and beyond.</p>
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="bg-white py-16 px-8 border-t border-[#E2E4E1]">
        <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-['Open_Sans'] text-[15px] text-[#6B7280] italic leading-relaxed">Stories and detailed impact metrics will be published here as Cohort 1 launches and completes its journey.</p>
        </motion.div>
      </section>
    </div>
  );
}
