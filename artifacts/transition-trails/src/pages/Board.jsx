import { Link } from "wouter";
import { motion } from "framer-motion";
import { FOUNDERS } from "../constants/founders";
import { PageMeta } from "../components/PageMeta";
import { Leaf, Users, ClipboardList, Check, Clock, UserCheck, X } from "lucide-react";

const GOVERNANCE_CARDS = [
  {
    title: "Why now",
    body: "We are entering our growth phase — launching Cohort 1, pursuing grants, and building the infrastructure that will scale our programs. This is the right moment to strengthen governance.",
    icon: Clock,
    iconBg: "#EBF3EE",
    iconColor: "#2F6B3F",
  },
  {
    title: "What we are looking for",
    body: "Professionals with expertise in nonprofit governance, legal, finance, technology, fundraising, DEI, or workforce development who bring perspectives the founding team does not have.",
    icon: UserCheck,
    iconBg: "#EBF3EE",
    iconColor: "#2F6B3F",
  },
  {
    title: "What this is not",
    body: "A rubber-stamp board. We are looking for people who will engage meaningfully — ask questions, contribute expertise, and take governance seriously.",
    icon: X,
    iconBg: "#FEE2E2",
    iconColor: "#DC2626",
  },
];

const EXPERTISE_LIST = [
  "Nonprofit governance and compliance",
  "Legal — nonprofit law, employment law, or IP",
  "Finance and accounting — CPA or CFO background",
  "Fundraising and development — grants and major gifts",
  "Technology — Salesforce ecosystem, AI, or EdTech",
  "Workforce development — employer partnerships, DEI hiring",
  "Marketing and communications — brand and PR",
  "Corporate partnerships — sponsorship and B2B relationships",
  "Education and training — curriculum, accreditation, adult learning",
];

const INVOLVEMENT_LIST = [
  "Monthly virtual board meeting (approximately 90 minutes)",
  "At least one committee participation",
  "Active engagement between meetings — email and occasional calls",
  "5–8 hours per month estimated commitment",
  "Personal financial contribution encouraged — amount at your discretion",
  "2-year initial term with renewal option",
  "Travel not required — all meetings are virtual",
];

const VALUE_CARDS = [
  {
    icon: <Leaf size={24} color="rgba(255,255,255,0.80)" />,
    title: "Ground-floor governance",
    body: "Join before the structure is set. Your expertise helps shape how TT grows — not just whether it grows.",
  },
  {
    icon: <Users size={24} color="rgba(255,255,255,0.80)" />,
    title: "Real mission alignment",
    body: "Workforce development, digital equity, nonprofit technology access — if these matter to you professionally and personally, TT's mission is worth governing.",
  },
  {
    icon: <ClipboardList size={24} color="rgba(255,255,255,0.80)" />,
    title: "Professional development",
    body: "Nonprofit board service develops governance, fiduciary, and strategic oversight skills that transfer to every professional context. First-time board members are welcome.",
  },
];

const BOARD_ROLES = {
  AL: "Board Chair · Co-Founder & CEO",
  KB: "Board Member · Co-Founder & COO",
  HR: "Board Member · Co-Founder & CTO",
  KL: "Board Member · Co-Founder & Finance Director",
};

