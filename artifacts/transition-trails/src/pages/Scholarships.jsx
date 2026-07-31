import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";
import { Award, Globe, Rocket } from "lucide-react";

const ELIGIBILITY_CARDS = [
  {
    borderClass: "border-l-[4px] border-l-trail-green",
    icon: <Award size={22} className="text-trail-green" />,
    title: "Military Community",
    body: "Active duty military transitioning to civilian careers, veterans of any branch, and military spouses facing career disruption due to relocation or service commitment. Salesforce careers offer the stability and remote-work flexibility that the military community deserves.",
  },
  {
    borderClass: "border-l-[4px] border-l-deep-teal",
    icon: <Globe size={22} className="text-deep-teal" />,
    title: "Underrepresented Groups in Tech",
    body: "Black and African American, Hispanic and Latino, Native American and Alaska Native, and Native Hawaiian and Pacific Islander individuals who are underrepresented in technology careers at every level — including within the Salesforce ecosystem.",
  },
  {
    borderClass: "border-l-[4px] border-l-teal-300",
    icon: <Rocket size={22} className="text-teal-300" />,
    title: "Economic Barriers to Tech Entry",
    body: "First-generation college students and non-traditional learners, individuals experiencing unemployment or underemployment, and people in the process of career transition from low-wage industries. Cost should not be the reason someone cannot access a high-demand tech career.",
  },
];

const APPLICATION_STEPS = [
  {
    n: 1,
    title: "Eligibility Self-Attestation",
    timeline: "At application",
    body: "Confirm that you belong to at least one eligible population by signing a self-attestation statement in the application. No documentation required at this stage. False attestation disqualifies your application. That is the only rule.",
  },
  {
    n: 2,
    title: "Written Application — Three Questions",
    timeline: "At application",
    body: "Three short-answer questions. 250 words maximum per response. No essays. No formal writing required — answer honestly and in your own voice.",
    bullets: [
      "Why Salesforce as a career direction — what draws you to it and why now?",
      "What barriers have you faced in accessing technology education or employment?",
      "What does success look like for you 12 months after completing the Guided Trail?",
    ],
  },
  {
    n: 3,
    title: "Coach Screening Call",
    timeline: "Within 2 weeks of application",
    body: "A 30-minute conversation with a TT coach or team member. Not a formal interview — a real conversation to understand your goals, your readiness for the 12-week commitment, and whether the Guided Trail is the right next step for you right now. This call protects you as much as it protects the scholarship — we want to make sure you are set up to succeed, not to struggle.",
  },
  {
    n: 4,
    title: "Review and Selection",
    timeline: "4+ weeks before cohort",
    body: "TT reviews all complete applications for the upcoming cohort. One scholarship recipient is selected. Selection considers eligibility, demonstrated motivation and career intent, readiness for the program, and representation across eligible categories when multiple qualified applicants are being considered.\n\nDecision communicated a minimum of 4 weeks before cohort start date. All applicants notified — not just the recipient.",
  },
  {
    n: 5,
    title: "Acceptance and Commitment Agreement",
    timeline: "Within 1 week of selection",
    body: "Scholarship recipients sign a commitment agreement covering:",
    bullets: [
      "Attendance and participation expectations — same as any paying Guided Trail participant",
      "Agreement to participate in anonymized impact reporting — employment status, completion, outcomes tracked at 6 and 12 months post-program",
      "Optional: agreement to share your story for TT's social and grant narratives — entirely your choice, never a condition of the award",
    ],
  },
];

