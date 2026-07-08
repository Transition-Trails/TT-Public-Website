import { useEffect } from "react";
import { Link } from "wouter";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";

export default function Contact() {
  useEffect(() => {
    const handlerSrc = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261877821935066']",
          "https://form.jotform.com/"
        );
      }
    };
    const existing = document.querySelector(`script[src="${handlerSrc}"]`);
    if (existing) {
      callHandler();
    } else {
      const s = document.createElement("script");
      s.src = handlerSrc;
      s.async = true;
      s.onload = callHandler;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Contact Transition Trails | Get in Touch | Dallas TX"
        description="Questions about Salesforce programs, nonprofit services, or partnerships? Reach the Transition Trails team in Dallas, TX."
        path="/contact"
      />

      <section className="bg-[#2A2E2C] pt-24 pb-16 px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white">Get in touch.</h1>
          <p className="font-['Open_Sans'] text-[18px] text-white/70 mt-4">
            We're a small team and we respond personally — usually within one business day.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-16 px-5">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12">

          {/* Left Column */}
          <div className="flex-[2]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white border border-[#E2E4E1] p-6 rounded-xl">
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2F6B3F] mb-2">For Learners</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">Questions about programs, pricing, or enrollment</p>
              </div>
              <Link href="/nonprofit-assessment" className="bg-white border border-[#E2E4E1] p-6 rounded-xl block hover:border-[#2F6F7E] transition-colors">
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2F6F7E] mb-2">For Nonprofits →</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">Book a free Digital Compass assessment</p>
              </Link>
              <div className="bg-white border border-[#E2E4E1] p-6 rounded-xl">
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#F5A623] mb-2">For Partners & Employers</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">Employer sponsorships, corporate partnerships</p>
              </div>
              <div className="bg-white border border-[#E2E4E1] p-6 rounded-xl">
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">General</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">Anything else — we're here</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-[#E2E4E1] rounded-2xl p-8 shadow-sm">
              <h2 className="font-['Poppins'] font-bold text-[22px] text-[#2A2E2C] mb-6">Send us a message</h2>
              <iframe
                id="JotFormIFrame-261877821935066"
                title="Contact Transition Trails"
                onLoad={() => window.parent.scrollTo(0, 0)}
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/261877821935066"
                frameBorder="0"
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: "539px",
                  border: "none",
                  display: "block",
                }}
                scrolling="no"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#2F6B3F] text-white flex items-center justify-center font-['Poppins'] font-bold text-[20px] mb-4">
                AL
              </div>
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-6">Let's talk strategy.</h3>
              <CTAButton href={LINKS.angelaCalendar} variant="amber" className="w-full" external>
                Schedule Time With Angela
              </CTAButton>
            </div>

            <div className="bg-[#2F6F7E] text-white p-8 rounded-2xl">
              <h3 className="font-['Poppins'] font-bold text-[18px] mb-6">Direct Channels</h3>
              <div className="space-y-4 font-['Open_Sans'] text-[15px]">
                <div>
                  <div className="text-white/60 text-[12px] uppercase tracking-wider font-semibold mb-1">General Inquiries</div>
                  <a href="mailto:hello@transitiontrails.org" className="hover:underline">hello@transitiontrails.org</a>
                </div>
                <div>
                  <div className="text-white/60 text-[12px] uppercase tracking-wider font-semibold mb-1">Nonprofit Services</div>
                  <a href="mailto:kim@transitiontrails.org" className="hover:underline">kim@transitiontrails.org</a>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="text-white/60 text-[12px] uppercase tracking-wider font-semibold mb-1">Mailing Address</div>
                  <div>1228 Hollywood Ave<br />Dallas, TX 75208</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E2E4E1] p-8 rounded-2xl">
              <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-6">Social</h3>
              <div className="flex flex-col gap-4 font-['Open_Sans'] text-[15px]">
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#4A4F4D] hover:text-[#0077b5] transition-colors">
                  <FaLinkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#4A4F4D] hover:text-[#1877f2] transition-colors">
                  <FaFacebook className="w-5 h-5" /> Facebook
                </a>
                <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#4A4F4D] hover:text-[#ff6719] transition-colors">
                  <div className="w-5 h-5 bg-current rounded-sm flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">S</span>
                  </div>
                  Substack
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
