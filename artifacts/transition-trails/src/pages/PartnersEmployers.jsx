import { motion } from "framer-motion";
import { UserCheck, Award, TrendingUp, GraduationCap, Shield, Globe, Check } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function PartnersEmployers() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Employer Partnerships | Transition Trails | Salesforce Workforce Training"
        description="Hire graduates, sponsor a scholarship, or upskill your team with Trail of Mastery. Transition Trails employer partnerships are workforce development eligible."
        path="/partners/employers"
      />

      {/* HERO */}
      <section className="bg-gradient-teal-simple py-24 px-8">
        <motion.div className="max-w-7xl mx-auto" initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={fadeUp} className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.15em] text-sun-amber mb-3">FOR EMPLOYERS</motion.p>
          <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(2.5rem,5vw,3.75rem)] text-white leading-tight mb-6 max-w-3xl">Invest in your Salesforce team.</motion.h1>
          <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[18px] text-white/75 leading-relaxed max-w-2xl mb-10">Whether you need to hire certified talent, upskill your existing team, or sponsor a learner through our programs, Transition Trails is built for employer partnerships.</motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4">
              <p className="font-['Poppins'] font-bold text-white text-lg">3 partnership models</p>
              <p className="font-['Open_Sans'] text-white/60 text-sm">Hire · Sponsor · Upskill</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4">
              <p className="font-['Poppins'] font-bold text-white text-lg">Workforce development eligible</p>
              <p className="font-['Open_Sans'] text-white/60 text-sm">Grant-aligned program design</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* THREE WAYS TO PARTNER */}
      <section className="bg-trail-light py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.15em] text-deep-teal mb-3">PARTNERSHIP MODELS</motion.p>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] text-charcoal leading-tight mb-12">Three ways to work with us.</motion.h2>
            <motion.div variants={stagger} className="flex flex-col gap-5">

              {/* Card 1 — Hire */}
              <motion.div variants={fadeUp} className="bg-white border-l-4 border-deep-teal border border-warm-gray rounded-2xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-[56px_1fr] gap-6 items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-teal-100 flex-shrink-0"><UserCheck size={22} stroke="var(--tt-deep-teal)" /></div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-charcoal mb-3">Hire Guided Trail graduates.</h3>
                  <p className="font-['Open_Sans'] text-[15px] text-cool-gray leading-relaxed mb-4">Guided Trail graduates hold the Salesforce Certified Platform Administrator certification, have completed real nonprofit project work, and carry a documented portfolio. Skip the resume lottery — hire professionals who have already proven they can deliver in a Salesforce environment.</p>
                  <div className="flex flex-col gap-2">
                    {["Salesforce Certified Platform Administrator", "Supervised nonprofit project delivery — sandbox-based", "Documented portfolio of deliverables", "Coaching-supported throughout the program"].map(f => (
                      <div key={f} className="flex items-center gap-2"><Check size={14} stroke="var(--tt-trail-green)" /><span className="font-['Open_Sans'] text-[13px] text-charcoal">{f}</span></div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2 — Sponsor */}
              <motion.div variants={fadeUp} className="bg-white border-l-4 border-trail-green border border-warm-gray rounded-2xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-[56px_1fr] gap-6 items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 flex-shrink-0"><Award size={22} stroke="var(--tt-trail-green)" /></div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-charcoal mb-3">Sponsor a Trail Forward Scholarship.</h3>
                  <p className="font-['Open_Sans'] text-[15px] text-cool-gray leading-relaxed mb-4">Fund a fully supported seat in Guided Trail for a candidate you believe in — or open the opportunity to our scholarship selection process. One sponsored seat per cohort. $1,497 covers full tuition, coaching, and program access. This is workforce development at its most direct.</p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="bg-green-100 text-trail-green text-[11px] font-semibold px-3 py-1 rounded-full">Tax-deductible</span>
                    <span className="bg-green-100 text-trail-green text-[11px] font-semibold px-3 py-1 rounded-full">501(c)(3) · EIN 88-2746412</span>
                    <span className="bg-green-100 text-trail-green text-[11px] font-semibold px-3 py-1 rounded-full">$1,497 per seat</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 — Upskill */}
              <motion.div variants={fadeUp} className="bg-white border-l-4 border-sun-amber border border-warm-gray rounded-2xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-[56px_1fr] gap-6 items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-amber-100 flex-shrink-0"><TrendingUp size={22} stroke="var(--tt-amber-700)" /></div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-charcoal mb-3">Upskill your Salesforce team with Trail of Mastery.</h3>
                  <p className="font-['Open_Sans'] text-[15px] text-cool-gray leading-relaxed mb-4">Trail of Mastery is designed for employed Salesforce Admins ready to advance. Sponsor a team of 3 or more and receive a 20% group discount. Your team works in a real apprenticeship environment — learning advanced skills while delivering actual project work. Cohort 0 begins Q4 2026.</p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="bg-amber-100 text-amber-700 text-[11px] font-semibold px-3 py-1 rounded-full">3+ seats · 20% group discount</span>
                    <span className="bg-amber-100 text-amber-700 text-[11px] font-semibold px-3 py-1 rounded-full">Cohort 0 · Q4 2026</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.15em] text-deep-teal mb-3">WHY TRANSITION TRAILS</motion.p>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] text-charcoal leading-tight mb-12">Why employers choose Transition Trails.</motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap size={22} stroke="var(--tt-deep-teal)" />, bg: "bg-teal-100", title: "Workforce development eligible", body: "Our programs are designed to qualify for workforce development grant funding. Your investment may be partially or fully reimbursable depending on your state and industry." },
                { icon: <Shield size={22} stroke="var(--tt-trail-green)" />, bg: "bg-green-100", title: "Real skills, not just certifications", body: "We train professionals in actual project delivery — real clients, real stakes, real methodologies. Your new hire or upskilled admin arrives ready to contribute immediately." },
                { icon: <Globe size={22} stroke="var(--tt-deep-teal)" />, bg: "bg-teal-100", title: "Mission-aligned investment", body: "Every employer partnership directly supports our nonprofit mission of making Salesforce careers accessible. Your investment creates opportunity while building your team." },
              ].map(({ icon, bg, title, body }) => (
                <motion.div key={title} variants={fadeUp} className="bg-white border border-warm-gray rounded-2xl shadow-sm p-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${bg}`}>{icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-2">{title}</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-cool-gray leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <motion.div className="max-w-3xl mx-auto px-8 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] text-white leading-tight mb-4">Let's build something together.</motion.h2>
          <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[16px] text-white/70 leading-relaxed mb-10">Tell us about your team, your goals, and how you'd like to partner. A member of the TT team will be in touch within 2 business days.</motion.p>
          <motion.div variants={fadeUp}>
            <a href="https://form.jotform.com/261876908147066" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-sun-amber text-charcoal font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-200">Start a Partnership →</a>
            <p className="font-['Open_Sans'] text-[12px] text-white/40 mt-4">No commitment required. We will find the right fit for your goals.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
