import { Clock, Users, BookOpen, Presentation } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function Volunteer() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Volunteer | Join the Trail Crew | Transition Trails"
        description="Help build Salesforce career pathways. Community Advocate, Technical Volunteer, Curriculum Contributor, and Board roles available. Apply on Idealist."
        path="/volunteer"
      />
      <section className="bg-[#2A2E2C] pt-24 pb-20 px-5 text-center border-b border-white/10">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white mb-6">Join the trail crew.</h1>
          <p className="font-['Open_Sans'] text-[20px] text-white/80 max-w-2xl mx-auto">
            Transition Trails runs on people who believe in the mission.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-[#2F6B3F] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Community Advocate</h3>
              <div className="inline-flex items-center gap-1 bg-[#E6F3EA] text-[#2F6B3F] px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider mb-4 w-fit">
                <Clock className="w-3 h-3" /> 1–2 hrs/week
              </div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6] mb-8 flex-grow">
                Help us spread the word. Share our story, connect us with potential nonprofit clients, and moderate community discussions. All backgrounds welcome.
              </p>
              <CTAButton href={LINKS.volunteer} variant="outline" className="w-full text-[#2A2E2C] border-[#E2E4E1] hover:bg-[#FAFAF7]" external>
                Apply on Idealist
              </CTAButton>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <Presentation className="w-8 h-8 text-[#2F6F7E] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Digital Compass Volunteer</h3>
              <div className="inline-flex items-center gap-1 bg-[#E0F0F3] text-[#2F6F7E] px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider mb-4 w-fit">
                <Clock className="w-3 h-3" /> 4–6 hrs/week
              </div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6] mb-8 flex-grow">
                Provide technical support and mentorship to our nonprofit clients. Salesforce experience required. Perfect for employed professionals looking to give back.
              </p>
              <CTAButton href={LINKS.volunteer} variant="outline" className="w-full text-[#2A2E2C] border-[#E2E4E1] hover:bg-[#FAFAF7]" external>
                Apply on Idealist
              </CTAButton>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <BookOpen className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Curriculum Contributor</h3>
              <div className="inline-flex items-center gap-1 bg-[#F5A623]/20 text-[#D4890A] px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider mb-4 w-fit">
                <Clock className="w-3 h-3" /> Flexible
              </div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6] mb-8 flex-grow">
                Help us build out the TrailKit Library and design new Trail Missions. Share your specialized Salesforce knowledge with the next generation.
              </p>
              <CTAButton href={LINKS.volunteer} variant="outline" className="w-full text-[#2A2E2C] border-[#E2E4E1] hover:bg-[#FAFAF7]" external>
                Apply on Idealist
              </CTAButton>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-[#4A4F4D] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Board & Advisory</h3>
              <div className="inline-flex items-center gap-1 bg-[#E2E4E1] text-[#4A4F4D] px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider mb-4 w-fit">
                <Clock className="w-3 h-3" /> 5–8 hrs/month
              </div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6] mb-8 flex-grow">
                Provide strategic guidance to the leadership team. We're looking for individuals with nonprofit governance, legal, or major fundraising experience.
              </p>
              <CTAButton href={LINKS.volunteer} variant="outline" className="w-full text-[#2A2E2C] border-[#E2E4E1] hover:bg-[#FAFAF7]" external>
                Apply on Idealist
              </CTAButton>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-5 text-center">
        <div className="max-w-[800px] mx-auto bg-[#F5A623] p-12 rounded-2xl shadow-lg">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">Ready to make an impact?</h2>
          <p className="font-['Open_Sans'] text-[18px] text-[#2A2E2C]/80 mb-8 max-w-xl mx-auto">
            We manage all our volunteer applications through Idealist to ensure a smooth onboarding process.
          </p>
          <CTAButton href={LINKS.volunteer} variant="dark" size="lg" className="px-10" external>
            Apply on Idealist
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
