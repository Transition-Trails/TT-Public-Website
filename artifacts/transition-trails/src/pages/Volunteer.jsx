import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";
import { Target, Users, BarChart2, Award, Leaf } from "lucide-react";

const POSITIONS = [
  {
    accent: "#2F6B3F",
    badgeColor: "#2F6B3F",
    icon: <Target size={24} color="#2F6B3F" />,
    title: "Associate Coach",
    badge: "COACHING · VOLUNTEER",
    commitment: "⏱ 4–6 hrs/week · 12-week cohort commitment",
    body: [
      "Lead a Guided Trail cohort as the primary coach — responsible for learner outcomes, session facilitation, and professional delivery of the program using the RESOLVE methodology.",
      "This role is ideal for Salesforce professionals who want to develop their leadership, mentorship, and solution architecture thinking in a structured coaching environment. You bring the expertise. TT provides the framework, curriculum, and community.",
    ],
    need: "Eligibility: 2–3 years practical Salesforce experience · Coach's Assistant experience preferred · Commitment to full 12-week cohort",
    get: "3 months Explorer's Trail membership credit per cohort · Future coaching stipend in development · Leadership experience and resume credentials",
    ctas: [
      {
        label: "Apply Now →",
        href: "https://form.jotform.com/261876005299062?role=Associate%20Coach",
        style: { background: "#2F6B3F", color: "#FFFFFF" },
      },
    ],
  },
  {
    accent: "#7FAFC6",
    badgeColor: "#7FAFC6",
    icon: <Users size={24} color="#7FAFC6" />,
    title: "Coach's Assistant",
    badge: "COACHING · ENTRY LEVEL",
    commitment: "⏱ 2–4 hrs/week · 12-week cohort commitment",
    body: [
      "Support a lead coach through a 12-week Guided Trail cohort — assisting learners, participating in sessions, and learning the coaching process from the inside.",
      "This role is designed for Guided Trail graduates who are early in their Salesforce careers and want to stay connected to TT while building leadership experience alongside their day job. You are not expected to know everything. You are expected to show up, engage, and grow.",
    ],
    need: "Eligibility: Completed Guided Trail + employed in a Salesforce role for at least 6 months · OR 2–3 years Salesforce experience via external pathway",
    get: "1 month Explorer's Trail membership credit per cohort · Leadership and coaching experience · Stay connected to the TT community while you build field experience",
    ctas: [
      {
        label: "Apply Now →",
        href: "https://form.jotform.com/261876005299062?role=Coach%27s%20Assistant",
        style: { background: "#E0F0F7", color: "#7FAFC6", border: "1.5px solid #7FAFC6" },
      },
    ],
  },
  {
    accent: "#2F6F7E",
    badgeColor: "#2F6F7E",
    icon: <BarChart2 size={24} color="#2F6F7E" />,
    title: "Volunteer CPA",
    badge: "FINANCE · NONPROFIT GOVERNANCE",
    commitment: "⏱ Flexible · Project-based · Remote",
    body: [
      "Transition Trails is preparing our financial records to meet Candid (GuideStar) certification requirements — a critical step toward accessing grants and demonstrating fiscal credibility to institutional funders.",
      "We are looking for a Certified Public Accountant who can volunteer their expertise to review and certify our financials, helping us achieve the Candid Gold Seal of Transparency. This is a meaningful, time-limited contribution that directly enables TT's ability to fund scholarships, coaching, and program delivery.",
    ],
    need: "Active CPA license · Nonprofit accounting experience preferred · Familiarity with Candid/GuideStar certification requirements a plus",
    get: "Direct impact on a growing nonprofit's financial credibility · Pro bono hours for professional credit · TT's deep gratitude and recognition · Listed as a TT financial partner",
    ctas: [
      {
        label: "Apply Now →",
        href: "https://form.jotform.com/261885593929074?position=Volunteer%20CPA",
        style: { background: "#2F6F7E", color: "#FFFFFF" },
      },
      {
        label: "View on Idealist →",
        href: "https://www.idealist.org/admin/8b10ce8870b246f8a0d65687d51a9e79/volops/a5df3df502b34d9e8b71b8a8e2ee6c6e",
        style: { background: "#FFFFFF", color: "#2F6F7E", border: "1.5px solid #2F6F7E" },
        external: true,
      },
    ],
  },
];

const WHY_CARDS = [
  {
    icon: <Award size={24} color="#2F6B3F" />,
    title: "Real credentials",
    body: "TT volunteer roles are structured, specific, and verifiable. Add them to your LinkedIn as a coaching, mentorship, or advisory role with a real organization doing real work.",
  },
  {
    icon: <Leaf size={24} color="#2F6B3F" />,
    title: "Community connection",
    body: "Volunteers become part of the TT ecosystem — connected to founders, coaches, program learners, and the broader Salesforce community. The relationships built here are the ones that matter in a Salesforce career.",
  },
  {
    icon: <Target size={24} color="#2F6B3F" />,
    title: "Direct mission impact",
    body: "Every coaching cohort you support puts someone closer to a career they could not access before. Every hour you contribute is a direct investment in economic mobility for Career Starters, Career Builders, and Career Pivoters.",
  },
];

