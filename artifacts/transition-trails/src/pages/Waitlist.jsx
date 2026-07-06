import { useEffect } from "react";
import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";

const PROGRAM_PILLS = [
  { name: "Explorer's Trail", tier: "Awareness", color: "#7FAFC6", bg: "#E8F4F8" },
  { name: "Foundations Trail", tier: "Entry", color: "#2F6B3F", bg: "#E6F3EA" },
  { name: "Guided Trail", tier: "Bridge", color: "#1E4A2A", bg: "#E6F3EA" },
  { name: "Trail of Mastery", tier: "Advancement", color: "#2F6F7E", bg: "#E0F0F3" },
  { name: "Digital Compass", tier: "Nonprofit", color: "#2F6F7E", bg: "#E0F0F3" },
];

export default function Waitlist() {
  useEffect(() => {
    const handlerSrc = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";

    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261684070494058']",
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
        title="Join the Waitlist | Transition Trails"
        description="Reserve your spot in a Transition Trails program. All five programs are building their first cohorts. One form. All trails."
        path="/waitlist"
      />

      {/* Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{
          background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 55%, #2F6F7E 100%)",
        }}
      >
        <div className="max-w-[860px] mx-auto text-center">
          <div className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
            JOIN THE TRAIL
          </div>

          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.1] mb-6">
            Reserve your spot.
          </h1>

          <p
            className="font-['Open_Sans'] text-[18px] leading-[1.6] mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            All five programs are currently building their first cohorts. Join the waitlist and
            we'll reach out when your program is ready to launch. One form. All trails.
          </p>

          {/* Program pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {PROGRAM_PILLS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-['Open_Sans'] text-[13px] font-semibold"
                style={{ backgroundColor: p.bg, color: p.color }}
              >
                <span
                  className="text-[10px] uppercase tracking-[1px] font-bold opacity-70"
                  style={{ color: p.color }}
                >
                  {p.tier}
                </span>
                <span>·</span>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JotForm embed */}
      <section className="bg-white py-[60px] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-3 text-center">
            PROGRAM WAITLIST
          </div>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] text-center mb-8 max-w-xl mx-auto">
            Select your program of interest in the form. We'll be in touch with cohort details,
            pricing, and scholarship availability.
          </p>

          <iframe
            id="JotFormIFrame-261684070494058"
            title="Join the Trail — Program Waitlist"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/261684070494058"
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

          <p className="font-['Open_Sans'] text-[13px] text-[#6B7280] text-center mt-6">
            Your information is only used to notify you about Transition Trails programs. We do not
            sell or share your data.{" "}
            <Link href="/privacy-policy" className="text-[#2F6B3F] hover:underline">
              See our Privacy Policy.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
