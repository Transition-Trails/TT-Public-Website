import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";

const PROGRAM_PILLS = [
  { name: "Explorer's Trail", tier: "Awareness", color: "#7FAFC6", bg: "#E8F4F8" },
  { name: "Foundations Trail", tier: "Entry", color: "#2F6B3F", bg: "#E6F3EA" },
  { name: "Guided Trail", tier: "Bridge", color: "#1E4A2A", bg: "#E6F3EA" },
  { name: "Trail of Mastery", tier: "Advancement", color: "#2F6F7E", bg: "#E0F0F3" },
];

export default function Waitlist() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Join the Waitlist | Transition Trails"
        description="Reserve your spot in a Transition Trails program. All five programs are building their first cohorts. One form. All trails."
        path="/waitlist"
      />

      {/* HERO */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{
          background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 55%, #2F6F7E 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
                JOIN THE TRAIL
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.1] mb-6">
              Reserve your spot.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-['Open_Sans'] text-[18px] leading-[1.6] mb-10 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              All five programs are currently building their first cohorts. Join the waitlist and
              we'll reach out when your program is ready to launch. One form. All trails.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
              {PROGRAM_PILLS.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-['Open_Sans'] text-[13px] font-semibold"
                  style={{ backgroundColor: p.bg, color: p.color }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[1px] font-bold opacity-70"
                    style={{ color: p.color }}
                  >
                    {p.tier}
                  </span>
                  <span>·</span>
                  <span>{p.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="max-w-[640px] mx-auto rounded-[8px] px-7 py-5 text-left"
              style={{ backgroundColor: "#FEF3DB", border: "1px solid #F5A623" }}
            >
              <p className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">
                Programs launching October 1, 2026
              </p>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                Explorer's Trail opens October 1. Guided Trail Cohort 1 waitlist is now open — 8 to 12 seats, application required. Foundations Trail opens after October 1. Trail of Mastery interest list is open for Cohort 0 in Q2 2027.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Waitlist CTA */}
      <section className="bg-white py-[60px] px-5">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6 py-12"
        >
          <p className="font-['Open_Sans'] text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2F6B3F]">PROGRAM WAITLIST</p>
          <p className="font-['Open_Sans'] text-[15px] text-[#6B7280] leading-relaxed max-w-xl">Join the waitlist for any Transition Trails program. Share your details and a member of the TT team will be in touch when enrollment opens.</p>
          <a
            href="https://form.jotform.com/261684070494058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2F6B3F] text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-[#1E4A2A] transition-colors duration-200"
          >
            Join the Waitlist →
          </a>
          <p className="font-['Open_Sans'] text-[12px] text-[#6B7280] italic">
            Your information is kept private and never shared.{" "}
            <Link href="/privacy-policy" className="text-[#2F6B3F] hover:underline">Privacy Policy</Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
