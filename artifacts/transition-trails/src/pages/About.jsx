import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { Compass, Target, Briefcase } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="About Transition Trails | Our Mission & Founding Team | Dallas TX"
        description="Transition Trails is a 501(c)(3) nonprofit assisting people in transitioning to the digital economy through education, mentoring and training in the Salesforce ecosystem. Founded 2020, Dallas TX. EIN 88-2746412."
        path="/about"
      />

      {/* HERO */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10 border-b border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#F5A623] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
              OUR STORY
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] font-bold text-[40px] md:text-[48px] text-white leading-tight max-w-3xl mx-auto"
            >
              Built by people who know what it costs to break in.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[18px] text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto">
              Four founders. One mission. Built from a phone call that turned into a proof of concept — and a proof of concept that became a nonprofit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-white py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">OUR MISSION</motion.div>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-[#2A2E2C] leading-tight mb-6">Our Mission.</motion.h2>
            <motion.div variants={fadeUp} className="border-l-[5px] border-[#2F6B3F] bg-[#E6F3EA] px-10 py-8 rounded-r-xl mb-4">
              <p className="font-['Poppins'] font-semibold text-[20px] text-[#1E4A2A] leading-[1.6] tracking-[-0.2px]">
                To assist people in transitioning to the digital economy through education, mentoring and training. Our primary focus is within the Salesforce ecosystem, providing a system of online and real world education and experience.
              </p>
            </motion.div>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-5">
              Registered mission statement · Transition Trails · EIN 88-2746412 · 501(c)(3) effective May 15, 2022
            </motion.p>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
              The Trail Forward Scholarship — one fully funded Guided Trail seat per cohort — is a direct expression of this mission.{" "}
              <Link href="/scholarships" className="text-[#2F6B3F] font-semibold hover:underline">Learn more →</Link>
            </motion.p>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mt-4">
              Our coaches are Salesforce professionals who have done the work — and come back to help others do it too.{" "}
              <Link href="/coaches" className="text-[#2F6B3F] font-semibold hover:underline">Become a TT coach →</Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="bg-[#FAFAF7] py-16 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-3 text-center">WHO WE BUILD FOR</motion.div>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-[#2A2E2C] leading-tight mb-10 text-center">Who we build for.</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Compass size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Career Starters</h3>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
                  You are new to Salesforce — or new to tech entirely. You are trying to figure out if this is the right path, building foundational skills, and looking for a place to learn without feeling left behind. Explorer's Trail and Foundations Trail were built for you.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Target size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Career Builders</h3>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
                  You have a Salesforce certification — or you are close to earning one. The job you want requires experience you have not had the chance to build yet. The Guided Trail and Trail of Mastery exist to close that gap with real work, real clients, and a real portfolio.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Briefcase size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Career Pivoters</h3>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
                  You are coming from somewhere else entirely — a different industry, a different career, a different version of your life. Hugh came from 16 years of truck driving. Transition Trails was built on the belief that the pivot is possible for anyone willing to do the work. Every trail is open to you.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE ORIGIN STORY */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col md:flex-row gap-16 items-start"
          >
            <div className="flex-1">
              <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[32px] text-[#2A2E2C] mb-6">The Origin Story</motion.h2>
              <div className="font-['Open_Sans'] text-[15px] text-[#6B7280] leading-[1.85] space-y-5">
                <motion.p variants={fadeUp}>
                  It started with a phone call. A college friend of Angela's reached out about the nonprofit he served on the board — CLYLP — and they wanted to implement Salesforce NPSP. The ask was simple. The timing turned out to be everything.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Kim and Angela had already been talking about the gap they kept seeing in the Salesforce ecosystem — people with certifications but no experience, and nonprofits with powerful software they couldn't fully use. Hugh was in that exact position. Certified, capable, and stuck behind the experience wall.
                </motion.p>
                <motion.p variants={fadeUp}>
                  So they put him on the project. Hugh learned while doing — working through the implementation, solving real problems for a real client, and delivering his first Salesforce project to CLYLP. Along the way, he automated an intensive annual process that the organization had been running manually. Hugh now had the experience he needed. And the three of them had proof that the model worked.
                </motion.p>
                <motion.p variants={fadeUp}>
                  When it came time to make it official, Kel joined to build the foundation. With nonprofit accounting and IRS experience, Kel established Transition Trails as a 501(c)(3) — handling the books, records, and compliance infrastructure that would let the mission scale responsibly.
                </motion.p>
                <motion.p variants={fadeUp}>
                  That first project with CLYLP became the blueprint. Real client. Real stakes. Real delivery. We have been building on that model ever since.
                </motion.p>
              </div>
            </div>

            <motion.div variants={fadeUp} className="w-full md:w-[400px] shrink-0">
              <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-2xl p-8">
                <div className="font-['Poppins'] font-semibold text-[16px] text-[#2F6B3F] mb-5">How it started.</div>
                <div className="space-y-4">
                  {[
                    "2019 — First call. CLYLP reaches out about Salesforce NPSP implementation.",
                    "2019–2022 — First project delivered. Hugh builds real experience. The model proves itself.",
                    "2022 — Transition Trails incorporated as a 501(c)(3). Kel establishes the legal and financial foundation.",
                    "2022 — Hartford Promise becomes our second client. The network begins.",
                    "2025 — Guided Trail Cohort 0 completes. The program is ready.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2F6B3F] mt-2 flex-shrink-0" />
                      <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 px-5 md:px-10 border-t border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT PEOPLE ARE SAYING</div>
              <h2 className="font-['Fraunces'] font-bold text-[32px] text-[#2A2E2C] mb-3">Real outcomes. Real voices.</h2>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] max-w-[580px] mx-auto">
                From the nonprofits we serve and the learners who have done the work.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-[600px] mx-auto">
              <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6F7E" }}>
                <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,111,126,0.15)" }}>"</div>
                <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                  Transition Trails Salesforce Experts go beyond! After working with the team, our productivity and data accuracy soared — and we felt supported every step of the way.
                </p>
                <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6F7E]">Hartford Promise</div>
                <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Nonprofit Partner · Digital Compass Member · Hartford, CT</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-5 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[36px] text-[#2A2E2C] mb-8">Want to be part of the story?</motion.h2>
            <motion.div variants={fadeUp}>
              <CTAButton href={LINKS.angelaCalendar} variant="amber" size="lg" external>
                Schedule time with us
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
