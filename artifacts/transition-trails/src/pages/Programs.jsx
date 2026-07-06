import { useState } from "react";
import { Link } from "wouter";
import { PROGRAMS } from "../constants/programs";
import { ProgramCard } from "../components/ProgramCard";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

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
          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white mb-4">Find your trail.</h1>
          <p className="font-['Open_Sans'] text-[18px] md:text-[20px] text-white/80 max-w-2xl mx-auto">
            Five programs. One ecosystem. Built for every stage of the Salesforce journey.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-16 px-5 border-b border-[#E2E4E1]">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl border border-[#E2E4E1] shadow-sm p-8 md:p-12">
          <h2 className="font-['Poppins'] font-semibold text-[24px] text-[#2A2E2C] text-center mb-8">Which program is right for you?</h2>
          
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

      <section className="bg-white py-20 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[800px] mx-auto bg-gradient-to-br from-[#1E4F5C] to-[#2F6F7E] rounded-2xl p-10 md:p-14 text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">FOR NONPROFIT ORGANIZATIONS</div>
          <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-white mb-6">Need Salesforce support?</h2>
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
