import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Database, Users, DollarSign, BookOpen, GraduationCap, Map, TrendingUp, Heart, Briefcase, UserCheck, Gift, ArrowRight, Compass, Target } from "lucide-react";
import { PageMeta } from "../components/PageMeta";
import { CTAButton } from "../components/CTAButton";
import { ProgramCard } from "../components/ProgramCard";
import { PROGRAMS } from "../constants/programs";
import { FOUNDERS } from "../constants/founders";
import { LINKS } from "../constants/links";
import siteContent from "../content/site.json";
import homeContent from "../content/pages/home.json";
import testimonialContent from "../content/testimonials.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};
const fadeUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55 } }
};
const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55 } }
};

const PROBLEM_ICONS = [
  <Database className="w-8 h-8 text-teal-300 mb-5" />,
  <Users className="w-8 h-8 text-teal-300 mb-5" />,
  <DollarSign className="w-8 h-8 text-teal-300 mb-5" />,
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Transition Trails | Salesforce Career Training | Dallas TX"
        description="Transition Trails connects certified Salesforce professionals with real nonprofit client work. Five programs. Real experience. 501(c)(3) nonprofit. Dallas, TX."
        path="/"
      />

      {/* Section 1: Hero */}
      <section className="bg-gradient-to-r from-green-700 via-trail-green to-deep-teal min-h-[640px] flex items-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 max-w-[640px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center justify-center bg-teal-300/20 border border-teal-300/40 text-teal-300 font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6">
              For Career Starters · Career Builders · Career Pivoters
            </div>
            <h1 className="font-['Fraunces'] font-bold text-[42px] md:text-[62px] text-white tracking-[-1px] leading-[1.1] mb-6">
              Every Career Has a Trail.
            </h1>
            <p className="font-['Open_Sans'] text-[18px] md:text-[20px] text-white/90 leading-[1.6] mb-10">
              Whether you're a Career Starter, Career Builder, or Career Pivoter, Transition Trails connects you with the learning, experience, and community that move careers forward — while expanding nonprofit capacity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/programs" size="lg">
                Find Your Trail
              </CTAButton>
              <CTAButton href="/nonprofit-assessment" variant="outline" size="lg" className="text-white hover:bg-white/10">
                Partner With Us
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 border border-white/15 rounded-2xl w-full max-w-[380px] p-8 lg:p-10 backdrop-blur-sm shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-sun-amber leading-none mb-1">12 weeks</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">Guided Trail practicum</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-sun-amber leading-none mb-1">$0</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">Cost to scholarship learners</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-sun-amber leading-none mb-1">5 programs</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">One connected ecosystem</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-sun-amber leading-none mb-1">$1,547</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">Cost of one scholarship seat</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Trust Strip */}
      <section className="bg-white border-b border-warm-gray py-5">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4 font-['Open_Sans'] font-semibold text-[14px] text-slate">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-trail-green" /> 501(c)(3) Nonprofit</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-warm-gray" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-trail-green" /> Dallas TX</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-warm-gray" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-trail-green" /> Salesforce Ecosystem</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-warm-gray" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-trail-green" /> Dual Impact Model</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-warm-gray" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-trail-green" /> Real Project Experience</div>
          </div>
        </div>
      </section>

      {/* Section 3: The Experience Gap */}
      <section className="bg-trail-light py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-16 items-center xl:items-start">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-1 max-w-[560px]">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">THE EXPERIENCE GAP</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] md:text-[40px] text-charcoal leading-tight mb-4">
              Certified. Qualified. Still waiting for a chance.
            </h2>
            <p className="font-['Open_Sans'] text-[15px] text-slate mb-6">
              <span className="font-semibold text-teal-300">Career Starters</span>
              <span className="mx-2 text-warm-gray">·</span>
              <span className="font-semibold text-trail-green">Career Builders</span>
              <span className="mx-2 text-warm-gray">·</span>
              <span className="font-semibold text-green-700">Career Pivoters</span>
            </p>
            <p className="font-['Open_Sans'] text-[17px] text-slate leading-[1.65]">
              Maybe you are just starting — trying to figure out if Salesforce is the right path. Maybe you passed the exam and cannot get your first role because every job posting asks for experience you have not had a chance to build yet. Maybe you are like Hugh — 16 years in a completely different career, starting over, wondering if it is too late.
            </p>
            <p className="font-['Open_Sans'] text-[17px] text-slate leading-[1.65] mt-4">
              It is not too late. The gap is not your fault. And Transition Trails exists to close it — for all three of you.
            </p>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row gap-6 w-full xl:w-auto overflow-x-auto pb-4 sm:pb-0">
            <div className="bg-white border border-warm-gray rounded-xl w-[260px] sm:w-[220px] h-auto p-6 shrink-0 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                <Compass size={24} color="var(--tt-teal-300)" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-teal-300 mb-2">CAREER STARTERS</div>
              <div className="font-['Poppins'] font-bold text-[17px] text-charcoal mb-3">Where do I even begin?</div>
              <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">
                You know Salesforce is a valuable skill. You are not sure where to start, whether you are cut out for it, or how long it will take. Explorer's Trail and Foundations Trail are built for exactly this moment.
              </p>
            </div>
            <div className="bg-white border border-warm-gray rounded-xl w-[260px] sm:w-[220px] h-auto p-6 shrink-0 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <Target size={24} color="var(--tt-trail-green)" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-trail-green mb-2">CAREER BUILDERS</div>
              <div className="font-['Poppins'] font-bold text-[17px] text-charcoal mb-3">I have the cert. I cannot get hired.</div>
              <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">
                The paradox of the Salesforce ecosystem: every entry-level role requires experience you cannot get without a job. The Guided Trail breaks that cycle with real client work and a real portfolio.
              </p>
            </div>
            <div className="bg-white border border-warm-gray rounded-xl w-[260px] sm:w-[220px] h-auto p-6 shrink-0 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <Briefcase size={24} color="var(--tt-green-700)" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-green-700 mb-2">CAREER PIVOTERS</div>
              <div className="font-['Poppins'] font-bold text-[17px] text-charcoal mb-3">I am starting over. On purpose.</div>
              <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.6]">
                Hugh drove trucks for 16 years. He is now a Solutions Architect at Salesforce. The pivot is possible — and Transition Trails was built specifically to make it happen for people who are willing to do the work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: A Trail Built for Two */}
      <section className="bg-trail-light py-24 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-4">A Trail Built for Two</h2>
            <p className="font-['Open_Sans'] text-[18px] text-slate max-w-[640px] mx-auto">
              Our model solves two problems at once: career changers need real experience, and nonprofits need Salesforce capacity.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 — Career Changers */}
            <motion.div variants={fadeUpChild} className="bg-white border border-warm-gray rounded-xl shadow-sm p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-trail-green flex items-center justify-center mb-6 shrink-0">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Learners</h3>
              <p className="font-['Open_Sans'] text-[16px] text-slate leading-[1.65] mb-6">
                Whether you're just discovering Salesforce, working toward your certification, or certified and ready to build real experience — Transition Trails meets you where you are. Under the guidance of experienced coaches, you will work on real Salesforce solutions for nonprofit organizations, earning the portfolio proof that moves careers forward.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Career Starters — explore Salesforce and find your path",
                  "Career Builders — build real project experience after cert",
                  "Career Pivoters — make a deliberate move into a new career",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-['Open_Sans'] text-[15px] text-slate">
                    <Check className="w-4 h-4 text-trail-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/programs" className="mt-auto font-['Poppins'] font-semibold text-[15px] text-trail-green hover:underline flex items-center gap-1.5">
                Explore the Trails <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 2 — Nonprofits */}
            <motion.div variants={fadeUpChild} className="bg-white border border-warm-gray rounded-xl shadow-sm p-8 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-deep-teal flex items-center justify-center mb-6 shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Nonprofits</h3>
              <p className="font-['Open_Sans'] text-[16px] text-slate leading-[1.65] mb-6">
                You need a CRM that works for your mission, but implementation costs are out of reach. Partner with Transition Trails to receive scoped, professionally coached Salesforce support through Digital Compass — starting at $149/month.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Professionally coached learner teams",
                  "Scoped project deliverables",
                  "Expanded organizational Salesforce capacity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-['Open_Sans'] text-[15px] text-slate">
                    <Check className="w-4 h-4 text-deep-teal mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/nonprofit-assessment" className="mt-auto font-['Poppins'] font-semibold text-[15px] text-deep-teal hover:underline flex items-center gap-1.5">
                Partner with us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Section 5: Where Are You Today? (Trailhead Self-Selector) */}
      <section className="bg-trail-light py-20 px-5 md:px-10 border-t border-warm-gray">
        <div className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <h2 className="font-['Fraunces'] font-bold text-[40px] text-charcoal mb-4">Where Are You Today?</h2>
            <p className="font-['Open_Sans'] text-[18px] text-slate max-w-[640px]">
              Transition Trails is not a single linear curriculum. Find your trailhead — where you begin depends on where you are right now.
            </p>
          </motion.div>

          {/* Learner Pathways */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-['Open_Sans'] font-bold text-[12px] tracking-[2px] uppercase text-slate shrink-0">Learner Pathways</span>
              <div className="flex-1 h-px bg-warm-gray" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <motion.div variants={fadeUpChild}>
                <Link href="/programs/explorers-trail" className="group flex gap-5 bg-white border border-warm-gray rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-6 h-6 text-trail-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Open_Sans'] text-[13px] text-muted-text mb-1">I want to build skills and stay connected to the Salesforce community</div>
                    <div className="font-['Poppins'] font-bold text-[16px] text-charcoal mb-1 group-hover:text-trail-green transition-colors">Explorer's Trail</div>
                    <div className="font-['Open_Sans'] text-[12px] text-muted-text">Community + continuous learning — whether you're just starting or years into your career.</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-trail-green opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUpChild}>
                <Link href="/programs/foundations-trail" className="group flex gap-5 bg-white border border-warm-gray rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-6 h-6 text-trail-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Open_Sans'] text-[13px] text-muted-text mb-1">I have my Salesforce Platform Foundations certification and I'm working toward my Administrator cert</div>
                    <div className="font-['Poppins'] font-bold text-[16px] text-charcoal mb-1 group-hover:text-trail-green transition-colors">Foundations Trail</div>
                    <div className="font-['Open_Sans'] text-[12px] text-muted-text">Real org build + portfolio while you complete your Admin cert</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-trail-green opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUpChild}>
                <Link href="/programs/guided-trail" className="group flex gap-5 bg-trail-green border-2 border-trail-green rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block">
                  <div className="w-12 h-12 rounded-xl bg-sun-amber flex items-center justify-center shrink-0 mt-0.5">
                    <Map className="w-6 h-6 text-charcoal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Open_Sans'] text-[13px] text-white/65 mb-1">I'm Salesforce certified but not yet employed as an admin</div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-['Poppins'] font-bold text-[16px] text-white">Guided Trail</span>
                      <span className="bg-sun-amber text-charcoal font-['Open_Sans'] font-bold text-[9px] uppercase tracking-[1px] px-2 py-0.5 rounded">Flagship</span>
                    </div>
                    <div className="font-['Open_Sans'] text-[12px] text-white/60">12-week supervised nonprofit project · Our most popular program</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-sun-amber opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUpChild}>
                <Link href="/programs/trail-of-mastery" className="group flex gap-5 bg-white border border-warm-gray rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Open_Sans'] text-[13px] text-muted-text mb-1">I've been a Salesforce Admin for 6+ months and want to advance</div>
                    <div className="font-['Poppins'] font-bold text-[16px] text-charcoal mb-1 group-hover:text-trail-green transition-colors">Trail of Mastery</div>
                    <div className="font-['Open_Sans'] text-[12px] text-muted-text">Advanced specialization and apprenticeship for working admins</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-trail-green opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0" />
                </Link>
              </motion.div>

            </motion.div>
          </div>

          {/* Partners & Supporters */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-['Open_Sans'] font-bold text-[12px] tracking-[2px] uppercase text-slate shrink-0">Partners & Supporters</span>
              <div className="flex-1 h-px bg-warm-gray" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Heart className="w-5 h-5 text-trail-green" />, question: "I represent a nonprofit", trail: "Digital Compass", href: "/programs/digital-compass" },
                { icon: <Briefcase className="w-5 h-5 text-trail-green" />, question: "I hire or recruit Salesforce talent", trail: "Recruiters & Employers", href: "/partners/recruiters" },
                { icon: <UserCheck className="w-5 h-5 text-trail-green" />, question: "I want to volunteer or mentor", trail: "Volunteer & Mentor", href: "/volunteer" },
                { icon: <Gift className="w-5 h-5 text-trail-green" />, question: "I want to fund access", trail: "Trail Forward Scholarship", href: "/scholarship-application" },
              ].map(({ icon, question, trail, href }) => (
                <motion.div key={trail} variants={fadeUpChild}>
                  <Link href={href} className="group flex flex-col items-center text-center bg-white border border-warm-gray rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block h-full">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">{icon}</div>
                    <div className="font-['Open_Sans'] text-[13px] text-muted-text mb-2">{question}</div>
                    <div className="font-['Poppins'] font-bold text-[14px] text-trail-green group-hover:underline">{trail}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Program Ecosystem */}
      <section className="bg-trail-light py-20 px-5 md:px-10 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-16 h-[5px] bg-trail-green mb-8" />
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">FIVE PROGRAMS. ONE ECOSYSTEM.</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-12">Find your trail.</h2>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 items-end snap-x snap-mandatory">
            {PROGRAMS.map(program => (
              <div key={program.slug} className="snap-start shrink-0">
                <ProgramCard program={program} height={program.mostPopular ? "featured" : "standard"} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: For Nonprofits */}
      <section className="bg-gradient-to-br from-teal-700 to-deep-teal py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-sun-amber mb-4">FOR NONPROFITS</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] md:text-[44px] text-white mb-6 max-w-2xl">
              {homeContent.nonprofitSection.heading}
            </h2>
            <p className="font-['Open_Sans'] text-[18px] text-white/75 leading-[1.65] max-w-3xl mb-16">
              {homeContent.nonprofitSection.body}
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {homeContent.nonprofitSection.problems.map((problem, i) => (
              <motion.div key={problem.title} variants={fadeUpChild} className="bg-white/5 border border-white/10 rounded-xl p-7">
                {PROBLEM_ICONS[i]}
                <h3 className="font-['Poppins'] font-bold text-[16px] text-white mb-3">{problem.title}</h3>
                <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                  {problem.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 0', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.65', marginBottom: '32px' }}>
              Digital Compass is TT's nonprofit Salesforce membership — weekly office hours, project delivery, and expert guidance from $149/month. No consulting retainer. No long-term contract. Just consistent support from people who understand how nonprofits use Salesforce.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
              <Link href="/nonprofit-assessment" className="bg-deep-teal text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '14px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block' }}>
                Book a Free Assessment →
              </Link>
              <Link href="/programs/digital-compass" style={{ backgroundColor: 'transparent', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '14px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.60)', display: 'inline-block' }}>
                Learn About Digital Compass →
              </Link>
            </div>
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.50)', fontStyle: 'italic' }}>
              Free assessment — up to 1 hour. No pitch. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Making the Path Accessible */}
      <section className="bg-charcoal py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-1 max-w-[560px]">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-sun-amber mb-4">TRAIL FORWARD SCHOLARSHIP</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-white mb-6 leading-tight">
              Making the Path Accessible
            </h2>
            <p className="font-['Open_Sans'] text-[18px] text-white/75 leading-[1.65] mb-10">
              We believe financial barriers should not prevent Salesforce-certified career changers from getting the supervised experience they need. The Trail Forward Scholarship provides one fully funded seat per Guided Trail cohort — at no cost to the recipient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/scholarship-application"
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] bg-trail-green text-white font-['Poppins'] font-bold text-[15px] hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] border-2 border-white/50 text-white font-['Poppins'] font-bold text-[15px] hover:bg-white/10 hover:border-white transition-colors"
              >
                Fund a Scholarship
              </Link>
            </div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden lg:flex items-center justify-center shrink-0">
            <div className="relative flex items-center justify-center w-[280px] h-[280px]">
              <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/5" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10" />
              <div className="absolute w-[120px] h-[120px] rounded-full border-2 border-dashed border-white/20" />
              <div className="w-16 h-16 rounded-full bg-sun-amber/15 border border-sun-amber/30 flex items-center justify-center">
                <Map className="w-8 h-8 text-sun-amber" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Section 9: Real Outcomes */}
      <section className="bg-green-100 py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">REAL OUTCOMES</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-charcoal mb-4">The proof is in the journey.</h2>
            <p className="font-['Open_Sans'] text-[18px] text-slate max-w-[640px]">
              Hugh's story is the reason Transition Trails exists. Here's what he — and the learners who followed — have to say.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">

            {/* Hugh's Story Timeline */}
            <motion.div variants={fadeUpChild} className="bg-white border border-trail-green/15 rounded-2xl p-6 md:p-10">
              <h3 className="font-['Poppins'] font-semibold text-[20px] text-green-700 mb-12 text-center md:text-left">Hugh's Journey</h3>

              <div className="relative">
                <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-trail-green/25 hidden md:block" />

                <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 md:gap-y-0 relative z-10">
                  {[
                    { label: "16 years", desc: "Truck Driver & Military Vet", bg: "bg-gray-400" },
                    { label: "2020", desc: "Admin Cert Earned", bg: "bg-trail-green" },
                    { label: "47 jobs", desc: "Applications Sent", bg: "bg-danger" },
                    { label: "1 project", desc: "Real Nonprofit Implementation", bg: "bg-sun-amber" },
                    { label: "Hired", desc: "Business Analyst at Salesforce", bg: "bg-green-700" },
                    { label: "5 years", desc: "Co-Founder & CTO · Solutions Architect", bg: "bg-green-700" }
                  ].map((node, i) => (
                    <div key={i} className="flex flex-col items-center text-center px-2">
                      <div className="font-['Poppins'] font-bold text-[13px] text-charcoal h-6 mb-2 flex items-end">{node.label}</div>
                      <div className={`w-[36px] h-[36px] rounded-full ${node.bg} border-[4px] border-white shrink-0 mb-3`} />
                      <div className="font-['Open_Sans'] text-[11px] text-slate max-w-[120px]">{node.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-['Open_Sans'] italic text-[13px] text-slate mt-10 text-center md:text-left">
                Hugh Richardson · Solutions Architect at Salesforce · TT Co-Founder & CTO · This is the story Transition Trails was built from.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-trail-green/20 w-full" />

            {/* Hugh's Quote Card */}
            <motion.div variants={fadeUpChild} className="bg-white border border-trail-green/15 rounded-2xl p-8 md:p-12 relative">
              <div className="absolute top-4 left-6 font-['Poppins'] text-[120px] text-trail-green/30 leading-none select-none">"</div>
              <p className="font-['Poppins'] font-medium text-[19px] text-charcoal leading-[1.65] relative z-10 mb-8 max-w-3xl">
                I spent 16 years driving trucks. I studied Salesforce between loads during the pandemic — and still couldn't get hired without experience. One real project with a real nonprofit changed everything. I joined Salesforce as a Business Analyst. Five years later I'm a Solutions Architect.
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-[44px] h-[44px] rounded-full bg-trail-green text-white flex items-center justify-center font-['Poppins'] font-bold">HR</div>
                <div>
                  <div className="font-['Poppins'] font-semibold text-[14px] text-charcoal">Hugh Richardson</div>
                  <div className="font-['Open_Sans'] text-[13px] text-slate">Co-Founder & CTO · Transition Trails · Solutions Architect</div>
                </div>
              </div>
            </motion.div>

            {/* M. Chen Quote Card */}
            <motion.div variants={fadeUpChild} className="bg-white border border-trail-green/15 rounded-2xl p-8 md:p-12 relative">
              <div className="absolute top-4 left-6 font-['Poppins'] text-[100px] text-trail-green/25 leading-none select-none">"</div>
              <p className="font-['Poppins'] font-medium text-[18px] text-charcoal leading-[1.65] relative z-10 mb-8 max-w-3xl">
                I had the Admin cert for eight months and couldn't get past the "no experience" wall. Every job listing said entry-level but wanted two years. After completing the Guided Trail, I had a real Salesforce implementation I could walk any hiring manager through — screenshots, architecture decisions, the whole thing. I landed a Salesforce Admin role at a Dallas nonprofit within six weeks of finishing the program.
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-[44px] h-[44px] rounded-full bg-trail-green text-white flex items-center justify-center font-['Poppins'] font-bold">MC</div>
                <div>
                  <div className="font-['Poppins'] font-semibold text-[14px] text-charcoal">M. Chen</div>
                  <div className="font-['Open_Sans'] text-[13px] text-slate">Guided Trail Graduate · Cohort 0 · Dec. 2025 · Dallas, TX</div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Section 10: Founding Team */}
      <section className="bg-charcoal py-20 px-5">
        <div className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-sun-amber mb-4">CO-FOUNDED IN 2020</div>
            <h2 className="font-['Fraunces'] font-bold text-[36px] text-white">Meet the founding team.</h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
            {FOUNDERS.map(founder => (
              <motion.div variants={fadeUpChild} key={founder.key} className="bg-charcoal border border-white/10 rounded-xl overflow-hidden flex items-center gap-4 p-5 w-full sm:w-[296px]">
                <div
                  className="w-[52px] h-[52px] rounded-full shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: founder.accent }}
                >
                  <span className="font-['Poppins'] font-bold text-white text-[16px]">{founder.initials}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-['Poppins'] font-bold text-[16px] text-white leading-snug">{founder.name}</div>
                  <div className="font-['Open_Sans'] text-[13px] mb-2 truncate" style={{ color: founder.accent }}>{founder.title}</div>
                  <span className="inline-block px-3 py-0.5 rounded-full font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-wider text-white/80 bg-white/10">
                    {founder.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-10">
            <a
              href="/about/team"
              className="h-[48px] px-8 rounded-[8px] border border-white/50 text-white font-['Poppins'] font-semibold text-[15px] flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors"
            >
              Meet the Founding Team →
            </a>
          </div>
        </div>
      </section>

      {/* Section 11: Nonprofit Partners */}
      <section className="bg-white border-y border-warm-gray py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-slate text-center mb-8">
            NONPROFITS IN OUR NETWORK
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-[280px] h-[56px] bg-white border border-warm-gray rounded-lg flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-slate">
              Hartford Promise
            </div>
            <div className="w-[280px] h-[56px] bg-white border border-warm-gray rounded-lg flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-slate">
              CLYLP
            </div>
            <div className="w-[280px] h-[56px] bg-white border border-warm-gray rounded-lg flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-slate">
              KC Global One
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 (cont): Testimonials */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {testimonialContent.testimonials.map((t) => {
              const quoteColor = t.type === "nonprofit" ? "rgba(47,111,126,0.3)" : "rgba(47,107,63,0.25)";
              const nameColor = t.type === "nonprofit" ? "var(--tt-deep-teal)" : "var(--tt-trail-green)";
              return (
                <motion.div key={t.id} variants={fadeUpChild} className="flex flex-col">
                  <div className="font-['Poppins'] text-[56px] leading-none mb-2 select-none" style={{ color: quoteColor }}>"</div>
                  <p className="font-['Poppins'] font-medium italic text-[16px] text-charcoal leading-[1.65] mb-5 flex-1">
                    {t.quote}
                  </p>
                  <div>
                    <div className="font-['Open_Sans'] font-semibold text-[14px]" style={{ color: nameColor }}>{t.name}</div>
                    <div className="font-['Open_Sans'] text-[12px] text-muted-text">{t.attribution}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 12: Action Banner */}
      <section className="bg-trail-green py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="font-['Fraunces'] font-bold text-[32px] md:text-[40px] text-white mb-2 leading-tight">
              {siteContent.actionBanner.heading}
            </h2>
            <p className="font-['Open_Sans'] text-[18px] text-white/80">
              {siteContent.actionBanner.body}
            </p>
          </div>
          <div className="shrink-0">
            <CTAButton href={siteContent.actionBanner.ctaPath} variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              {siteContent.actionBanner.ctaText}
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
