import { useEffect } from "react";
import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";
import { GraduationCap, Users, Compass, Settings, ClipboardList, Check } from "lucide-react";

const PARTNERSHIP_MODELS = [
  {
    accent: "#2F6B3F",
    icon: <GraduationCap size={24} color="#2F6B3F" />,
    title: "Individual Sponsored Seats",
    body: "Sponsor one or more of your employees or external candidates through any TT program. Employer-sponsored pricing is available for groups of 3 or more seats across Trail of Mastery tracks. We provide the invoice language your HR or L&D team needs to get this approved internally as a professional development investment.",
    pill: "L&D budget eligible · Invoice provided",
    cta: { label: "See program pricing →", href: "/programs" },
  },
  {
    accent: "#2F6F7E",
    icon: <Users size={24} color="#2F6F7E" />,
    title: "Private Employer Cohort",
    body: "Bring a group of your employees through a dedicated TT cohort — a private program run exclusively for your team. Ideal for organizations that want to upskill a Salesforce team in a specific track (Admin, BA, PO, Advanced Admin, or Solutions Consultant) with cohort privacy and scheduling flexibility.\n\nPrivate cohort pricing and scheduling are discussed during a partnership conversation — contact us to explore what this looks like for your team.",
    pill: "Custom pricing · Custom scheduling",
  },
  {
    accent: "#1E4A2A",
    icon: <Users size={24} color="#1E4A2A" />,
    title: "Workforce Development Partnership",
    body: "Organizations committed to expanding technology access for underserved communities can partner with TT to sponsor scholarship seats, co-fund cohorts for specific populations, or structure a formal workforce development pipeline from your organization into Salesforce careers.\n\nThis model is particularly well-suited for nonprofits, government agencies, community foundations, and corporations with DEI workforce commitments. We will work with you to structure a partnership that meets your reporting and impact requirements.",
    pill: "DEI reporting · Impact documentation · Grant-eligible",
  },
];

const VALUE_CARDS = [
  {
    icon: <Compass size={24} color="#2F6B3F" />,
    title: "Professional delivery methodology",
    body: "Every TT program teaches RESOLVE — a structured delivery framework covering the full lifecycle from requirements through post-production validation. Your team arrives back with a shared professional language and methodology, not just new platform skills.",
  },
  {
    icon: <Settings size={24} color="#2F6B3F" />,
    title: "CI/CD and DevOps experience",
    body: "Trail of Mastery graduates have worked inside a professional CI/CD pipeline — Salesforce DevOps Center and GitHub. If your team is moving toward a DevOps model or already operates one, TT graduates arrive pipeline-ready.",
  },
  {
    icon: <ClipboardList size={24} color="#2F6B3F" />,
    title: "Real project portfolio",
    body: "Every TT graduate completes real project work — not simulations. Your sponsored employee returns with documented deliverables from real client engagements that demonstrate capability to any internal stakeholder.",
  },
  {
    icon: <Users size={24} color="#2F6B3F" />,
    title: "Team role clarity",
    body: "Trail of Mastery cohorts are built around real team composition — BA, PO, Admin, Advanced Admin, Solutions Consultant. If you are sponsoring multiple employees across different roles, they will learn how their roles interact within a professional delivery team.",
  },
];

