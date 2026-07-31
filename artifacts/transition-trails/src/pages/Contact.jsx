import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { GraduationCap, Building2, Briefcase, MessageCircle } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";

export default function Contact() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Contact Transition Trails | Get in Touch | Dallas TX"
        description="Questions about Salesforce programs, nonprofit services, or partnerships? Reach the Transition Trails team in Dallas, TX."
        path="/contact"
      />

      {/* HERO */}
      <section className="bg-charcoal pt-24 pb-16 px-5 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[48px] md:text-[56px] text-white">Get in touch.</motion.h1>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[18px] text-white/70 mt-4">
              We're a small team and we respond personally — usually within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-trail-light py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Left Column */}
            <div className="flex-[2]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <motion.div variants={fadeUp} className="bg-white border border-warm-gray p-6 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                    <GraduationCap size={18} stroke="var(--tt-trail-green)" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-trail-green mb-2">For Learners</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-slate">Questions about programs, pricing, or enrollment</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link href="/nonprofit-assessment" className="bg-white border border-warm-gray p-6 rounded-xl block hover:border-deep-teal transition-colors h-full">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                      <Building2 size={18} stroke="var(--tt-deep-teal)" />
                    </div>
                    <h3 className="font-['Poppins'] font-bold text-[18px] text-deep-teal mb-2">For Nonprofits →</h3>
                    <p className="font-['Open_Sans'] text-[14px] text-slate">Book a free Digital Compass assessment</p>
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-white border border-warm-gray p-6 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                    <Briefcase size={18} stroke="var(--tt-amber-700)" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-sun-amber mb-2">For Partners & Employers</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-slate">Employer sponsorships, corporate partnerships</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-white border border-warm-gray p-6 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-muted-fill flex items-center justify-center mb-3">
                    <MessageCircle size={18} stroke="var(--tt-cool-gray)" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-2">General</h3>
                  <p className="font-['Open_Sans'] text-[14px] text-slate">Anything else — we're here</p>
                </motion.div>
              </div>

              {/* Contact CTA Card */}
              <motion.div variants={fadeUp} className="bg-white border border-warm-gray rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col items-start gap-6">
                  <div>
                    <h2 className="font-['Fraunces'] font-bold text-[22px] text-charcoal mb-2">Send us a message.</h2>
                    <p className="font-['Open_Sans'] text-[15px] text-cool-gray leading-relaxed">Share your question and details — we'll reply within 2 business days.</p>
                  </div>
                  <a
                    href="https://form.jotform.com/261877821935066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-trail-green text-white font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Send Us a Message →
                  </a>
                  <p className="font-['Open_Sans'] text-[12px] text-cool-gray italic">Opens a short form — we respond within 2 business days.</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-6">
              <motion.div variants={fadeUp} className="bg-white border border-warm-gray p-8 rounded-2xl flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-trail-green text-white flex items-center justify-center font-['Poppins'] font-bold text-[20px] mb-4">
                  AL
                </div>
                <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-6">Let's talk strategy.</h3>
                <CTAButton href={LINKS.angelaCalendar} variant="amber" className="w-full" external>
                  Schedule Time With Angela
                </CTAButton>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-deep-teal text-white p-8 rounded-2xl">
                <h3 className="font-['Poppins'] font-bold text-[18px] mb-6">Direct Channels</h3>
                <div className="space-y-4 font-['Open_Sans'] text-[15px]">
                  <div>
                    <div className="text-white/60 text-[12px] uppercase tracking-wider font-semibold mb-1">General Inquiries</div>
                    <a href="mailto:hello@transitiontrails.org" className="hover:underline">hello@transitiontrails.org</a>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-white/60 text-[12px] uppercase tracking-wider font-semibold mb-1">Mailing Address</div>
                    <div>1228 Hollywood Ave<br />Dallas, TX 75208</div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white border border-warm-gray p-8 rounded-2xl">
                <h3 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-6">Social</h3>
                <div className="flex flex-col gap-4 font-['Open_Sans'] text-[15px]">
                  <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate hover:text-[#0077b5] transition-colors">
                    <FaLinkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate hover:text-[#1877f2] transition-colors">
                    <FaFacebook className="w-5 h-5" /> Facebook
                  </a>
                  <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate hover:text-[#ff6719] transition-colors">
                    <div className="w-5 h-5 bg-current rounded-sm flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                    Substack
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
