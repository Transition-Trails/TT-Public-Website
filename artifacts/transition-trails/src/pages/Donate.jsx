import { Building, GraduationCap, Link2, BookOpen } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";

export default function Donate() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Donate | Support Transition Trails | 501(c)(3) EIN 88-2746412"
        description="Your gift funds scholarship seats, nonprofit technology support, and Salesforce career pathways. Transition Trails is a 501(c)(3) nonprofit. EIN: 88-2746412."
        path="/donate"
      />

      <section className="bg-gradient-to-br from-[#2F6B3F] to-[#2F6F7E] pt-24 pb-20 px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white mb-6">Fund the journey.</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-['Open_Sans'] text-[14px] px-4 py-2 rounded-lg backdrop-blur-sm">
            EIN: 88-2746412 <span className="text-white/40">•</span> 501(c)(3) Public Charity <span className="text-white/40">•</span> Effective May 15, 2022
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-2xl">
              <GraduationCap className="w-8 h-8 text-[#2F6B3F] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Fund a Scholarship Seat</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                $497 covers one Foundations Trail scholarship.<br/>
                $1,547 covers one Guided Trail scholarship.
              </p>
            </div>

            <div className="bg-white border border-[#E2E4E1] p-8 rounded-2xl">
              <Building className="w-8 h-8 text-[#2F6F7E] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Support Digital Compass</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Help us expand our nonprofit Salesforce support services to more organizations across the country.
              </p>
            </div>

            <div className="bg-white border border-[#E2E4E1] p-8 rounded-2xl">
              <Link2 className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Nonprofit Client Matching</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Sponsor the pairing of a Guided Trail learner with a nonprofit client, covering the overhead of the implementation.
              </p>
            </div>

            <div className="bg-white border border-[#E2E4E1] p-8 rounded-2xl">
              <BookOpen className="w-8 h-8 text-[#1E4A2A] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Program Development</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Invest in our curriculum updates, Sandbox provisioning, and platform infrastructure.
              </p>
            </div>
          </div>

          {/* Donate CTA — secure online giving coming soon */}
          <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-2xl p-8 md:p-10 max-w-[640px] mx-auto text-center">
            <div className="font-['Poppins'] font-bold text-[22px] text-[#1E4A2A] mb-3">Make a gift today</div>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] mb-6 leading-[1.6]">
              Secure online giving is coming soon. To donate now, email us and we will send giving instructions within one business day.
            </p>
            <a
              href="mailto:hello@transitiontrails.org?subject=Donation Inquiry — Transition Trails"
              className="inline-flex items-center justify-center bg-[#F5A623] hover:bg-[#D4890A] text-[#2A2E2C] font-['Open_Sans'] font-semibold text-[16px] h-[52px] px-10 rounded-lg transition-colors"
            >
              Email hello@transitiontrails.org
            </a>
            <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]/70 mt-4">
              Transition Trails is a 501(c)(3) public charity — EIN 88-2746412. Donations are tax-deductible to the extent permitted by law.
            </p>
          </div>
        </div>
      </section>

      {/* Nonprofit impact testimonial */}
      <section className="bg-white py-20 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto flex flex-col items-center">

          <div className="bg-[#E0F0F3] border border-[#2F6F7E]/20 rounded-2xl p-10 max-w-[800px] mb-20 w-full relative">
            <div className="absolute top-4 left-6 font-['Poppins'] text-[80px] text-[#2F6F7E]/20 leading-none select-none">"</div>
            <p className="font-['Poppins'] font-medium text-[18px] text-[#1a3440] leading-[1.65] mb-6 relative z-10">
              Before Digital Compass, our Salesforce org was inherited from a previous consultant and no one on our team fully understood it. We had data we couldn't trust and reports that made no sense. The Transition Trails team didn't just fix it — they taught our staff how to maintain it going forward. For a nonprofit our size, that kind of ongoing technical support was completely unthinkable at any price we could afford before.
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-[44px] h-[44px] rounded-full bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[15px]">HP</div>
              <div>
                <div className="font-['Poppins'] font-semibold text-[14px] text-[#2A2E2C]">Hartford Promises</div>
                <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">Digital Compass Member · Hartford, CT</div>
              </div>
            </div>
          </div>

          <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-8">Other ways to give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl text-center">
              <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Volunteer</h4>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Time is just as valuable as funding.</p>
              <CTAButton href="/volunteer" variant="outline" className="w-full border-[#E2E4E1] text-[#2A2E2C]">View Roles</CTAButton>
            </div>
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl text-center">
              <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Partner</h4>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Corporate or community partnerships.</p>
              <CTAButton href="/contact" variant="outline" className="w-full border-[#E2E4E1] text-[#2A2E2C]">Contact Us</CTAButton>
            </div>
            <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 p-6 rounded-xl text-center">
              <h4 className="font-['Poppins'] font-bold text-[18px] text-[#1E4A2A] mb-2">Employer Sponsorship</h4>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Send 3+ employees to Trail of Mastery at $1,597/seat (vs $1,997).</p>
              <CTAButton href="/contact" variant="outline" className="w-full border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#2F6B3F] hover:text-white">Inquire</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
