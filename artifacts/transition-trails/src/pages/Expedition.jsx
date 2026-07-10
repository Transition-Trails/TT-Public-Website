import { useEffect } from "react";
import { PageMeta } from "../components/PageMeta";
import { Building2, Users, Package, Zap, Rocket, Target, Eye, Bell, Lock, Smartphone, Check } from "lucide-react";

const STAGES = [
  {
    n: 1,
    icon: <Building2 size={24} color="#fff" />,
    color: "#2F6B3F",
    title: "Nonprofits are nominated",
    body: "Trail of Mastery and Guided Trail learners nominate nonprofits facing significant Salesforce challenges. The TT community votes on the shortlist. One organization is selected per Expedition.",
    when: "60-90 days before",
  },
  {
    n: 2,
    icon: <Users size={24} color="#fff" />,
    color: "#2F6F7E",
    title: "Teams are assembled",
    body: "Guided Trail and Trail of Mastery participants register. Teams are formed across roles — BA, PO, Admin, Advanced Admin, Solutions Consultant — mirroring a real Salesforce delivery team.",
    when: "2-3 weeks before",
  },
  {
    n: 3,
    icon: <Package size={24} color="#fff" />,
    color: "#F5A623",
    title: "The Trail Box ships",
    body: "Your collector's edition Expedition Trail Box arrives before the weekend. Everything inside is yours to open — except the sealed Expedition Brief. That waits.",
    when: "Week before",
  },
  {
    n: 4,
    icon: <Zap size={24} color="#fff" />,
    color: "#2F6B3F",
    title: "72 hours. Clock starts Friday.",
    body: "Opening ceremony Friday evening — the Brief is opened together. Discovery begins. Saturday is the build — observers welcome. Sunday afternoon, every team presents their solution to the nonprofit, the sponsors, and the community. The nonprofit selects what gets implemented.",
    when: "The weekend",
  },
  {
    n: 5,
    icon: <Rocket size={24} color="#fff" />,
    color: "#2F6F7E",
    title: "The solution ships",
    body: "The selected solution goes into implementation. The nonprofit gets real Salesforce work completed. Every participant adds a documented Expedition deliverable to their portfolio. The Expedition patch is earned.",
    when: "After",
  },
];

const PARTICIPANTS = [
  {
    accent: "#2F6B3F",
    icon: <Target size={24} color="#2F6B3F" />,
    title: "Learners",
    body: "Guided Trail graduates and Trail of Mastery learners form the build teams. You work in your role — BA, PO, Admin, Advanced Admin, or Solutions Consultant — delivering a real solution for a real nonprofit under a real time constraint. The most intense portfolio experience in any TT program.",
    badge: "GUIDED TRAIL + TRAIL OF MASTERY",
  },
  {
    accent: "#F5A623",
    icon: <Building2 size={24} color="#F5A623" />,
    title: "Nonprofits",
    body: "Apply to have your Salesforce challenge tackled by a coached team over a weekend. One organization selected per Expedition. The work that gets done is real — not a prototype, not a pitch deck. A solution designed for implementation.",
    badge: "APPLY TO BE SELECTED",
  },
  {
    accent: "#2F6F7E",
    icon: <Users size={24} color="#2F6F7E" />,
    title: "Sponsors",
    body: "The TT Expedition Series is built for sponsorship — a virtual event with a measurable nonprofit outcome, a documented participant community, and social sharing built into the experience from the moment the Trail Box ships. Get in early.",
    badge: "PRESENTING SPONSOR AVAILABLE",
  },
  {
    accent: "#7FAFC6",
    icon: <Eye size={24} color="#7FAFC6" />,
    title: "Observers",
    body: "Explorer's Trail members, alumni, and the broader TT community are welcome to observe Saturday's build session and attend Sunday's closing presentations. Watch professional Salesforce delivery happen in real time.",
    badge: "EXPLORER'S TRAIL COMMUNITY",
  },
];

