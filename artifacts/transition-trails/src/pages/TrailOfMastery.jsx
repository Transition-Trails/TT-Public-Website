import { Check } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

const RESOLVE_PHASES = [
  {
    letter: "R",
    name: "Recognize",
    tagline: "See clearly before you build.",
    desc: "Understand the real problem space before touching the platform. Map the current state, resist the urge to fix, and ask what is happening today — not just what hurts. Uncover root causes, not surface symptoms.",
    tools: "Tools: The 5 Whys (simple/medium issues) · Fishbone Diagram (complex problems with multiple contributors)",
  },
  {
    letter: "E",
    name: "Explore",
    tagline: "Identify options. Don't choose yet.",
    desc: "Generate multiple solutions without commitment. Quantity over quality — throw everything at the wall and keep paths open. Solutions aren't always technical: they can be training, process changes, or new hires. Align viable options against real constraints: budget, no-code/low-code rules, and org complexity.",
    tools: null,
  },
  {
    letter: "S",
    name: "Select",
    tagline: "Commit with awareness.",
    desc: "Move from possibility to plan by committing to one course of action with full awareness of its business trade-offs. Apply the Trade-off Triangle: Cost (will it save or cost money long-term?), Scalability (can it grow with the organization?), and Productivity (how does it impact the user experience?). Document decisions in an Admin Decision Log with Pros, Cons, and Business Rationale.",
    tools: null,
  },
  {
    letter: "O",
    name: "Outline",
    tagline: "Translate decisions into a plan.",
    desc: "Decompose the massive idea into actionable building blocks to prevent rework. Structure work as: The Mountain (Epic) — WHY are we doing this? The Room (Feature) — WHAT capability is needed? The Brick (User Story) — HOW does the user interact? User Stories follow the format: As a [User], I want to [Action], so that [Value/Goal]. Acceptance Criteria written in Given-When-Then format.",
    tools: null,
  },
  {
    letter: "L",
    name: "Launch",
    tagline: "Deploy with care and intention.",
    desc: "Deployment is a process, not an event. A poor launch breaks trust. The Build Sequence Bridge: define When (minimize user impact), What (list specific steps in exact order including data loads), and Who (assign a clear owner to every single step). Always perform a Build Verification Test — a smoke test — before fully opening to users. Monitor closely for the first week.",
    tools: null,
  },
  {
    letter: "V",
    name: "Verify",
    tagline: "Look for evidence, not just completion.",
    desc: "Go-live is the beginning of the real test. Three testing types: Unit Testing (does my specific build work technically?), System/Integration Testing (does this new piece play nicely with the rest of the org?), and User Acceptance Testing (does this solve the business requirement and is it usable?). Always test both the Happy Path (expected behavior) and the Unhappy Path (intentionally trying to break it with invalid data). Capture baseline data before launch, metrics after, and build a narrative that explains what the numbers mean to the mission.",
    tools: null,
  },
  {
    letter: "E",
    name: "Evolve",
    tagline: "Refine for long-term success.",
    desc: "Growth is a journey, not a destination. Without evolution, solutions create friction and become obsolete. RESOLVE is not a one-time project checklist — it is a sustainable organizational lifecycle. Gather feedback through surveys, support issues, and system logs. Prioritize with stakeholders and document learnings. The learnings gathered at the end of one journey become the direct inputs for the next, transforming reactive fixes into continuous, strategic improvement.",
    tools: null,
  },
];

