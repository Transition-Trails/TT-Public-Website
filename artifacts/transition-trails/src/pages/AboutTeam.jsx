import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const FOUNDERS = [
  {
    key: "AL",
    name: "Angela Landrith",
    title: "Co-Founder & CEO",
    role: "The Visionary",
    color: "#2F6B3F",
    initials: "AL",
    photo: null,
    bio: [
      "Angela founded Transition Trails after watching talented people get locked out of Salesforce careers not because they lacked ability, but because they lacked access to the right experience. As CEO, she leads program strategy, partner relationships, and the vision for what Transition Trails can become.",
      "She brings deep expertise in Salesforce product management, career development, and building systems that actually serve the people using them. Angela believes the gap between certification and employment is a design problem — and Transition Trails is the solution she wished existed when she was navigating her own career pivot.",
    ],
    skills: [
      "Salesforce Product Management",
      "Career Progression Coaching",
      "CRM Business Strategy",
      "Vision and Roadmapping",
      "AI Adoption and Usage",
      "RESOLVE Trainer",
    ],
    link: {
      href: "https://calendar.app.google/t1THqhnCWacFyCu2A",
      label: "Schedule time with Angela",
      external: true,
    },
  },
  {
    key: "KB",
    name: "Kim Barnes",
    title: "Co-Founder & COO",
    role: "The Builder",
    color: "#2F6F7E",
    initials: "KB",
    photo: null,
    bio: [
      "Kim is the operational backbone of Transition Trails. As COO, she leads the Digital Compass program, manages partner relationships with nonprofit clients, and ensures that every learner and organization Transition Trails serves receives a consistently excellent experience.",
      "Kim brings deep expertise in Salesforce solution design and nonprofit technology, with a particular focus on making complex systems work for the people who depend on them. She is the architect of many of Transition Trails' internal processes — and the reason things actually get done.",
    ],
    skills: [
      "Salesforce Solution Design",
      "Business Analysis",
      "Nonprofit Technology",
      "Salesforce Architectural Practices",
      "Zapier & Automation",
      "RESOLVE Trainer",
    ],
    link: {
      href: "mailto:hello@transitiontrails.org",
      label: "Contact Kim",
      external: false,
    },
  },
  {
    key: "HR",
    name: "Hugh Richardson",
    title: "Co-Founder & CTO · Solutions Architect",
    role: "The Champion",
    color: "#2F6B3F",
    initials: "HR",
    photo: null,
    bio: [
      "Hugh is Transition Trails' proof of concept. He made the pivot himself — from a non-technical career into Salesforce — and now serves as CTO and Solutions Architect for Transition Trails' technology infrastructure. He built the Trail OS platform, oversees the DevOps pipeline, and brings the technical credibility that makes Transition Trails' programs defensible to employers.",
      "Hugh coaches from lived experience. When he tells a learner that the path from certification to employment is real and navigable, he means it — because he walked it.",
    ],
    skills: [
      "Solution Design & Architecture",
      "Security and Sharing Models",
      "Requirements and Process Mapping",
      "AI Integration",
      "Interview Prep & Mentoring",
      "RESOLVE Trainer",
    ],
    link: null,
  },
  {
    key: "KL",
    name: "Kel Landrith",
    title: "Co-Founder & Finance Director",
    role: "The Steward",
    color: "#7FAFC6",
    initials: "KL",
    photo: null,
    bio: [
      "Kel keeps Transition Trails financially grounded and mission-focused. As Finance Director, he oversees financial stewardship, nonprofit compliance, and business development — ensuring that every dollar Transition Trails spends is working toward the mission.",
      "He brings specialist expertise in nonprofit startup operations, account and donation management, and the financial structures that allow a young nonprofit to grow without losing its integrity. Kel does not offer individual coaching — his focus is on the organizational health that makes everything else possible.",
    ],
    skills: [
      "Nonprofit Startup Specialist",
      "Account and Donation Management",
      "Financial Stewardship",
      "Business Development",
    ],
    link: null,
  },
];

function FounderSection({ founder, index }) {
  const initialsLeft = index % 2 === 0;

  const avatar = (
    <motion.div variants={fadeUp} className="shrink-0 flex justify-center md:justify-start">
      {founder.photo ? (
        <img
          src={founder.photo}
          alt={founder.name}
          className="w-[120px] h-[120px] rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div
          className="w-[120px] h-[120px] rounded-full flex items-center justify-center flex-shrink-0 font-['Poppins'] font-bold text-[38px] text-white"
          style={{ backgroundColor: founder.color }}
        >
          {founder.initials}
        </div>
      )}
    </motion.div>
  );

  const content = (
    <div className="flex-1 min-w-0">
      <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[34px] md:text-[40px] text-[#2A2E2C] leading-tight mb-1">
        {founder.name}
      </motion.h2>
      <motion.p variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[16px] mb-4" style={{ color: founder.color }}>
        {founder.title}
      </motion.p>
      <motion.span
        variants={fadeUp}
        className="inline-block px-4 py-1.5 rounded-full font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-wider text-white mb-8"
        style={{ backgroundColor: founder.color }}
      >
        {founder.role}
      </motion.span>

      <motion.div variants={stagger} className="space-y-5 mb-8">
        {founder.bio.map((para, i) => (
          <motion.p key={i} variants={fadeUp} className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.75]">
            {para}
          </motion.p>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mb-7">
        <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-[#8C8882] mb-3">
          Areas of Focus
        </div>
        <div className="flex flex-wrap gap-2">
          {founder.skills.map((skill, i) => (
            <span
              key={i}
              className="font-['Open_Sans'] font-semibold text-[12px] rounded-full px-3 py-1"
              style={{ color: founder.color, backgroundColor: founder.color + "18" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {founder.link && (
        <motion.div variants={fadeUp}>
          {founder.link.external ? (
            <a
              href={founder.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-['Open_Sans'] font-semibold text-[14px] hover:underline transition-colors"
              style={{ color: founder.color }}
            >
              {founder.link.label} →
            </a>
          ) : (
            <a
              href={founder.link.href}
              className="inline-flex items-center font-['Open_Sans'] font-semibold text-[14px] hover:underline transition-colors"
              style={{ color: founder.color }}
            >
              {founder.link.label} →
            </a>
          )}
        </motion.div>
      )}
    </div>
  );

  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
        >
          {initialsLeft ? (
            <>
              {avatar}
              {content}
            </>
          ) : (
            <>
              <div className="md:order-2 md:shrink-0">{avatar}</div>
              <div className="md:order-1 flex-1 min-w-0">{content}</div>
            </>
          )}
        </motion.div>
      </div>
    </section>
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">
              THE FOUNDING TEAM
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[40px] md:text-[48px] text-white leading-tight mb-5">
              Built by people who've walked the trail.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[17px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Four co-founders. One mission. Real experience on both sides of the desk.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder sections with dividers */}
      {FOUNDERS.map((founder, index) => (
        <div key={founder.key}>
          {index > 0 && (
            <div className="bg-white">
              <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="border-t border-[#E2E4E1]" />
              </div>
            </div>
          )}
          <FounderSection founder={founder} index={index} />
        </div>
      ))}

      {/* Footer CTA */}
      <section className="bg-[#2F6B3F] py-20 px-5 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[36px] text-white mb-4">
              Ready to start your trail?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[17px] mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
              Join our waitlist and be the first to know when the next cohort opens.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-[#2A2E2C] font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-[#D4890A] transition-colors duration-200"
              >
                Join the Waitlist →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
