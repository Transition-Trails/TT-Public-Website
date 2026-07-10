import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";
import { User, Award, Building2, GraduationCap, BarChart2, Briefcase, Check } from "lucide-react";

export default function Impact() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Our Impact Roadmap | Transition Trails"
        description="Transition Trails is forming Cohort 1. See where we are now, what we will measure, and how your support creates career-changing and nonprofit impact."
        path="/impact"
      />

      {/* Hero */}
      <section className="bg-[#2A2E2C] pt-24 pb-16 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#6BBF85] mb-4">OUR IMPACT ROADMAP</div>
          <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white leading-tight mb-6">
            Building toward measurable, verifiable impact.
          </h1>
          <p className="font-['Open_Sans'] text-[18px] text-white/70 leading-[1.65] max-w-[640px]">
            Transition Trails is a new organization. We are not claiming outcomes we haven't yet earned. This page shows where we are now, what Cohort 1 represents, and how we will report impact transparently as we grow.
          </p>
        </div>
      </section>

      {/* Where We Are Now */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHERE WE ARE NOW</div>
          <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-6 leading-tight">A small team with a clear mission and a strong start.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.75] space-y-4">
            <p>
              Transition Trails was granted 501(c)(3) nonprofit status effective May 15, 2022 (EIN: 88-2746412). In late 2025, we ran Cohort 0 — a paid pilot retrospective with a small group of Salesforce practitioners — to refine our curriculum, coaching model, and client project framework.
            </p>
            <p>
              We have served nonprofit technology clients including Hartford Promises, CLYLP, and KC Global One. We are now actively forming Cohort 1 — our first full program cohort — and building the infrastructure to report program outcomes clearly and publicly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { label: "501(c)(3) Status", value: "Granted 2022", note: "EIN: 88-2746412" },
              { label: "Nonprofit Clients Served", value: "3+", note: "Hartford Promises, CLYLP, KC Global One" },
              { label: "Cohort 1 Status", value: "Forming Now", note: "8–12 seats · Application required" },
            ].map(({ label, value, note }) => (
              <div key={label} className="bg-[#FAFAF7] border border-[#E2E4E1] rounded-xl p-6">
                <div className="font-['Open_Sans'] text-[12px] text-[#8C8882] uppercase tracking-wider mb-2">{label}</div>
                <div className="font-['Poppins'] font-bold text-[28px] text-[#2A2E2C] mb-1">{value}</div>
                <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort 1 in Formation */}
      <section className="bg-[#FAFAF7] py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">COHORT 1 IN FORMATION</div>
          <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-6 leading-tight">Our first full cohort is the beginning of verifiable impact.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.75] space-y-4">
            <p>
              The Guided Trail is our flagship program: a 12-week supervised practicum where career-changing Salesforce learners work on real nonprofit client projects. Cohort 1 will be the first time we deliver this program at full scale — with a formal cohort structure, application process, scholarship seats, and volunteer coaches.
            </p>
            <p>
              We are currently accepting waitlist applications. Seat count is intentionally limited to 8–12 to ensure each learner receives meaningful supervision and a high-quality project experience.
            </p>
          </div>

          <div className="mt-10 rounded-xl border-l-4 border-[#2F6B3F] bg-white p-8">
            <div className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-4">What makes Cohort 1 significant</div>
            <ul className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.7] space-y-2">
              <li className="flex gap-3"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" /> First full-scale delivery of the Guided Trail practicum</li>
              <li className="flex gap-3"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" /> First cohort with named, paying learners and formal scholarship seats</li>
              <li className="flex gap-3"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" /> First cohort with volunteer coaches and a nonprofit client project</li>
              <li className="flex gap-3"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" /> First cohort from which we will publish verifiable outcomes</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <CTAButton href={LINKS.waitlist} variant="amber">Join the Cohort 1 Waitlist</CTAButton>
            <CTAButton href="/programs/guided-trail" variant="outline">Learn About the Guided Trail</CTAButton>
          </div>
        </div>
      </section>

      {/* What We Will Measure */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT WE WILL MEASURE</div>
          <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-6 leading-tight">Our impact reporting framework, defined before we report.</h2>
          <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.75] mb-10">
            We are defining our metrics before Cohort 1 launches so our reporting is honest and comparable over time. We will publish results publicly after each cohort completes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <User size={24} color="#2F6B3F" />, label: "Learners Supported", desc: "Total participants enrolled, by cohort" },
              { icon: <Award size={24} color="#2F6B3F" />, label: "Scholarships Awarded", desc: "Number of scholarship seats and total value funded" },
              { icon: <Building2 size={24} color="#2F6B3F" />, label: "Nonprofit Projects Completed", desc: "Real client projects delivered by cohort learners" },
              { icon: <GraduationCap size={24} color="#2F6B3F" />, label: "Volunteer Coaches", desc: "Practitioners contributing time as project coaches" },
              { icon: <BarChart2 size={24} color="#2F6B3F" />, label: "Salesforce Skills Gained", desc: "Certifications and skills completed during the program" },
              { icon: <Briefcase size={24} color="#2F6B3F" />, label: "Career Outcomes", desc: "Job placement and career progression — tracked at 90 days and 1 year post-graduation" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="flex gap-4 p-5 bg-[#FAFAF7] rounded-xl border border-[#E2E4E1]">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center shrink-0">{icon}</div>
                <div>
                  <div className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-1">{label}</div>
                  <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.5]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Support Creates Impact */}
      <section className="bg-[#2A2E2C] py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#6BBF85] mb-4">HOW SUPPORT CREATES IMPACT</div>
          <h2 className="font-['Poppins'] font-bold text-[32px] text-white mb-6 leading-tight">Your support directly funds the work.</h2>
          <div className="font-['Open_Sans'] text-[16px] text-white/70 leading-[1.75] space-y-4 mb-10">
            <p>
              Every donation goes to program delivery, coaching operations, and scholarship funding. There is no significant overhead: Transition Trails is run by its founding team.
            </p>
            <p>
              One complete scholarship seat costs $1,547. That is the real cost to fund one learner through the full Guided Trail program — tuition, materials, and supervised coaching. As Cohort 1 launches, we will report how many seats were funded and by whom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { amount: "$25", impact: "Covers one coaching session" },
              { amount: "$100", impact: "Funds one week of program operations" },
              { amount: "$1,547", impact: "Funds one complete scholarship seat" },
            ].map(({ amount, impact }) => (
              <div key={amount} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="font-['Poppins'] font-bold text-[28px] text-[#F5A623] mb-2">{amount}</div>
                <div className="font-['Open_Sans'] text-[14px] text-white/70">{impact}</div>
              </div>
            ))}
          </div>

          <CTAButton href="/donate" variant="amber">Donate to Transition Trails</CTAButton>
        </div>
      </section>

      {/* Future Stories placeholder */}
      <section className="bg-[#FAFAF7] py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">FUTURE STORIES</div>
          <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-6 leading-tight">Learner and nonprofit stories — coming after Cohort 1.</h2>
          <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.75] mb-10">
            This section will feature real stories from Cohort 1 graduates and the nonprofits they served — with their permission and with full details about outcomes. We are building this section now so it is ready when the first cohort completes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Learner Story", desc: "A Cohort 1 graduate shares their career transition and what the program made possible." },
              { label: "Nonprofit Impact", desc: "A nonprofit client describes the project delivered and the operational improvement achieved." },
              { label: "Coach Perspective", desc: "A volunteer coach reflects on what mentoring a cohort learner taught them." },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-white border-2 border-dashed border-[#E2E4E1] rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#E2E4E1] flex items-center justify-center mb-4">
                  <div className="font-['Open_Sans'] text-[11px] text-[#8C8882] font-semibold uppercase tracking-wider">Photo</div>
                </div>
                <div className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-2">{label}</div>
                <div className="font-['Open_Sans'] text-[13px] text-[#8C8882] leading-[1.5]">{desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <CTAButton href={LINKS.waitlist} variant="amber">Join Cohort 1 Waitlist</CTAButton>
            <CTAButton href="/donate" variant="outline">Support the Mission</CTAButton>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="bg-white py-10 px-5 border-t border-[#E2E4E1]">
        <div className="max-w-[800px] mx-auto">
          <Link href="/about" className="font-['Open_Sans'] text-[14px] text-[#2F6B3F] hover:underline">← Back to About</Link>
        </div>
      </section>
    </div>
  );
}