export default function TrailOfMastery() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Trail of Mastery | Advanced Salesforce Program | Transition Trails"
        description="For employed Salesforce professionals ready to advance. Real client projects, enterprise-level skills, and the RESOLVE methodology. Starting at $1,997."
        path="/programs/trail-of-mastery"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3a47] to-[#2F6F7E] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-white/10 border border-white/20 text-white font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
              ADVANCEMENT TIER · COHORT-BASED · REAL CLIENT PROJECTS
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Trail of Mastery.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-white/90 mb-6">
              You have the job. Now build the career.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/80 leading-[1.6] mb-8">
              Move beyond basic administration. Master enterprise architecture, advanced client consulting, and the RESOLVE methodology while leading real projects for Digital Compass nonprofit clients.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg border border-white/20">
              <Check className="w-5 h-5 text-[#F5A623]" />
              <span className="font-['Open_Sans'] text-sm text-white font-semibold">Prerequisite: Must be certified AND currently employed in a Salesforce role</span>
            </div>
          </div>

          <div className="w-full md:w-[380px] bg-white rounded-2xl p-8 shadow-xl shrink-0">
            <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-2">$1,997</div>
            <div className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-6">standard rate</div>

            <div className="h-px bg-[#E2E4E1] w-full mb-6" />

            <div className="bg-[#E6F3EA] rounded-lg p-4 mb-6">
              <div className="font-['Poppins'] font-semibold text-[14px] text-[#1E4A2A] mb-1">Employer-Sponsored</div>
              <div className="font-['Poppins'] font-bold text-[24px] text-[#2F6B3F]">$1,597</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#2F6B3F]/80">per seat when booking 3+</div>
            </div>

            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-6 text-center">or 4 × $549 payment plan</div>

            <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-[#2F6F7E] hover:!bg-[#1a3a47]" size="lg">
              Join the Waitlist
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What's in the program */}
      <section className="bg-[#FAFAF7] py-20 px-5 border-b border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">The Next Level</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-2xl mx-auto">
              This program is designed for working professionals who need to level up their architecture, consulting, and project delivery skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">Real Nonprofit Client Projects</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                You'll be paired with our Digital Compass nonprofit members. You act as the lead architect, scoping requirements, designing solutions, and managing the delivery of complex Salesforce enhancements.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">Cohort-Based Learning</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Learn alongside other working professionals. Share challenges from your day jobs, review each other's architectures, and build a network of advanced practitioners.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">Advanced Architecture</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Move beyond configuration. We cover integration patterns, data volume management, advanced security models, and enterprise deployment strategies.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] p-8 rounded-xl shadow-sm">
              <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4">The RESOLVE Framework</h3>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                Master our seven-phase project delivery methodology — from recognizing the real problem to evolving the solution over time. Transitioning from tactical tool-user to strategic problem-solver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOLVE Methodology — Full Field Manual v1.0 */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[900px] mx-auto">

          {/* Section header */}
          <div className="text-center mb-4">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">THE METHODOLOGY</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[40px] text-[#2A2E2C] mb-3">The RESOLVE Framework</h2>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] max-w-xl mx-auto leading-[1.6]">
              Transitioning from tactical tool-user to strategic problem-solver.
            </p>
          </div>

          {/* Phase legend */}
          <div className="flex justify-center gap-1 flex-wrap mb-14">
            {RESOLVE_PHASES.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-lg bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[18px]">
                  {p.letter}
                </div>
                <span className="font-['Open_Sans'] text-[10px] text-[#4A4F4D] uppercase tracking-wider">{p.name}</span>
              </div>
            ))}
          </div>

          {/* Phase stack */}
          <div className="space-y-4 mb-16">
            {RESOLVE_PHASES.map((phase, i) => (
              <div key={i} className="flex bg-[#FAFAF7] border border-[#E2E4E1] rounded-xl overflow-hidden">
                {/* Letter badge */}
                <div className="w-[64px] md:w-[72px] bg-[#2F6F7E] text-white flex items-start justify-center pt-5 font-['Poppins'] font-bold text-[28px] leading-none shrink-0">
                  {phase.letter}
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-2">
                    <h4 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C]">{phase.name}</h4>
                    <span className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6F7E] italic">{phase.tagline}</span>
                  </div>
                  <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mb-0">
                    {phase.desc}
                  </p>
                  {phase.tools && (
                    <p className="font-['Open_Sans'] text-[13px] text-[#2F6F7E]/80 mt-3 font-semibold">
                      {phase.tools}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* L-S-R Interview Formula */}
          <div className="bg-[#1a3a47] rounded-2xl p-8 md:p-10 mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#7FAFC6] mb-3">CAREER READINESS</div>
            <h3 className="font-['Poppins'] font-bold text-[24px] text-white mb-3">The L-S-R Interview Formula</h3>
            <p className="font-['Open_Sans'] text-[15px] text-white/70 mb-8 max-w-xl leading-[1.6]">
              You're not inventing answers. You're explaining your work. The RESOLVE method gives you the structure to ace technical interviews.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 border border-white/15 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[18px] mb-4">
                  L
                </div>
                <div className="font-['Poppins'] font-bold text-[16px] text-white mb-2">Logic <span className="text-white/50 font-normal text-[14px]">(The Why)</span></div>
                <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                  Explain the business reason behind your build choice. Trade-offs show judgment.
                </p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[18px] mb-4">
                  S
                </div>
                <div className="font-['Poppins'] font-bold text-[16px] text-white mb-2">Struggle <span className="text-white/50 font-normal text-[14px]">(The Fix)</span></div>
                <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                  Describe a specific bug or testing failure and how you resolved it. Reflection builds trust.
                </p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#2F6F7E] text-white flex items-center justify-center font-['Poppins'] font-bold text-[18px] mb-4">
                  R
                </div>
                <div className="font-['Poppins'] font-bold text-[16px] text-white mb-2">Result <span className="text-white/50 font-normal text-[14px]">(The Impact)</span></div>
                <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                  State the quantifiable outcome for the organization. Clarity beats confidence theater.
                </p>
              </div>
            </div>
          </div>

          {/* Closing quote */}
          <div className="border-l-4 border-[#2F6F7E] pl-6 py-2">
            <p className="font-['Poppins'] font-medium text-[18px] text-[#2A2E2C] italic leading-[1.6]">
              "A healthy org is one where the blueprint is as durable as the building itself."
            </p>
            <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mt-2">RESOLVE Field Manual v1.0 — Transition Trails</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2F6F7E] py-16 px-5 text-center text-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] mb-6">Advance your career.</h2>
          <CTAButton href={LINKS.waitlist} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Join the Waitlist
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