export default function Scholarships() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="The Trail Forward Scholarship | Transition Trails | Free Guided Trail Seat"
        description="One full scholarship seat per Guided Trail cohort for historically underserved populations in technology — veterans, women, underrepresented minorities, and more. Zero cost. Apply on a rolling basis. No membership required."
        path="/scholarships"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, var(--tt-green-700) 0%, var(--tt-trail-green) 55%, var(--tt-deep-teal) 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* Breadcrumb */}
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">The Trail Forward Scholarship</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            {/* Left */}
            <div className="flex-1 max-w-[720px]">
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7 text-sun-amber"
                style={{ background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)" }}
              >
                THE TRAIL FORWARD SCHOLARSHIP  ·  FULLY FUNDED  ·  ONE SEAT PER COHORT
              </div>
              <h1 className="font-['Poppins'] font-bold text-[52px] text-white tracking-[-1.5px] leading-[1.1] mb-5">
                The Trail Forward Scholarship.
              </h1>
              <p className="font-['Poppins'] font-semibold text-[20px] leading-[1.5] mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
                One full scholarship seat per Guided Trail cohort. Zero cost to the recipient. No membership required to apply.
              </p>
              <div className="font-['Open_Sans'] text-[17px] leading-[1.65] max-w-[720px] space-y-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                <p>Talent is everywhere. Access is not.</p>
                <p>The Trail Forward Scholarship exists because the people who stand to benefit most from a career in Salesforce are often the ones with the fewest pathways to get there. The scholarship is not a discount. It is a complete award — covering the full cost of one Guided Trail seat for one learner per cohort who demonstrates both the need and the readiness to make the most of it.</p>
                <p>If you belong to a historically underserved population in technology and you are ready to do the work — this scholarship was built for you.</p>
              </div>
            </div>

            {/* Right: stat boxes */}
            <div className="flex flex-col gap-4 w-full xl:w-[260px] shrink-0">
              <div className="bg-white/10 border border-trail-green/60 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Poppins'] font-bold text-[44px] text-white leading-none mb-1">$0</div>
                <div className="font-['Open_Sans'] text-[14px] text-white/70">Cost to scholarship recipient</div>
              </div>
              <div className="bg-white/10 border border-deep-teal/60 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Poppins'] font-bold text-[28px] text-white leading-tight mb-1">1 seat</div>
                <div className="font-['Open_Sans'] text-[14px] text-white/70">Reserved per Guided Trail cohort</div>
              </div>
              <div className="bg-white/10 border border-sun-amber/40 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Poppins'] font-bold text-[28px] text-sun-amber leading-tight mb-1">$1,547</div>
                <div className="font-['Open_Sans'] text-[14px] text-white/70">Full program cost — covered by TT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who This Is For */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">ELIGIBILITY</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4 max-w-[800px]">
              The Trail Forward Scholarship is for historically underserved populations in technology.
            </h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
              You do not need to prove hardship with documents at application. Eligibility is confirmed through a signed self-attestation. The application process is designed to be accessible — not a barrier in itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {ELIGIBILITY_CARDS.map(card => (
              <div
                key={card.title}
                className={`bg-white border border-warm-gray rounded-xl overflow-hidden ${card.borderClass}`}
              >
                <div className="p-7">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">{card.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-charcoal mb-3">{card.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Open_Sans'] italic text-[13px] text-slate text-center">
            Applicants may belong to more than one eligible category. Eligibility in any one category qualifies you to apply.
          </p>
        </div>
      </section>

      {/* SECTION 4: What the Scholarship Covers */}
      <section className="bg-green-100 py-16 px-5 md:px-10 border-y border-trail-green/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">WHAT IS COVERED</div>
            <h2 className="font-['Poppins'] font-bold text-[28px] text-green-700 mb-2">This is not a discount. It is a complete award.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: "Full Guided Trail tuition",
                body: "The standard Guided Trail program cost — covered entirely. $0 owed by the scholarship recipient at any point.",
              },
              {
                title: "All program resources",
                body: "Everything a standard Guided Trail learner receives — Build With Me access for reference, coaching sessions, community access, and program materials.",
              },
              {
                title: "Trail Navigator",
                body: "Scholarship recipients receive the same Trail Navigator (hoodie or journal) as every other Guided Trail graduate. The scholarship does not change what you earn.",
              },
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border-l-[4px] border-l-trail-green"
              >
                <h3 className="font-['Open_Sans'] font-bold text-[15px] text-trail-green mb-3">{item.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-slate leading-[1.65]">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="font-['Open_Sans'] italic text-[13px] text-green-700 text-center max-w-[760px] mx-auto">
            The Trail Forward Scholarship currently covers one seat per Guided Trail cohort. As additional funding becomes available through grants, donations, and corporate partnerships, we intend to expand scholarship availability to other TT programs.
          </p>
        </div>
      </section>

      {/* SECTION 5: The Application Process */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">HOW TO APPLY</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-charcoal mb-4">Five steps. Designed to be accessible.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65]">
              The application process is structured to assess genuine readiness and motivation — not to create additional barriers. If you need any accommodation in the application process, contact us at{" "}
              <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline">hello@transitiontrails.org</a>{" "}
              and we will work with you.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-warm-gray" />

            <div className="space-y-8">
              {APPLICATION_STEPS.map((step) => (
                <div key={step.n} className="flex gap-6">
                  {/* Step number */}
                  <div
                    className="w-10 h-10 rounded-full bg-trail-green text-white font-['Poppins'] font-bold text-[15px] flex items-center justify-center shrink-0 z-10"
                  >
                    {step.n}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                      <h3 className="font-['Poppins'] font-semibold text-[17px] text-charcoal">{step.title}</h3>
                      <span className="font-['Open_Sans'] text-[11px] font-semibold uppercase tracking-[1px] text-deep-teal bg-teal-100 px-2 py-0.5 rounded mt-1 sm:mt-0 self-start sm:self-auto">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="font-['Open_Sans'] text-[14px] text-slate leading-[1.65] whitespace-pre-line">{step.body}</p>
                    {step.bullets && (
                      <ul className="mt-3 space-y-2">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 font-['Open_Sans'] text-[14px] text-slate">
                            <span className="text-trail-green shrink-0 font-bold">
                              {step.n === 2 ? `${["①","②","③"][i]}` : "•"}
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Replacement Policy */}
      <section className="bg-trail-light py-16 px-5 md:px-10 border-y border-warm-gray">
        <div className="max-w-[860px] mx-auto">
          <div className="mb-6">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">ALTERNATE SELECTION</div>
            <h2 className="font-['Poppins'] font-bold text-[24px] text-charcoal mb-6">One alternate is selected alongside every scholarship recipient.</h2>
          </div>
          <div className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65] space-y-4">
            <p>At the time of scholarship award, TT also selects one alternate recipient. If the primary scholarship recipient withdraws before the cohort begins, the alternate is offered the seat immediately.</p>
            <p>If a scholarship recipient must withdraw after the cohort has started, we hope that does not happen — and we will do everything we can to support recipients through challenges that arise. If withdrawal does occur after the cohort start date, the scholarship seat for that cohort cannot be filled. The alternate offer expires when the cohort begins.</p>
            <p>If you are selected as an alternate, you will be notified. You are encouraged to apply again for a future cohort.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Impact Reporting */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="mb-8">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-trail-green mb-4">HOW YOUR STORY CONTRIBUTES</div>
            <h2 className="font-['Poppins'] font-bold text-[28px] text-charcoal mb-6">Every scholarship outcome helps fund the next one.</h2>
          </div>
          <div className="font-['Open_Sans'] text-[16px] text-slate max-w-[760px] leading-[1.65] space-y-6">
            <p>The Trail Forward Scholarship is funded through grants, individual donations, and corporate partnerships. Every grant application TT submits requires evidence of impact — real outcomes for real people. Your participation in anonymized impact reporting directly supports TT's ability to fund future scholarship seats.</p>

            <div>
              <p className="font-semibold text-charcoal mb-3">What is tracked — required for all recipients:</p>
              <ul className="space-y-2">
                {[
                  "Program completion (yes or no)",
                  "Employment status before and after the program",
                  "Role type and employer type (nonprofit, corporate, government) — if employed",
                  "Approximate salary range before and after — not exact figures",
                  "Eligibility category (for aggregate reporting only — never identified individually)",
                  "Geographic location (city/state)",
                ].map(item => (
                  <li key={item} className="flex gap-2 text-[14px]">
                    <span className="text-trail-green shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-slate italic mt-3">Tracked at: program completion, 6 months post-completion, 12 months post-completion.</p>
            </div>

            <div>
              <p className="font-semibold text-charcoal mb-3">What is optional — your choice, never a condition:</p>
              <ul className="space-y-2">
                {[
                  "Sharing your name and story for TT social media, grant narratives, or marketing",
                  "Being featured in the Annual Member Spotlight",
                  "Serving as a future alumni mentor for Explorer's Trail members",
                ].map(item => (
                  <li key={item} className="flex gap-2 text-[14px]">
                    <span className="text-teal-300 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p>Your anonymized data helps TT report impact to funders. Your story — if you choose to share it — helps the next person who sees themselves in you decide to apply.</p>
          </div>
        </div>
      </section>

      {/* SECTION 8: Apply + Support */}
      <section className="bg-charcoal py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Apply */}
          <div>
            <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              APPLY FOR THE TRAIL FORWARD SCHOLARSHIP
            </div>

            <div className="bg-white rounded-xl p-8 max-w-[560px] mx-auto lg:mx-0">
              <h3 className="font-['Poppins'] font-semibold text-[20px] text-charcoal mb-4">
                Applications are open on a rolling basis.
              </h3>
              <p className="font-['Open_Sans'] text-[15px] text-slate leading-[1.65] mb-5">
                Applications are reviewed for each upcoming Guided Trail cohort. There is no single deadline — apply when you are ready and we will review your application against the next available cohort. The earlier you apply, the more time you have for the screening call and selection process.
              </p>

              <div
                className="rounded-[8px] px-5 py-4 mb-6 bg-green-100 border-l-[3px] border-l-trail-green"
              >
                <p className="font-['Open_Sans'] text-[13px] text-slate">
                  Eligibility requires a Salesforce Certified Platform Administrator certification and not being currently employed in a Salesforce role.
                </p>
              </div>

              <Link
                href={LINKS.scholarshipApplication}
                className="w-full h-[52px] rounded-[8px] bg-trail-green hover:bg-green-700 text-white font-['Poppins'] font-bold text-[15px] flex items-center justify-center transition-colors"
              >
                Apply for the Trail Forward Scholarship →
              </Link>

              <p className="font-['Open_Sans'] text-[12px] text-muted-text italic text-center mt-4">
                Questions about eligibility or the process? Email hello@transitiontrails.org
              </p>
            </div>
          </div>

          {/* Right — Support */}
          <div>
            <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              FUND A SCHOLARSHIP SEAT
            </div>
            <h2 className="font-['Poppins'] font-bold text-[24px] text-white mb-5">Your gift puts someone in that seat.</h2>
            <p className="font-['Open_Sans'] text-[15px] leading-[1.65] mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              The Trail Forward Scholarship costs $1,547 per seat — the full cost of delivering one Guided Trail program to one learner. Every dollar donated to the scholarship fund goes directly toward the next seat.
              <br /><br />
              You can fund a full seat, contribute toward one, or make a recurring gift that builds toward future cohorts. Every amount moves the mission forward.
            </p>
            <Link
              href="/donate"
              className="h-[52px] px-7 rounded-[8px] bg-trail-green hover:bg-green-700 text-white font-['Poppins'] font-semibold text-[15px] inline-flex items-center justify-center transition-colors"
            >
              Donate to the Scholarship Fund →
            </Link>
            <p className="font-['Open_Sans'] italic text-[12px] mt-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              Interested in funding multiple seats or naming a scholarship? Contact us at{" "}
              <a href="mailto:hello@transitiontrails.org" className="hover:text-white/60 transition-colors underline">
                hello@transitiontrails.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
