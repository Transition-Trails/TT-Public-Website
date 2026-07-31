import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";

export default function BoardApplication() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Express Board Interest | Transition Trails"
        description="Express your interest in joining the Transition Trails board. We review every application and respond within 5 business days. Recruiting on a rolling basis."
        path="/board-application"
      />

      {/* Hero */}
      <section className="bg-gradient-green pt-24 pb-16 px-5 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/board" className="hover:text-white/80 transition-colors">Join Our Board</Link>
            <span>/</span>
            <span className="text-white/80">Express Interest</span>
          </div>

          <div
            className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7 text-sun-amber"
            style={{ background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
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

      {/* CTA */}
      <section className="bg-white py-[60px] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6 py-12">
            <p className="font-['Open_Sans'] text-[15px] text-cool-gray leading-relaxed">Share your background, experience, and interest in board service. A member of the TT team will be in touch within 5 business days.</p>
            <a href="https://form.jotform.com/261884676222061" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-trail-green text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200">Submit Board Interest Form →</a>
            <p className="font-['Open_Sans'] text-[12px] text-cool-gray italic">Questions? Email <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline">hello@transitiontrails.org</a></p>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/board"
              className="font-['Open_Sans'] font-semibold text-[13px] text-trail-green hover:underline"
            >
              ← Back to Join Our Board
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
