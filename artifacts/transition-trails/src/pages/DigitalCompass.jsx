import { Check, Database, Users, DollarSign } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function DigitalCompass() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Digital Compass | Nonprofit Salesforce Support | Transition Trails"
        description="Affordable Salesforce guidance for nonprofits. Weekly Office Hours, TrailKit resources, and coached project support from certified professionals. Starting at $149/month."
        path="/programs/digital-compass"
      />
      <section className="bg-gradient-to-br from-[#1E4F5C] to-[#2F6F7E] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
              FOR NONPROFITS
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Digital Compass.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-white/90 mb-6">
              Salesforce support built for nonprofits — starting at $149/mo.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/80 leading-[1.6]">
              Kim Barnes leads our nonprofit services team. We pair Digital Compass member organizations with Guided Trail learners — your real projects become their portfolio work.
            </p>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <CTAButton href={LINKS.npFreeAssessment} variant="amber" size="lg" external>
              Book Free Assessment
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-b border-[#E2E4E1]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col">
              <h4 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-2">Entry</h4>
              <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-6">$149<span className="text-xl text-[#4A4F4D] font-normal">/mo</span></div>
              <ul className="flex flex-col gap-4 font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8 flex-grow">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> Weekly Office Hours</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> TrailKit Library access</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> Trail OS Installation</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> Penny AI</li>
              </ul>
              <div className="text-[13px] text-[#4A4F4D] text-center bg-[#FAFAF7] py-2 rounded-lg">Annual: $1,490/yr (2 mos free)</div>
            </div>
            
            <div className="bg-white border-2 border-[#F5A623] rounded-2xl p-8 relative flex flex-col transform md:-translate-y-4 shadow-md">
              <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[11px] px-4 py-1.5 rounded-sm uppercase tracking-wide">
                MOST POPULAR
              </div>
              <h4 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-2">Mid</h4>
              <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-6">$349<span className="text-xl text-[#4A4F4D] font-normal">/mo</span></div>
              <ul className="flex flex-col gap-4 font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8 flex-grow">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> All Entry features</li>
                <li className="flex gap-3 font-semibold text-[#2A2E2C]"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> Project support (mid-level complexity)</li>
              </ul>
              <div className="text-[13px] text-[#4A4F4D] text-center bg-[#FAFAF7] py-2 rounded-lg">Annual: $3,490/yr (2 mos free)</div>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col">
              <h4 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-2">Full</h4>
              <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-6">$749<span className="text-xl text-[#4A4F4D] font-normal">/mo</span></div>
              <ul className="flex flex-col gap-4 font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8 flex-grow">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> All Mid features</li>
                <li className="flex gap-3 font-semibold text-[#2A2E2C]"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> Full project support</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#2F6F7E] shrink-0" /> Dedicated advisor</li>
              </ul>
              <div className="text-[13px] text-[#4A4F4D] text-center bg-[#FAFAF7] py-2 rounded-lg">Annual: $7,490/yr (2 mos free)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">What Every Member Gets</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#E2E4E1] rounded-xl p-8">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Weekly Office Hours</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Drop in and ask questions to our Salesforce experts. Perfect for quick "how do I do this?" moments that don't need a full project scope.
              </p>
            </div>
            <div className="border border-[#E2E4E1] rounded-xl p-8">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">TrailKit Library</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Access to our curated repository of nonprofit-specific templates, flows, and reports that you can install directly into your org.
              </p>
            </div>
            <div className="border border-[#E2E4E1] rounded-xl p-8">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Trail OS Installation</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Our optimized baseline configuration for nonprofits, ensuring your org follows best practices from day one.
              </p>
            </div>
            <div className="border border-[#E2E4E1] rounded-xl p-8">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Project Support</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Mid and Full tier members get matched with Guided Trail learners for real implementation work — overseen by our architects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">OUR PHILOSOPHY</div>
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-12">The Nine Pillars Framework</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[800px] mx-auto">
            {["Strategic Planning", "Board Governance", "Human Resources", "Volunteer Management", "Collaboration & Partnerships", "Fundraising", "Legal & Financial Management"].map((pillar, i) => (
              <div key={i} className="bg-white border border-[#E2E4E1] p-6 rounded-xl flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-[#4A4F4D] h-[100px]">
                {pillar}
              </div>
            ))}
            <div className="bg-[#2F6B3F] text-white border border-[#2F6B3F] p-6 rounded-xl flex items-center justify-center font-['Poppins'] font-bold text-[18px] h-[100px] shadow-lg transform scale-105 z-10">
              Technology
            </div>
            <div className="bg-white border border-[#E2E4E1] p-6 rounded-xl flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-[#4A4F4D] h-[100px]">
              Marketing
            </div>
          </div>
          <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-2xl mx-auto mt-12">
            Technology is just one pillar of a healthy nonprofit — but it supports all the others. We fortify your tech pillar so you can focus on the mission.
          </p>
        </div>
      </section>
    </div>
  );
}
