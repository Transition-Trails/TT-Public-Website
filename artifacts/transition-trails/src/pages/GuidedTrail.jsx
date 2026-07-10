import { Check, Rocket, UserCheck, Award } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function GuidedTrail() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Guided Trail | Real-Client Salesforce Practicum | Transition Trails"
        description="Close the experience gap. Work with a real nonprofit client, build a job-ready portfolio piece, and get hired. Guided Trail Cohort 1 waitlist open. Starting at $1,497."
        path="/programs/guided-trail"
      />
      <section className="bg-gradient-to-br from-[#1E4A2A] to-[#2F6B3F] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
              BRIDGE TIER · COHORT-BASED · REAL CLIENT WORK
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Guided Trail.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-[#F5A623] mb-6">
              Certified. Now prove it.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/90 leading-[1.6] mb-8">
              You passed the Admin cert. You've applied to dozens of jobs. You keep getting rejected for lack of experience. That cycle ends here. Guided Trail pairs you with a real nonprofit client for a real 12-week Salesforce implementation — and you walk away with a portfolio piece employers actually care about.
            </p>
          </div>
          
          <div className="w-full md:w-[380px] bg-white rounded-2xl p-8 shadow-xl shrink-0">
            <div className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-2">$1,497</div>
            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-6">or 3 × $549 payment plan</div>
            
            <CTAButton href={LINKS.waitlist} variant="amber" className="w-full mb-4" size="lg">
              Join the Waitlist
            </CTAButton>
            
            <div className="text-center font-['Open_Sans'] text-[12px] text-[#4A4F4D]">
              Cohort 1 · 8–12 seats · Application required
            </div>
          </div>
        </div>
      </section>

      {/* Trail Forward Scholarship */}
      <section className="bg-[#E6F3EA] py-14 px-5 md:px-10 border-y border-[#2F6B3F]/20">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-[#2F6B3F]" />
            <div className="font-['Open_Sans'] font-bold text-[11px] tracking-[2px] uppercase text-[#2F6B3F]">TRAIL FORWARD SCHOLARSHIP</div>
          </div>
          <h2 className="font-['Poppins'] font-bold text-[28px] text-[#1E4A2A] mb-4">
            Trail Forward Scholarship
          </h2>
          <p className="font-['Open_Sans'] text-[16px] text-[#2A2E2C] leading-[1.7] mb-4">
            One fully funded seat is available per cohort for qualifying applicants. There is no cost to the recipient — Transition Trails covers the full program fee.
          </p>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mb-4">
            <strong className="text-[#1E4A2A]">Who qualifies:</strong> Members of the military community, underrepresented groups in tech, and individuals facing economic barriers to entering the technology sector.
          </p>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mb-8">
            Applications open approximately 4 weeks before each cohort begins.
          </p>
          <a
            href="/scholarship-application"
            className="inline-flex items-center justify-center h-[48px] px-8 rounded-[8px] bg-[#1E4A2A] text-white font-['Poppins'] font-semibold text-[15px] hover:bg-[#163820] transition-colors"
          >
            Apply for the Trail Forward Scholarship →
          </a>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#2F6B3F] text-white font-['Open_Sans'] font-bold text-[11px] tracking-[1.5px] uppercase px-3 py-1 rounded mb-5">FOR CAREER STARTERS & CAREER PIVOTERS</span>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C]">Prerequisites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#2F6B3F]/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#2F6B3F]" />
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[16px] text-[#2A2E2C]">
                Salesforce Platform Administrator Certification — achieved
              </div>
            </div>
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#2F6B3F]/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#2F6B3F]" />
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[16px] text-[#2A2E2C]">
                Not currently employed in a Salesforce role
              </div>
            </div>
          </div>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] text-center mt-8 max-w-[600px] mx-auto">
            Career Starters, Career Builders, and Career Pivoters are all welcome — the only requirement is your certification and not yet being employed in a Salesforce role.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-y border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">Your Portfolio Framework</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-2xl mx-auto">
              Guided Trail gives you three layers of real, verifiable Salesforce experience — the kind that holds up in a technical interview.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6B3F] mb-3">Layer 1</div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Structured Capstone Project</h4>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.7]">You work through a structured capstone project aligned to the Salesforce Platform Administrator exam domains — the same domains you studied for your certification. No Build With Me videos. No step-by-step guidance. You solve it independently, the way an admin would on the job. This is your proof that the basics are cold.</p>
            </div>

            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6B3F] mb-3">Layer 2</div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Trail OS Live Org Projects</h4>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.7]">You work on real projects inside a live Salesforce org using the Trail OS platform and the RESOLVE methodology. Real requirements, real change management, real deployments. The kind of work that gives you something to walk a hiring manager through.</p>
            </div>

            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6B3F] mb-3">Layer 3</div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Digital Compass Client Opportunities</h4>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.7]">Depending on your cohort workload and demonstrated experience, you may have the opportunity to work directly with Digital Compass nonprofit clients — real organizations with real Salesforce needs. Not every learner reaches this level in 12 weeks, but when you do, it is the most compelling portfolio entry of all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">12 Weeks. 3 Sprints. One Real Implementation.</h2>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-[#1E4A2A] text-white flex items-center justify-center font-['Poppins'] font-bold text-[32px] shrink-0">1</div>
              <div>
                <div className="font-['Open_Sans'] font-semibold text-[12px] uppercase tracking-[2px] text-[#2F6B3F] mb-2">Weeks 1–4</div>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-3">Foundation</h3>
                <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.6]">
                  Discovery call, org setup, data model design, and stakeholder mapping. We start by understanding exactly what the structured capstone project requires.
                </p>
              </div>
            </div>
            
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-[#2F6B3F] text-white flex items-center justify-center font-['Poppins'] font-bold text-[32px] shrink-0">2</div>
              <div>
                <div className="font-['Open_Sans'] font-semibold text-[12px] uppercase tracking-[2px] text-[#2F6B3F] mb-2">Weeks 5–8</div>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-3">Engine</h3>
                <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.6]">
                  Configuration, automation, integrations, and quality review. This is where the heavy lifting happens and the platform comes to life.
                </p>
              </div>
            </div>
            
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-[#7FAFC6] text-white flex items-center justify-center font-['Poppins'] font-bold text-[32px] shrink-0">3</div>
              <div>
                <div className="font-['Open_Sans'] font-semibold text-[12px] uppercase tracking-[2px] text-[#2F6B3F] mb-2">Weeks 9–12</div>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-3">Proof</h3>
                <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.6]">
                  UAT, user training, go-live support, and portfolio documentation. You hand off the keys and document your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2A2E2C] py-20 px-5 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-['Poppins'] font-bold text-[32px] mb-8">Weekly Rhythm</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 shrink-0" />
                  <div>
                    <strong className="block font-['Poppins'] text-[18px] mb-1">Office Hours</strong>
                    <span className="font-['Open_Sans'] text-[15px] text-white/70">Live technical review and unblocking</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 shrink-0" />
                  <div>
                    <strong className="block font-['Poppins'] text-[18px] mb-1">Peer Sessions</strong>
                    <span className="font-['Open_Sans'] text-[15px] text-white/70">Collaborative problem solving with your cohort</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-2 shrink-0" />
                  <div>
                    <strong className="block font-['Poppins'] text-[18px] mb-1">Coach Check-in</strong>
                    <span className="font-['Open_Sans'] text-[15px] text-white/70">Progress alignment and client communication review</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-['Poppins'] font-bold text-[32px] mb-8">Portfolio Framework</h3>
              <p className="font-['Open_Sans'] text-[16px] text-white/80 leading-[1.6] mb-6">
                When you graduate, you don't just have a bullet point on your resume. You walk away with:
              </p>
              <ul className="space-y-4 font-['Open_Sans'] text-[15px] text-white/90">
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> A Salesforce Developer Org with your completed capstone configuration</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> Trail OS project documentation from a live Salesforce org</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> A GitHub portfolio showcasing your metadata and decision log</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> A professional case study and Demo Day presentation</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> Digital Compass client work artifacts (where applicable)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8 text-center">
            <h4 className="font-['Poppins'] font-bold text-[20px] mb-2">Alumni Pathway</h4>
            <p className="font-['Open_Sans'] text-[16px] text-white/70">
              On graduation, you earn annual access to Explorer's Trail — the community that keeps you connected.
            </p>
          </div>

          <div className="mt-6 rounded-xl p-7" style={{ background: "rgba(245,166,35,0.08)", borderTop: "3px solid rgba(245,166,35,0.50)", border: "1px solid rgba(245,166,35,0.25)" }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[rgba(245,166,35,0.15)] flex items-center justify-center mb-2">
                  <Rocket className="w-4 h-4 text-[#F5A623]" />
                </div>
                <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.65]">
                  Guided Trail graduates are eligible to participate in <span className="font-semibold text-white">The TT Expedition Series</span> — alongside Trail of Mastery learners, solving real nonprofit Salesforce challenges over a single weekend. Launching Fall 2027.
                </p>
              </div>
              <a href="/expedition" className="font-['Open_Sans'] font-semibold text-[13px] text-[#F5A623] hover:underline whitespace-nowrap shrink-0">
                Learn more →
              </a>
            </div>
          </div>

          <div className="mt-4 rounded-xl p-7" style={{ background: "rgba(47,107,63,0.12)", borderTop: "3px solid rgba(47,107,63,0.50)", border: "1px solid rgba(47,107,63,0.25)" }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[rgba(47,107,63,0.12)] flex items-center justify-center mb-2">
                  <UserCheck className="w-4 h-4 text-[#6BBF85]" />
                </div>
                <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.65]">
                  Guided Trail graduates with 6+ months of field experience can apply to become a <span className="font-semibold text-white">TT Coach's Assistant</span> — stay connected to the community while building leadership skills alongside your day job.
                </p>
              </div>
              <a href="/coaches" className="font-['Open_Sans'] font-semibold text-[13px] text-[#6BBF85] hover:underline whitespace-nowrap shrink-0">
                Apply to coach →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort 0 Testimonials */}
      <section className="bg-white py-16 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-3">FROM COHORT 0</div>
            <h2 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-2">In their own words.</h2>
            <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] italic">
              From our December 2025 retrospective — the cohort that shaped the Guided Trail program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6B3F" }}>
              <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,107,63,0.15)" }}>"</div>
              <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                The hands-on experience and the team environment were what I valued most. Working on a real project made everything click in a way that self-study never could.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6B3F]">Cohort 0 Participant</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Guided Trail · Dec. 2025 Retrospective</div>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6B3F" }}>
              <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,107,63,0.15)" }}>"</div>
              <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                This program teaches you how to think like a professional — not just how to pass a test. The coaching and real-world exposure gave me a completely different kind of confidence.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6B3F]">Cohort 0 Participant</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Guided Trail · Dec. 2025 Retrospective</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5A623] py-16 px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-6">Ready to cross the gap?</h2>
          <CTAButton href={LINKS.waitlist} variant="dark" size="lg">
            Join the Waitlist
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
