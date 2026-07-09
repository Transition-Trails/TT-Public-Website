import { useState } from "react";
import { Link } from "wouter";
import { PROGRAMS } from "../constants/programs";
import { ProgramCard } from "../components/ProgramCard";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";

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
  const [certStatus, setCertStatus] = useState(null); // 'yes', 'no', 'inprogress'
  const [empStatus, setEmpStatus] = useState(null); // 'yes', 'no'

  let recommendation = null;
  if (certStatus === 'no') recommendation = "explorers-trail";
  if (certStatus === 'inprogress') recommendation = "foundations-trail";
  if (certStatus === 'yes' && empStatus === 'no') recommendation = "guided-trail";
  if (certStatus === 'yes' && empStatus === 'yes') recommendation = "trail-of-mastery";

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
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[18px]">🧭</span>
                <span className="font-['Open_Sans'] font-semibold text-[14px] text-[#7FAFC6]">Career Starters</span>
              </div>
              <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">New to Salesforce or working toward your first cert</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#E2E4E1]" />
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[18px]">🎯</span>
                <span className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6B3F]">Career Builders</span>
              </div>
              <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">Certified and ready to turn it into a career</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#E2E4E1]" />
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[18px]">🔄</span>
                <span className="font-['Open_Sans'] font-semibold text-[14px] text-[#1E4A2A]">Career Pivoters</span>
              </div>
              <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">Changing careers — every trail is open to you</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-16 px-5 border-b border-[#E2E4E1]">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl border border-[#E2E4E1] shadow-sm p-8 md:p-12">
          <h2 className="font-['Fraunces'] font-bold text-[24px] text-[#2A2E2C] text-center mb-8">Which program is right for you?</h2>
          
          <div className="space-y-8">
            <div>
              <p className="font-['Open_Sans'] font-semibold text-[16px] text-[#2A2E2C] mb-4">1. Do you have a Salesforce certification?</p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setCertStatus('yes')}
                  className={`px-6 py-3 rounded-lg font-['Open_Sans'] font-semibold text-[14px] transition-all ${certStatus === 'yes' ? 'bg-[#2F6B3F] text-white' : 'bg-[#FAFAF7] border border-[#E2E4E1] text-[#4A4F4D] hover:border-[#2F6B3F]'}`}
                >
                  Yes, I'm certified
                </button>
                <button 
                  onClick={() => setCertStatus('inprogress')}
                  className={`px-6 py-3 rounded-lg font-['Open_Sans'] font-semibold text-[14px] transition-all ${certStatus === 'inprogress' ? 'bg-[#2F6B3F] text-white' : 'bg-[#FAFAF7] border border-[#E2E4E1] text-[#4A4F4D] hover:border-[#2F6B3F]'}`}
                >
                  Studying for it now
                </button>
                <button 
                  onClick={() => { setCertStatus('no'); setEmpStatus(null); }}
                  className={`px-6 py-3 rounded-lg font-['Open_Sans'] font-semibold text-[14px] transition-all ${certStatus === 'no' ? 'bg-[#2F6B3F] text-white' : 'bg-[#FAFAF7] border border-[#E2E4E1] text-[#4A4F4D] hover:border-[#2F6B3F]'}`}
                >
                  No certification yet
                </button>
              </div>
            </div>

            {certStatus === 'yes' && (
              <div className="animate-in fade-in slide-in-from-top-4">
                <p className="font-['Open_Sans'] font-semibold text-[16px] text-[#2A2E2C] mb-4">2. Are you currently employed in a Salesforce role?</p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setEmpStatus('yes')}
                    className={`px-6 py-3 rounded-lg font-['Open_Sans'] font-semibold text-[14px] transition-all ${empStatus === 'yes' ? 'bg-[#2F6B3F] text-white' : 'bg-[#FAFAF7] border border-[#E2E4E1] text-[#4A4F4D] hover:border-[#2F6B3F]'}`}
                  >
                    Yes, I am
                  </button>
                  <button 
                    onClick={() => setEmpStatus('no')}
                    className={`px-6 py-3 rounded-lg font-['Open_Sans'] font-semibold text-[14px] transition-all ${empStatus === 'no' ? 'bg-[#2F6B3F] text-white' : 'bg-[#FAFAF7] border border-[#E2E4E1] text-[#4A4F4D] hover:border-[#2F6B3F]'}`}
                  >
                    No, not yet
                  </button>
                </div>
              </div>
            )}
          </div>

          {recommendation && (
            <div className="mt-10 p-6 bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-xl animate-in fade-in zoom-in-95 duration-300">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-2">RECOMMENDED FOR YOU</div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-['Poppins'] font-bold text-[24px] text-[#1E4A2A] mb-2">
                    {PROGRAMS.find(p => p.slug === recommendation).name}
                  </h3>
                  <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-4">
                    {PROGRAMS.find(p => p.slug === recommendation).whoFor}
                  </p>
                  <CTAButton 
                    href={PROGRAMS.find(p => p.slug === recommendation).ctaHref}
                    variant={recommendation === 'guided-trail' ? 'amber' : 'dark'}
                    className={recommendation !== 'guided-trail' ? '!bg-[#2F6B3F] hover:!bg-[#1E4A2A]' : ''}
                  >
                    {PROGRAMS.find(p => p.slug === recommendation).cta}
                  </CTAButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="bg-[#E6F3EA] border-y border-[#2F6B3F]/20 py-4 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="text-[18px]">🏅</span>
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
          <div className="flex gap-6 overflow-x-auto pb-8 items-end snap-x snap-mandatory">
            {PROGRAMS.map(program => (
              <div key={program.slug} className={`snap-start shrink-0 transition-opacity duration-300 ${recommendation && recommendation !== program.slug ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}>
                <ProgramCard program={program} height={program.slug === recommendation || program.mostPopular ? "featured" : "standard"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path to Coach */}
      <section className="bg-white py-20 px-5 md:px-10 border-t border-[#E2E4E1]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">GET INVOLVED</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-4">Ready to give back?</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-[680px] mx-auto">
              If you have your Salesforce Platform Administrator certification and 2–3 years of field experience, coaching with Transition Trails is a meaningful way to build your leadership skills, strengthen your community, and stay sharp.
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
              <div className="font-['Open_Sans'] font-semibold text-[12px] text-[#1E4A2A]">Lifetime Explorer's Trail membership</div>
            </motion.div>
          </motion.div>

          <p className="font-['Open_Sans'] italic text-[13px] text-[#4A4F4D] text-center">
            Coaching is open to Guided Trail graduates with 6+ months of employment, and to external Salesforce professionals with 2–3 years of field experience. No Transition Trails program completion required.
          </p>
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
    </div>
  );
}