export default function PartnersEmployers() {
  useEffect(() => {
    const handlerSrc = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261876908147066']",
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
        title="Employer Partnerships | Transition Trails | Salesforce Workforce Training"
        description="Sponsor employees through TT Salesforce programs, build a private cohort, or create a workforce development partnership. L&D budget eligible. Employer-sponsored pricing available."
        path="/partners/employers"
      />

      {/* Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #2F6F7E 0%, #1E4F5C 50%, #1E4A2A 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners/employers" className="hover:text-white/80 transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white/80">For Employers</span>
          </div>

          <div className="max-w-[780px]">
            <div
              className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
              style={{ color: "#F5A623", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
            >
              EMPLOYER PARTNERSHIPS  ·  L&D INVESTMENT  ·  WORKFORCE DEVELOPMENT
            </div>

            <h1 className="font-['Poppins'] font-bold text-[52px] text-white tracking-[-1.5px] leading-[1.1] mb-5">
              Train your team. Build your pipeline.
            </h1>

            <p className="font-['Poppins'] font-semibold text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
              TT programs are designed to be employer-fundable — and we make the internal approval process as simple as possible.
            </p>

            <div className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4 mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
              <p>Whether you want to upskill your existing Salesforce team, develop internal talent for new roles, or sponsor candidates from underserved communities as part of your workforce development commitment — Transition Trails has a program and a partnership model built for you.</p>
              <p>Every TT program uses the RESOLVE methodology, delivers real project experience, and produces graduates who are immediately useful in a professional Salesforce environment.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="h-[52px] px-7 rounded-[8px] bg-[#F5A623] hover:bg-[#D4890A] text-[#2A2E2C] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
              >
                Get in Touch →
              </a>
              <a
                href="#models"
                className="h-[52px] px-7 rounded-[8px] border border-white text-white hover:bg-white/10 font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
              >
                See partnership models ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Three Partnership Models */}
      <section id="models" className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">HOW IT WORKS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">Three ways to partner with TT.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PARTNERSHIP_MODELS.map(model => (
              <div
                key={model.title}
                className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col"
                style={{ borderTop: `5px solid ${model.accent}` }}
              >
                <div className="p-7 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">{model.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-4">{model.title}</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] whitespace-pre-line mb-5">{model.body}</p>
                  <span
                    className="inline-block font-['Open_Sans'] text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${model.accent}18`, color: model.accent }}
                  >
                    {model.pill}
                  </span>
                </div>
                {model.cta && (
                  <div className="px-7 pb-7">
                    <Link href={model.cta.href} className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6B3F] hover:underline">
                      {model.cta.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center font-['Open_Sans'] text-[14px] text-[#4A4F4D] mt-10">
            Need Salesforce consulting for your organization directly?{" "}
            <Link href="/consulting" className="font-semibold text-[#2F6B3F] hover:underline">Explore our consulting services →</Link>
          </p>
        </div>
      </section>

      {/* Section 4: Why TT Programs Work for Employers */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE EMPLOYER VALUE PROPOSITION</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">Your team leaves with more than a certification.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUE_CARDS.map(card => (
              <div
                key={card.title}
                className="bg-white border border-[#E2E4E1] rounded-xl p-7"
                style={{ borderLeft: "4px solid #2F6B3F" }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">{card.icon}</div>
                <h3 className="font-['Open_Sans'] font-bold text-[15px] text-[#2F6B3F] mb-2">{card.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: L&D Budget Framing */}
      <section className="bg-[#E6F3EA] py-16 px-5 md:px-10 border-y border-[#2F6B3F]/20">
        <div className="max-w-[860px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">MAKING THE CASE INTERNALLY</div>
          <h2 className="font-['Poppins'] font-bold text-[28px] text-[#1E4A2A] mb-6">We help you get TT approved as an L&D investment.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] max-w-[860px]">
            <p className="mb-4">Getting a professional development program approved internally is often the hardest part. TT provides:</p>
            <ul className="space-y-2 mb-6">
              {[
                "Invoice documentation formatted for L&D budget submission",
                "Program description language suitable for internal approval processes",
                "Outcome documentation showing what your employee will be able to do on completion",
                "Employer-sponsored pricing for groups of 3 or more seats across Trail of Mastery tracks",
              ].map(item => (
                <li key={item} className="flex gap-2">
                  <Check size={16} color="#2F6B3F" className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>Most TT program investments are less than one week of an administrator's fully-loaded salary — and graduates return with skills that compound over their entire tenure. We can help you make that case.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Workforce Development and DEI */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WORKFORCE DEVELOPMENT</div>
          <h2 className="font-['Poppins'] font-bold text-[28px] text-[#2A2E2C] mb-6">Expand access. Document impact. Meet your commitments.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] space-y-5">
            <p>If your organization has DEI workforce commitments, community investment goals, or workforce development reporting requirements — a TT partnership can be structured to meet them.</p>
            <p>TT tracks and reports learner outcomes across demographic categories, employment status, and salary change — before and after program completion. This data is available to workforce development partners for impact reporting, grant documentation, and DEI commitment tracking.</p>
            <p>The Trail Forward Scholarship — TT's fully funded scholarship program for historically underserved populations in technology — can also be co-funded by employer partners, with named sponsorship available for organizations that fund multiple seats.</p>
            <Link href="/scholarships" className="font-['Open_Sans'] font-semibold text-[15px] text-[#2F6B3F] hover:underline inline-block">
              Learn about the Trail Forward Scholarship →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Contact */}
      <section id="contact" className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>GET IN TOUCH</div>
          <h2 className="font-['Poppins'] font-bold text-[34px] text-white mb-4">Tell us what you are trying to accomplish.</h2>
          <p className="font-['Open_Sans'] text-[16px] max-w-[600px] mx-auto leading-[1.65] mb-12" style={{ color: "rgba(255,255,255,0.70)" }}>
            Every employer partnership starts with a conversation. Whether you have a specific program in mind or you are still figuring out what the right model is — we are happy to talk through what TT can offer your organization.
          </p>

          <div
            className="rounded-xl p-10 max-w-[600px] mx-auto text-left"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <h3 className="font-['Poppins'] font-semibold text-[18px] text-white mb-3">Employer Partnership Inquiry</h3>
            <p className="font-['Open_Sans'] text-[14px] leading-[1.65] mb-6" style={{ color: "rgba(255,255,255,0.70)" }}>
              Fill out the form below and we will be in touch within 3 business days.
            </p>

            <iframe
              id="JotFormIFrame-261876908147066"
              title="TT Employer Partnership Inquiry"
              onLoad={() => window.parent.scrollTo(0, 0)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261876908147066"
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

            <div className="border-t border-white/10 pt-5 mt-5 text-center">
              <a
                href="https://calendar.app.google/t1THqhnCWacFyCu2A"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Open_Sans'] text-[13px] hover:text-white/75 underline transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Prefer a call? Schedule time with Angela →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