const SPONSOR_TIERS = [
  {
    border: "#F5A623",
    borderWidth: "2px",
    badge: { text: "AVAILABLE", color: "#F5A623" },
    title: "Presenting Sponsor",
    amount: "Contact us",
    amountColor: "#F5A623",
    items: [
      "The TT Expedition, presented by [Your Organization]",
      "Logo on Trail Box and all event materials",
      "Speaking moment at opening or closing ceremony",
      "Logo on Expedition patch — collector's edition",
      "5 observer seats",
      "Recognition in all pre-event communications",
      "Post-event impact report with your branding",
    ],
  },
  {
    border: "#2F6B3F",
    borderWidth: "1px",
    title: "Summit Sponsor",
    amount: "Contact us",
    amountColor: "#6BBF85",
    items: [
      "Logo on event materials",
      "Recognition in all communications",
      "2 observer seats",
      "Post-event impact report",
    ],
  },
  {
    border: "#2F6F7E",
    borderWidth: "1px",
    title: "Basecamp Sponsor",
    amount: "Contact us",
    amountColor: "#7FAFC6",
    items: [
      "Logo on event program",
      "Recognition in communications",
      "1 observer seat",
    ],
  },
  {
    border: "#7FAFC6",
    borderWidth: "1px",
    title: "Trail Box Sponsor",
    amount: "Contact us",
    amountColor: "#7FAFC6",
    body: "Contribute a branded item to the Expedition Trail Box. Your product in the hands of every participant — unboxed, photographed, shared.",
    items: [
      "Product in Trail Box",
      "Social sharing moment",
      "Recognition in event program",
    ],
  },
];

const CTA_CARDS = [
  {
    icon: <Bell size={24} color="#F5A623" />,
    title: "Get Notified",
    body: "Be the first to know when Expedition I applications open — for learners, nonprofits, and sponsors.",
    buttonLabel: "Notify Me →",
    buttonStyle: { background: "#F5A623", color: "#2A2E2C" },
    href: "mailto:hello@transitiontrails.org?subject=TT%20Expedition%20Series%20-%20Notify%20Me",
  },
  {
    icon: <Building2 size={24} color="#2F6B3F" />,
    title: "Nominate a Nonprofit",
    body: "Know a nonprofit facing a significant Salesforce challenge? Nominate them for Expedition I consideration.",
    buttonLabel: "Submit a Nomination →",
    buttonStyle: { background: "#2F6B3F", color: "#ffffff" },
    href: "mailto:hello@transitiontrails.org?subject=TT%20Expedition%20-%20Nonprofit%20Nomination",
  },
  {
    icon: <Users size={24} color="#2F6F7E" />,
    title: "Sponsorship Inquiry",
    body: "Interested in sponsoring The TT Expedition Series? We are building the sponsorship program now and welcoming early conversations.",
    buttonLabel: "Inquire About Sponsorship →",
    buttonStyle: { background: "#2F6F7E", color: "#ffffff" },
    href: "mailto:hello@transitiontrails.org?subject=TT%20Expedition%20-%20Sponsorship%20Inquiry",
  },
];

