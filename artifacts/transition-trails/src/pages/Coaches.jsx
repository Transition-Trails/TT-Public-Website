import { useEffect } from "react";
import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";

const BENEFITS = [
  {
    icon: "💼",
    title: "Leadership experience",
    body: "Managing a cohort of learners through 12 weeks of real project work develops team leadership, facilitation, and accountability skills that transfer directly to senior Salesforce roles.",
  },
  {
    icon: "🧠",
    title: "Deeper technical thinking",
    body: "Explaining why something works — not just how — forces a level of technical understanding that few professional development experiences match. Coaches consistently report that teaching makes them better at their own jobs.",
  },
  {
    icon: "📋",
    title: "Resume and LinkedIn credentials",
    body: "Coaching with TT is a verifiable, structured professional experience. Add it to your LinkedIn as a coaching and mentorship role with a real organization, real program, and real outcomes.",
  },
  {
    icon: "🌱",
    title: "Explorer's Trail membership",
    body: "Every coaching cohort earns membership credit — 1 month for Coach's Assistants, 3 months for Lead Coaches. Six cohorts earns Lifetime Annual membership. The community you are coaching in stays your community.",
  },
  {
    icon: "🤝",
    title: "The TT coaching community",
    body: "Coaches are part of TT's inner circle — connected to the founders, to other coaches, and to the broader TT professional ecosystem. The relationships built here are the ones that matter in a Salesforce career.",
  },
  {
    icon: "🔮",
    title: "What is coming",
    body: "TT is developing a coaching stipend for committed coaches — a financial recognition that reflects the value coaches bring to the program. We will share details when the time is right.",
    dim: true,
  },
];

const REALITY_CARDS = [
  {
    title: "What TT provides",
    body: "Curriculum framework, capstone project (HCH), client relationship management, program scheduling, learner onboarding, and coaching support from the TT team.",
  },
  {
    title: "What you provide",
    body: "Your Salesforce expertise, your professional experience, your presence in sessions, your commitment to learner growth, and your willingness to push people past what they think they can do.",
  },
  {
    title: "What learners leave with",
    body: "A completed Salesforce implementation, a job-ready portfolio, the RESOLVE methodology, and a coach who believed in them. That is what you are building.",
  },
];

const PATHWAY_STEPS = [
  {
    color: "#2F6B3F",
    title: "Coach's Assistant",
    body: "Support a lead coach. Learn the process. Start earning membership credit.",
    tag: "1 month ET credit per cohort",
  },
  {
    color: "#2F6F7E",
    title: "Associate Coach",
    body: "Lead your own cohort. Primary responsibility for learner outcomes.",
    tag: "3 months ET credit per cohort",
  },
  {
    color: "#1E4A2A",
    title: "Advanced TT Coach",
    body: "Lead multiple cohorts. Mentor Coach's Assistants. Lead RESOLVE Practitioner Series.",
    tag: "Stipend in development",
  },
  {
    color: "#F5A623",
    title: "Lifetime Membership",
    body: "TT's highest recognition. Earned by coaches who have given six cohorts of sustained commitment.",
    tag: "6 completed cohorts",
  },
];

const HANDLER_SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
const IFRAME_ID = "JotFormIFrame-261876005299062";

