import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

const TRACKS = [
  {
    slug: "admin",
    accent: "#2F6B3F",
    icon: "🛡️",
    duration: "8 WEEKS",
    title: "Admin Mastery",
    subtitle: "Get truly grounded in the role you just landed.",
    body: "You have your Platform Admin certification and your first Salesforce job — but six months in, you know there is more you do not know yet. Admin Mastery is where you cement the foundation: real client configuration work, real team delivery, and an advanced coach who has done this job and knows exactly where the gaps are.\n\nWorks in the Team track (3-4 learners) or Solo track for admins who are the only Salesforce person in their organization.",
    prereqs: [
      "Salesforce Platform Admin certification",
      "Employed in a Salesforce role (standard)",
      "Exception: Guided Trail graduates actively job searching may apply",
    ],
    notEligible: "Platform Admin cert + no job + did not complete Guided Trail → Guided Trail first",
  },
  {
    slug: "ba",
    accent: "#2F6F7E",
    icon: "📋",
    duration: "12 WEEKS",
    title: "Business Analyst Mastery",
    subtitle: "From requirements to reality.",
    body: "The BA does not write the stories — the BA makes sure the stories can be written. BA Mastery develops the discovery, analysis, and requirements skills that make every other role on the team more effective: stakeholder interviews, current-state mapping, gap analysis, constraint identification, and the discipline of translating business language into something a PO can act on and an Admin can build.",
    prereqs: [
      "Salesforce Platform Admin certification",
      "Employed in a Salesforce role",
    ],
  },
  {
    slug: "po",
    accent: "#2F6F7E",
    icon: "🎯",
    duration: "12 WEEKS",
    title: "Product Owner Mastery",
    subtitle: "Own the backlog. Own the outcome.",
    body: "The PO is the approval authority on everything. PO Mastery develops the skills of backlog management, story writing, scope definition, constraint and assumption documentation, trade-off analysis, and delivery leadership. The PO writes and owns the user stories, reviews them with the agile team, approves every gate in the pipeline, ensures UAT happens, and signs off on post-production validation. No one deploys without PO approval.",
    prereqs: [
      "Salesforce Platform Admin certification",
      "Employed in a Salesforce role",
      "Some project or team exposure",
    ],
  },
  {
    slug: "advanced-admin",
    accent: "#1E4A2A",
    icon: "⚡",
    duration: "16 WEEKS",
    title: "Advanced Admin Mastery",
    subtitle: "Complex automation. Architecture thinking. Org strategy.",
    body: "The Advanced Admin Certification is the next tier after Platform Admin — and Advanced Admin Mastery is built around it. This track goes deeper into the platform than any other: complex automation architecture, security and sharing models, org strategy, data architecture, and the kind of technical decision-making that separates admins from architects. 16 weeks because this depth takes time to develop properly.",
    prereqs: [
      "Salesforce Advanced Administrator certification — or actively working toward it",
    ],
  },
  {
    slug: "sc",
    accent: "#1E4A2A",
    icon: "🤝",
    duration: "16 WEEKS",
    title: "Solutions Consultant Mastery",
    subtitle: "Lead the client. Design the solution. Deliver with RESOLVE.",
    body: "The Solutions Consultant is the client-facing practitioner — leading discovery alongside the BA, designing the overall solution approach, managing client communication through every gate, and presenting outcomes at engagement close. This track develops the skills that are hardest to teach in a classroom: how to run a discovery conversation, how to manage scope when a client wants more than was agreed, and how to present a technical decision in business language a stakeholder can approve.",
    prereqs: [
      "Salesforce Platform Admin certification",
      "1-2 years Salesforce experience",
      "Some client-facing or stakeholder exposure",
    ],
  },
];

