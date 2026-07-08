import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";

const TEAM_FOUNDERS = [
  {
    key: "AL",
    name: "Angela Landrith",
    title: "Co-Founder & CEO",
    role: "The Visionary",
    accent: "#2F6B3F",
    initials: "AL",
    bio: [
      "Angela founded Transition Trails after watching talented people get locked out of Salesforce careers not because they lacked ability, but because they lacked access to the right experience. As CEO, she leads program strategy, partner relationships, and the vision for what TT can become. She brings deep expertise in Salesforce product management, career development, and building systems that actually serve the people using them.",
      "Angela believes the gap between certification and employment is a design problem — and Transition Trails is the solution she wished existed when she was navigating her own career pivot.",
    ],
    skills: [
      "Salesforce Product Management",
      "Career Progression",
      "CRM Business Strategy",
      "Change Management",
      "Vision and Roadmapping",
      "Platform Adoption",
      "Mentoring and Coaching",
      "RESOLVE Trainer",
      "AI Adoption and Usage",
      "Requirements and Process Mapping",
    ],
    calendarHref: "https://calendar.app.google/t1THqhnCWacFyCu2A",
    calendarLabel: "Schedule time with Angela",
  },
  {
    key: "KB",
    name: "Kim Barnes",
    title: "Co-Founder & COO",
    role: "The Builder",
    accent: "#2F6F7E",
    initials: "KB",
    bio: [
      "Kim is the operational backbone of Transition Trails. As COO, she leads the Digital Compass program, manages partner relationships with nonprofit clients, and ensures that every learner and organization TT serves receives a consistently excellent experience. Kim brings deep expertise in Salesforce solution design and nonprofit technology, with a particular focus on making complex systems work for the people who depend on them.",
      "She is the architect of many of TT's internal processes and is the reason things actually get done.",
    ],
    skills: [
      "Salesforce Solution Design",
      "Salesforce Architectural Practices",
      "Business Analysis",
      "Nonprofit Technology",
      "Notion",
      "ChatGPT",
      "Zapier",
      "RESOLVE Trainer",
      "Salesforce Troubleshooting",
    ],
    contactEmail: "hello@transitiontrails.org",
    contactLabel: "Contact Kim",
  },
  {
    key: "HR",
    name: "Hugh Richardson",
    title: "Co-Founder & CTO · Solutions Architect",
    role: "The Champion",
    accent: "#1E4A2A",
    initials: "HR",
    bio: [
      "Hugh is Transition Trails' proof of concept. He made the pivot himself — from a non-technical career into Salesforce — and now serves as CTO and Solutions Architect for TT's technology infrastructure. He built the Trail OS platform, oversees the DevOps pipeline, and brings the technical credibility that makes TT's programs defensible to employers.",
      "Hugh coaches from lived experience. When he tells a learner that the path from certification to employment is real and navigable, he means it — because he walked it.",
    ],
    skills: [
      "Solution Design",
      "Requirements and Process Mapping",
      "Security and Sharing",
      "Architectural Best Practices",
      "AI Integration",
      "Troubleshooting",
      "Resume Writing",
      "Interview Prep",
      "Mentoring and Coaching",
      "RESOLVE Trainer",
    ],
  },
  {
    key: "KL",
    name: "Kel Landrith",
    title: "Co-Founder & Finance Director",
    role: "The Steward",
    accent: "#7FAFC6",
    initials: "KL",
    bio: [
      "Kel keeps Transition Trails financially grounded and mission-focused. As Finance Director, he oversees financial stewardship, nonprofit compliance, and business development — ensuring that every dollar TT spends is working toward the mission. He brings specialist expertise in nonprofit startup operations, account and donation management, and the financial structures that allow a young nonprofit to grow without losing its integrity.",
      "Kel does not offer individual coaching — his focus is on the organizational health that makes everything else possible.",
    ],
    skills: [
      "Nonprofit Startup Specialist",
      "Account and Donation Management",
      "Business Development",
      "Financial Stewardship",
    ],
  },
];

