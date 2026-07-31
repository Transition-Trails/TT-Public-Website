import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { UserCheck, Users, Briefcase, Star, Handshake, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function PartnersRecruiters() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Recruiter Partnerships | Transition Trails | Salesforce Graduate Pipeline"
        description="Partner with Transition Trails to access a pipeline of vetted Salesforce graduates with real project experience and portfolio documentation."
        path="/partners/recruiters"
      />

      {/* HERO */}
      <section
        className="py-24 px-8"
        style={{ background: "linear-gradient(135deg, #1E4A2A 0%, #2F6B3F 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}
              className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-8"
              style={{ color: "#7FAFC6", background: "rgba(127,175,198,0.15)", border: "1px solid rgba(127,175,198,0.35)" }}
            >
              FOR RECRUITERS
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-['Fraunces'] font-bold text-[52px] md:text-[64px] text-white tracking-[-1.5px] leading-[1.08] mb-6 max-w-[820px]"
            >
              Build your Salesforce talent pipeline.
            </motion.h1>

            <motion.p variants={fadeUp}
              className="font-['Open_Sans'] text-[18px] leading-[1.7] max-w-[680px] mb-12"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Transition Trails is building a network of Salesforce-certified professionals ready to enter the workforce. Partner with us to hire graduates, receive referrals, and get early access to emerging talent.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <div
                className="rounded-xl px-8 py-5 text-center"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div className="font-['Fraunces'] font-bold text-[22px] text-white mb-1">Guided Trail</div>
                <div className="font-['Open_Sans'] text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>Certified graduates</div>
              </div>
              <div
                className="rounded-xl px-8 py-5 text-center"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div className="font-['Fraunces'] font-bold text-[22px] text-white mb-1">Cohort 1</div>
                <div className="font-['Open_Sans'] text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>Launching 2026</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — TWO WAYS TO PARTNER */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp}
              className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6B3F] mb-4"
            >
              TWO WAYS TO PARTNER
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="font-['Fraunces'] font-bold text-[40px] text-[#2A2E2C] tracking-[-0.5px]"
            >
              Two ways to work with us.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Card 1 — Hire Graduates */}
            <motion.div variants={fadeUp}
              className="bg-white rounded-2xl border border-[#E2E4E1] p-8 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(47,111,126,0.12)" }}>
                <UserCheck className="w-5 h-5" style={{ color: "#2F6F7E" }} />
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[1.5px] text-[#2F6F7E] mb-3">HIRE OUR GRADUATES</div>
              <h3 className="font-['Poppins'] font-bold text-[22px] text-[#2A2E2C] mb-4">Hire our graduates.</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.7] mb-6">
                Guided Trail graduates hold the Salesforce Certified Platform Administrator certification, have completed real project work for nonprofit clients, and have a portfolio that demonstrates they can deliver — not just pass a test. These are not entry-level candidates in the traditional sense. They have done the work.
              </p>
              <ul className="space-y-3 mt-auto">
                {[
                  "Salesforce Certified Platform Administrator",
                  "Supervised nonprofit project delivery — sandbox-based",
                  "Portfolio of documented deliverables",
                  "Coached by senior Salesforce professionals",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#2F6B3F]" />
                    <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 — Refer Candidates */}
            <motion.div variants={fadeUp}
              className="bg-white rounded-2xl border border-[#E2E4E1] p-8 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(47,107,63,0.12)" }}>
                <Users className="w-5 h-5" style={{ color: "#2F6B3F" }} />
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[1.5px] text-[#2F6B3F] mb-3">REFER CANDIDATES</div>
              <h3 className="font-['Poppins'] font-bold text-[22px] text-[#2A2E2C] mb-4">Refer candidates to our programs.</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.7] mb-6">
                Know someone who is Salesforce certified but struggling to land their first role? Refer them to Guided Trail. We will help them build the experience and portfolio they need to compete. When they succeed, your network grows too.
              </p>
              <ul className="space-y-3 mt-auto">
                {[
                  "Refer certified professionals who need real experience",
                  "We handle the training and placement preparation",
                  "Stay connected to their progress",
                  "Build a reputation as someone who opens doors",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#2F6B3F]" />
                    <span className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHY PARTNER */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div variants={fadeUp}
              className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6B3F] mb-4"
            >
              WHY PARTNER
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="font-['Fraunces'] font-bold text-[40px] text-[#2A2E2C] tracking-[-0.5px]"
            >
              Why recruiters choose Transition Trails.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Briefcase className="w-5 h-5" style={{ color: "#2F6B3F" }} />,
                bg: "rgba(47,107,63,0.10)",
                title: "Pre-vetted talent",
                body: "Every graduate has completed a structured program, real client work, and a coaching-supported experience. Less screening time for you.",
              },
              {
                icon: <Star className="w-5 h-5" style={{ color: "#F5A623" }} />,
                bg: "rgba(245,166,35,0.12)",
                title: "Early access",
                body: "Partners get visibility into upcoming cohort graduates before they hit the general job market.",
              },
              {
                icon: <Handshake className="w-5 h-5" style={{ color: "#2F6F7E" }} />,
                bg: "rgba(47,111,126,0.12)",
                title: "A growing network",
                body: "As we scale, so does the pipeline. Cohort after cohort of certified, portfolio-ready Salesforce professionals.",
              },
            ].map(item => (
              <motion.div key={item.title} variants={fadeUp}
                className="flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: item.bg }}>
                  {item.icon}
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-2">{item.title}</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.7]">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-[#2A2E2C] py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-6xl mx-auto px-8 text-center flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp}
            className="font-['Fraunces'] font-bold text-[42px] text-white tracking-[-0.5px] mb-4"
          >
            Ready to build your pipeline?
          </motion.h2>
          <motion.p variants={fadeUp}
            className="font-['Open_Sans'] text-[17px] leading-[1.7] max-w-[580px] mb-10"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Tell us about your hiring needs and how you'd like to partner. A member of the TT team will be in touch within 2 business days.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
            <a
              href="https://form.jotform.com/261877200550050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg font-['Open_Sans'] font-semibold text-[15px] bg-[#F5A623] text-[#2A2E2C] hover:bg-[#D4890A] transition-colors"
            >
              Partner with Us →
            </a>
            <p className="font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.40)" }}>
              No commitment required. We'll find the right fit for your recruiting goals.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