const ROLES = [
  {
    title: "Solutions Consultant",
    border: "#1E4A2A",
    tag: "Client-facing lead",
    items: [
      "Leads client discovery with BA",
      "Designs overall solution approach",
      "Owns client communication throughout",
      "Presents outcomes at engagement close",
      "Leads team through RESOLVE phases",
    ],
  },
  {
    title: "Business Analyst",
    border: "#2F6F7E",
    tag: "Requirements owner",
    items: [
      "Leads stakeholder discovery and data gathering",
      "Conducts analysis — gaps, root causes, current vs future state",
      "Documents requirements in business language",
      "Provides input on scope, constraints, assumptions, trade-offs",
      "Supports UAT and post-production validation",
      "Feeds requirements to PO — does not write stories",
    ],
  },
  {
    title: "Product Owner",
    border: "#2F6B3F",
    tag: "Approval authority",
    amber: true,
    items: [
      "Receives BA requirements and analysis",
      "Owns scope, constraints, assumptions, trade-off documentation",
      "Writes user stories with agile team input",
      "Manages and prioritizes backlog",
      "Owns ALL approval gates — nothing deploys without PO sign-off",
      "Ensures training is planned and delivered",
      "Owns UAT — ensures it happens completely",
      "Signs off on post-production validation",
    ],
  },
  {
    title: "Administrator",
    border: "#2F6B3F",
    tag: "Builder + Test Lead",
    items: [
      "Builds approved configuration in sandbox — no code, always configuration",
      "Works within PO-approved scope only",
      "Commits changes via DevOps Center + GitHub pipeline",
      "Owns Gate 2 — Test Lead for QA and staging validation",
      "Tests happy path AND unhappy path",
      "Signs off that staging is stable before UAT",
    ],
  },
  {
    title: "Advanced Administrator",
    border: "#1E4A2A",
    tag: "Technical depth",
    items: [
      "Handles complex automation, security architecture, org strategy",
      "Works alongside Admin in sandbox",
      "Owns technically complex user stories",
      "Applies architectural thinking to build decisions",
      "Same pipeline discipline as Admin",
    ],
  },
];

const PIPELINE_STEPS = [
  {
    type: "stage",
    icon: "🔨",
    color: "#7FAFC6",
    label: "BUILD",
    title: "Development Sandbox",
    who: "Admin + Advanced Admin",
    what: "Configuration built in sandbox. No production changes ever.",
    tools: "Salesforce DevOps Center + GitHub",
  },
  {
    type: "gate",
    icon: "✅",
    color: "#2F6B3F",
    label: "GATE 1 — PO APPROVAL",
    title: "PO Dev Review",
    who: "Product Owner (with BA support)",
    what: "PO reviews build against approved user story and acceptance criteria. Approves merge to staging. Rejects → back to Admin for rework.",
    hard: "Admin cannot merge without PO approval",
  },
  {
    type: "stage",
    icon: "🧪",
    color: "#2F6F7E",
    label: "TEST",
    title: "Staging",
    who: "Admin as Test Lead",
    what: "QA and staging validation. Happy path AND unhappy path testing. Test scripts executed and documented.",
  },
  {
    type: "gate",
    icon: "✅",
    color: "#2F6B3F",
    label: "GATE 2 — QA APPROVAL",
    title: "Test Lead Sign-Off",
    who: "Admin (Test Lead)",
    what: "Signs off that staging is stable and ready for UAT. Documents pass/fail results.",
    hard: "UAT cannot begin without Test Lead sign-off",
  },
  {
    type: "gate",
    icon: "👥",
    color: "#2F6F7E",
    label: "GATE 3 — UAT",
    title: "User Acceptance Testing",
    who: "Product Owner owns — BA + Solutions Consultant + Client participate",
    what: "Client or TT user group validates solution in staging. PO ensures UAT is complete. Client sign-off required for external engagements.",
    hard: "Production deployment cannot occur without UAT completion",
  },
  {
    type: "stage",
    icon: "🚀",
    color: "#1E4A2A",
    label: "DEPLOY",
    title: "Production Deployment",
    what: "DevOps pipeline deploys to production. GitHub PR approved. Change moves live.",
  },
  {
    type: "gate",
    icon: "📋",
    color: "#F5A623",
    label: "GATE 4 — RELEASE DELIVERABLES",
    title: "Release Deliverables",
    who: "PO signs off — BA + Solutions Consultant + Admin contribute",
    what: "THREE items required before engagement closes:",
    deliverables: [
      "Release Notes — what changed, why, what it does. Written for the end user.",
      "Training — end users know how to use what was built. Format varies by change size.",
      "Documentation update — appropriate docs updated to reflect new org state.",
    ],
    hard: "Engagement does not close until all three are complete and PO has signed off",
  },
  {
    type: "gate",
    icon: "🔍",
    color: "#2F6B3F",
    label: "GATE 5 — POST-PRODUCTION SIGN-OFF",
    title: "Post-Production Validation",
    who: "Product Owner — BA + Solutions Consultant support",
    what: "PO validates solution works correctly in production. BA checks data and process outcomes. Solutions Consultant validates with client. PO gives final sign-off. Engagement officially closed.",
    resolve: "Evolve — what did we learn, what comes next",
  },
];

