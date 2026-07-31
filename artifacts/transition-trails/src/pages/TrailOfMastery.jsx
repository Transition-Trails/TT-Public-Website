import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import { Users, TrendingUp, Rocket, Shield, ClipboardList, Layout, Code, Compass } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const fadeUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const TRACKS = [
  {
    icon: <Shield size={24} className="text-trail-green" />,
    iconBg: "bg-green-100",
    name: "Admin Mastery",
    duration: "8 WEEKS",
    body: "Cement your foundation with real client configuration work under an advanced coach.",
    accent: "var(--tt-trail-green)",
  },
  {
    icon: <ClipboardList size={24} className="text-deep-teal" />,
    iconBg: "bg-teal-100",
    name: "Business Analyst Mastery",
    duration: "12 WEEKS",
    body: "Develop the discovery, analysis, and requirements skills that make every team more effective.",
    accent: "var(--tt-deep-teal)",
  },
  {
    icon: <Layout size={24} className="text-deep-teal" />,
    iconBg: "bg-teal-100",
    name: "Product Owner Mastery",
    duration: "12 WEEKS",
    body: "Own the backlog, write the stories, and hold approval authority over every deployment gate.",
    accent: "var(--tt-deep-teal)",
  },
  {
    icon: <Code size={24} className="text-green-700" />,
    iconBg: "bg-green-100",
    name: "Advanced Admin Mastery",
    duration: "16 WEEKS",
    body: "Go deeper into automation architecture, security models, and org strategy.",
    accent: "var(--tt-green-700)",
  },
];

const FUTURE_TRACKS = [
  {
    icon: <Compass size={24} className="text-muted-text" />,
    iconBg: "bg-muted-fill",
    name: "Solutions Consultant Mastery",
    duration: "16 WEEKS",
    body: "Lead the client, design the solution, and present outcomes — all through RESOLVE.",
    accent: "var(--tt-muted-text)",
  },
];

const WHAT_CARDS = [
  {
    icon: <Users size={24} className="text-deep-teal" />,
    iconBg: "bg-teal-100",
    title: "Real team. Real roles.",
    body: "4–5 learners per cohort in mixed roles that reflect how real Salesforce teams work.",
  },
  {
    icon: <TrendingUp size={24} className="text-deep-teal" />,
    iconBg: "bg-teal-100",
    title: "Real pipeline. Real gates.",
    body: "Professional CI/CD pipeline using Salesforce DevOps Center and GitHub. Every deployment goes through formal approval gates.",
  },
  {
    icon: <Rocket size={24} className="text-trail-green" />,
    iconBg: "bg-green-100",
    title: "Real clients. Real deliverables.",
    body: "Digital Compass nonprofit clients and internal Trail OS work — always configuration, never code.",
  },
];

const JOTFORM_URL = "https://form.jotform.com/261895924962070";