function FounderSection({ founder, index }) {
  const isOdd = index % 2 === 0;

  const avatar = (
    <div className="shrink-0 flex justify-center">
      <div
        className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: founder.accent }}
      >
        <span className="font-['Poppins'] font-bold text-white text-[36px]">
          {founder.initials}
        </span>
      </div>
    </div>
  );

  const content = (
    <div className="flex-1">
      <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[36px] text-[#2A2E2C] mb-1">
        {founder.name}
      </h2>
      <p className="font-['Open_Sans'] font-semibold text-[16px] mb-4" style={{ color: founder.accent }}>
        {founder.title}
      </p>
      <span
        className="inline-block px-4 py-1.5 rounded-full font-['Open_Sans'] font-semibold text-[12px] uppercase tracking-wider text-white mb-6"
        style={{ backgroundColor: founder.accent }}
      >
        {founder.role}
      </span>

      <div className="space-y-4 mb-8">
        {founder.bio.map((para, i) => (
          <p key={i} className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.7]">
            {para}
          </p>
        ))}
      </div>

      <div className="mb-6">
        <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-[#8C8882] mb-3">
          Areas of Focus
        </div>
        <div className="flex flex-wrap gap-2">
          {founder.skills.map((skill, i) => (
            <span
              key={i}
              className="font-['Open_Sans'] font-semibold text-[12px] rounded-full px-3 py-1"
              style={{ color: founder.accent, backgroundColor: founder.accent + "18" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {founder.calendarHref && (
        <a
          href={founder.calendarHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-['Open_Sans'] font-semibold text-[14px] hover:underline transition-colors"
          style={{ color: founder.accent }}
        >
          {founder.calendarLabel} →
        </a>
      )}
      {founder.contactEmail && (
        <a
          href={`mailto:${founder.contactEmail}`}
          className="inline-flex items-center gap-2 font-['Open_Sans'] font-semibold text-[14px] hover:underline transition-colors"
          style={{ color: founder.accent }}
        >
          {founder.contactLabel} →
        </a>
      )}
    </div>
  );

  return (
    <div className="py-16 md:py-20 px-5 md:px-10">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        {isOdd ? (
          <>
            {avatar}
            {content}
          </>
        ) : (
          <>
            <div className="md:order-2">{avatar}</div>
            <div className="md:order-1 flex-1">{content}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function AboutTeam() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="The Founding Team | Transition Trails"
        description="Meet the four co-founders of Transition Trails — Angela Landrith, Kim Barnes, Hugh Richardson, and Kel Landrith. Built by people who've walked the trail."
        path="/about/team"
      />

      {/* Hero */}
      <section className="bg-[#1E4A2A] py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">
            THE FOUNDING TEAM
          </div>
          <h1 className="font-['Poppins'] font-bold text-[40px] md:text-[48px] text-white leading-tight mb-5">
            Built by people who've walked the trail.
          </h1>
          <p className="font-['Open_Sans'] text-[17px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.75)" }}>
            Four co-founders. One mission. Real experience on both sides of the desk.
          </p>
        </div>
      </section>

      {/* Founder sections */}
      {TEAM_FOUNDERS.map((founder, index) => (
        <div key={founder.key}>
          <FounderSection founder={founder} index={index} />
          {index < TEAM_FOUNDERS.length - 1 && (
            <div className="max-w-[900px] mx-auto px-5 md:px-10">
              <div className="border-t border-[#E2E4E1]" />
            </div>
          )}
        </div>
      ))}

      {/* Footer CTA */}
      <section className="bg-[#2F6B3F] py-20 px-5 text-center mt-8">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-white mb-4">
            Ready to start your trail?
          </h2>
          <p className="font-['Open_Sans'] text-[17px] mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join our waitlist and be the first to know when the next cohort opens.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center h-[52px] px-10 rounded-[8px] font-['Poppins'] font-bold text-[15px] transition-colors"
            style={{ backgroundColor: "#F5A623", color: "#2A2E2C" }}
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