export default function TrailOfMastery() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Trail of Mastery | Salesforce Team Apprenticeship | Transition Trails"
        description="A 8-16 week supervised Salesforce team apprenticeship. Real clients, real CI/CD pipeline, five approval gates, mixed-role cohorts. Five tracks: Admin, BA, PO, Advanced Admin, Solutions Consultant. Dallas TX."
        path="/programs/trail-of-mastery"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-24 pb-20 px-5 md:px-10"
        style={{ background: "linear-gradient(135deg, #1E4F5C 0%, #2F6F7E 55%, #1E4A2A 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* Breadcrumb */}
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-white/80 transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-white/80">Trail of Mastery</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
            {/* Left */}
            <div className="flex-1 max-w-[720px]">
              <div
                className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7"
                style={{ color: "#7FAFC6", background: "rgba(47,111,126,0.15)", border: "1px solid rgba(47,111,126,0.4)" }}
              >
                ADVANCEMENT TIER  ·  TEAM APPRENTICESHIP  ·  REAL CLIENT DELIVERY
              </div>
              <h1 className="font-['Poppins'] font-bold text-[52px] text-white tracking-[-1.5px] leading-[1.1] mb-5">
                Trail of Mastery.
              </h1>
              <p className="font-['Poppins'] font-semibold text-[22px] text-[#7FAFC6] mb-6 leading-[1.3]">
                Not a course. A professional apprenticeship.
              </p>
              <div className="font-['Open_Sans'] text-[17px] text-white/75 leading-[1.65] max-w-[680px] space-y-4 mb-10">
                <p>Trail of Mastery is where Salesforce professionals stop collecting certifications and start curating skills. You join a mixed-role team of 4-5 learners, work under an advanced TT coach, deliver real Salesforce solutions for real nonprofit clients, and operate inside a professional CI/CD pipeline using Salesforce DevOps Center and GitHub.</p>
                <p>Choose your track. Work in your role. Deliver like a professional. Leave with a portfolio that proves it.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href={LINKS.waitlist} variant="amber" size="lg">
                  Join the Waitlist →
                </CTAButton>
                <a
                  href="#tracks"
                  onClick={e => { e.preventDefault(); document.getElementById("tracks")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white font-['Poppins'] font-semibold text-[15px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  See the tracks ↓
                </a>
              </div>
            </div>

            {/* Right: stat boxes */}
            <div className="flex flex-col gap-4 w-full xl:w-[280px] shrink-0">
              <div className="bg-white/10 border border-[#2F6F7E]/60 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Poppins'] font-bold text-[40px] text-[#7FAFC6] leading-none mb-1">4-5</div>
                <div className="font-['Open_Sans'] text-[14px] text-white/70">Learners per cohort — mixed roles</div>
              </div>
              <div className="bg-white/10 border border-[#1E4A2A]/60 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Poppins'] font-bold text-[24px] text-white leading-tight mb-1">Real clients</div>
                <div className="font-['Open_Sans'] text-[14px] text-white/70">Digital Compass nonprofits + Trail OS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Apprenticeship Model */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">WHY APPRENTICESHIP</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-6 max-w-[800px]">
              The closest thing to a real Salesforce job — without it being your job yet.
            </h2>
            <div className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.65] max-w-[900px] space-y-5">
              <p>Most Salesforce training puts everyone in the same room doing the same thing. Trail of Mastery puts you in a real team — different roles, shared client, real deliverable. The BA gathers requirements and conducts analysis. The Product Owner writes the stories and owns every approval gate. The Admin builds in sandbox and owns testing. The Advanced Admin handles complex architecture. The Solutions Consultant leads the client.</p>
              <p>That is not a simulation. That is how professional Salesforce teams work. And it is exactly how Trail of Mastery runs.</p>
              <p>Every engagement uses the RESOLVE methodology. Every deployment goes through a professional CI/CD pipeline. Every change produces release notes, end-user training, and updated documentation before the engagement closes. You do not just learn how to build Salesforce. You learn how to deliver it professionally — the way employers and clients will expect you to from day one.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              {
                icon: "👥",
                title: "Real team. Real roles.",
                body: "4-5 learners per cohort — BA, PO, Admin, Advanced Admin, Solutions Consultant. Mixed roles that reflect real Salesforce team composition. The PO approves what the Admin builds. The BA feeds the PO. The Solutions Consultant owns the client. Just like the real world.",
              },
              {
                icon: "⚙️",
                title: "Real pipeline. Real gates.",
                body: "Salesforce DevOps Center + GitHub on Trail OS work. Five approval gates from development through post-production validation. Nothing deploys without PO sign-off. Nothing goes to UAT without QA sign-off. The pipeline is real. The authority is real.",
              },
              {
                icon: "🏢",
                title: "Real clients. Real deliverables.",
                body: "Digital Compass nonprofit clients provide real casework — always configuration-based, no code. Trail OS provides internal TT work on a live production system. Every deliverable goes into a portfolio an employer can review in full.",
              },
            ].map(card => (
              <div key={card.title} className="bg-white border border-[#E2E4E1] rounded-xl p-7">
                <div className="text-[28px] mb-4">{card.icon}</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">{card.title}</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: The Five Tracks */}
      <section id="tracks" className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">CHOOSE YOUR TRACK</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-3">Five tracks. One team. One methodology.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              Choose the track that matches your role and career direction. Every track works within the same mixed-role cohort — your specialization deepens while your understanding of the full team expands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {TRACKS.map(track => (
              <div key={track.slug} className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
                <div className="h-[5px]" style={{ background: track.accent }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[26px]">{track.icon}</div>
                    <span
                      className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase px-2 py-0.5 rounded"
                      style={{ background: `${track.accent}18`, color: track.accent }}
                    >
                      {track.duration}
                    </span>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-1">{track.title}</h3>
                  <p className="font-['Open_Sans'] font-semibold text-[13px] mb-4" style={{ color: track.accent }}>{track.subtitle}</p>
                  <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65] mb-5 flex-1 whitespace-pre-line">{track.body}</div>
                  <div className="h-px bg-[#E2E4E1] mb-4" />
                  <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">Prerequisites</div>
                  <ul className="space-y-1.5 mb-3">
                    {track.prereqs.map(p => (
                      <li key={p} className="flex gap-2 font-['Open_Sans'] text-[12px] text-[#2A2E2C]">
                        <span style={{ color: track.accent }} className="font-bold shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  {track.notEligible && (
                    <p className="font-['Open_Sans'] italic text-[11px] text-[#8C8882] leading-[1.6]">
                      Not eligible: {track.notEligible}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Customized Path — full width */}
          <div className="bg-[#2A2E2C] border border-[#E2E4E1] rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="text-[28px] mb-4">🧭</div>
              <h3 className="font-['Poppins'] font-bold text-[20px] text-white mb-3">Customized Trail of Mastery Path</h3>
              <p className="font-['Open_Sans'] text-[15px] leading-[1.65] mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                Not every career goal fits a defined track. The Customized Path is a personalized Trail of Mastery designed around your specific role, experience, and career direction — combining Digital Compass client work, Trail OS development work, and other real challenges that need solving.
              </p>
              <p className="font-['Open_Sans'] text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.75)" }}>
                The Customized Path is not self-selected. It is recommended by an advanced TT coach based on a skills assessment and a one-on-one coaching conversation. If no defined track fits where you are and where you're going, your coach will design a path that does.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={LINKS.waitlist}
                className="h-[48px] px-7 rounded-[8px] border border-white text-white font-['Poppins'] font-semibold text-[14px] flex items-center justify-center hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Request a Skills Assessment →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: The Team Structure */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">HOW THE TEAM WORKS</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C] mb-4">4-5 learners. Different roles. One delivery.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[760px] leading-[1.65]">
              Every Trail of Mastery cohort is a mixed-role team — just like a real Salesforce project team. You work in your track, but you work alongside learners in other tracks. The BA feeds the PO. The PO approves what the Admin builds. The Solutions Consultant presents what the team delivered. The team reflects reality because reality is what you are preparing for.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto pb-2">
            {ROLES.map(role => (
              <div
                key={role.title}
                className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col flex-1 min-w-[220px]"
                style={{ borderLeft: `4px solid ${role.border}` }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-1">{role.title}</h3>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span
                      className="font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded"
                      style={{ background: `${role.border}18`, color: role.border }}
                    >
                      {role.tag}
                    </span>
                    {role.amber && (
                      <span className="bg-[#FEF3DB] text-[#2A2E2C] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded border border-[#F5A623]/40">
                        APPROVAL AUTHORITY
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 flex-1">
                    {role.items.map(item => (
                      <li key={item} className="flex gap-2 font-['Open_Sans'] text-[12px] text-[#4A4F4D] leading-[1.5]">
                        <span className="text-[#E2E4E1] shrink-0 font-bold mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: The Delivery Pipeline */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>THE CI/CD PIPELINE</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white mb-4">Five gates. Every deployment. No exceptions.</h2>
            <p className="font-['Open_Sans'] text-[16px] max-w-[760px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.70)" }}>
              Every Trail of Mastery engagement — whether for a Digital Compass client or for Trail OS — goes through the same professional delivery pipeline. Salesforce DevOps Center and GitHub for Trail OS work. Client change control processes for Digital Compass client work. All work tracked through a Case process in Salesforce regardless of client environment.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {PIPELINE_STEPS.map((step, i) => {
              const isGate = step.type === "gate";
              return (
                <div key={i}>
                  {i > 0 && (
                    <div className="flex items-center justify-start pl-7 py-1">
                      <span className="text-white/20 text-[20px]">↓</span>
                    </div>
                  )}
                  <div
                    className="rounded-xl p-6 flex flex-col md:flex-row gap-5"
                    style={{
                      background: isGate ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.07)",
                      border: `1px solid ${isGate ? step.color + "50" : "rgba(255,255,255,0.12)"}`,
                    }}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-2 w-[72px]">
                      <div className="text-[28px]">{step.icon}</div>
                      <span
                        className="font-['Open_Sans'] font-bold text-[9px] tracking-[1px] uppercase text-center px-2 py-0.5 rounded"
                        style={{ background: `${step.color}25`, color: step.color }}
                      >
                        {isGate ? "GATE" : "STAGE"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase mb-1" style={{ color: step.color }}>
                        {step.label}
                      </div>
                      <h4 className="font-['Poppins'] font-semibold text-[16px] text-white mb-2">{step.title}</h4>
                      {step.who && (
                        <p className="font-['Open_Sans'] text-[12px] mb-2" style={{ color: "rgba(255,255,255,0.50)" }}>
                          <span className="font-semibold">Who:</span> {step.who}
                        </p>
                      )}
                      <p className="font-['Open_Sans'] text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.70)" }}>
                        {step.what}
                      </p>
                      {step.deliverables && (
                        <ul className="mt-3 space-y-1.5">
                          {step.deliverables.map(d => (
                            <li key={d} className="flex gap-2 font-['Open_Sans'] text-[13px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                              <span style={{ color: step.color }} className="shrink-0">□</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.tools && (
                        <p className="font-['Open_Sans'] text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                          Tools: {step.tools}
                        </p>
                      )}
                      {step.resolve && (
                        <p className="font-['Open_Sans'] italic text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                          RESOLVE phase: {step.resolve}
                        </p>
                      )}
                      {step.hard && (
                        <div
                          className="mt-3 inline-block font-['Open_Sans'] font-semibold text-[11px] px-3 py-1.5 rounded"
                          style={{ background: `${step.color}20`, color: step.color, border: `1px solid ${step.color}40` }}
                        >
                          ⚠ Hard gate: {step.hard}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-['Open_Sans'] italic text-[13px] mt-10 text-center" style={{ color: "rgba(255,255,255,0.50)" }}>
            Trail OS work uses TT_Devops Pipeline2 — Salesforce DevOps Center + GitHub. Digital Compass client work follows client change control agreements — all work tracked via Case process in Salesforce regardless of client environment. GitHub onboarding provided at enrollment via Build With Me videos.
          </p>
        </div>
      </section>

      {/* SECTION 7: The Casework Model */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">THE WORK</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">Real problems. Real clients. Real solutions.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] space-y-5">
                <p>Casework comes from two sources: Digital Compass member nonprofits and Transition Trails itself.</p>
                <p>Digital Compass clients submit real Salesforce configuration needs — always declarative, always no-code. Your coach assigns casework to the cohort based on each learner's track and skill level. The nonprofit gets professional-quality Salesforce support delivered through a structured methodology. The learner gets a real deliverable with a real client name attached to it.</p>
                <p>Trail OS work means contributing to the Salesforce platform that runs Transition Trails — program delivery, learner management, coaching infrastructure, and what we are building next. Trail OS uses Salesforce, Agentforce, and Slack, built on the Power of Us grant. Working on Trail OS means your contributions are live in a production system that real people use every day.</p>
                <p>All casework is configuration-based. No code. Ever.</p>
              </div>
              <div className="mt-6">
                <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[1.5px] uppercase text-[#4A4F4D] mb-3">Examples of real casework</div>
                <ul className="space-y-2">
                  {[
                    "Add fields to an object and update page layouts",
                    "Build a record-triggered flow to solve a business problem",
                    "Configure a permission set and assign appropriately",
                    "Design a report and dashboard set for a program manager",
                    "Set up a Web-to-Case form for client intake",
                    "Configure a path and guidance for a business process",
                  ].map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[14px] text-[#4A4F4D]">
                      <span className="text-[#2F6F7E] shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "🏢",
                  title: "Nonprofit client work",
                  label: "Digital Compass Clients",
                  body: "Real Salesforce configuration needs from Digital Compass member organizations. Assigned by your coach. Delivered through the full pipeline.",
                },
                {
                  icon: "⚙️",
                  title: "Internal Trail OS work",
                  label: "Trail OS",
                  body: "Contribute to the Salesforce + Agentforce + Slack ecosystem that powers Transition Trails. Live production system. Real users. Full CI/CD pipeline.",
                },
                {
                  icon: "🎯",
                  title: "Track capstone",
                  label: "Capstone Project",
                  body: "Each track has a defined capstone project aligned to its specific role. The capstone runs alongside casework and produces the primary portfolio deliverable for your track.",
                },
              ].map(card => (
                <div key={card.title} className="bg-white border border-[#E2E4E1] rounded-xl p-6">
                  <div className="text-[24px] mb-2">{card.icon}</div>
                  <div className="font-['Open_Sans'] font-semibold text-[10px] tracking-[1.5px] uppercase text-[#2F6F7E] mb-1">{card.label}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-2">{card.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: What You Leave With */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">OUTCOMES</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-[#2A2E2C]">Not a certificate. A professional record.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              {
                accent: "#2F6B3F",
                icon: "🗂️",
                title: "Completed deliverables",
                body: "Real client work with real client names. Documented user stories, release notes, test results, training materials, and post-production validation records. Walk any hiring manager through every decision you made and why.",
              },
              {
                accent: "#2F6F7E",
                icon: "🏅",
                title: "Trail of Mastery track badge",
                body: "A Credly digital credential for your completed track — verifiable by employers, shareable to LinkedIn. Role-specific: Admin Mastery, BA Mastery, PO Mastery, Advanced Admin Mastery, or Solutions Consultant Mastery.",
              },
              {
                accent: "#1E4A2A",
                icon: "👥",
                title: "Real team experience",
                body: "You worked in a real role on a real team using a professional CI/CD pipeline. You know what the BA needs from you. You know what the PO is responsible for. You know how a deployment actually happens. That cross-role fluency is what makes you immediately useful on any Salesforce team.",
              },
              {
                accent: "#7FAFC6",
                icon: "🌱",
                title: "1 year Annual Explorer's Trail",
                body: "Trail of Mastery completion includes one year of Annual Explorer's Trail membership. Stay connected to the community, continue building skills, and begin the path toward becoming a TT coach.",
              },
            ].map(card => (
              <div key={card.title} className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
                <div className="h-1" style={{ background: card.accent }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-[28px] mb-4">{card.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-3">{card.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Prerequisites and Pricing */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6F7E] mb-4">WHO THIS IS FOR</div>
            <h2 className="font-['Poppins'] font-bold text-[28px] text-[#2A2E2C]">Trail of Mastery is for working Salesforce professionals.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Prerequisites */}
            <div>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mb-6">
                Trail of Mastery does not require TT program completion. External Salesforce professionals are welcome. Each track has its own prerequisites based on certification and experience.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px] border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#E2E4E1]">
                      <th className="font-['Poppins'] font-semibold text-[12px] text-[#2A2E2C] text-left py-2 pr-4">Track</th>
                      <th className="font-['Poppins'] font-semibold text-[12px] text-[#2A2E2C] text-left py-2 pr-4">Certification</th>
                      <th className="font-['Poppins'] font-semibold text-[12px] text-[#2A2E2C] text-left py-2">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">
                    {[
                      ["Admin Mastery", "Platform Admin", "Employed (or GT grad + job searching)"],
                      ["BA Mastery", "Platform Admin", "Employed in Salesforce role"],
                      ["PO Mastery", "Platform Admin", "Employed + some project exposure"],
                      ["Advanced Admin", "Advanced Admin (or in progress)", "Working toward/holding AA cert"],
                      ["Solutions Consultant", "Platform Admin", "1-2 years + client exposure"],
                      ["Customized Path", "Assessed at enrollment", "Defined by coach"],
                    ].map(([track, cert, exp]) => (
                      <tr key={track} className="border-b border-[#E2E4E1]">
                        <td className="py-3 pr-4 font-semibold text-[#2A2E2C]">{track}</td>
                        <td className="py-3 pr-4">{cert}</td>
                        <td className="py-3">{exp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-['Open_Sans'] italic text-[13px] text-[#4A4F4D] mt-5">
                Two pathways in: TT program graduates and external Salesforce professionals. Both welcome. No program completion required.
              </p>
            </div>

            {/* Pricing */}
            <div>
              <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 mb-5">
                <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-4">Pricing</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mb-5">
                  Pricing analysis in progress — final pricing to be confirmed. Scholarship applications available — no membership required to apply.
                </p>
                <ul className="space-y-3">
                  {[
                    ["8-week tracks (Admin Mastery)", "Contact us"],
                    ["12-week tracks (BA, PO Mastery)", "Contact us"],
                    ["16-week tracks (Advanced Admin, Solutions Consultant)", "Contact us"],
                    ["Customized Path", "Assessed at enrollment"],
                  ].map(([label, price]) => (
                    <li key={label} className="flex items-center justify-between gap-4 border-b border-[#E2E4E1] pb-3 last:border-0 last:pb-0">
                      <span className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">{label}</span>
                      <span className="font-['Poppins'] font-semibold text-[13px] text-[#2A2E2C] shrink-0">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-[#E6F3EA] border border-[#2F6B3F]/30 rounded-xl p-5">
                  <p className="font-['Open_Sans'] text-[13px] text-[#2A2E2C] leading-[1.65]">
                    <strong>Employer-sponsored:</strong> Trail of Mastery is designed to be employer-fundable. We provide the invoice language your HR or L&D team needs to get this approved as a professional development investment. Groups of 3+ seats available at reduced per-seat pricing.
                  </p>
                </div>
                <div className="bg-[#E0F0F7] border border-[#7FAFC6]/30 rounded-xl p-5">
                  <p className="font-['Open_Sans'] text-[13px] text-[#2A2E2C] leading-[1.65]">
                    <strong>Explorer's Trail credit:</strong> Annual Explorer's Trail members ($397/yr): membership fee credited toward enrollment within the same membership year. One program only.
                  </p>
                </div>
                <div className="bg-[#FEF3DB] border border-[#F5A623]/30 rounded-xl p-5">
                  <p className="font-['Open_Sans'] text-[13px] text-[#2A2E2C] leading-[1.65]">
                    <strong>Scholarship seats available</strong> — apply on this page. No membership required. Applications reviewed individually.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <CTAButton href={LINKS.waitlist} variant="amber" size="lg">
                  Join the Waitlist →
                </CTAButton>
                <a
                  href={LINKS.waitlist}
                  className="h-[52px] px-6 rounded-[8px] border-2 border-[#2F6B3F] text-[#2F6B3F] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center hover:bg-[#E6F3EA] transition-colors whitespace-nowrap"
                >
                  Request a Skills Assessment →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CTA Banner */}
      <section className="bg-[#2F6F7E] py-16 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white leading-tight mb-4">
              Stop collecting certifications. Start curating skills.
            </h2>
            <p className="font-['Open_Sans'] text-[16px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Trail of Mastery is where Salesforce professionals become the person others call when something needs to be done right.
            </p>
          </div>
          <div className="shrink-0">
            <CTAButton href={LINKS.waitlist} variant="amber" size="lg">
              Join the Waitlist →
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
