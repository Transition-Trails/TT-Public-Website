import { useEffect } from "react";
import { Building, GraduationCap, Link2, BookOpen } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";

export default function Donate() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="givelively.org/widgets"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://secure.givelively.org/widgets/branded_donation/transition-trails.js?show_suggested_amount_labels=false&show_luxury_upgrade=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
            <div className="bg-white border border-[#2F6B3F]/30 p-8 rounded-2xl">
              <GraduationCap className="w-8 h-8 text-[#2F6B3F] mb-4" />
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Fund a Trail Forward Scholarship Seat</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6] mb-4">
                $1,547 covers the full cost of one Guided Trail seat for a learner from a historically underserved population in technology. Veterans, women, underrepresented minorities, individuals facing economic barriers — your gift puts one person in that seat.
              </p>
              <a href="/scholarships" className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6B3F] hover:underline">
                Learn about the Trail Forward Scholarship →
              </a>
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

        </div>
      </section>

      {/* Give Lively donation widget section */}
      <section className="bg-white py-20 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[680px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "#2F6B3F" }}>
            MAKE A GIFT TODAY
          </div>
          <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-6" style={{ letterSpacing: "-0.5px" }}>
            Every dollar goes directly to the mission.
          </h2>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mb-8">
            Transition Trails is a 501(c)(3) nonprofit — every donation is tax-deductible and goes directly to program delivery, coaching, and scholarship funding.
            <br /><br />
            No large overhead. No executive salaries inflated by donations. Just a small founding team building something that matters, one cohort at a time.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Monthly giving sustains our coaching and program operations",
              "One-time gifts fund scholarship seats and program development",
              "Every amount moves the mission forward",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="font-bold text-[#2F6B3F] mt-0.5">✓</span>
                <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-['Open_Sans'] italic text-[12px] text-[#8C8882] mb-4">
            Transition Trails · EIN 88-2746412 · 501(c)(3) Public Charity · Effective May 15, 2022<br />
            Donations are tax-deductible to the extent permitted by law.
          </p>

          <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-10">
            💡 Double your impact — ask if your employer offers corporate donation matching.
          </p>

          <div
            data-widget-src="https://secure.givelively.org/donate/transition-trails?ref=sd_widget"
            id="give-lively-widget"
            className="gl-branded-donation-widget"
            style={{ width: "100%", minHeight: "400px" }}
          />
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
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl text-center flex flex-col">
              <div className="flex-1">
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Volunteer</h4>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Time is just as valuable as funding.</p>
              </div>
              <CTAButton href="/volunteer" variant="outline" className="w-full border-[#E2E4E1] text-[#2A2E2C]">View Roles</CTAButton>
            </div>
            <div className="bg-[#FAFAF7] border border-[#E2E4E1] p-6 rounded-xl text-center flex flex-col">
              <div className="flex-1">
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Partner</h4>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Corporate or community partnerships.</p>
              </div>
              <CTAButton href="/contact" variant="outline" className="w-full border-[#E2E4E1] text-[#2A2E2C]">Contact Us</CTAButton>
            </div>
            <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 p-6 rounded-xl text-center flex flex-col">
              <div className="flex-1">
                <h4 className="font-['Poppins'] font-bold text-[18px] text-[#1E4A2A] mb-2">Employer Sponsorship</h4>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Contact us — pricing in progress for employer-sponsored Trail of Mastery seats.</p>
              </div>
              <CTAButton href="/contact" variant="outline" className="w-full border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#2F6B3F] hover:text-white">Inquire</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
