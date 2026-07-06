import { Check } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function TrailOfMastery() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Trail of Mastery | Advanced Salesforce Program | Transition Trails"
        description="For employed Salesforce professionals ready to advance. Real client projects, enterprise-level skills, and the RESOLVE methodology. Starting at $1,997."
        path="/programs/trail-of-mastery"
      />
      <section className="bg-gradient-to-br from-[#1a3a47] to-[#2F6F7E] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-white/10 border border-white/20 text-white font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
              ADVANCEMENT TIER · COHORT-BASED · REAL CLIENT PROJECTS
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Trail of Mastery.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-white/90 mb-6">
              You have the job. Now build the career.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/80 leading-[1.6] mb-8">
              Move beyond basic administration. Master enterprise architecture, advanced client consulting, and the RESOLVE methodology while leading real projects for Digital Compass nonprofit clients.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg border border-white/20">
              <Check className="w-5 h-5 text-[#F5A623]" />
              <span className="font-['Open_Sans'] text-sm text-white font-semibold">Prerequisite: Must be certified AND currently employed in a Salesforce role</span>
            </div>
          </div>
          
          <div className="w-full md:w-[380px] bg-white rounded-2xl p-8 shadow-xl shrink-0">
            <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-2">$1,997</div>
            <div className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-6">standard rate</div>
            
            <div className="h-px bg-[#E2E4E1] w-full mb-6" />
            
            <div className="bg-[#E6F3EA] rounded-lg p-4 mb-6">
              <div className="font-['Poppins'] font-semibold text-[14px] text-[#1E4A2A] mb-1">Employer-Sponsored</div>
              <div className="font-['Poppins'] font-bold text-[24px] text-[#2F6B3F]">$1,597</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#2F6B3F]/80">per seat when booking 3+</div>
            </div>

            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-6 text-center">or 4 × $549 payment plan</div>

            <CTAButton href={LINKS.programWaitlist} variant="dark" external className="w-full !bg-[#2F6F7E] hover:!bg-[#1a3a47]" size="lg">
              Join the Waitlist
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-b border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">The Next Level</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-2xl mx-auto">
              This program is designed for working professionals who need to level up their architecture, consulting, and project delivery skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">Real Nonprofit Client Projects</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                You'll be paired with our Digital Compass nonprofit members. You act as the lead architect, scoping requirements, designing solutions, and managing the delivery of complex Salesforce enhancements.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">Cohort-Based Learning</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Learn alongside other working professionals. Share challenges from your day jobs, review each other's architectures, and build a network of advanced practitioners.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">Advanced Architecture</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Move beyond configuration. We cover integration patterns, data volume management, advanced security models, and enterprise deployment strategies.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">RESOLVE Pipeline</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Master our proprietary project delivery framework used by top Salesforce consulting partners to ensure project success and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">THE METHODOLOGY</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C]">The RESOLVE Framework</h2>
          </div>
          
          <div className="space-y-4 max-w-[800px] mx-auto">
            {[
              { letter: "R", name: "Requirements", desc: "Deep discovery and documentation of the core business problem." },
              { letter: "E", name: "Environment", desc: "Analyzing the current org shape, tech debt, and constraints." },
              { letter: "S", name: "Strategic", desc: "Aligning the technical solution with long-term business goals." },
              { letter: "O", name: "Operations", desc: "Mapping the human processes that will wrap around the tech." },
              { letter: "L", name: "Launch", desc: "Executing a flawless deployment, migration, and go-live." },
              { letter: "V", name: "Validation", desc: "Rigorous testing, UAT, and quality assurance." },
              { letter: "E", name: "Evaluation", desc: "Measuring adoption, ROI, and planning the next phase." }
            ].map((phase, i) => (
              <div key={i} className="flex bg-[#FAFAF7] border border-[#E2E4E1] rounded-xl overflow-hidden">
                <div className="w-16 bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[24px] shrink-0">
                  {phase.letter}
                </div>
                <div className="p-5 flex-1">
                  <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-1">{phase.name}</h4>
                  <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2F6F7E] py-16 px-5 text-center text-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] mb-6">Advance your career.</h2>
          <CTAButton href={LINKS.programWaitlist} variant="outline" external size="lg" className="border-white text-white hover:bg-white/10">
            Join the Waitlist
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
