import { useEffect } from "react";
import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";

export default function BoardApplication() {
  useEffect(() => {
    const handlerSrc = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261884676222061']",
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
        title="Express Board Interest | Transition Trails"
        description="Express your interest in joining the Transition Trails board. We review every application and respond within 5 business days. Recruiting on a rolling basis."
        path="/board-application"
      />

      {/* Hero */}
      <section
        className="pt-24 pb-16 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 100%)" }}
      >
        <div className="max-w-[860px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/board" className="hover:text-white/80 transition-colors">Join Our Board</Link>
            <span>/</span>
            <span className="text-white/80">Express Interest</span>
          </div>

          <div
            className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
            style={{ color: "#F5A623", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
          >
            BOARD MEMBER INTEREST · TRANSITION TRAILS
          </div>

          <h1 className="font-['Poppins'] font-bold text-[44px] text-white tracking-[-1.5px] leading-[1.1] mb-5">
            Express your interest in joining the TT board.
          </h1>

          <p className="font-['Open_Sans'] text-[16px] leading-[1.6] mb-7 max-w-[640px]" style={{ color: "rgba(255,255,255,0.75)" }}>
            Board recruitment is led by our founding team. We review every application and respond within 5 business days to schedule an introductory conversation. There is no formal deadline — we are recruiting on a rolling basis.
          </p>

          <div className="flex flex-wrap items-center gap-2 font-['Open_Sans'] font-semibold text-[13px]" style={{ color: "rgba(255,255,255,0.80)" }}>
            <span>Virtual board meetings</span>
            <span>·</span>
            <span>5–8 hrs/month</span>
            <span>·</span>
            <span>2-year initial term</span>
          </div>
        </div>
      </section>

      {/* JotForm embed */}
      <section className="bg-white py-[60px] px-5">
        <div className="max-w-[860px] mx-auto">
          <iframe
            id="JotFormIFrame-261884676222061"
            title="TT Board Member Interest"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/261884676222061"
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

          <p className="font-['Open_Sans'] text-[13px] text-[#8C8882] italic text-center mt-6">
            Questions? Email hello@transitiontrails.org · Board inquiries are handled directly by Angela Landrith, Co-Founder & CEO
          </p>

          <div className="text-center mt-6">
            <Link
              href="/board"
              className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6B3F] hover:underline"
            >
              ← Back to Join Our Board
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
