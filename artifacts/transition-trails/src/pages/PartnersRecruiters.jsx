import { useEffect } from "react";
import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";

const DIFFERENTIATOR_CARDS = [
  {
    accent: "#2F6B3F",
    icon: "🗂️",
    title: "Real deliverables. Real client names.",
    body: "TT graduates have worked on real Salesforce implementations for real nonprofit organizations — not sandbox exercises. Every graduate has documented deliverables: user stories, release notes, test results, and post-production validation records. A hiring manager can review the actual work, not just the certification.",
  },
  {
    accent: "#2F6F7E",
    icon: "⚙️",
    title: "CI/CD pipeline experience.",
    body: "Trail of Mastery graduates have worked inside a professional CI/CD pipeline — Salesforce DevOps Center and GitHub. They understand sandbox discipline, version control, pull request approval processes, and deployment gates. This is experience most certified admins have never had.",
  },
  {
    accent: "#2F6B3F",
    icon: "🧭",
    title: "RESOLVE methodology training.",
    body: "Every TT graduate is trained in RESOLVE — TT's proprietary delivery methodology covering requirements, solution design, build, testing, and post-production validation. They arrive knowing how professional software delivery works — not just how to configure Salesforce.",
  },
  {
    accent: "#2F6F7E",
    icon: "👥",
    title: "Team role experience.",
    body: "Trail of Mastery graduates have worked in defined team roles — BA, PO, Admin, Advanced Admin, or Solutions Consultant — delivering solutions alongside other professionals. They understand handoffs, approval gates, and cross-role dependencies. They are immediately useful on a real Salesforce team.",
  },
];

const BENEFITS = [
  {
    icon: "📋",
    title: "Graduate pipeline access",
    body: "Access to TT graduates who have opted into the recruiter network — available to any TT program graduate regardless of membership status. Candidates have self-selected into visibility, so every profile represents someone actively open to opportunities.",
  },
  {
    icon: "🚀",
    title: "Advance cohort notification",
    body: "Partner recruiters receive notification when a TT cohort is graduating — before candidates begin their public job search. First access to freshly trained, actively looking talent.",
  },
  {
    icon: "🗂️",
    title: "Portfolio access — candidate consented",
    body: "TT graduates who opt into the network can make their portfolio available to partner recruiters — specific projects, what they built, what role they played, what the outcome was. Review actual work product before making first contact.",
  },
  {
    icon: "💬",
    title: "Coach reference — candidate consented",
    body: "With candidate consent, an advanced TT coach who worked directly with the candidate can provide a professional reference — what was observed during the program, how the candidate handled real challenges, and what role they are best suited for. More specific and more credible than a LinkedIn endorsement.",
  },
];

const CANDIDATE_PROFILES = [
  {
    icon: "🧭",
    title: "Career Starters",
    body: "Entry-level candidates who have earned their Salesforce certification through a structured program that included real project work. They are not just exam-ready — they have built something. Ideal for organizations looking to grow talent internally.",
  },
  {
    icon: "🎯",
    title: "Career Builders",
    body: "Certified Salesforce professionals who have completed advanced program work — including CI/CD pipeline experience, team delivery, and real client engagements. Ready to contribute to a Salesforce team from day one without extensive onboarding.",
  },
  {
    icon: "🔄",
    title: "Career Pivoters",
    body: "Professionals transitioning from other industries who bring significant prior career experience alongside their new Salesforce credentials. Many bring project management, client service, or domain expertise that makes them immediately effective in BA, PO, or consulting roles.",
  },
];