export default function TrailOfMastery() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Trail of Mastery | Salesforce Team Apprenticeship | Transition Trails"
        description="A supervised Salesforce team apprenticeship — real clients, real CI/CD pipeline, four tracks. Cohort 0 coming in 2027. Join the interest list."
        path="/programs/trail-of-mastery"
      />

      {/* SECTION 1: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, var(--tt-teal-700) 0%, var(--tt-deep-teal) 55%, var(--tt-green-700) 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-white/80 transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-white/80">Trail of Mastery</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            <div className="flex-1 max-w-[720px]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7 text-trail-green"
                  style={{ background: "rgba(47,107,63,0.18)", border: "1px solid rgba(47,107,63,0.45)" }}
                >
                  IN DEVELOPMENT · COHORT 0 · 2027
                </div>
              </motion.div>

              <motion.h1
                className="font-['Fraunces'] font-bold text-[52px] md:text-[60px] text-white tracking-[-1.5px] leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                Trail of Mastery.<br />Coming 2027.
              </motion.h1>

              <motion.p
                className="font-['Open_Sans'] text-[17px] text-white/75 leading-[1.65] max-w-[660px]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
              >
                Not a course. A professional apprenticeship. Trail of Mastery is where Salesforce professionals stop collecting certifications and start curating skills — working in a real team, delivering for real clients, inside a professional CI/CD pipeline.
              </motion.p>
            </div>

            <div className="flex flex-col gap-4 w-full xl:w-[260px] shrink-0">
              <motion.div
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="font-['Poppins'] font-bold text-[22px] text-white leading-tight mb-1">Cohort 0 · 2027</div>
                <div className="font-['Open_Sans'] text-[13px] text-white/65">Founding test cohort — applications open soon</div>
              </motion.div>
              <motion.div
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.33 }}
              >
                <div className="font-['Poppins'] font-bold text-[22px] text-teal-300 leading-tight mb-1">4 tracks · Mixed-role teams</div>
                <div className="font-['Open_Sans'] text-[13px] text-white/65">Admin · BA · PO · Advanced Admin</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What This Is */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">THE PROGRAM</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-5 max-w-[640px]">
              A supervised team apprenticeship.
            </h2>
            <p className="font-['Open_Sans'] text-[17px] text-slate leading-[1.65] max-w-[820px]">
              Trail of Mastery puts you in a mixed-role team of 4–5 learners — BA, PO, Admin, and Advanced Admin. You work in your role, deliver real Salesforce solutions for real nonprofit clients, and operate inside a professional CI/CD pipeline using RESOLVE methodology. You leave with a portfolio that proves it.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {WHAT_CARDS.map(card => (
              <motion.div
                key={card.title}
                variants={fadeUpChild}
                className="bg-white border border-warm-gray rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-3">{card.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: The Four Tracks */}
      <section className="bg-trail-light py-20 px-5 md:px-10 border-y border-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-deep-teal mb-4">CHOOSE YOUR TRACK</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-4">Four tracks. One team. One methodology.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[680px] leading-[1.65]">
              Each track deepens your specialization while building cross-role fluency. Choose the path that matches where you want to go.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-16"
          >
            {TRACKS.map(track => (
              <motion.div
                key={track.name}
                variants={fadeUpChild}
                className="bg-white border border-warm-gray rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${track.iconBg} flex items-center justify-center`}>
                      {track.icon}
                    </div>
                    <span
                      className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase px-2 py-0.5 rounded"
                      style={{ background: `${track.accent}18`, color: track.accent }}
                    >
                      {track.duration}
                    </span>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[15px] text-charcoal mb-2">{track.name}</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{track.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-muted-text mb-4">TRACKS WE ARE DESIGNING NEXT</div>
            <p className="font-['Open_Sans'] text-[14px] text-cool-gray max-w-[640px] leading-[1.65] mb-6">
              These role tracks are in active design and not yet offered. If you are interested, your signal helps us prioritize.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[640px]">
              {FUTURE_TRACKS.map(track => (
                <div
                  key={track.name}
                  className="bg-white border border-warm-gray border-dashed rounded-xl flex flex-col opacity-70"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg ${track.iconBg} flex items-center justify-center`}>
                        {track.icon}
                      </div>
                      <span className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase px-2 py-0.5 rounded bg-muted-fill text-muted-text">
                        {track.duration}
                      </span>
                    </div>
                    <h3 className="font-['Poppins'] font-semibold text-[15px] text-cool-gray mb-2">{track.name}</h3>
                    <p className="font-['Open_Sans'] text-[13px] text-muted-text leading-[1.65]">{track.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Cohort 0 Callout */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: "linear-gradient(135deg, var(--tt-teal-700) 0%, var(--tt-deep-teal) 100%)" }}
          >
            <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-teal-300 mb-5">COHORT 0 · 2027</div>
            <h2 className="font-['Fraunces'] font-bold text-[34px] md:text-[40px] text-white mb-6">
              Be part of building it.
            </h2>
            <p className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[640px] mx-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
              Cohort 0 is a founding test cohort — a small group of Salesforce professionals who will work through the program with us and help shape what Trail of Mastery becomes. If you're interested in being part of Cohort 0, join the interest list. We'll be in touch when applications open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="bg-trail-light py-20 px-5 md:px-10 border-t border-warm-gray">
        <div className="max-w-[700px] mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-['Fraunces'] font-bold text-[38px] md:text-[44px] text-charcoal mb-5 leading-[1.15]">
              Ready to stop collecting certifications?
            </h2>
            <p className="font-['Open_Sans'] text-[17px] text-slate leading-[1.65] mb-10">
              Join the Trail of Mastery interest list. We'll reach out when Cohort 0 applications open in 2027.
            </p>
            <a
              href={JOTFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[56px] px-10 rounded-[8px] font-['Poppins'] font-bold text-[15px] transition-colors bg-sun-amber text-charcoal"
            >
              Join the Interest List →
            </a>
            <p className="font-['Open_Sans'] text-[13px] text-muted-text mt-5">
              Cohort 0 · 2027 · Applications open soon
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
