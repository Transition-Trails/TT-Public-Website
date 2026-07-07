import { Check } from "lucide-react";
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
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
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
            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-1">or $747 scholarship</div>
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

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#2F6B3F] text-white font-['Open_Sans'] font-bold text-[11px] tracking-[1.5px] uppercase px-3 py-1 rounded mb-5">BUILT FOR CAREER BUILDERS</span>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C]">Prerequisites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#2F6B3F]/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#2F6B3F]" />
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[16px] text-[#2A2E2C]">
                Active Salesforce Admin Certification
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
            If you are pivoting from another career and have recently earned your certification, this is exactly the right next step.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-y border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">What You'll Build</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-2xl mx-auto">
              You'll implement Salesforce for Horizon Community Hub — a real Dallas-Fort Worth nonprofit. This isn't a simulation. It's a live implementation that HCH will use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-1">CRM Setup & Architecture</h4>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Full NPSP configuration, role hierarchy, and custom objects</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-1">Data Migration</h4>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Extracting legacy data, transforming, and loading into Salesforce</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-1">Reports & Dashboards</h4>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Building actionable insights for executive leadership</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-1">User Training Documentation</h4>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Creating standard operating procedures for the client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
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
                  Discovery call, org setup, data model design, and stakeholder mapping. We start by understanding exactly what Horizon Community Hub needs.
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
        <div className="max-w-[1024px] mx-auto">
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
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> A live Salesforce org running your configuration</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> Fully documented project requirements</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> A GitHub portfolio showcasing your metadata</li>
                <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0" /> A professional case study to present in interviews</li>
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
                <div className="text-[22px] mb-2">🏔️</div>
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
                <div className="text-[22px] mb-2">🤝</div>
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

      {/* Trail Navigator Section */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">YOUR TRAIL NAVIGATOR</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-4">Every Guided Trail graduate receives one.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[640px] leading-[1.65]">
              At program completion, you choose your Trail Navigator — a physical artifact of the work you did, the community you joined, and the milestone you earned. The Trail Hoodie or the Trail Journal. Velcro patch zones for every milestone ahead. Cohort-specific design that makes yours one of a kind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7">
              <div className="text-[32px] mb-3">🧥</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-2">The Trail Hoodie</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">Custom embroidered zip-up hoodie with velcro patch zones for every milestone — cohort-specific accent color embroidered into the design.</p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7">
              <div className="text-[32px] mb-3">📓</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-2">The Trail Journal</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">Custom-designed journal with a patch-compatible fabric cover. Same badge system. Same cohort-specific design. Equally earned, equally honored.</p>
            </div>
          </div>
          <div className="bg-[#FEF3DB] border border-[#F5A623] rounded-xl p-6">
            <p className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-2">Cohort 1 Trail Navigators are the founding edition — Sun Amber accent, never repeated.</p>
            <a href="/waitlist" className="font-['Open_Sans'] font-semibold text-[14px] text-[#2A2E2C] hover:text-[#1E4A2A] transition-colors">Join the waitlist. →</a>
          </div>
        </div>
      </section>

      {/* Cohort 0 Testimonials */}
      <section className="bg-white py-16 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
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
