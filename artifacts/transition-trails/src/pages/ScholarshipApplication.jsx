import { Link } from "wouter";
import { Shield, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const fadeUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ScholarshipApplication() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Trail Forward Scholarship | Transition Trails"
        description="The Trail Forward Scholarship is a fully funded seat in the Guided Trail program — one award per cohort, zero cost to the recipient."
        path="/scholarship-application"
      />

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 px-5 md:px-10 bg-[#1E4A2A]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#F5A623] mb-6">
            The Trail Forward Scholarship
          </div>
          <h1 className="font-['Fraunces'] font-bold text-[48px] md:text-[56px] text-white leading-[1.1] mb-6">
            Every career deserves a chance.
          </h1>
          <p className="font-['Open_Sans'] text-[18px] text-white/75 leading-[1.7] max-w-[680px] mx-auto mb-10">
            Financial barriers should never be the reason a qualified career changer can't get the real-world experience they need. The Trail Forward Scholarship exists to make sure they aren't.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["$0 cost to recipient", "1 seat per cohort", "Guided Trail only"].map((pill) => (
              <span key={pill} className="inline-block bg-white/10 border border-white/20 text-white/90 font-['Open_Sans'] font-semibold text-[13px] px-4 py-2 rounded-full">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-6">
              What is the Trail Forward Scholarship?
            </h2>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.75] mb-8">
              The Trail Forward Scholarship is a fully funded seat in the Guided Trail program — Transition Trails' flagship 12-week employment practicum. One scholarship seat is available per cohort. There is no cost to the recipient. Transition Trails covers the full program fee, funded through donor contributions and workforce development grants.
            </p>
            <div className="bg-[#E6F3EA] border border-[#2F6B3F]/30 rounded-xl px-7 py-6">
              <p className="font-['Open_Sans'] font-semibold text-[15px] text-[#1E4A2A] leading-[1.65]">
                This is not a discount. This is a fully funded seat. The scholarship recipient pays nothing — Transition Trails absorbs the full cost of the program, coaching, and curriculum.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY IT EXISTS ── */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-6">
              Why does this scholarship exist?
            </h2>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.75] mb-5">
              The Guided Trail exists to close the experience gap — the wall between Salesforce certification and Salesforce employment. Certified career changers are qualified. They are ready. They simply cannot get hired without project experience, and they cannot get project experience without getting hired first.
            </p>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.75]">
              The Trail Forward Scholarship breaks that cycle for one learner per cohort — prioritizing those who face the steepest barriers to entering the technology sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO IS ELIGIBLE ── */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-2">
              Who is eligible?
            </h2>
          </motion.div>

          {/* Required for all */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-[#E2E4E1] rounded-xl p-7 mb-8 shadow-sm">
            <div className="font-['Poppins'] font-bold text-[16px] text-[#2A2E2C] mb-1">Required for all applicants</div>
            <div className="font-['Open_Sans'] text-[14px] text-[#6B7280] mb-5">You must meet ALL of the following:</div>
            <ul className="flex flex-col gap-4">
              {[
                "You have earned your Salesforce Platform Administrator certification",
                "You are not currently employed in a Salesforce role",
                "You are on the Guided Trail waitlist for Cohort 1",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#E6F3EA] flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#2F6B3F]" fill="none" viewBox="0 0 12 10" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 5l3.5 3.5L11 1" />
                    </svg>
                  </span>
                  <span className="font-['Open_Sans'] text-[15px] text-[#2A2E2C] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Plus at least one */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
            <div className="font-['Poppins'] font-bold text-[16px] text-[#2A2E2C] mb-1">Plus at least one of the following</div>
            <div className="font-['Open_Sans'] text-[14px] text-[#6B7280] mb-6">AND you must belong to at least one of these groups:</div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={fadeUpChild} className="bg-white border border-[#E2E4E1] rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EA] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#2F6B3F]" />
              </div>
              <div className="font-['Poppins'] font-bold text-[15px] text-[#2A2E2C] mb-2">Military Community</div>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6]">
                Active duty transitioning service members, veterans, and military spouses.
              </p>
            </motion.div>

            <motion.div variants={fadeUpChild} className="bg-white border border-[#E2E4E1] rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EA] flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#2F6B3F]" />
              </div>
              <div className="font-['Poppins'] font-bold text-[15px] text-[#2A2E2C] mb-2">Underrepresented in Technology</div>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6]">
                Women, non-binary individuals, and members of racial or ethnic groups underrepresented in the technology sector. Diversity of background brings diversity of perspective — and technology is stronger for it.
              </p>
            </motion.div>

            <motion.div variants={fadeUpChild} className="bg-white border border-[#E2E4E1] rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EA] flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-[#2F6B3F]" />
              </div>
              <div className="font-['Poppins'] font-bold text-[15px] text-[#2A2E2C] mb-2">Economic Barriers</div>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6]">
                Individuals facing documented economic barriers to technology career entry.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW TO APPLY ── */}
      <section className="bg-white py-20 px-5 md:px-10 border-t border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C]">
              How to apply
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                n: "1",
                heading: "Join the Guided Trail waitlist",
                body: "Make sure you are on the waitlist for Cohort 1 before applying for the scholarship.",
              },
              {
                n: "2",
                heading: "Complete your scholarship application",
                body: "Tell us about your Salesforce journey, your eligibility, and why this scholarship would make a difference for you.",
              },
              {
                n: "3",
                heading: "We will be in touch",
                body: "Applications are reviewed on a rolling basis. We will contact you within two weeks to schedule a conversation.",
              },
            ].map((step) => (
              <motion.div key={step.n} variants={fadeUpChild} className="bg-[#FAFAF7] border border-[#E2E4E1] rounded-xl p-6">
                <div className="w-9 h-9 rounded-full bg-[#2F6B3F] flex items-center justify-center mb-4">
                  <span className="font-['Poppins'] font-bold text-[14px] text-white">{step.n}</span>
                </div>
                <div className="font-['Poppins'] font-bold text-[15px] text-[#2A2E2C] mb-2">{step.heading}</div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6]">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── HOW IT IS FUNDED ── */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-t border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-6">
              How is the scholarship funded?
            </h2>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.75] mb-5">
              The Trail Forward Scholarship is funded through individual donor contributions and workforce development grants. Every scholarship seat costs Transition Trails approximately $1,547 — the full cost of program delivery, coaching, and curriculum for one learner.
            </p>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.75] mb-8">
              If you believe in removing barriers to technology careers, you can help fund the next scholarship seat.
            </p>
            <Link href="/donate"
              className="inline-flex items-center justify-center h-[48px] px-7 rounded-[8px] border-2 border-[#2F6B3F] text-[#2F6B3F] font-['Poppins'] font-bold text-[14px] hover:bg-[#2F6B3F] hover:text-white transition-colors">
              Fund a Scholarship Seat
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