export default function Expedition() {
  useEffect(() => {
    const handlerSrc = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    const callHandler = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261877267351062']",
          "https://form.jotform.com/"
        );
      }
    };
    const existing = document.querySelector(`script[src="${handlerSrc}"]`);
    if (existing) {
      callHandler();
    } else {
      const s = document.createElement("script");
      s.src = handlerSrc;
      s.async = true;
      s.onload = callHandler;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#1A1A1A" }}>
      <PageMeta
        title="The TT Expedition Series | Coming Fall 2027 | Transition Trails"
        description="Twice yearly, a team of Salesforce professionals solves a real nonprofit challenge over 72 hours. Trail Box included. Collector's edition patches. Launching Fall 2027. Get notified."
        path="/expedition"
      />

      {/* SECTION 2: Hero */}
      <section
        className="pt-28 pb-24 px-5 md:px-10 flex flex-col items-center text-center"
        style={{
          background: "radial-gradient(ellipse at center, rgba(47,107,63,0.25) 0%, rgba(26,26,26,1) 70%)",
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-4 py-2 mb-8"
          style={{
            color: "#F5A623",
            background: "rgba(245,166,35,0.15)",
            border: "1px solid rgba(245,166,35,0.40)",
            borderRadius: "99px",
          }}
        >
          COMING · FALL 2027 · TWICE YEARLY
        </div>

        <h1
          className="font-['Poppins'] font-bold text-[64px] text-white leading-[1.05] mb-5 max-w-[860px]"
          style={{ letterSpacing: "-2px" }}
        >
          The TT Expedition Series.
        </h1>

        <p className="font-['Poppins'] font-semibold text-[22px] text-[#7FAFC6] mb-8 leading-[1.5]">
          A weekend. A nonprofit. A team. A solution that ships.
        </p>

        <div className="font-['Open_Sans'] text-[18px] leading-[1.7] max-w-[680px] mb-12 space-y-4" style={{ color: "rgba(255,255,255,0.65)" }}>
          <p>Twice a year, a team of Guided Trail and Trail of Mastery learners comes together — virtually, over a single weekend — to solve a real Salesforce challenge for a real nonprofit organization.</p>
          <p>The problem is significant. The timeline is tight. The solution ships.</p>
          <p>Every participant receives a Trail Box before the event. The sealed Expedition Brief inside stays closed until the opening ceremony — when everyone opens it together and the clock starts.</p>
        </div>

        {/* Stat boxes */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-[720px]">
          {[
            { value: "72 hours", label: "From brief to solution" },
            { value: "1 nonprofit", label: "Selected per Expedition" },
            { value: "2× per year", label: "Spring and Fall" },
          ].map(stat => (
            <div
              key={stat.label}
              className="flex-1 flex flex-col items-center px-8 py-6 rounded-xl"
              style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.25)" }}
            >
              <span className="font-['Poppins'] font-bold text-[28px] leading-none mb-1" style={{ color: "#F5A623" }}>{stat.value}</span>
              <span className="font-['Open_Sans'] text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <a
          href="#interest-form"
          className="h-[56px] px-10 font-['Poppins'] font-bold text-[16px] text-[#2A2E2C] inline-flex items-center justify-center transition-colors mb-4"
          style={{ background: "#F5A623", borderRadius: "12px" }}
          onMouseEnter={e => e.currentTarget.style.background = "#D4890A"}
          onMouseLeave={e => e.currentTarget.style.background = "#F5A623"}
        >
          Get Notified →
        </a>

        <p className="font-['Open_Sans'] italic text-[12px]" style={{ color: "rgba(255,255,255,0.40)" }}>
          Expedition I · Fall 2027 · Virtual · Trail Box included
        </p>
      </section>

      {/* SECTION 3: The Trail Box */}
      <section className="py-20 px-5 md:px-10" style={{ background: "#111111" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>THE EXPEDITION TRAIL BOX</div>
            <h2
              className="font-['Poppins'] font-bold text-[38px] text-white mb-4"
              style={{ letterSpacing: "-0.8px" }}
            >
              Before the weekend begins, the box arrives.
            </h2>
            <p className="font-['Open_Sans'] text-[17px] max-w-[640px] mx-auto leading-[1.65]" style={{ color: "rgba(255,255,255,0.60)" }}>
              Every Expedition participant receives a collector's edition Trail Box — shipped before the event. It is not just gear. It is the start of the experience.
            </p>
          </div>

          <div className="max-w-[680px] mx-auto mb-10">
            <p className="font-['Open_Sans'] text-[17px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Each Trail Box is a collector's edition — branded, specific to that Expedition, and not available anywhere else. What's inside changes with every event. What doesn't change: the sealed Expedition Brief at the bottom of the box.
            </p>
            <p className="font-['Open_Sans'] text-[17px] leading-[1.7] mt-5" style={{ color: "rgba(255,255,255,0.65)" }}>
              Don't open it until the opening ceremony. Everyone opens it together. That's when the clock starts.
            </p>
          </div>

          <div
            className="max-w-[480px] mx-auto mb-10 text-center rounded-xl px-8 py-6"
            style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.25)" }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{background:"rgba(255,255,255,0.08)"}}><Lock size={22} color="rgba(255,255,255,0.70)" /></div>
            <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-2">The Sealed Expedition Brief</h3>
            <p className="font-['Open_Sans'] text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Inside: the nonprofit. The challenge. The constraints. Opens at the ceremony — and then the clock starts.
            </p>
          </div>

          {/* Social sharing callout */}
          <div
            className="rounded-xl p-6 max-w-[640px] mx-auto text-center"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto" style={{background:"rgba(255,255,255,0.08)"}}><Smartphone size={22} color="rgba(255,255,255,0.70)" /></div>
            <p className="font-['Open_Sans'] text-[14px] leading-[1.65] mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
              Trail Box unboxings happen the week before each Expedition. When yours arrives — share it. Tag us. The community opens their boxes together.
            </p>
            <p className="font-['Open_Sans'] font-semibold text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              #TTExpedition · @TransitionTrails
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: How It Works */}
      <section className="py-20 px-5 md:px-10" style={{ background: "#1A1A1A" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>THE EXPEDITION FORMAT</div>
            <h2 className="font-['Poppins'] font-bold text-[38px] text-white">One weekend. Real work. Real outcome.</h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:flex gap-0 relative">
            {/* Connecting line */}
            <div className="absolute top-[32px] left-[10%] right-[10%] h-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            {STAGES.map((stage, i) => (
              <div key={stage.n} className="flex-1 flex flex-col items-center text-center px-3 relative">
                {/* Stage number circle */}
                <div
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center font-['Poppins'] font-bold text-[18px] mb-3 z-10 shrink-0"
                  style={{ background: stage.color, color: "#fff", boxShadow: `0 0 20px ${stage.color}40` }}
                >
                  {stage.icon}
                </div>
                {/* When badge */}
                <span
                  className="font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-[1px] px-2 py-1 rounded mb-3"
                  style={{ background: `${stage.color}20`, color: stage.color }}
                >
                  {stage.when}
                </span>
                <h3 className="font-['Poppins'] font-semibold text-[13px] text-white mb-2 leading-tight">{stage.title}</h3>
                <p className="font-['Open_Sans'] text-[12px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.50)" }}>{stage.body}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-[31px] top-6 bottom-6 w-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="space-y-8">
              {STAGES.map(stage => (
                <div key={stage.n} className="flex gap-5">
                  <div
                    className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-[24px] shrink-0 z-10"
                    style={{ background: stage.color, boxShadow: `0 0 16px ${stage.color}40` }}
                  >
                    {stage.icon}
                  </div>
                  <div className="flex-1 pt-3">
                    <span
                      className="font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded mr-2"
                      style={{ background: `${stage.color}20`, color: stage.color }}
                    >
                      {stage.when}
                    </span>
                    <h3 className="font-['Poppins'] font-semibold text-[15px] text-white mt-2 mb-1">{stage.title}</h3>
                    <p className="font-['Open_Sans'] text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.55)" }}>{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Who Participates */}
      <section className="py-20 px-5 md:px-10" style={{ background: "#111111" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>WHO IT IS FOR</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white">Four ways to be part of The Expedition.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTICIPANTS.map(p => (
              <div
                key={p.title}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderTop: `4px solid ${p.accent}` }}
              >
                <div className="p-7 flex-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background: `${p.accent}20`}}>{p.icon}</div>
                  <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-3">{p.title}</h3>
                  <p className="font-['Open_Sans'] text-[13px] leading-[1.65] mb-4" style={{ color: "rgba(255,255,255,0.60)" }}>{p.body}</p>
                  <span
                    className="inline-block font-['Open_Sans'] font-semibold text-[9px] uppercase tracking-[1px] px-2 py-1 rounded"
                    style={{ background: `${p.accent}20`, color: p.accent }}
                  >
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Sponsorship */}
      <section className="py-20 px-5 md:px-10" style={{ background: "#1A1A1A" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>SPONSORSHIP</div>
            <h2 className="font-['Poppins'] font-bold text-[34px] text-white mb-4">Get in front of a community of practicing Salesforce professionals.</h2>
            <p className="font-['Open_Sans'] text-[16px] max-w-[680px] mx-auto leading-[1.65]" style={{ color: "rgba(255,255,255,0.60)" }}>
              The TT Expedition Series attracts Guided Trail graduates, Trail of Mastery learners, Explorer's Trail members, coaches, and the broader Salesforce nonprofit community — all watching a real solution get built in real time. Sponsor visibility extends from Trail Box to opening ceremony to closing presentation to social sharing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {SPONSOR_TIERS.map(tier => (
              <div
                key={tier.title}
                className="rounded-xl p-6 flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `${tier.borderWidth} solid ${tier.border}`,
                }}
              >
                {tier.badge && (
                  <span
                    className="font-['Open_Sans'] font-bold text-[9px] uppercase tracking-[1.5px] px-2 py-1 rounded self-start mb-3"
                    style={{ background: `${tier.badge.color}20`, color: tier.badge.color }}
                  >
                    {tier.badge.text}
                  </span>
                )}
                <h3 className="font-['Poppins'] font-bold text-[18px] text-white mb-1">{tier.title}</h3>
                <div className="font-['Poppins'] font-bold text-[22px] mb-4" style={{ color: tier.amountColor }}>
                  {tier.amount}
                </div>
                {tier.body && (
                  <p className="font-['Open_Sans'] text-[12px] leading-[1.65] mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{tier.body}</p>
                )}
                <ul className="space-y-1.5 flex-1">
                  {tier.items.map(item => (
                    <li key={item} className="flex gap-2 font-['Open_Sans'] text-[12px]" style={{ color: "rgba(255,255,255,0.60)" }}>
                      <Check size={12} className="shrink-0 mt-0.5" style={{ color: tier.border }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="font-['Open_Sans'] italic text-[12px] text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
            The TT Expedition Series is a program of Transition Trails, a 501(c)(3) nonprofit. Sponsorships may be tax-deductible — consult your tax advisor. Grant funding opportunities available for workforce development and digital equity funders.
          </p>
        </div>
      </section>

      {/* SECTION 7: Get Involved */}
      <section id="interest-form" className="py-20 px-5 md:px-10" style={{ background: "#111111" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.40)" }}>GET INVOLVED</div>
            <h2 className="font-['Poppins'] font-bold text-[38px] text-white mb-3">Expedition I · Fall 2027</h2>
            <p className="font-['Open_Sans'] text-[16px]" style={{ color: "rgba(255,255,255,0.55)" }}>We are building this. Be part of it from the beginning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {CTA_CARDS.map(card => (
              <div
                key={card.title}
                className="rounded-xl p-8 flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background:"rgba(255,255,255,0.08)"}}>{card.icon}</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-white mb-3">{card.title}</h3>
                <p className="font-['Open_Sans'] text-[14px] leading-[1.65] flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>{card.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="font-['Poppins'] font-semibold text-[18px] text-white">
              Register your interest below — select all that apply to you.
            </p>
          </div>

          <div className="max-w-[760px] mx-auto">
            <iframe
              id="JotFormIFrame-261877267351062"
              title="TT Expedition Series — Express Interest"
              onLoad={() => window.parent.scrollTo(0, 0)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261877267351062"
              frameBorder="0"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "539px",
                border: "none",
                display: "block",
              }}
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
