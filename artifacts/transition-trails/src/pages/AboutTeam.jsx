import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageMeta } from "../components/PageMeta";
import teamContent from "../content/team.json";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const FOUNDERS = teamContent.founders.map(f => ({
  ...f,
  link: f.calendarUrl
    ? { href: f.calendarUrl, label: `Schedule time with ${f.name.split(" ")[0]}`, external: true }
    : f.email
    ? { href: `mailto:${f.email}`, label: `Contact ${f.name.split(" ")[0]}`, external: false }
    : null,
}));

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
      <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[34px] md:text-[40px] text-charcoal leading-tight mb-1">
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
          <motion.p key={i} variants={fadeUp} className="font-['Open_Sans'] text-[16px] text-slate leading-[1.75]">
            {para}
          </motion.p>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mb-7">
        <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-muted-text mb-3">
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
      <section className="bg-green-700 py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-sun-amber mb-4">
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
                <div className="border-t border-warm-gray" />
              </div>
            </div>
          )}
          <FounderSection founder={founder} index={index} />
        </div>
      ))}

      {/* Footer CTA */}
      <section className="bg-trail-green py-20 px-5 text-center">
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
                className="inline-flex items-center gap-2 bg-sun-amber text-charcoal font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-200"
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
