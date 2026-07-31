import { useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";
import { Check, Heart, Users, Briefcase } from "lucide-react";

export default function Donate() {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="givelively.org/widgets"]');
    if (existingScript) {
      existingScript.remove();
    }

    const gl = document.createElement("script");
    gl.src =
      "https://secure.givelively.org/widgets/simple_donation/transition-trails.js?show_suggested_amount_buttons=true&show_in_honor_of=false&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250";
    gl.async = true;
    document.getElementsByTagName("head")[0].appendChild(gl);

    return () => {
      const script = document.querySelector('script[src*="givelively.org/widgets/simple_donation"]');
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Donate | Support Transition Trails | 501(c)(3) EIN 88-2746412"
        description="Your gift funds scholarship seats, nonprofit technology support, and Salesforce career pathways. Transition Trails is a 501(c)(3) nonprofit. EIN: 88-2746412."
        path="/donate"
      />

      {/* SECTION 1 — Donation Widget */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">
                MAKE A GIFT TODAY
              </div>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[32px] text-charcoal mb-6" style={{ letterSpacing: "-0.5px" }}>
              Every dollar goes directly to the mission.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65] mb-8">
              Transition Trails is a 501(c)(3) nonprofit — every donation is tax-deductible and goes directly to program delivery, coaching, and scholarship funding.
              <br /><br />
              Help fund scholarship access for career-changing learners. We are currently forming Cohort 1, and as the program launches, we will report scholarship and project outcomes transparently.
              <br /><br />
              No large overhead. Just a small founding team building something that matters, one cohort at a time.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-3 mb-8">
              {[
                "$1,547 funds one complete scholarship seat for a career-changing learner",
                "Your support helps learners gain supervised, real-world Salesforce experience while expanding nonprofit capacity",
                "Monthly giving sustains our coaching and program operations",
                "As Cohort 1 launches, we will report scholarship and project outcomes transparently",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-trail-green shrink-0 mt-0.5" />
                  <span className="font-['Open_Sans'] text-[14px] text-slate">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="font-['Open_Sans'] italic text-[12px] text-muted-text mb-4">
              Transition Trails · EIN 88-2746412 · 501(c)(3) Public Charity · Effective May 15, 2022<br />
              1228 Hollywood Ave, Dallas, TX 75208<br />
              Donations are tax-deductible to the extent permitted by law.
            </motion.p>

            <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[13px] text-slate mb-10">
              Double your impact — ask if your employer offers corporate donation matching.
            </motion.p>
          </motion.div>

          <div id="give-lively-widget" className="gl-simple-donation-widget"></div>
        </div>
      </section>

      {/* SECTION 2 — Testimonial + Other Ways to Give */}
      <section className="bg-white py-20 px-5 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="w-full flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="bg-teal-100 border border-deep-teal/20 rounded-2xl p-10 max-w-[800px] mb-20 w-full relative">
              <div className="absolute top-4 left-6 font-['Poppins'] text-[80px] text-deep-teal/20 leading-none select-none">"</div>
              <p className="font-['Poppins'] font-medium text-[18px] text-teal-700 leading-[1.65] mb-6 relative z-10">
                Transition Trails Salesforce Experts go beyond! After working with the team, our productivity and data accuracy soared — and we felt supported every step of the way.
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-[44px] h-[44px] rounded-full bg-deep-teal text-white flex items-center justify-center font-['Poppins'] font-bold text-[15px]">HP</div>
                <div>
                  <div className="font-['Poppins'] font-semibold text-[14px] text-charcoal">Hartford Promise</div>
                  <div className="font-['Open_Sans'] text-[13px] text-slate">Nonprofit Partner · Digital Compass Member · Hartford, CT</div>
                </div>
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-['Fraunces'] font-bold text-[32px] text-charcoal mb-8">Other ways to give</motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <motion.div variants={fadeUp} className="bg-trail-light border border-warm-gray p-6 rounded-xl text-center flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Heart size={22} stroke="var(--tt-trail-green)" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-2">Volunteer</h4>
                  <p className="font-['Open_Sans'] text-[14px] text-slate mb-4">Time is just as valuable as funding.</p>
                </div>
                <CTAButton href="/volunteer" variant="outline" className="w-full border-warm-gray text-charcoal">View Roles</CTAButton>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-trail-light border border-warm-gray p-6 rounded-xl text-center flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Users size={22} stroke="var(--tt-deep-teal)" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-['Poppins'] font-bold text-[18px] text-charcoal mb-2">Partner</h4>
                  <p className="font-['Open_Sans'] text-[14px] text-slate mb-4">Corporate or community partnerships.</p>
                </div>
                <CTAButton href="/contact" variant="outline" className="w-full border-warm-gray text-charcoal">Contact Us</CTAButton>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-green-100 border border-trail-green/20 p-6 rounded-xl text-center flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Briefcase size={22} stroke="var(--tt-trail-green)" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-['Poppins'] font-bold text-[18px] text-green-700 mb-2">Employer Sponsorship</h4>
                  <p className="font-['Open_Sans'] text-[14px] text-slate mb-4">Contact us — pricing in progress for employer-sponsored Trail of Mastery seats.</p>
                </div>
                <CTAButton href="/contact" variant="outline" className="w-full border-trail-green text-trail-green hover:bg-trail-green hover:text-white">Inquire</CTAButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