export default function Volunteer() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Volunteer with Transition Trails | Salesforce Coaching, CPA, and More"
        description="Volunteer as an Associate Coach, Coach's Assistant, or CPA with Transition Trails. Remote-friendly positions supporting Salesforce workforce development in Dallas TX and beyond."
        path="/volunteer"
      />

      {/* Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 55%, #2F6F7E 100%)" }}
      >
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          <div
            className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
            style={{ color: "#F5A623", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
          >
            VOLUNTEER WITH TRANSITION TRAILS  ·  MAKE A DIRECT IMPACT
          </div>
          <h1 className="font-['Poppins'] font-bold text-[52px] text-white leading-[1.1] mb-5">
            Join the trail crew.
          </h1>
          <p className="font-['Poppins'] font-semibold text-[20px] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
            Transition Trails runs on people who believe in the mission.
          </p>
          <p className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
            Whether you are a Salesforce professional who wants to give back, a finance expert who wants to support a nonprofit on the rise, or someone looking to develop coaching and leadership skills — there is a place for you on the trail.
            <br /><br />
            Every volunteer role at Transition Trails is meaningful, specific, and connected directly to our mission of building careers and supporting nonprofits in the Salesforce ecosystem.
          </p>
          <a
            href="#positions"
            className="inline-flex items-center justify-center h-12 px-7 rounded-lg font-['Open_Sans'] font-semibold text-[15px] text-white border-[1.5px] border-white hover:bg-white/10 transition-colors"
          >
            See open positions ↓
          </a>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">
              OPEN VOLUNTEER POSITIONS
            </div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">Current openings.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px]">
              All positions are remote-friendly. Applications reviewed within 5 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {POSITIONS.map((pos) => (
              <div
                key={pos.title}
                className="bg-white border-[1.5px] border-[#E2E4E1] rounded-2xl flex flex-col overflow-hidden"
              >
                <div className="h-[6px] w-full" style={{ backgroundColor: pos.accent }} />
                <div className="p-7 flex flex-col flex-1">
                  <div
                    className="inline-block font-['Open_Sans'] font-bold text-[11px] uppercase tracking-wider mb-4 w-fit"
                    style={{ color: pos.badgeColor }}
                  >
                    {pos.badge}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">{pos.icon}</div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] text-[#2A2E2C] mb-2">{pos.title}</h3>
                  <p className="font-['Open_Sans'] font-semibold text-[13px] text-[#4A4F4D] mb-5">{pos.commitment}</p>

                  <div className="h-px bg-[#E2E4E1] mb-5" />

                  <div className="space-y-3 mb-5">
                    {pos.body.map((p, i) => (
                      <p key={i} className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{p}</p>
                    ))}
                  </div>

                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-4">
                    <span className="font-bold text-[#2A2E2C]">What you need: </span>{pos.need}
                  </p>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-8">
                    <span className="font-bold text-[#2A2E2C]">What you get: </span>{pos.get}
                  </p>

                  <div className="mt-auto flex gap-3">
                    {pos.ctas.map((cta) => (
                      <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center h-11 px-4 rounded-lg font-['Open_Sans'] font-semibold text-[14px] transition-opacity hover:opacity-90 text-center"
                        style={cta.style}
                      >
                        {cta.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What volunteers get */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">
              WHY VOLUNTEER WITH TT
            </div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">Your time builds something that lasts.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#E2E4E1] rounded-xl p-7"
                style={{ borderLeft: "4px solid #2F6B3F" }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">{card.icon}</div>
                <h3 className="font-['Open_Sans'] font-bold text-[15px] text-[#2F6B3F] mb-3">{card.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board callout */}
      <section className="bg-[#2A2E2C] py-[60px] px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            BOARD MEMBERSHIP
          </div>
          <h2 className="font-['Poppins'] font-bold text-[28px] text-white mb-5">
            Looking to make a deeper commitment?
          </h2>
          <p className="font-['Open_Sans'] text-[16px] leading-[1.65] max-w-[680px] mb-8" style={{ color: "rgba(255,255,255,0.70)" }}>
            Transition Trails is actively recruiting board members who can help advance our mission, strengthen our governance, and bring new perspectives to our leadership. If you are a senior professional with nonprofit governance experience, legal, financial, or technology expertise — we would love to talk.
          </p>
          <Link
            href="/board"
            className="inline-flex items-center justify-center h-12 px-7 rounded-lg font-['Open_Sans'] font-semibold text-[15px] bg-[#F5A623] text-[#2A2E2C] hover:bg-[#D4890A] transition-colors"
          >
            Learn about joining our board →
          </Link>
        </div>
      </section>
    </div>
  );
}
