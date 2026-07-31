import { motion } from "framer-motion";
import { Check, MonitorPlay, Users, Calendar } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function FoundationsTrail() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Foundations Trail | 12-Week Salesforce Build | Transition Trails"
        description="A 12-week guided Salesforce build program. Implement a complete org for a simulated nonprofit client. Portfolio-ready. Admin cert required. Starting at $997."
        path="/programs/foundations-trail"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-trail-green via-deep-teal to-teal-700 pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm" style={{ background: "rgba(127,175,198,0.15)", border: "1px solid rgba(127,175,198,0.4)", color: "var(--tt-teal-300)" }}>
              ENTRY TIER · EARN YOUR CERT · BUILD YOUR FIRST PROJECT
            </div>
            <h1 className="font-['Fraunces'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Foundations Trail.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-teal-300 mb-6">
              The certification is the door. The Foundations Trail is how you prove you can walk through it.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/80 leading-[1.6] mb-8">
              You have completed your Salesforce Platform Foundations certification and are working toward your Salesforce Certified Platform Administrator certification. The goal of Foundations Trail is to earn that certification. The capstone project is aligned to the 9 Salesforce Admin exam domains — working through it reinforces exactly what you need to know for the exam. Build With Me videos guide you through each build step so you develop both the practical skill and the exam confidence to pass.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: "rgba(127,175,198,0.15)", border: "1px solid rgba(127,175,198,0.4)" }}>
              <Check className="w-5 h-5 shrink-0" style={{ color: "var(--tt-teal-300)" }} />
              <span className="font-['Open_Sans'] text-sm font-semibold" style={{ color: "var(--tt-teal-300)" }}>Prerequisite: Salesforce Platform Foundations certification completed · Salesforce Certified Platform Administrator certification in progress</span>
            </div>
          </div>

          <div className="w-full md:w-[380px] bg-white rounded-2xl p-8 shadow-xl shrink-0">
            <div className="font-['Poppins'] font-bold text-[40px] text-charcoal mb-1">$997 <span className="text-[18px] font-medium text-slate">one-time</span></div>
            <div className="font-['Open_Sans'] text-[14px] text-slate mb-4">Or 3 × $367/mo ($1,101 total)</div>

            <div className="bg-muted-fill border border-warm-gray rounded-lg px-4 py-3 mb-5">
              <div className="font-['Open_Sans'] font-semibold text-[12px] text-muted-text mb-1">Scholarship — Coming Soon</div>
              <div className="font-['Open_Sans'] text-[12px] text-muted-text leading-[1.55]">Need-based scholarship funding is in development. Check back for updates or <a href="/contact" className="underline hover:text-slate">contact us</a> to learn more.</div>
            </div>

            <div className="h-px bg-warm-gray w-full mb-5" />

            <ul className="space-y-2 mb-6">
              {[
                "12 weeks · 3 Sprints × 4 weeks",
                "Build With Me videos + AI-assisted learning",
                "Weekly Office Hours included",
                "2 private coaching sessions",
                "Structured capstone project",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-deep-teal" />
                  <span className="font-['Open_Sans'] text-[13px] text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <CTAButton href={LINKS.waitlist} variant="dark" className="w-full" size="lg">
              Join the Waitlist
            </CTAButton>
            <p className="font-['Open_Sans'] text-[11px] text-cool-gray mt-3 text-center">Cohort 0 currently in testing · Waitlist opening October 1, 2026</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-trail-light py-20 px-5 border-b border-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-4">What's Included</h2>
              <p className="font-['Open_Sans'] text-[18px] text-slate max-w-2xl mx-auto">
                Everything you need to complete your first end-to-end Salesforce implementation in a safe environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-xl p-8 flex gap-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-100">
                  <MonitorPlay size={22} stroke="var(--tt-deep-teal)" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-2">Build With Me Videos</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">
                    Step-by-step guidance on how to implement each feature. Watch the architect do it, then replicate the pattern.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-xl p-8 flex gap-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-100">
                  <Users size={22} stroke="var(--tt-deep-teal)" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-2">Weekly Office Hours</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">
                    Live weekly sessions with Transition Trails architects to review work and ask questions.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-xl p-8 flex gap-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-100">
                  <Calendar size={22} stroke="var(--tt-deep-teal)" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-2">2 Private Coaching Sessions</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">
                    1-on-1 time to review your capstone build and ensure you're developing the right technical habits.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE CAPSTONE */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">THE CAPSTONE</motion.div>
              <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-6">The Structured Capstone Project</motion.h2>
              <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[16px] text-slate leading-[1.65] mb-6">
                You won't just be doing platform modules. You'll be building out a complete org through a structured capstone project aligned to the 9 Salesforce Admin exam domains — working through it reinforces exactly what you need to know for the exam.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-4 font-['Open_Sans'] text-[15px] text-slate">
                <motion.li variants={fadeUp} className="flex gap-3 items-start"><Check className="w-5 h-5 text-trail-green shrink-0 mt-0.5" /> <strong>Build WITH guidance:</strong> In Foundations Trail, Build With Me videos guide you through each build step — you develop both the practical skill and the exam confidence to pass.</motion.li>
                <motion.li variants={fadeUp} className="flex gap-3 items-start"><Check className="w-5 h-5 text-trail-green shrink-0 mt-0.5" /> <strong>End-to-end:</strong> From discovery documentation to security models, flows, and final dashboards.</motion.li>
                <motion.li variants={fadeUp} className="flex gap-3 items-start"><Check className="w-5 h-5 text-trail-green shrink-0 mt-0.5" /> <strong>Guided Trail is a different skill entirely:</strong> In Guided Trail, you stop building from scratch and start inheriting somebody else's org — undocumented, deliberately seeded with configuration debt, and yours to figure out. That is what most first jobs actually look like.</motion.li>
              </motion.ul>
            </div>

            <motion.div variants={fadeUp} className="w-full md:w-1/2 bg-trail-light rounded-2xl p-10 border border-warm-gray text-center">
              <h3 className="font-['Poppins'] font-bold text-[24px] text-charcoal mb-4">Ready to start building?</h3>
              <p className="font-['Open_Sans'] text-[15px] text-slate mb-8">
                Foundations Trail is self-paced but structured over 12 weeks. Enroll today and get immediate access to Week 1.
              </p>
              <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-trail-green hover:!bg-green-700">
                Join the Waitlist
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