export default function Board() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Join Our Board | Transition Trails | Nonprofit Governance and Leadership"
        description="Transition Trails is actively recruiting independent board members. We seek expertise in nonprofit governance, legal, finance, technology, fundraising, and DEI. Virtual board, 5-8 hrs/month. Apply now."
        path="/board"
      />

      {/* HERO */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Join Our Board</span>
          </div>

          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-7xl">
            <motion.div variants={fadeUp}>
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
                style={{ color: "#F5A623", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
              >
                BOARD RECRUITMENT  ·  NONPROFIT GOVERNANCE  ·  MISSION-DRIVEN LEADERSHIP
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[52px] text-white leading-[1.1] mb-5" style={{ letterSpacing: "-1.5px" }}>
              Help us govern what we are building.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['Poppins'] font-semibold text-[20px] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
              Transition Trails is actively recruiting board members who can help advance our mission and strengthen our governance.
            </motion.p>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
              Transition Trails was founded in 2020 and received 501(c)(3) status in May 2022. Our founding team — Angela, Kim, Hugh, and Kel — has been running day-to-day operations while also serving as the board. That is common in early-stage nonprofits. And it is a governance risk we are actively working to reduce.
              <br /><br />
              We are looking for experienced professionals who believe in our mission and want to help shape the future of Salesforce workforce development — people who bring expertise, perspective, and relationships that broaden what TT can do.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/board-application"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-[#2A2E2C] font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-[#D4890A] transition-colors duration-200"
              >
                Express Board Interest →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Governance opportunity */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHY THIS MATTERS</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-[#2A2E2C] mb-6">Strong governance makes everything else possible.</h2>
              <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] max-w-[860px] space-y-4">
                <p>Grant makers, institutional funders, and Candid certification all look at board composition as a signal of organizational health. A board that is independent from the founding team — with diverse expertise and genuine oversight authority — is one of the most important signals a growing nonprofit can send.</p>
                <p>We are not recruiting board members to fill a box. We are recruiting people who will ask hard questions, bring networks and expertise we do not have, and hold us accountable to the mission in a way that makes TT stronger.</p>
                <p>If you have been part of a nonprofit board before, you know what good governance looks like. If this would be your first board role, we will support your development as a board member. What matters most is that you believe in what we are building and are willing to show up for it.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {GOVERNANCE_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    className="bg-[#E6F3EA] rounded-xl p-6"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <Icon size={22} stroke={card.iconColor} />
                    </div>
                    <h3 className="font-['Open_Sans'] font-bold text-[14px] text-[#2F6B3F] mb-3">{card.title}</h3>
                    <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6]">{card.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — Current board */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">CURRENT BOARD</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-[#2A2E2C] mb-4">The founding team currently serves as the board.</h2>
              <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
                Our founding team serves dual roles — running day-to-day operations and serving as board members. This is common in early-stage nonprofits and a governance structure we are actively working to evolve.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {FOUNDERS.filter((founder) => founder.key !== "HR").map((founder) => (
                <motion.div key={founder.key} variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-xl p-6 flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: founder.accent }}
                  >
                    <span className="font-['Poppins'] font-semibold text-white text-[15px]">{founder.initials}</span>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">{founder.name}</h3>
                  <p className="font-['Open_Sans'] text-[13px]" style={{ color: founder.accent }}>{BOARD_ROLES[founder.key]}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="font-['Open_Sans'] italic text-[14px] text-[#4A4F4D] text-center">
              We are actively recruiting independent board members to broaden our governance, strengthen oversight, and bring new expertise to our leadership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — What we're looking for */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">BOARD MEMBER PROFILE</div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-[#2A2E2C] mb-4">We are looking for people who bring what we do not already have.</h2>
              <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
                We are not looking for one type of board member. We are looking for a mix of expertise, perspective, and lived experience that makes TT's governance stronger than any single founder.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-xl p-8">
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2F6B3F] mb-5">Expertise we are actively seeking:</h3>
                <ul className="space-y-3">
                  {EXPERTISE_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                      <Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-xl p-8">
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2F6F7E] mb-5">What board membership involves:</h3>
                <ul className="space-y-3">
                  {INVOLVEMENT_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-['Open_Sans'] text-[13px] text-[#4A4F4D]">
                      <Check size={16} color="#2F6F7E" className="shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Why join TT's board */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                WHY THIS BOARD
              </div>
              <h2 className="font-['Fraunces'] font-bold text-[34px] text-white mb-6">This is the ground floor.</h2>
              <div className="font-['Open_Sans'] text-[16px] leading-[1.7] max-w-[860px] space-y-4" style={{ color: "rgba(255,255,255,0.70)" }}>
                <p>Transition Trails is at the beginning of something significant. We are building programs that close the Salesforce experience gap for Career Starters, Career Builders, and Career Pivoters. We are supporting nonprofits with technology they could not otherwise access. We are building a methodology — RESOLVE — that is changing how Salesforce professionals are trained and deployed.</p>
                <p>Joining our board now means you help shape the governance of that mission from the beginning. You will have real influence over real decisions at a moment when those decisions matter most. The people who join TT's board now will have been part of building something that lasted.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUE_CARDS.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="rounded-xl p-7"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(255,255,255,0.08)" }}>{card.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[15px] text-white mb-3">{card.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.60)" }}>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — Apply */}
      <section id="apply" className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[560px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="w-full flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">EXPRESS INTEREST</motion.div>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[20px] text-[#2A2E2C] mb-6">Tell us about yourself.</motion.h2>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mb-8">
              Board recruitment is led by our founding team. We review every application and respond within 5 business days to schedule an introductory conversation. There is no formal deadline — we are recruiting on a rolling basis.
            </motion.p>
            <motion.div variants={fadeUp} className="w-full">
              <Link
                href="/board-application"
                className="inline-flex items-center gap-2 bg-[#2F6B3F] text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-[#1E4A2A] transition-colors duration-200 w-full justify-center"
              >
                Express Board Interest →
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[12px] text-[#8C8882] italic mt-4">
              Questions? Email{" "}
              <a href="mailto:hello@transitiontrails.org" className="text-[#2F6B3F] hover:underline">hello@transitiontrails.org</a>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
