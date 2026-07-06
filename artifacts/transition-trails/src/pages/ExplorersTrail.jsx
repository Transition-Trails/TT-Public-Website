import { Check } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function ExplorersTrail() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Explorer's Trail | Salesforce Learning Subscription | Transition Trails"
        description="A monthly Salesforce learning membership with four skill tracks, Trail Missions, and community. No prerequisites. Starting at $47/month."
        path="/programs/explorers-trail"
      />
      <section className="bg-gradient-to-br from-[#3a6b8a] to-[#7FAFC6] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block bg-white/20 border border-white/30 text-white font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
            AWARENESS TIER · SUBSCRIPTION · NO PREREQUISITES
          </div>
          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
            Explorer's Trail.
          </h1>
          <p className="font-['Poppins'] font-medium text-[24px] text-white/90 mb-6">
            Your Salesforce journey starts here.
          </p>
          <p className="font-['Open_Sans'] text-[18px] md:text-[20px] text-white/80 leading-[1.6] max-w-2xl mx-auto mb-10">
            A subscription membership — not a cohort. Learn at your own pace, explore every skill level, and stay connected to the community.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 -mt-10">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-2">Monthly</h3>
              <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-6">$47<span className="text-xl text-[#4A4F4D] font-normal">/mo</span></div>
              <ul className="flex flex-col gap-3 font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8 w-full text-left">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#7FAFC6] shrink-0" /> Full platform access</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#7FAFC6] shrink-0" /> Monthly content drops</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#7FAFC6] shrink-0" /> Community forums</li>
              </ul>
              <div className="mt-auto w-full">
                <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-[#7FAFC6] hover:!bg-[#6a9eb5]">
                  Join the Waitlist
                </CTAButton>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="bg-white border-2 border-[#F5A623] rounded-2xl p-8 flex flex-col items-center text-center shadow-md relative transform md:-translate-y-4">
              <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[11px] px-3 py-1 rounded-sm uppercase tracking-wide whitespace-nowrap">
                BEST VALUE
              </div>
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-2">Annual</h3>
              <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-2">$397<span className="text-xl text-[#4A4F4D] font-normal">/yr</span></div>
              <div className="font-['Open_Sans'] text-[13px] text-[#2F6B3F] font-semibold mb-6">Save $167 annually</div>
              <ul className="flex flex-col gap-3 font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8 w-full text-left">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#F5A623] shrink-0" /> Everything in Monthly</li>
                <li className="flex gap-3 font-semibold text-[#2A2E2C]"><Check className="w-5 h-5 text-[#F5A623] shrink-0" /> 2 months free</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#F5A623] shrink-0" /> Priority event registration</li>
              </ul>
              <div className="mt-auto w-full">
                <CTAButton href={LINKS.waitlist} variant="amber" className="w-full">
                  Join the Waitlist
                </CTAButton>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-2">Annual + Coaching</h3>
              <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-6">$597<span className="text-xl text-[#4A4F4D] font-normal">/yr</span></div>
              <ul className="flex flex-col gap-3 font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8 w-full text-left">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#7FAFC6] shrink-0" /> Everything in Annual</li>
                <li className="flex gap-3 font-semibold text-[#2A2E2C]"><Check className="w-5 h-5 text-[#7FAFC6] shrink-0" /> 2 Private Coaching Sessions</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#7FAFC6] shrink-0" /> Resume review</li>
              </ul>
              <div className="mt-auto w-full">
                <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-[#7FAFC6] hover:!bg-[#6a9eb5]">
                  Join the Waitlist
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">Four Skill Tracks. One Platform.</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-2xl mx-auto">
              Whether you're just discovering Salesforce or prepping for your Architect exams, there's content built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-8 rounded-xl">
              <h3 className="font-['Poppins'] font-bold text-[22px] text-[#7FAFC6] mb-4">Level 1: Beginner</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-4">Platform basics, navigation, and understanding the ecosystem.</p>
              <ul className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] space-y-2">
                <li>• What is a CRM?</li>
                <li>• Salesforce platform learning strategies</li>
                <li>• Basic data modeling concepts</li>
              </ul>
            </div>
            
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-8 rounded-xl">
              <h3 className="font-['Poppins'] font-bold text-[22px] text-[#2F6B3F] mb-4">Level 2: Intermediate</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-4">Admin certification prep and configuration fundamentals.</p>
              <ul className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] space-y-2">
                <li>• Security & Sharing deep dives</li>
                <li>• Flow building basics</li>
                <li>• Reports & Dashboards mastery</li>
              </ul>
            </div>
            
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-8 rounded-xl">
              <h3 className="font-['Poppins'] font-bold text-[22px] text-[#1E4A2A] mb-4">Level 3: Advanced</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-4">Complex automation, integration prep, and implementation strategy.</p>
              <ul className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] space-y-2">
                <li>• Advanced Flow architectures</li>
                <li>• Requirements gathering templates</li>
                <li>• Data migration strategies</li>
              </ul>
            </div>
            
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-8 rounded-xl">
              <h3 className="font-['Poppins'] font-bold text-[22px] text-[#2F6F7E] mb-4">Level 4: Expert</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-4">Architect-level concepts and technical leadership.</p>
              <ul className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] space-y-2">
                <li>• Enterprise architecture patterns</li>
                <li>• Complex integration design</li>
                <li>• Governance & COE establishment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2A2E2C] py-16 px-5 border-t border-[#4A4F4D]">
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#7FAFC6] mb-3">TRAIL MISSIONS</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-white mb-4">Monthly content drops at all 4 levels.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-white/70">
              The ecosystem changes constantly. So do we. Every month, we release new missions across all four levels to keep your skills sharp and relevant.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">GRADUATE PERKS</div>
            <ul className="space-y-4">
              <li className="font-['Open_Sans'] text-[16px] text-white/90">
                <strong className="text-white">Guided Trail graduates</strong> earn Annual access to Explorer's Trail.
              </li>
              <li className="font-['Open_Sans'] text-[16px] text-white/90">
                <strong className="text-white">Trail of Mastery graduates</strong> earn Lifetime access.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