export default function Coaches() {
  useEffect(() => {
    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(`iframe[id='${IFRAME_ID}']`, "https://form.jotform.com/");
      }
    };
    const existing = document.querySelector(`script[src="${HANDLER_SRC}"]`);
    if (existing) {
      callHandler();
    } else {
      const s = document.createElement("script");
      s.src = HANDLER_SRC;
      s.async = true;
      s.onload = callHandler;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Become a TT Coach | Transition Trails | Shape the Next Generation of Salesforce Professionals"
        description="Coach or Coach's Assistant with Transition Trails. Guide Guided Trail cohorts, earn Explorer's Trail membership credits, and develop your leadership skills. Applications open now for Cohort 1."
        path="/coaches"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 55%, #2F6F7E 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Become a Coach</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            {/* Left copy */}
            <div className="flex-1 max-w-[700px]">
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
                style={{ color: "#F5A623", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
              >
                COACHING WITH TRANSITION TRAILS  ·  SHAPE THE NEXT GENERATION
              </div>

              <h1
                className="font-['Poppins'] font-bold text-[52px] text-white leading-[1.1] mb-5"
                style={{ letterSpacing: "-1.5px" }}
              >
                Pay it forward.<br />Build your career.
              </h1>

              <p className="font-['Poppins'] font-semibold text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
                TT coaches do not just teach Salesforce. They develop leaders, advance their own skills, and build something that lasts.
              </p>

              <div className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4 mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
                <p>Every Transition Trails program runs on the expertise of coaches who have done the work — professionals who have built real Salesforce solutions, navigated real client challenges, and are ready to help the next generation do the same.</p>
                <p>Coaching with TT is not volunteering your time for nothing. It is a structured professional experience that develops your leadership, deepens your technical thinking, and connects you to a community of Salesforce professionals who are serious about the craft.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="h-[52px] px-7 rounded-[8px] font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                  style={{ background: "#F5A623", color: "#2A2E2C" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#D4890A"}
                  onMouseLeave={e => e.currentTarget.style.background = "#F5A623"}
                >
                  Apply to Coach →
                </a>
                <a
                  href="#benefits"
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white hover:bg-white/10 font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
                >
                  See what coaches get ↓
                </a>
              </div>
            </div>

            {/* Right stat boxes */}
            <div className="flex flex-row xl:flex-col gap-4 w-full xl:w-[240px]">
              {[
                { value: "12 weeks", label: "Per coaching commitment", color: "#2F6B3F" },
                { value: "2 roles", label: "Coach's Assistant or Lead Coach", color: "#2F6F7E" },
                { value: "6 cohorts", label: "Path to Lifetime membership", color: "#F5A623" },
              ].map(s => (
                <div
                  key={s.label}
                  className="flex-1 xl:flex-none rounded-xl p-6"
                  style={{ background: "rgba(255,255,255,0.08)", borderTop: `4px solid ${s.color}`, border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="font-['Poppins'] font-bold text-[24px] text-white mb-1">{s.value}</div>
                  <div className="font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.60)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Two Coaching Roles */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE TWO ROLES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Start where you are. Grow from there.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              There are two coaching roles at Transition Trails. Your experience level determines which one is right for you — and the application process helps us figure that out together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card 1 — Coach's Assistant */}
            <div className="bg-white border-[1.5px] border-[#E2E4E1] rounded-2xl overflow-hidden flex flex-col" style={{ borderTop: "6px solid #2F6B3F" }}>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-['Open_Sans'] font-bold text-[11px] tracking-[1px] uppercase text-[#2F6B3F] mb-4">ENTRY LEVEL</span>
                <div className="text-[32px] mb-4">🤝</div>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-2">Coach's Assistant</h3>
                <p className="font-['Open_Sans'] font-semibold text-[15px] text-[#2F6B3F] mb-5">Support a lead coach through a 12-week Guided Trail cohort.</p>
                <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] space-y-4 mb-6 flex-1">
                  <p>The Coach's Assistant role is designed for Guided Trail graduates who are early in their Salesforce careers and want to stay connected to TT while building leadership experience alongside their day job.</p>
                  <p>You work alongside the lead coach — supporting learners, participating in sessions, observing how a professional coaching relationship works, and contributing your own recent experience as someone who just went through the program.</p>
                  <p>You are not expected to know everything. You are expected to show up, engage, and grow.</p>
                </div>

                {/* Eligibility */}
                <div className="bg-[#E6F3EA] border-l-4 border-[#2F6B3F] rounded-xl p-5 mb-4">
                  <p className="font-['Open_Sans'] font-bold text-[13px] text-[#2F6B3F] mb-3">Eligibility</p>
                  <ul className="space-y-1.5">
                    {[
                      "Completed the Guided Trail program",
                      "Employed in a Salesforce role for at least 6 months",
                      "Ready to commit to a full 12-week cohort",
                    ].map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                        <span className="text-[#2F6B3F] font-bold shrink-0">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 h-px bg-[#2F6B3F]/20" />
                    <span className="font-['Open_Sans'] italic text-[12px] text-[#2F6B3F]/70">OR — External pathway</span>
                    <div className="flex-1 h-px bg-[#2F6B3F]/20" />
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "2–3 years practical Salesforce experience (no TT program required)",
                      "Want to develop leadership and coaching skills",
                      "Ready to commit to a full 12-week cohort",
                    ].map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                        <span className="text-[#2F6B3F] font-bold shrink-0">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compensation */}
                <div className="rounded-xl p-4" style={{ background: "rgba(47,107,63,0.06)" }}>
                  <p className="font-['Open_Sans'] font-bold text-[12px] text-[#2F6B3F] mb-1">What you receive</p>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">1 month Explorer's Trail Annual membership credit per cohort completed</p>
                </div>
              </div>
            </div>

            {/* Card 2 — Associate Coach */}
            <div className="bg-white border-[1.5px] border-[#E2E4E1] rounded-2xl overflow-hidden flex flex-col" style={{ borderTop: "6px solid #1E4A2A" }}>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-['Open_Sans'] font-bold text-[11px] tracking-[1px] uppercase text-[#1E4A2A] mb-4">EXPERIENCED</span>
                <div className="text-[32px] mb-4">🎯</div>
                <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-2">Associate Coach</h3>
                <p className="font-['Open_Sans'] font-semibold text-[15px] text-[#1E4A2A] mb-5">Lead a 12-week cohort as the primary coach.</p>
                <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] space-y-4 mb-6 flex-1">
                  <p>The Associate Coach leads a Guided Trail cohort as the primary coaching presence — responsible for learner outcomes, session facilitation, and the professional delivery of the program.</p>
                  <p>This role is for Salesforce professionals with meaningful field experience who want to develop their leadership, mentorship, and solution architecture thinking in a structured coaching environment. You bring the experience. TT provides the framework, the curriculum, and the community.</p>
                  <p>Lead coaches also have a pathway to becoming Advanced TT Coaches — the most senior coaching role in the TT ecosystem.</p>
                </div>

                {/* Eligibility */}
                <div className="rounded-xl p-5 mb-4" style={{ background: "rgba(30,74,42,0.07)", borderLeft: "4px solid #1E4A2A" }}>
                  <p className="font-['Open_Sans'] font-bold text-[13px] text-[#1E4A2A] mb-3">Eligibility</p>
                  <ul className="space-y-1.5">
                    {[
                      "2–3 years practical Salesforce experience in a professional role",
                      "Coach's Assistant experience (preferred) OR strong coaching/mentorship background",
                      "Genuine desire to develop leadership and coaching skills",
                      "Ready to commit to a full 12-week cohort",
                    ].map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                        <span className="font-bold shrink-0" style={{ color: "#1E4A2A" }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compensation */}
                <div className="rounded-xl p-4" style={{ background: "rgba(30,74,42,0.06)" }}>
                  <p className="font-['Open_Sans'] font-bold text-[12px] text-[#1E4A2A] mb-1">What you receive</p>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-1">3 months Explorer's Trail Annual membership credit per cohort completed</p>
                  <p className="font-['Open_Sans'] italic text-[11px]" style={{ color: "#6B7280" }}>Future coaching stipend in development — hint only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lifetime callout */}
          <div className="bg-[#2A2E2C] rounded-xl p-7 text-center">
            <div className="text-[24px] mb-3">🏅</div>
            <p className="font-['Poppins'] font-semibold text-[16px] text-white mb-2">Complete 6 coaching cohorts → Lifetime Annual Explorer's Trail membership</p>
            <p className="font-['Open_Sans'] text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>Our highest recognition. Reserved for coaches who have given sustained commitment back to the TT community.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: What Coaches Get */}
      <section id="benefits" className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT YOU GET OUT OF IT</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">This is not just giving back. It is building forward.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {BENEFITS.map(b => (
              <div
                key={b.title}
                className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden"
                style={{ borderTop: "4px solid #2F6B3F", opacity: b.dim ? 0.75 : 1 }}
              >
                <div className="p-7">
                  <div className="text-[28px] mb-3">{b.icon}</div>
                  <h3 className="font-['Open_Sans'] font-bold text-[15px] text-[#2A2E2C] mb-2">{b.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: The Coaching Experience */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT COACHING LOOKS LIKE</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-6">Twelve weeks. Real learners. Real work.</h2>
            <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[860px] leading-[1.65] space-y-4">
              <p>TT coaches work with cohorts of learners through the Guided Trail — 12 weeks of structured Salesforce project work delivered to real nonprofit clients using the RESOLVE methodology.</p>
              <p>Every cohort has a defined structure. Every session has a purpose. Coaches are not left to figure out the curriculum — TT provides the framework, the capstone project, and the client relationship. Your role is to guide learners through the work, push their thinking, and help them produce deliverables they are proud of.</p>
              <p>You will work with learners who are Career Starters figuring out if Salesforce is for them, Career Builders who have the cert and need the experience, and Career Pivoters who left something else behind to build something new. Their success is your measure.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REALITY_CARDS.map(card => (
              <div
                key={card.title}
                className="rounded-xl p-6"
                style={{ background: "#E6F3EA", borderLeft: "4px solid #2F6B3F" }}
              >
                <h3 className="font-['Open_Sans'] font-bold text-[14px] text-[#1E4A2A] mb-3">{card.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Coaching Pathway */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>THE COACHING PATHWAY</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white">Where coaching takes you.</h2>
          </div>

          {/* Desktop horizontal */}
          <div className="hidden lg:flex gap-0 relative">
            <div className="absolute top-[32px] left-[8%] right-[8%] h-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            {PATHWAY_STEPS.map((step, i) => (
              <div key={step.title} className="flex-1 flex flex-col items-center text-center px-4 relative">
                <div
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center font-['Poppins'] font-bold text-[22px] text-white mb-3 z-10 shrink-0"
                  style={{ background: step.color, boxShadow: `0 0 20px ${step.color}40` }}
                >
                  {i + 1}
                </div>
                <span
                  className="font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-[1px] px-2 py-1 rounded mb-3"
                  style={{ background: `${step.color}25`, color: step.color }}
                >
                  {step.tag}
                </span>
                <h3 className="font-['Poppins'] font-semibold text-[14px] text-white mb-2">{step.title}</h3>
                <p className="font-['Open_Sans'] text-[12px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>{step.body}</p>
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden relative">
            <div className="absolute left-[31px] top-6 bottom-6 w-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="space-y-8">
              {PATHWAY_STEPS.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div
                    className="w-[64px] h-[64px] rounded-full flex items-center justify-center font-['Poppins'] font-bold text-[20px] text-white shrink-0 z-10"
                    style={{ background: step.color, boxShadow: `0 0 16px ${step.color}40` }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-3">
                    <span
                      className="font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded"
                      style={{ background: `${step.color}25`, color: step.color }}
                    >
                      {step.tag}
                    </span>
                    <h3 className="font-['Poppins'] font-semibold text-[15px] text-white mt-2 mb-1">{step.title}</h3>
                    <p className="font-['Open_Sans'] text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.55)" }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Application */}
      <section id="apply" className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[860px] mx-auto text-center mb-12">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">APPLY TO COACH</div>
          <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">We are looking for coaches now.</h2>
          <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[680px] mx-auto leading-[1.65]">
            Cohort 1 of the Guided Trail is accepting coach applications. If you have the experience and the desire to help the next generation of Salesforce professionals prove what they can do — we want to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-xl max-w-[860px] mx-auto px-8 md:px-14 py-14">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-6 text-center">COACH APPLICATION</div>

          <iframe
            id={IFRAME_ID}
            title="TT Coach Application"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency="true"
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/261876005299062"
            frameBorder="0"
            style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
            scrolling="no"
          />

          <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] text-center mt-6 leading-[1.65]">
            Applications are reviewed within 5 business days. We will reach out to schedule a brief conversation before making a decision.{" "}
            <a href="mailto:hello@transitiontrails.org" className="text-[#2F6B3F] hover:underline font-semibold">Questions? Email hello@transitiontrails.org</a>
          </p>
        </div>
      </section>
    </div>
  );
}
