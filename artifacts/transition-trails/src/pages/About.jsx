import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { Compass, Target, Briefcase } from "lucide-react";
import aboutContent from "../content/pages/about.json";
import testimonialContent from "../content/testimonials.json";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  const hartfordTestimonial = testimonialContent.testimonials.find(t => t.id === "hartford-promise");
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="About Transition Trails | Our Mission & Founding Team | Dallas TX"
        description="Transition Trails is a 501(c)(3) nonprofit assisting people in transitioning to the digital economy through education, mentoring and training in the Salesforce ecosystem. Founded 2020, Dallas TX. EIN 88-2746412."
        path="/about"
      />

      {/* HERO */}
      <section className="bg-charcoal py-20 px-5 md:px-10 border-b border-warm-gray">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sun-amber text-xs font-semibold uppercase tracking-[0.15em] mb-3">
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
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">OUR MISSION</motion.div>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-charcoal leading-tight mb-6">Our Mission.</motion.h2>
            <motion.div variants={fadeUp} className="border-l-[5px] border-trail-green bg-green-100 px-10 py-8 rounded-r-xl mb-4">
              <p className="font-['Poppins'] font-semibold text-[20px] text-green-700 leading-[1.6] tracking-[-0.2px]">
                {aboutContent.mission.statement}
              </p>
            </motion.div>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[14px] text-slate mb-5">
              Registered mission statement · Transition Trails · EIN 88-2746412 · 501(c)(3) effective May 15, 2022
            </motion.p>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65]">
              The Trail Forward Scholarship — one fully funded Guided Trail seat per cohort — is a direct expression of this mission.{" "}
              <Link href="/scholarships" className="text-trail-green font-semibold hover:underline">Learn more →</Link>
            </motion.p>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65] mt-4">
              Our coaches are Salesforce professionals who have done the work — and come back to help others do it too.{" "}
              <Link href="/coaches" className="text-trail-green font-semibold hover:underline">Become a TT coach →</Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="bg-trail-light py-16 px-5 md:px-10 border-y border-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-3 text-center">WHO WE BUILD FOR</motion.div>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-charcoal leading-tight mb-10 text-center">Who we build for.</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Compass size={24} color="var(--tt-trail-green)" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-charcoal mb-3">Career Starters</h3>
                <p className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65]">
                  You are new to Salesforce — or new to tech entirely. You are trying to figure out if this is the right path, building foundational skills, and looking for a place to learn without feeling left behind. Explorer's Trail and Foundations Trail were built for you.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Target size={24} color="var(--tt-trail-green)" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-charcoal mb-3">Career Builders</h3>
                <p className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65]">
                  You have a Salesforce certification — or you are close to earning one. The job you want requires experience you have not had the chance to build yet. The Guided Trail and Trail of Mastery exist to close that gap with real work, real clients, and a real portfolio.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Briefcase size={24} color="var(--tt-trail-green)" />
                </div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-charcoal mb-3">Career Pivoters</h3>
                <p className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65]">
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
              <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[32px] text-charcoal mb-6">The Origin Story</motion.h2>
              <div className="font-['Open_Sans'] text-[15px] text-cool-gray leading-[1.85] space-y-5">
                {aboutContent.originStory.paragraphs.map((para, i) => (
                  <motion.p key={i} variants={fadeUp}>{para}</motion.p>
                ))}
              </div>
            </div>

            <motion.div variants={fadeUp} className="w-full md:w-[400px] shrink-0">
              <div className="bg-green-100 border border-trail-green/20 rounded-2xl p-8">
                <div className="font-['Poppins'] font-semibold text-[16px] text-trail-green mb-5">How it started.</div>
                <div className="space-y-4">
                  {aboutContent.originStory.timeline.map((item) => (
                    <div key={item.year + item.event} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-trail-green mt-2 flex-shrink-0" />
                      <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">{item.year} — {item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 px-5 md:px-10 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">WHAT PEOPLE ARE SAYING</div>
              <h2 className="font-['Fraunces'] font-bold text-[32px] text-charcoal mb-3">Real outcomes. Real voices.</h2>
              <p className="font-['Open_Sans'] text-[15px] text-slate max-w-[580px] mx-auto">
                From the nonprofits we serve and the learners who have done the work.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-[600px] mx-auto">
              <div className="bg-white border border-warm-gray rounded-xl p-7 relative" style={{ borderLeft: "5px solid var(--tt-deep-teal)" }}>
                <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,111,126,0.15)" }}>"</div>
                <p className="font-['Poppins'] font-medium italic text-[16px] text-charcoal leading-[1.6] mb-4 relative z-10">
                  {hartfordTestimonial.quote}
                </p>
                <div className="font-['Open_Sans'] font-semibold text-[14px] text-deep-teal">{hartfordTestimonial.name}</div>
                <div className="font-['Open_Sans'] text-[12px] text-muted-text">{hartfordTestimonial.attribution}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-5 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-8">Want to be part of the story?</motion.h2>
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
