import { Link } from "wouter";
import { PROGRAMS } from "../constants/programs";
import { ProgramCard } from "../components/ProgramCard";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { ArrowRight, User, TrendingUp, Compass, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};
const fadeUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Programs() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Programs | Salesforce Career Paths | Transition Trails"
        description="Five Salesforce training programs for every career stage — from first exposure to enterprise advancement. Find your trail. Dallas, TX."
        path="/programs"
      />
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.h1
            className="font-['Fraunces'] font-bold text-[48px] md:text-[56px] text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >Find your trail.</motion.h1>
          <p className="font-['Open_Sans'] text-[18px] md:text-[20px] text-white/80 max-w-2xl mx-auto">
            Five programs. One ecosystem. Built for every stage of the Salesforce journey.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-[#E2E4E1] py-6 px-5 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="flex items-center gap-2">
                <User size={18} color="#7FAFC6" />
                <span className="font-['Open_Sans'] font-semibold text-[14px] text-[#7FAFC6]">Career Starters</span>
              </div>
              <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">New to Salesforce or working toward your first cert</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#E2E4E1]" />
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} color="#2F6B3F" />
                <span className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6B3F]">Career Builders</span>
              </div>
              <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">Certified and ready to turn it into a career</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#E2E4E1]" />
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="flex items-center gap-2">
                <Compass size={18} color="#1E4A2A" />
                <span className="font-['Open_Sans'] font-semibold text-[14px] text-[#1E4A2A]">Career Pivoters</span>
              </div>
              <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">Changing careers — every trail is open to you</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#E6F3EA] border-y border-[#2F6B3F]/20 py-4 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <Award size={18} color="#2F6B3F" />
          <p className="font-['Open_Sans'] text-[13px] text-[#2A2E2C] leading-[1.6]">
            <span className="font-semibold text-[#1E4A2A]">The Trail Forward Scholarship</span> — one fully funded Guided Trail seat per cohort for historically underserved populations in technology. No membership required to apply.
          </p>
          <Link href="/scholarships" className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6B3F] hover:underline whitespace-nowrap shrink-0">
            Learn more →
          </Link>
        </div>
      </div>

      <section className="bg-[#FAFAF7] py-20 px-5">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-8">
            {PROGRAMS.map(program => (
              <ProgramCard key={program.slug} program={program} height={program.mostPopular ? "featured" : "standard"} />
            ))}
          </div>
        </div>
      </section>

      {/* Path to Coach */}
      <section className="bg-white py-20 px-5 md:px-10 border-t border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">GET INVOLVED</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-4">Ready to give back?</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-[680px] mx-auto">
              If you have your Salesforce Certified Platform Administrator certification and 2–3 years of field experience, coaching with Transition Trails is a meaningful way to build your leadership skills, strengthen your community, and stay sharp.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div variants={fadeUpChild} className="bg-[#E0F0F7] border border-[#7FAFC6]/40 rounded-xl p-6 text-center">
              <div className="font-['Poppins'] font-bold text-[16px] text-[#2A2E2C] mb-3">Coach's Assistant</div>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-4">
                Support a lead coach and learn the coaching process from the inside. A great first step for anyone who wants to contribute without taking the lead.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[12px] text-[#2F6F7E]">2–4 hrs/week per cohort</div>
            </motion.div>

            <motion.div variants={fadeUpChild} className="bg-[#E6F3EA] border border-[#2F6B3F]/40 rounded-xl p-6 text-center">
              <div className="font-['Poppins'] font-bold text-[16px] text-[#2A2E2C] mb-3">Associate Coach</div>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-4">
                Lead a cohort as the primary coach. You set the tone, guide the learners, and own the outcomes — with full TT support behind you.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[12px] text-[#2F6B3F]">4–6 hrs/week per cohort</div>
            </motion.div>

            <motion.div variants={fadeUpChild} className="bg-[#d4e8d8] border border-[#1E4A2A]/40 rounded-xl p-6 text-center">
              <div className="font-['Poppins'] font-bold text-[16px] text-[#2A2E2C] mb-3">Advanced TT Coach</div>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-4">
                Senior coaching role, earned through sustained contribution. Invitation only after 6 completed cohorts.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[12px] text-[#1E4A2A]">8–10 hrs/week per cohort</div>
            </motion.div>
          </motion.div>

          <p className="font-['Open_Sans'] italic text-[13px] text-[#4A4F4D] text-center">
            Coaching is open to Guided Trail graduates with 6+ months of employment, and to external Salesforce professionals with 2–3 years of field experience. No Transition Trails program completion required.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/coaches" className="inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] bg-[#2F6B3F] text-white font-['Poppins'] font-bold text-[15px] hover:bg-[#265a34] transition-colors">
              Apply to Coach
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[800px] mx-auto bg-gradient-to-br from-[#1E4F5C] to-[#2F6F7E] rounded-2xl p-10 md:p-14 text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">FOR NONPROFIT ORGANIZATIONS</div>
          <h2 className="font-['Fraunces'] font-bold text-[32px] md:text-[40px] text-white mb-6">Need Salesforce support?</h2>
          <p className="font-['Open_Sans'] text-[18px] text-white/80 max-w-xl mx-auto mb-8">
            Digital Compass provides ongoing Salesforce support for nonprofits starting at $149/mo. We match your projects with our learners to create real impact.
          </p>
          <CTAButton href="/programs/digital-compass" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
            Explore Digital Compass
          </CTAButton>
        </div>
      </section>

      {/* BUILD. TEST. IMPROVE. REPEAT. */}
      <section className="bg-[#2A2E2C] py-24">
        <motion.div
          className="max-w-[900px] mx-auto px-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A623] mb-4">OUR APPROACH</p>
          <h2 className="font-['Fraunces'] font-bold text-[clamp(2rem,4vw,2.75rem)] text-white leading-tight mb-10">Build. Test. Improve. Repeat.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.8] space-y-6">
            <p>Before we launched a single program publicly, we spent years figuring out what actually works. Starting in 2022 — while all four of us were working full time in our Salesforce careers, fitting this in on nights, weekends, and early mornings — we began testing with small groups. Not because we had something to sell. Because we needed to know whether what we were building would actually deliver.</p>
            <p>Guided Trail was our first full program. We developed it carefully, ran Cohort 0 in August 2025, and watched closely. What worked? What didn't? Where did learners get stuck? Where did they surprise us? We took everything we learned, made it better, and now we are ready for Cohort 1. The waitlist is open.</p>
            <p>Out of that testing process came Foundations Trail — a program that didn't exist in our original plans, but became necessary when we saw the gap between where learners were starting and where Guided Trail required them to be. Foundations Trail is currently completing its own Cohort 0 test and will be ready for launch after October 1, 2026. The waitlist is open.</p>
            <p>Trail of Mastery is in design now. We are being just as deliberate. Cohort 0 testing begins in Q4 2026. If you join the interest list, you are not just signing up to be notified — you are joining the process. Your feedback will shape what this program becomes.</p>
            <p>We also had to build Digital Compass. Not as an afterthought, but as a requirement. If we were going to give learners real project experience — real clients, real stakes, real deliverables — we needed real nonprofit clients to work with. Digital Compass is how we create that pipeline. It is not a side offering. It is the other half of the model.</p>
            <p>Every program we build is designed around three questions: Is this beneficial to the learner? Is it focused on the right outcomes? Does it deliver a superior experience? We ask those questions at every stage, test the answers with real people, and improve before we open the door. That rigor is also how we build programs that qualify for workforce development grant funding — so that cost is never the reason someone cannot access this training.</p>
          </div>
          <p className="mt-12 text-[18px] font-['Poppins'] font-semibold text-white leading-relaxed">We are not in a hurry. We are building something that works.</p>
        </motion.div>
      </section>
    </div>
  );
}
