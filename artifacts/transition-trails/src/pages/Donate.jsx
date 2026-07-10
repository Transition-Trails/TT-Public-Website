import { useEffect } from "react";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";
import { Check } from "lucide-react";

export default function Donate() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="givelively.org/widgets"]');
    if (existingScript) {
      existingScript.remove();
    }

    const gl = document.createElement("script");
    gl.src =
      "https://secure.givelively.org/widgets/simple_donation/transition-trails.js?show_suggested_amount_buttons=true&show_in_honor_of=false&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250";
    gl.async = true;
    document.getElementsByTagName("head")[0].appendChild(gl);

    return () => {
      const script = document.querySelector('script[src*="givelively.org/widgets/simple_donation"]');
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Donate | Support Transition Trails | 501(c)(3) EIN 88-2746412"
        description="Your gift funds scholarship seats, nonprofit technology support, and Salesforce career pathways. Transition Trails is a 501(c)(3) nonprofit. EIN: 88-2746412."
        path="/donate"
      />

      {/* Give Lively donation widget section */}
      <section className="bg-white py-20 px-5">
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
            Help fund scholarship access for career-changing learners. We are currently forming Cohort 1, and as the program launches, we will report scholarship and project outcomes transparently.
            <br /><br />
            No large overhead. Just a small founding team building something that matters, one cohort at a time.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "$1,547 funds one complete scholarship seat for a career-changing learner",
              "Your support helps learners gain supervised, real-world Salesforce experience while expanding nonprofit capacity",
              "Monthly giving sustains our coaching and program operations",
              "As Cohort 1 launches, we will report scholarship and project outcomes transparently",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />
                <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-['Open_Sans'] italic text-[12px] text-[#8C8882] mb-4">
            Transition Trails · EIN 88-2746412 · 501(c)(3) Public Charity · Effective May 15, 2022<br />
            1228 Hollywood Ave, Dallas, TX 75208<br />
            Donations are tax-deductible to the extent permitted by law.
          </p>

          <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-10">
            💡 Double your impact — ask if your employer offers corporate donation matching.
          </p>

          <div id="give-lively-widget" className="gl-simple-donation-widget"></div>
        </div>
      </section>

      {/* Nonprofit impact testimonial */}
      <section className="bg-white py-20 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto flex flex-col items-center">

          <div className="bg-[#E0F0F3] border border-[#2F6F7E]/20 rounded-2xl p-10 max-w-[800px] mb-20 w-full relative">
            <div className="absolute top-4 left-6 font-['Poppins'] text-[80px] text-[#2F6F7E]/20 leading-none select-none">"</div>
            <p className="font-['Poppins'] font-medium text-[18px] text-[#1a3440] leading-[1.65] mb-6 relative z-10">
              Transition Trails Salesforce Experts go beyond! After working with the team, our productivity and data accuracy soared — and we felt supported every step of the way.
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-[44px] h-[44px] rounded-full bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[15px]">HP</div>
              <div>
                <div className="font-['Poppins'] font-semibold text-[14px] text-[#2A2E2C]">Hartford Promises</div>
                <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">Nonprofit Partner · Digital Compass Member · Hartford, CT</div>
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
