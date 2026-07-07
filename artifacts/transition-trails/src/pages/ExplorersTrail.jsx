import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function ExplorersTrail() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Explorer's Trail | Salesforce Community Membership | Transition Trails"
        description="A membership community for Career Starters, Career Builders, and Career Pivoters in the Salesforce ecosystem. Private Slack, workshops, coaching, and Build With Me content. From $47/mo."
        path="/programs/explorers-trail"
      />

      {/* SECTION 2: Hero */}
      <section className="pt-24 pb-20 px-5 md:px-10" style={{ background: 'linear-gradient(135deg, #2F6B3F 0%, #4A8A6E 50%, #7FAFC6 100%)' }}>
        <div className="max-w-[1280px] mx-auto">

          {/* Breadcrumb */}
          <div className="font-['Open_Sans'] text-[12px] text-white/50 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-white/80 transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-white/80">Explorer's Trail</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">

            {/* Left: copy */}
            <div className="flex-1 max-w-[680px]">
              <div className="inline-block bg-[rgba(127,175,198,0.15)] border border-[rgba(127,175,198,0.4)] text-[#7FAFC6] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-7">
                AWARENESS TIER  ·  COMMUNITY MEMBERSHIP  ·  NO PREREQUISITES
              </div>
              <h1 className="font-['Poppins'] font-bold text-[52px] text-white tracking-[-1.5px] leading-[1.1] mb-5">
                Explorer's Trail.
              </h1>
              <p className="font-['Poppins'] font-semibold text-[22px] text-[#7FAFC6] mb-6 leading-[1.3]">
                The Salesforce community built for people who are serious about where they're going.
              </p>
              <div className="font-['Open_Sans'] text-[17px] text-white/75 leading-[1.65] max-w-[680px] space-y-4 mb-10">
                <p>Not a course. Not a cohort. A membership community — with real coaching, real skill-building content, real events, and real connections to people who are on the same path.</p>
                <p>Whether you are just discovering Salesforce, preparing to join a TT program, or a graduate staying connected after your program ends — Explorer's Trail is where the TT ecosystem lives between programs.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href={LINKS.waitlist} variant="amber" size="lg">
                  Join the Waitlist →
                </CTAButton>
                <a
                  href="#whats-included"
                  onClick={e => { e.preventDefault(); document.getElementById('whats-included')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white font-['Poppins'] font-semibold text-[15px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  See what's included ↓
                </a>
              </div>
            </div>

            {/* Right: price boxes */}
            <div className="flex flex-col gap-4 w-full xl:w-[300px] shrink-0">
              {/* Monthly */}
              <div className="bg-white/10 border border-[#7FAFC6]/40 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#7FAFC6] mb-2">MONTHLY</div>
                <div className="font-['Poppins'] font-bold text-[32px] text-white leading-none mb-1">$47<span className="font-['Open_Sans'] font-normal text-[16px] text-white/60">/mo</span></div>
                <div className="font-['Open_Sans'] text-[12px] text-white/55">Trail Talk · Build Challenges · Community</div>
              </div>
              {/* Annual */}
              <div className="bg-white/10 border-2 border-[#2F6B3F] rounded-xl p-6 backdrop-blur-sm relative">
                <div className="absolute top-3 right-3 bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[9px] uppercase tracking-wide px-2 py-0.5 rounded-sm">BEST VALUE</div>
                <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#2F6B3F] mb-2">ANNUAL</div>
                <div className="font-['Poppins'] font-bold text-[32px] text-white leading-none mb-1">$397<span className="font-['Open_Sans'] font-normal text-[16px] text-white/60">/yr</span></div>
                <div className="font-['Open_Sans'] text-[12px] text-white/55">Full archive · ~$33/mo · 2 months free</div>
              </div>
              {/* Annual + Coaching */}
              <div className="bg-white/10 border border-[#1E4A2A]/60 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-white/50 mb-2">ANNUAL + COACHING</div>
                <div className="font-['Poppins'] font-bold text-[32px] text-white leading-none mb-1">$597<span className="font-['Open_Sans'] font-normal text-[16px] text-white/60">/yr</span></div>
                <div className="font-['Open_Sans'] text-[12px] text-white/55">Everything Annual + quarterly coaching</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who It's For */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHO IT'S FOR</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">Four reasons people join. One community.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">🧭</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#7FAFC6] mb-2">CAREER STARTERS</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Not sure yet. That's okay.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                You know Salesforce is worth exploring. You are not ready to commit to a full certification program or a 12-week cohort. Explorer's Trail is where you come to figure out if this is the right path — with real community, real events, and no pressure to move faster than you are ready to.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">📋</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#2F6B3F] mb-2">CAREER BUILDERS</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Getting ready for a TT program.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                You are planning to join the Foundations Trail or Guided Trail and want to build your foundation first. Explorer's Trail gives you access to skill-building content, workshops, and — most importantly — the ability to interact with current program learners so you know exactly what you are getting into before you enroll.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">🎓</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#1E4A2A] mb-2">PROGRAM ALUMNI</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">You finished a program. Now what?</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Graduates of the Guided Trail receive one year of Explorer's Trail membership included with their program. Explorer's Trail is how you stay connected to the TT ecosystem after your cohort ends — for the events, the community, the ongoing coaching discounts, and the people who are going through what you already went through.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">🌱</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#1E4A2A] mb-2">CAREER PIVOTERS</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">You are in it for the long haul.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                You finished your included year as a graduate — or you joined on your own and kept renewing. Explorer's Trail is your ongoing professional home in the Salesforce ecosystem. New content every month. Quarterly coaching if you're on an annual plan. The community does not have a finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: What's Included */}
      <section id="whats-included" className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT'S INCLUDED</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-3">Community. Coaching. Content.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D]">Everything inside Explorer's Trail is built by Transition Trails — not curated from third-party platforms.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* Feature 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#7FAFC6]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-4">💬</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Private Slack Community</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  A members-only Slack workspace where Career Starters, Career Builders, Career Pivoters, current program learners, and TT alumni all connect. Ask questions, share wins, find accountability partners, and see what life inside a TT program actually looks like — from people who are living it.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-4">🎯</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Workshops and Webinars</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Members-only live events hosted by TT — skill-building workshops, Salesforce topic deep-dives, career sessions, and Q&As with the TT team and coaches. Free or reduced pricing for Explorer's Trail members. All hosted and produced by Transition Trails.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-4">🎬</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Build With Me Content Library</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Skill-building Build With Me videos covering Salesforce concepts, configuration techniques, and practical exercises — created by the TT team. Monthly members access current content. Annual members get the full archive plus everything created in the future as the library grows.
                </p>
                <p className="font-['Open_Sans'] italic text-[11px] text-[#8C8882] leading-[1.6] mt-4">
                  Note: Explorer's Trail Build With Me content covers general skill development. Foundations Trail includes separate cert-aligned Build With Me videos specific to the HCH capstone.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#7FAFC6]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-4">🤝</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Coaching Access</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Async coaching access is available to all members — ask questions and get guidance from the TT team through the community.

                  Annual + Coaching members receive a quarterly coaching session included with their membership, with a TT Founder or advanced TT coach. Additional sessions are available to all members at reduced member pricing.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#7FAFC6]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-3">🎙️</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">Monthly Trail Talk</h3>
                <span className="inline-block bg-[#E0F0F7] text-[#7FAFC6] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-3">ALL MEMBERS · MONTHLY</span>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  A monthly community session for every Explorer's Trail member. Each Trail Talk has a discussion topic, open Q&A, and time for community building — with the TT team and fellow members. Show up, ask questions, share what you're working on, and connect with people who are on the same path.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-3">⚡</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">Weekly Build Challenges</h3>
                <span className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-3">ALL MEMBERS · WEEKLY</span>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Every week, a new build challenge drops in the community. Short, focused, skill-specific — designed to keep your Salesforce skills sharp between sessions and give you something to share in the Slack community. Challenges range across all skill levels so there is always something relevant, whether you are just starting or preparing for an advanced role.
                </p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#7FAFC6]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-3">👕</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">Member Merchandise Discounts</h3>
                <span className="inline-block bg-[#E0F0F7] text-[#7FAFC6] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-3">ALL MEMBERS · EXCLUSIVE</span>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Explorer's Trail members get exclusive access to discounts on Transition Trails merchandise. Member-only pricing on trail gear, apparel, and community items. A small but real perk of being part of the community.
                </p>
              </div>
            </div>

            {/* Feature 8 — Annual only */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-3">🤝</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">Alumni Mentor Matching</h3>
                <span className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-3">ANNUAL MEMBERS · QUARTERLY MATCH</span>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Annual members are matched with a TT program graduate — someone who was in your position and is now working in Salesforce. One match per quarter, structured around a topic you choose. Ask the questions you cannot find answers to anywhere else. This is the human connection no content library can replicate.
                </p>
              </div>
            </div>

            {/* Feature 9 — Annual only */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[28px] mb-3">🧭</div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-1">RESOLVE Practitioner Series</h3>
                <span className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-3">ANNUAL MEMBERS ONLY</span>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  A structured multi-part workshop series exploring the professional mindset behind great Salesforce delivery: how to think about client problems, how to document decisions, how to lead a discovery conversation. Monthly members can see the series exists. Annual members get full access. This is the first step on the Path to Coach.
                </p>
                <p className="font-['Open_Sans'] italic text-[11px] text-[#8C8882] leading-[1.6] mt-4">
                  RESOLVE is TT's proprietary delivery methodology — taught in every program, applied in every client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Membership Tiers */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">CHOOSE YOUR TIER</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">Start where you are. Upgrade when you're ready.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Tier 1: Monthly */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#7FAFC6]" />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#2A2E2C] mb-2">Monthly</h3>
                <div className="font-['Poppins'] font-bold text-[32px] text-[#7FAFC6] leading-none mb-1">$47<span className="font-['Open_Sans'] font-normal text-[15px] text-[#4A4F4D]">/mo</span></div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-5">Cancel or pause anytime</p>
                <div className="h-px bg-[#E2E4E1] mb-5" />
                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Private Slack community",
                    "Monthly Trail Talk (discussion, Q&A, community building)",
                    "Weekly Build Challenges (all skill levels)",
                    "Members-only workshops and webinars (free or reduced TT pricing)",
                    "Current month's Build With Me skill content",
                    "Async coaching access",
                    "Member merchandise discounts",
                    "Basic progress visibility",
                    "Program Preview Sessions — intro level",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <span className="text-[#7FAFC6] shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-[#E2E4E1] mb-4" />
                <ul className="space-y-2 mb-7">
                  {[
                    "Content archive",
                    "Quarterly coaching session",
                    "Full Path to Coach roadmap",
                    "Alumni Mentor Matching",
                    "Annual limited edition merchandise drop",
                    "Cohort Priority Placement",
                    "$397 program credit",
                    "RESOLVE Practitioner Series",
                    "Annual Member Spotlight eligibility",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[12px] text-[#8C8882]">
                      <span className="shrink-0">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={LINKS.waitlist} className="w-full h-[44px] rounded-[8px] bg-[#E0F0F7] text-[#7FAFC6] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center hover:bg-[#cce5f2] transition-colors">
                  Join Monthly
                </a>
              </div>
            </div>

            {/* Tier 2: Annual — featured */}
            <div className="bg-white border-2 border-[#2F6B3F] rounded-xl overflow-hidden flex flex-col relative">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="absolute top-4 right-4 bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[9px] uppercase tracking-wide px-2.5 py-1 rounded-sm">BEST VALUE</div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#2A2E2C] mb-2">Annual</h3>
                <div className="font-['Poppins'] font-bold text-[32px] text-[#2F6B3F] leading-none mb-1">$397<span className="font-['Open_Sans'] font-normal text-[15px] text-[#4A4F4D]">/yr</span></div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-1">~$33/mo · 2 months free</p>
                <p className="font-['Open_Sans'] text-[12px] text-[#4A4F4D] mb-5">Pay once, access all year</p>
                <div className="h-px bg-[#E2E4E1] mb-5" />
                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Everything in Monthly",
                    "Full Build With Me content archive",
                    "All future content as created",
                    "Annual member tenure badge (Year 1, 2, 3+) in Slack",
                    "Full progress visibility including coaching pathway position",
                    "Program Preview Sessions — full deep-dive with current learners",
                    "Annual limited edition merchandise drop (time-limited window)",
                    "Early access to new capstone projects",
                    "Annual Member Spotlight eligibility",
                    "Full Path to Coach roadmap",
                    "Coach Interest Registration",
                    "Alumni Mentor Matching — quarterly match with TT graduate",
                    "RESOLVE Practitioner Series — full multi-part workshop access",
                    "$397 annual fee credited toward one TT program enrollment*",
                    "Cohort Priority Placement — first access before public waitlist",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-[#E2E4E1] mb-4" />
                <ul className="space-y-2 mb-5">
                  <li className="flex gap-2.5 font-['Open_Sans'] text-[12px] text-[#8C8882]">
                    <span className="shrink-0">×</span>
                    Quarterly coaching session
                  </li>
                </ul>
                <a href={LINKS.waitlist} className="w-full h-[44px] rounded-[8px] bg-[#2F6B3F] text-white font-['Poppins'] font-semibold text-[14px] flex items-center justify-center hover:bg-[#245530] transition-colors">
                  Get Annual
                </a>
              </div>
            </div>

            {/* Tier 3: Annual + Coaching */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#1E4A2A]" />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#2A2E2C] mb-2">Annual + Coaching</h3>
                <div className="font-['Poppins'] font-bold text-[32px] text-[#1E4A2A] leading-none mb-1">$597<span className="font-['Open_Sans'] font-normal text-[15px] text-[#4A4F4D]">/yr</span></div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-5">Quarterly coaching included</p>
                <div className="h-px bg-[#E2E4E1] mb-5" />
                <ul className="space-y-2.5 mb-7 flex-1">
                  {[
                    "Everything in Annual",
                    "Quarterly coaching session — with a TT Founder or advanced TT coach",
                    "Reduced pricing on additional sessions",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <span className="text-[#1E4A2A] shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={LINKS.waitlist} className="w-full h-[44px] rounded-[8px] bg-[#1E4A2A] text-white font-['Poppins'] font-semibold text-[14px] flex items-center justify-center hover:bg-[#163820] transition-colors">
                  Get Annual + Coaching
                </a>
              </div>
            </div>
          </div>

          {/* Program Credit callout */}
          <div className="mt-10 bg-[#E6F3EA] border-l-4 border-[#2F6B3F] rounded-xl p-7">
            <h4 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-2">The $397 Credit</h4>
            <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
              Your Annual Explorer's Trail membership fee is credited toward your first TT program enrollment — applied at checkout. Valid within your current membership year. Applies to one program. Since every TT program includes one year of Annual Explorer's Trail membership on completion, your investment in the community is also your first step toward a program.
            </p>
            <p className="font-['Open_Sans'] italic text-[12px] text-[#4A4F4D] mt-3">
              *Credit valid within same membership year · one program only · not stackable
            </p>
          </div>

          <div className="mt-6 bg-[#E0F0F7] border-l-4 border-[#7FAFC6] rounded-xl p-7">
            <h4 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-2">Graduate Recruiter Network</h4>
            <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mb-3">
              Any TT program graduate can opt in to TT's recruiter partner network, making their portfolio visible to vetted partner recruiters. This is a program benefit available to all graduates regardless of Explorer's Trail membership.
            </p>
            <Link href="/partners/recruiters" className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6F7E] hover:underline">
              Learn about recruiter partnerships →
            </Link>
          </div>

          <p className="font-['Open_Sans'] italic text-[12px] text-[#4A4F4D] text-center mt-6">
            Guided Trail graduates receive 1 year of Annual membership included with program completion. Coaching sessions are with a TT Founder or advanced TT coach.
          </p>
        </div>
      </section>

      {/* SECTION: Ways to Earn Your Membership */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE RECIPROCAL MODEL</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">The more you contribute, the more TT gives back.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E2E4E1]">
                  <th className="font-['Poppins'] font-semibold text-[13px] text-[#2A2E2C] text-left py-3 pr-8">How You Earn</th>
                  <th className="font-['Poppins'] font-semibold text-[13px] text-[#2A2E2C] text-left py-3">What You Get</th>
                </tr>
              </thead>
              <tbody className="font-['Open_Sans'] text-[14px] text-[#4A4F4D]">
                {[
                  ["Complete Guided Trail", "1 year Annual membership included"],
                  ["Complete Trail of Mastery", "1 year Annual membership included"],
                  ["Coach's Assistant — per cohort", "1 month Explorer's Trail credit"],
                  ["Associate Coach — per cohort", "3 months Explorer's Trail credit"],
                  ["Complete 6 coaching cohorts", "Lifetime Annual membership*"],
                ].map(([earn, get], i) => (
                  <tr key={i} className="border-b border-[#E2E4E1]">
                    <td className="py-4 pr-8 font-semibold text-[#2A2E2C]">{earn}</td>
                    <td className="py-4 text-[#2F6B3F] font-semibold">{get}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#E2E4E1] rounded-xl p-6">
            <p className="font-['Open_Sans'] text-[14px] text-[#2A2E2C] leading-[1.65]">
              <strong>*Lifetime Annual membership</strong> is our highest recognition — reserved for coaches who have given six cohorts of sustained commitment back to the TT community.
            </p>
            <p className="font-['Open_Sans'] italic text-[13px] text-[#8C8882] mt-2">
              Future stipend for coaching commitment — coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: The Coaching Pathway */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-4">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE COACHING PATHWAY</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-3">From learner to coach. The path is open.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[680px]">Explorer's Trail is where the coaching pipeline starts. Here is what the journey looks like.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
            {/* Stage 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#7FAFC6]" />
              <div className="p-7 flex flex-col flex-1">
                <span className="inline-block bg-[#E0F0F7] text-[#7FAFC6] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-4">ENTRY</span>
                <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-4">Stage 1 — Coach's Assistant</h3>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">Requirements</div>
                <ul className="space-y-1.5 font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-5">
                  <li className="flex gap-2"><span className="text-[#7FAFC6] shrink-0">·</span>Completed Guided Trail</li>
                  <li className="flex gap-2"><span className="text-[#7FAFC6] shrink-0">·</span>Employed in a Salesforce role for 6+ months</li>
                  <li className="flex gap-2"><span className="text-[#7FAFC6] shrink-0">·</span>Ready to commit to a 12-week cohort</li>
                </ul>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">What you do</div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-5">Support the lead coach, assist learners, participate in sessions, learn the coaching process from the inside.</p>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">What you get</div>
                <ul className="space-y-1.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C] mb-5">
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>1 month Explorer's Trail credit per cohort</li>
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>Resume-worthy leadership experience</li>
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>Stay connected to TT while building field experience</li>
                </ul>
                <p className="font-['Open_Sans'] italic text-[12px] text-[#8C8882] leading-[1.6]">Trail of Mastery is not required — Coach's Assistant is available after Guided Trail completion.</p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#2F6B3F]" />
              <div className="p-7 flex flex-col flex-1">
                <span className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-4">INTERMEDIATE</span>
                <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-4">Stage 2 — Associate Coach</h3>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">Requirements</div>
                <ul className="space-y-1.5 font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-5">
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0">·</span>2–3 years practical Salesforce experience</li>
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0">·</span>Coach's Assistant experience OR volunteer pathway</li>
                </ul>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">What you do</div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-5">Lead a 12-week cohort with support. Primary responsibility for learner outcomes.</p>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">What you get</div>
                <ul className="space-y-1.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>3 months Explorer's Trail credit per cohort</li>
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>Future coaching stipend (coming soon)</li>
                </ul>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden flex flex-col">
              <div className="h-1 bg-[#1E4A2A]" />
              <div className="p-7 flex flex-col flex-1">
                <span className="inline-block bg-[#d4e8d8] text-[#1E4A2A] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded mb-4">ADVANCED</span>
                <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-4">Stage 3 — Advanced TT Coach</h3>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">Requirements</div>
                <ul className="space-y-1.5 font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-5">
                  <li className="flex gap-2"><span className="text-[#1E4A2A] shrink-0">·</span>Demonstrated coaching track record within TT</li>
                  <li className="flex gap-2"><span className="text-[#1E4A2A] shrink-0">·</span>Deep platform expertise</li>
                  <li className="flex gap-2"><span className="text-[#1E4A2A] shrink-0">·</span>Full RESOLVE methodology alignment</li>
                </ul>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">What you do</div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-5">Lead cohorts independently · Mentor Coach's Assistants · Lead RESOLVE Practitioner Series sessions</p>
                <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1px] uppercase text-[#4A4F4D] mb-2">What you get</div>
                <ul className="space-y-1.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>Compensation model in development</li>
                  <li className="flex gap-2"><span className="text-[#2F6B3F] shrink-0 font-bold">✓</span>Complete 6 total cohorts → Lifetime Annual Explorer's Trail membership</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="font-['Open_Sans'] italic text-[13px] text-[#4A4F4D] text-center mt-10 max-w-[720px] mx-auto">
            Two pathways into coaching: TT program graduates (Guided Trail + 6 months employed) and external Salesforce professionals (2–3 years experience) who want to build leadership skills. Both pathways are welcome.
          </p>
        </div>
      </section>

      {/* SECTION: Trail Navigator */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE TRAIL NAVIGATOR</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-4">Earned. Never purchased.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[680px] leading-[1.65]">
              Every Guided Trail graduate receives a Trail Navigator at program completion — a physical artifact of the work they did and the community they joined. Choose the one that fits you:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Option A */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[36px] mb-4">🧥</div>
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-3">The Trail Hoodie</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mb-5">
                A custom embroidered zip-up hoodie with velcro patch zones for every milestone you earn — program completions, coaching stints, tenure badges. Cohort-specific accent color embroidered into the design. Cohort 1 accent color: Sun Amber. Wear it to a Salesforce meetup. People will ask about it.
              </p>
              <span className="inline-block bg-[#1E4A2A] text-white font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-3 py-1 rounded">GUIDED TRAIL GRADUATES ONLY · NEVER SOLD SEPARATELY</span>
            </div>
            {/* Option B */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[36px] mb-4">📓</div>
              <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#2A2E2C] mb-3">The Trail Journal</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65] mb-5">
                A custom-designed journal with a patch-compatible fabric cover. Same badge system. Same cohort-specific design. For members who prefer a non-wearable alternative — equally earned, equally honored.
              </p>
              <span className="inline-block bg-[#1E4A2A] text-white font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-3 py-1 rounded">GUIDED TRAIL GRADUATES ONLY · NEVER SOLD SEPARATELY</span>
            </div>
          </div>

          {/* Patch progression */}
          <div className="bg-white border border-[#E2E4E1] rounded-xl p-6 mb-6">
            <div className="font-['Open_Sans'] font-semibold text-[11px] tracking-[1.5px] uppercase text-[#4A4F4D] mb-4">PATCH PROGRESSION</div>
            <div className="flex flex-wrap gap-2 items-center font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
              {["Guided Trail", "Foundations Trail", "Trail of Mastery (BA/PO/Admin Lead)", "Coach's Assistant", "Associate Coach", "Advanced TT Coach", "Lifetime"].map((patch, i, arr) => (
                <span key={patch} className="flex items-center gap-2">
                  <span className="bg-[#E6F3EA] text-[#2F6B3F] px-3 py-1 rounded-full text-[12px] font-semibold">{patch}</span>
                  {i < arr.length - 1 && <span className="text-[#8C8882]">→</span>}
                </span>
              ))}
            </div>
            <p className="font-['Open_Sans'] italic text-[12px] text-[#8C8882] mt-4">
              Patches are velcro — earned at each milestone, carried across every program. Digital credentials issued via Credly for LinkedIn at every milestone.
            </p>
          </div>

          {/* Cohort 1 callout */}
          <div className="bg-[#FEF3DB] border border-[#F5A623] rounded-xl p-7">
            <p className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-2">
              Cohort 1 members receive something no future cohort will. We'll share more when the waitlist closes.
            </p>
            <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-4">Join the waitlist now to secure your Cohort 1 status.</p>
            <a href={LINKS.waitlist} className="inline-flex items-center font-['Poppins'] font-semibold text-[14px] text-[#2A2E2C] hover:text-[#1E4A2A] transition-colors">
              Join the Cohort 1 Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: Community Identity */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">COMMUNITY IDENTITY</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">More than a membership.</h2>
            <p className="font-['Poppins'] font-semibold text-[18px] text-[#4A4F4D] mt-2">You are not just a subscriber. You are a Trail Member.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">🌟</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Monthly Member Spotlight</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                One member featured every month in Trail Talk and across TT social channels. Career Starters who landed their first Salesforce job. Career Builders who doubled their salary. Career Pivoters who left everything behind and built something new. Your story — told by TT, shareable to LinkedIn. Annual members eligible.
              </p>
              <div className="mt-4 space-y-2 font-['Open_Sans'] text-[13px] text-[#4A4F4D] italic border-l-2 border-[#E2E4E1] pl-4">
                <p>"I got my first Salesforce job — here is what it took and what the first day felt like"</p>
                <p>"I increased my salary / landed a better role — the skills that made the difference"</p>
                <p>"I left [previous career] behind — the fear, the pivot, and what came after"</p>
              </div>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">🎯</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Annual Limited Edition Drop</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Once a year, current Annual members get access to a limited edition TT item — available for a defined window only. Miss the renewal, miss the drop. These are not catalog items. They are markers of when you were here.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">📊</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Your Trail Dashboard</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Annual members see their full TT journey — content completed, coaching pathway position, milestones earned, patches collected, time in community. Monthly members see a summary. Annual members see the map.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8">
              <div className="text-[28px] mb-3">💬</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Tenure Recognition</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Your Slack role reflects your journey — Explorer Year 1, Explorer Year 2, Coach's Assistant, Associate Coach. The community sees where you've been. That visibility matters more than you'd expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Community Preview */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-white/45 mb-4">THE COMMUNITY</div>
          <h2 className="font-['Poppins'] font-bold text-[30px] text-white mb-6">You will not figure this out alone.</h2>
          <p className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.65] max-w-[680px] mb-12">
            The Explorer's Trail Slack community connects every tier of the TT ecosystem in one place: people who are just starting, people who are mid-program, graduates who are now working in Salesforce, and the TT team itself.
          </p>
          <p className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.65] max-w-[680px] mb-6">
            Ask a question on a Tuesday. Get an answer from someone who was in your position six months ago — and now has the role you are working toward. That is not something a video course can replicate.
          </p>
          <p className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.65] max-w-[680px] mb-12">
            Two things happen every week and every month without fail: Weekly Build Challenges keep your skills sharp and give the community something to rally around. Monthly Trail Talks bring the whole community together — a topic, a Q&A, and an hour of genuine connection with people who are working toward the same things you are.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Career Starters", desc: "Exploring and building their foundation", value: "Curious minds" },
              { label: "Active Program Learners", desc: "In Foundations Trail, Guided Trail, or Trail of Mastery right now", value: "Active learners" },
              { label: "Alumni", desc: "Working in Salesforce — available to answer your questions", value: "Working alumni" },
            ].map(card => (
              <div key={card.label} className="bg-white/[0.06] border border-white/[0.12] rounded-xl p-7">
                <div className="font-['Poppins'] font-bold text-[28px] text-[#F5A623] mb-2">{card.value}</div>
                <div className="font-['Poppins'] font-semibold text-[15px] text-white mb-2">{card.label}</div>
                <p className="font-['Open_Sans'] text-[13px] text-white/60 leading-[1.55]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA Banner */}
      <section className="bg-[#7FAFC6] py-16 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#1E4A2A] leading-tight mb-4">
              The trail does not have a finish line. Come find your pace.
            </h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#1E4A2A]/80">
              Start with Monthly. Upgrade to Annual when you're ready. Stay as long as the community serves you.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={LINKS.waitlist}
              className="h-[52px] px-8 rounded-[8px] bg-[#1E4A2A] text-white font-['Poppins'] font-bold text-[15px] flex items-center justify-center hover:bg-[#163820] transition-colors whitespace-nowrap"
            >
              Join Explorer's Trail →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