export default function PartnersRecruiters() {
  useEffect(() => {
    const handlerSrc = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261877200550050']",
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
        title="Recruiter Partnerships | Transition Trails | Salesforce Graduate Pipeline"
        description="Partner with Transition Trails to access a pipeline of vetted Salesforce graduates with real project experience, portfolio documentation, and professional methodology training. Free for recruiters."
        path="/partners/recruiters"
      />

      {/* Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 55%, #2F6F7E 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners/recruiters" className="hover:text-white/80 transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white/80">For Recruiters</span>
          </div>

          <div className="max-w-[780px]">
            <div
              className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
              style={{ color: "#7FAFC6", background: "rgba(127,175,198,0.15)", border: "1px solid rgba(127,175,198,0.4)" }}
            >
              RECRUITER PARTNERSHIPS  ·  VETTED CANDIDATES  ·  REAL PROJECT EXPERIENCE
            </div>

            <h1 className="font-['Poppins'] font-bold text-[52px] text-white tracking-[-1.5px] leading-[1.1] mb-5">
              We train them. You hire them. They're ready.
            </h1>

            <p className="font-['Poppins'] font-semibold text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
              TT graduates don't just have certifications. They have documented deliverables from real client engagements.
            </p>

            <div className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4 mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
              <p>Transition Trails is a 501(c)(3) nonprofit that trains Salesforce professionals through real project work with real nonprofit clients. Every graduate has completed a hands-on program governed by a professional delivery methodology — and left with a portfolio an employer can actually evaluate.</p>
              <p>We are building a recruiter partner network. If you place Salesforce talent and want access to a pipeline of candidates who have proven they can do the work — not just passed an exam — we want to talk.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="h-[52px] px-7 rounded-[8px] bg-[#F5A623] hover:bg-[#D4890A] text-[#2A2E2C] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
              >
                Get in Touch →
              </a>
              <a
                href="#graduates"
                className="h-[52px] px-7 rounded-[8px] border border-white text-white hover:bg-white/10 font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
              >
                See what graduates bring ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why TT Graduates Are Different */}
      <section id="graduates" className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE TT DIFFERENCE</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Certified. Coached. Proven.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              Every Salesforce ecosystem has candidates with certifications. Far fewer have what TT graduates bring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DIFFERENTIATOR_CARDS.map(card => (
              <div
                key={card.title}
                className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden"
                style={{ borderTop: `5px solid ${card.accent}` }}
              >
                <div className="p-7">
                  <div className="text-[28px] mb-3">{card.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">{card.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Recruiter Partners Get */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">PARTNER BENEFITS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">What the TT recruiter network offers.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              Recruiter partnerships are free. TT's model is employer-supported — we believe the relationship between recruiters and TT graduates should have zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {BENEFITS.map(b => (
              <div
                key={b.title}
                className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden p-7"
                style={{ borderLeft: "4px solid #2F6B3F" }}
              >
                <div className="text-[24px] mb-3">{b.icon}</div>
                <h3 className="font-['Open_Sans'] font-bold text-[15px] text-[#2F6B3F] mb-2">{b.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{b.body}</p>
              </div>
            ))}
          </div>

          {/* Coming Soon box */}
          <div
            className="rounded-xl p-6 flex gap-4 items-start"
            style={{ background: "#FEF3DB", border: "1px solid #F5A623" }}
          >
            <span className="text-[24px] shrink-0">📌</span>
            <div>
              <p className="font-['Open_Sans'] font-bold text-[14px] text-[#2A2E2C] mb-1">Explorer's Trail Job Board — Coming Soon</p>
              <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65] mb-1">
                Partner recruiters will be able to post opportunities directly inside the Explorer's Trail member community — reaching candidates who are actively building toward job readiness. We are building this now. Get in early.
              </p>
              <p className="font-['Open_Sans'] italic text-[12px] text-[#4A4F4D]">Express interest in early access when you contact us below.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: A Note on Candidate Assessments */}
      <section className="bg-white py-16 px-5 md:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">HOW WE WORK WITH RECRUITERS</div>
          <h2 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-6 text-left">Portfolio verification and coach reference — not formal assessment.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] space-y-4 text-left">
            <p>TT provides portfolio verification and coach references — not formal candidate assessments or comparative rankings. Everything we share about a candidate is shared with their explicit consent and reflects what was directly observed during their program.</p>
            <p>We are a training and workforce development organization, not a staffing agency. Our role in the placement process is to ensure that the candidates in our network are well represented and that the recruiters in our network have the information they need to make good matches.</p>
            <p>If you have questions about how this works in practice, we welcome that conversation.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Who TT Graduates Are */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>THE CANDIDATE PROFILE</div>
            <h2 className="font-['Poppins'] font-bold text-[28px] text-white">Three types of candidates. One common thread.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CANDIDATE_PROFILES.map(p => (
              <div
                key={p.title}
                className="rounded-xl p-7"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="text-[28px] mb-4">{p.icon}</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-3">{p.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.70)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Contact */}
      <section id="contact" className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">GET IN TOUCH</div>
          <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Let's talk about what a partnership looks like.</h2>
          <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[600px] mx-auto leading-[1.65] mb-12">
            We are in the early stages of building our recruiter partner network and are selective about who we work with. If you place Salesforce talent and believe your candidates and your clients would benefit from access to TT's graduate pipeline, we would like to hear from you.
          </p>

          <div className="bg-white border border-[#E2E4E1] rounded-xl p-10 max-w-[600px] mx-auto text-left">
            <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-3">Recruiter Partnership Inquiry</h3>
            <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mb-6">
              Fill out the form below and we will be in touch within 3 business days.
            </p>
            <iframe
              id="JotFormIFrame-261877200550050"
              title="TT Recruiter Partnership Inquiry"
              onLoad={() => window.parent.scrollTo(0, 0)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261877200550050"
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
      </section>
    </div>
  );
}
