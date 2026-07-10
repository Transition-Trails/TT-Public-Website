import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";
import { Check } from "lucide-react";

export default function NonprofitAssessment() {

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Free Nonprofit Salesforce Assessment | Digital Compass | Transition Trails"
        description="Book a free Salesforce assessment (up to 1 hour) with the Transition Trails team. No pitch. No obligation. Just clarity on where your org stands and what would actually help."
        path="/nonprofit-assessment"
      />

      {/* Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{
          background: "linear-gradient(135deg, #1E4F5C 0%, #2F6F7E 100%)",
        }}
      >
        <div className="max-w-[860px] mx-auto text-center">
          <div className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-4 backdrop-blur-sm">
            FOR NONPROFITS
          </div>

          <div className="font-['Open_Sans'] font-bold text-[13px] tracking-[2px] uppercase text-[#F5A623] mb-5">
            DIGITAL COMPASS
          </div>

          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.1] mb-6">
            Get your free Salesforce assessment.
          </h1>

          <p
            className="font-['Open_Sans'] text-[18px] leading-[1.6] mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Not sure where to start with Salesforce? Book a free assessment (up to 1 hour) with the
            Transition Trails team. No pitch. No obligation. Just clarity on where your org stands
            and what would actually help.
          </p>

          {/* Reassurance points */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            {[
              "Free — no cost, no commitment",
              "Up to 1 hour with a real expert",
              "Specific to your org's Salesforce setup",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <Check size={16} color="#F5A623" className="shrink-0" />
                <span className="font-['Open_Sans'] text-[15px] text-white/90">{point}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-[60px] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6 py-12">
            <p className="font-['Open_Sans'] text-[15px] text-[#6B7280] leading-relaxed">Tell us about your organization and your current Salesforce situation. A member of the TT team will be in touch within 2 business days to schedule your free session.</p>
            <a href="https://form.jotform.com/261683366693066" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#2F6B3F] text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-[#1E4A2A] transition-colors duration-200">Book Your Free Assessment →</a>
            <p className="font-['Open_Sans'] text-[12px] text-[#6B7280] italic">Free — no cost, no commitment. Up to 1 hour with a real expert.</p>
          </div>

          {/* What happens next */}
          <div className="mt-14 bg-[#F8FAFA] border border-[#D0E8ED] rounded-2xl p-8 md:p-10">
            <h2 className="font-['Poppins'] font-bold text-[22px] text-[#2A2E2C] mb-8 text-center">
              What happens next?
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: "1",
                  title: "Submit the form",
                  desc: "Your submission is reviewed within 1 business day.",
                },
                {
                  step: "2",
                  title: "Schedule your session",
                  desc: "A member of the TT team will reach out to book your free assessment call (up to 1 hour).",
                },
                {
                  step: "3",
                  title: "Get your roadmap",
                  desc:
                    "Leave with a clear picture of your Salesforce situation and practical next steps — at no cost.",
                },
              ].map((item) => (
                <div key={item.step} className="flex-1 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#2F6F7E] text-white font-['Poppins'] font-bold text-[16px] flex items-center justify-center mb-4 shrink-0">
                    {item.step}
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
