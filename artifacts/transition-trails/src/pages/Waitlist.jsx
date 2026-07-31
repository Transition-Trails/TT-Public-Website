import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";

const PROGRAM_PILLS = [
  { name: "Explorer's Trail", tier: "Awareness", color: "var(--tt-teal-300)", bg: "var(--tt-teal-100)" },
  { name: "Foundations Trail", tier: "Entry", color: "var(--tt-trail-green)", bg: "var(--tt-green-100)" },
  { name: "Guided Trail", tier: "Bridge", color: "var(--tt-green-700)", bg: "var(--tt-green-100)" },
  { name: "Trail of Mastery", tier: "Advancement", color: "var(--tt-deep-teal)", bg: "var(--tt-teal-100)" },
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
          background: "linear-gradient(135deg, var(--tt-green-700) 0%, var(--tt-trail-green) 55%, var(--tt-deep-teal) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="inline-block bg-sun-amber/20 border border-sun-amber/30 text-sun-amber font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
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
              style={{ backgroundColor: "var(--tt-amber-100)", border: "1px solid var(--tt-sun-amber)" }}
            >
              <p className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-1">
                Programs launching October 1, 2026
              </p>
              <p className="font-['Open_Sans'] text-[13px] text-slate">
                Explorer's Trail opens October 1. Guided Trail Cohort 1 waitlist is now open — two squads running concurrently, 2, 4 or 6 learners each (always even, because learners test each other's work in pairs). Application required. Foundations Trail is in Cohort 0 testing now — join the list and we will let you know as soon as dates are set. Trail of Mastery interest list is open for Cohort 0 in 2027.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ALTERNATES */}
      <section className="bg-trail-light py-[60px] px-5 border-t border-warm-gray">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <p className="font-['Open_Sans'] text-[13px] font-semibold uppercase tracking-[0.12em] text-trail-green mb-4">ABOUT ALTERNATES — GUIDED TRAIL</p>
          <h2 className="font-['Poppins'] font-bold text-[28px] text-charcoal tracking-[-0.5px] leading-[1.2] mb-4">
            If you're an alternate, you'll know it.
          </h2>
          <p className="font-['Open_Sans'] text-[15px] text-slate leading-[1.7] mb-8">
            Each Guided Trail cohort runs two squads concurrently, and squad size is capped to match available client work. That means some applicants who are a strong fit may not receive a squad seat right away — they become named alternates for Cohort 1. We do not leave people on an undifferentiated list wondering. If you are an alternate, we will tell you plainly.
          </p>
          <div className="space-y-4">
            {[
              {
                heading: "Your Explorer's Trail membership starts immediately",
                body: "As an alternate, you receive full Explorer's Trail membership at no cost for the full duration of Cohort 1 — so you are building real skills and staying connected to the community from day one, not sitting idle waiting for a seat.",
              },
              {
                heading: "A seat can open through the end of Week 1",
                body: "If any squad seat opens before the end of Week 1, it is yours. You are the first call — no re-application, no waiting in line.",
              },
              {
                heading: "Cohort 2 is guaranteed",
                body: "If no seat opens, you have a confirmed place in Cohort 2 with no reapplication required. You do not go back to the beginning of the process.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="flex gap-4 p-5 bg-white rounded-xl border border-warm-gray">
                <div className="w-1.5 h-1.5 rounded-full bg-trail-green mt-2 shrink-0" />
                <div>
                  <strong className="block font-['Poppins'] text-[16px] text-charcoal mb-1">{heading}</strong>
                  <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
          <p className="font-['Open_Sans'] text-[13px] font-semibold uppercase tracking-[0.12em] text-trail-green">PROGRAM WAITLIST</p>
          <p className="font-['Open_Sans'] text-[15px] text-cool-gray leading-relaxed max-w-xl">Join the waitlist for any Transition Trails program. Share your details and a member of the TT team will be in touch when enrollment opens.</p>
          <a
            href="https://form.jotform.com/261684070494058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-trail-green text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Join the Waitlist →
          </a>
          <p className="font-['Open_Sans'] text-[12px] text-cool-gray italic">
            Your information is kept private and never shared.{" "}
            <Link href="/privacy-policy" className="text-trail-green hover:underline">Privacy Policy</Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
