import { Link } from "wouter";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";
import { Users, Target, BookOpen, MessageCircle, Mic, Zap, Gift, UserCheck, Compass, ClipboardList, Award, Briefcase, Star, TrendingUp, Calendar, Check, X } from "lucide-react";

export default function ExplorersTrail() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Explorer's Trail | Salesforce Community Membership | Transition Trails"
        description="A membership community for Career Starters, Career Builders, Career Pivoters, and TT graduates. Three tiers — Community Pass ($27/mo), Full Membership ($97/mo annual), Full + Coaching ($1,464/yr) — with Trail Missions, Build With Me videos, Monthly Virtual Trail Talk, and optional coaching."
        path="/programs/explorers-trail"
      />

      {/* SECTION: Hero */}
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
                COMMUNITY MEMBERSHIP  ·  THREE TIERS  ·  NO PREREQUISITES
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
                <CTAButton href="https://form.jotform.com/261684070494058" target="_blank" rel="noopener noreferrer" variant="dark" size="lg">
                  Join the Waitlist →
                </CTAButton>
                <a
                  href="#membership-tiers"
                  onClick={e => { e.preventDefault(); document.getElementById('membership-tiers')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="h-[52px] px-7 rounded-[8px] border border-white text-white font-['Poppins'] font-semibold text-[15px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  See membership tiers ↓
                </a>
              </div>
            </div>

            {/* Right: price boxes */}
            <div className="flex flex-col gap-4 w-full xl:w-[300px] shrink-0">
              {/* Community Pass */}
              <div className="bg-white/10 border border-[#7FAFC6]/40 rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#7FAFC6] mb-2">COMMUNITY PASS</div>
                <div className="font-['Poppins'] font-bold text-[32px] text-white leading-none mb-1">$27<span className="font-['Open_Sans'] font-normal text-[16px] text-white/60">/mo</span></div>
                <div className="font-['Open_Sans'] text-[12px] text-white/55">Slack · Trail Mission · Trail Talk · Month-to-month</div>
              </div>
              {/* Full Membership */}
              <div className="bg-white/10 border-2 border-[#2F6B3F] rounded-xl p-6 backdrop-blur-sm relative">
                <div className="absolute top-3 right-3 bg-[#2F6B3F] text-white font-['Poppins'] font-bold text-[9px] uppercase tracking-wide px-2 py-0.5 rounded-sm">MOST POPULAR</div>
                <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#4ADF7C] mb-2">FULL MEMBERSHIP</div>
                <div className="font-['Poppins'] font-bold text-[32px] text-white leading-none mb-1">$97<span className="font-['Open_Sans'] font-normal text-[16px] text-white/60">/mo</span></div>
                <div className="font-['Open_Sans'] text-[12px] text-white/55">$1,164/yr · full archive · async coaching · coaching rate</div>
              </div>
              {/* Full + Coaching */}
              <div className="bg-white/10 border border-[rgba(47,111,126,0.6)] rounded-xl p-6 backdrop-blur-sm">
                <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-white/60 mb-2">FULL + COACHING</div>
                <div className="font-['Poppins'] font-bold text-[32px] text-white leading-none mb-1">$1,464<span className="font-['Open_Sans'] font-normal text-[16px] text-white/60">/yr</span></div>
                <div className="font-['Open_Sans'] text-[12px] text-white/55">Full Membership + 4 quarterly coaching sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Pre-launch Banner */}
      <section style={{ background: 'linear-gradient(135deg, #2F6F7E 0%, #2F6B3F 100%)' }} className="py-10 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-1">
            <div className="font-['Open_Sans'] font-bold text-[11px] tracking-[2px] uppercase text-[#7FAFC6] mb-2">LAUNCHING OCTOBER 1, 2026</div>
            <p className="font-['Open_Sans'] text-[16px] text-white leading-[1.6]">
              Explorer's Trail opens October 1. Join the waitlist and we'll reach out with everything you need to get started.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://form.jotform.com/261684070494058"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[48px] px-7 rounded-[8px] bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[15px] flex items-center justify-center hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Join the Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: Who It's For */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHO IT'S FOR</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">Four reasons people join. One community.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-3">
                <Compass size={24} color="#7FAFC6" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#7FAFC6] mb-2">CAREER STARTERS</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Not sure yet. That's okay.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                You know Salesforce is worth exploring. You are not ready to commit to a full certification program. Explorer's Trail is where you come to figure out if this is the right path — with real community, real events, and no pressure to move faster than you are ready to.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">
                <ClipboardList size={24} color="#2F6B3F" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#2F6B3F] mb-2">CAREER BUILDERS</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Building toward your first role or your next one.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                You have your Salesforce certification or are close to earning it. You want to stay connected to the TT community, access coaching, and build toward your first role or your next one. Explorer's Trail gives you the community, the content, and the coaching access to keep moving — and priority access to Guided Trail enrollment when it opens.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-3">
                <Award size={24} color="#2F6F7E" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#2F6F7E] mb-2">PROGRAM ALUMNI</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">You finished a program. Now what?</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Graduates of the Guided Trail receive one year of Explorer's Trail membership included with their program. Explorer's Trail is how you stay connected to the TT ecosystem after you complete a program — for the events, the community, the ongoing coaching discounts, and the people who are going through what you already went through.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">
                <Briefcase size={24} color="#1E4A2A" />
              </div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#1E4A2A] mb-2">CAREER PIVOTERS</div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">You are in it for the long haul.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                You finished your included year as a graduate — or you joined on your own and kept renewing. Explorer's Trail is your ongoing professional home in the Salesforce ecosystem. New content every month. Quarterly coaching if you're on Full + Coaching. The community does not have a finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: What's Included */}
      <section id="whats-included" className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT'S INCLUDED</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-3">Community. Coaching. Content.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D]">Everything inside Explorer's Trail is built by Transition Trails — not curated from third-party platforms.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* Feature 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-4">
                  <Users size={24} color="#7FAFC6" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Private Slack Community</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  A members-only Slack workspace where Career Starters, Career Builders, Career Pivoters, current program learners, and TT alumni all connect. Ask questions, share wins, find accountability partners, and see what life inside a TT program actually looks like — from people who are living it.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-4">
                  <Target size={24} color="#7FAFC6" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Trail Missions</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Monthly skill-building missions that drop on the 1st. Community Pass members access the current month's mission while active. Full Membership members get the full archive — every past mission, always accessible.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <BookOpen size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Build With Me / Troubleshoot With Me</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Skill-building videos covering Salesforce concepts, configuration techniques, and practical exercises — created by the TT team. Community Pass members access the current month's videos. Full Membership gets the complete archive plus all future content.
                </p>
                <p className="font-['Open_Sans'] italic text-[11px] text-[#8C8882] leading-[1.6] mt-4">
                  Note: Explorer's Trail Build With Me content covers general skill development. Foundations Trail includes separate cert-aligned Build With Me videos specific to the HCH capstone.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <MessageCircle size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Coaching Access</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Full Membership includes async coaching access — submit a question and receive a response within 48 business hours. Full + Coaching members receive four quarterly 1:1 sessions (60 minutes each) with a TT Founder or advanced TT coach. All ET members receive a discounted coaching rate ($100/hr vs. $150/hr standard).
                </p>
                <a href="/coaching" className="font-['Open_Sans'] font-semibold text-[13px] text-[#2F6B3F] hover:underline mt-3 inline-block">See coaching packages →</a>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-4">
                  <Mic size={24} color="#7FAFC6" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Monthly Virtual Trail Talk</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  A monthly live session for every Explorer's Trail member — campfire format with a discussion topic, open Q&A, and community building. Community Pass members access the recording while active. Full Membership gets permanent archive access.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Zap size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Slack Challenges</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Weekly or biweekly build challenges in the community. Short, focused, skill-specific — build something, share your result. Designed to keep your Salesforce skills sharp and give you something to rally around with the community.
                </p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-4">
                  <Gift size={24} color="#7FAFC6" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Member Merchandise &amp; Discounts</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Access to members-only merch items and TT member discounts on programs and coaching. A small but real perk of being part of the community.
                </p>
              </div>
            </div>

            {/* Feature 8 — Full+ only */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <UserCheck size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">Alumni Mentor Matching</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  Full Membership members are matched with a TT program graduate — someone who was in your position and is now working in Salesforce. One match per quarter, structured around a topic you choose.
                </p>
              </div>
            </div>

            {/* Feature 9 — Full+ only */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Compass size={24} color="#2F6B3F" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[16px] text-[#2A2E2C] mb-3">RESOLVE Practitioner Series</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65]">
                  A structured multi-part workshop series exploring the professional mindset behind great Salesforce delivery: how to think about client problems, how to document decisions, how to lead a discovery conversation. This is the first step on the Path to Coach.
                </p>
                <p className="font-['Open_Sans'] italic text-[11px] text-[#8C8882] leading-[1.6] mt-4">
                  RESOLVE is TT's proprietary delivery methodology — taught in every program, applied in every client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Membership Tiers */}
      <section id="membership-tiers" className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">CHOOSE YOUR TIER</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">Start where you are. Upgrade when you're ready.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Tier 1: Community Pass */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col">
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 rounded mb-3" style={{ background: "#E0F0F7", color: "#7FAFC6" }}>GET STARTED</span>
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#2A2E2C] mb-2">Community Pass</h3>
                <div className="font-['Poppins'] font-bold text-[32px] text-[#7FAFC6] leading-none mb-1">$27<span className="font-['Open_Sans'] font-normal text-[15px] text-[#4A4F4D]">/mo</span></div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-5">Month-to-month · cancel anytime</p>
                <div className="h-px bg-[#E2E4E1] mb-5" />
                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Members-only Slack community",
                    "Current month's Trail Mission (time-gated — active months only, no archive)",
                    "Monthly Virtual Trail Talk (live + recording available while active)",
                    "Current month's Build With Me videos",
                    "Current month's Troubleshoot With Me videos",
                    "TT member discounts on programs and coaching",
                    "Merch access (members-only items)",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <Check size={16} color="#7FAFC6" className="shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-[#E2E4E1] mb-4" />
                <ul className="space-y-2 mb-5">
                  {[
                    "Trail Mission archive",
                    "Async coaching access",
                    "Live webinars beyond Trail Talk",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[12px] text-[#8C8882]">
                      <X size={16} color="#8C8882" className="shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#E0F0F7] rounded-lg px-4 py-3 mb-5">
                  <p className="font-['Open_Sans'] text-[12px] text-[#2F6F7E] leading-[1.6]">
                    <span className="font-bold">GT Enrollment Credit:</span> $27 off GT tuition if you enroll in Guided Trail while active.
                  </p>
                </div>
                <a href="https://form.jotform.com/261684070494058" target="_blank" rel="noopener noreferrer" className="w-full h-[44px] rounded-[8px] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center transition-colors hover:opacity-90" style={{ background: "#E0F0F7", color: "#7FAFC6" }}>
                  Join the Waitlist →
                </a>
              </div>
            </div>

            {/* Tier 2: Full Membership — featured */}
            <div className="bg-white border-2 border-[#2F6B3F] rounded-xl flex flex-col relative">
              <div className="absolute top-4 right-4 bg-[#2F6B3F] text-white font-['Poppins'] font-bold text-[9px] uppercase tracking-wide px-2.5 py-1 rounded-sm">MOST POPULAR</div>
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 rounded mb-3" style={{ background: "#E6F3EA", color: "#2F6B3F" }}>FULL MEMBERSHIP</span>
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#2A2E2C] mb-2">Full Membership</h3>
                <div className="font-['Poppins'] font-bold text-[32px] text-[#2F6B3F] leading-none mb-1">$97<span className="font-['Open_Sans'] font-normal text-[15px] text-[#4A4F4D]">/mo</span></div>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] mb-3">$1,164/yr billed annually</p>
                <div className="flex flex-col gap-1.5 mb-5">
                  <div className="flex items-center justify-between bg-[#FAFAF7] border border-[#E2E4E1] rounded-lg px-3 py-2">
                    <span className="font-['Open_Sans'] text-[12px] text-[#2A2E2C] font-semibold">Pay in full</span>
                    <span className="font-['Open_Sans'] text-[12px] text-[#2F6B3F] font-bold">$1,164/yr + content drop + sticker pack</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#FAFAF7] border border-[#E2E4E1] rounded-lg px-3 py-2">
                    <span className="font-['Open_Sans'] text-[12px] text-[#2A2E2C] font-semibold">3 installments</span>
                    <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">$397 × 3 = $1,191</span>
                  </div>
                </div>
                <div className="h-px bg-[#E2E4E1] mb-5" />
                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Everything in Community Pass",
                    "Full Trail Mission archive (all past missions, always accessible while active)",
                    "Full video archive — Build With Me, Troubleshoot With Me, all content",
                    "Monthly Virtual Trail Talk recording — permanent archive access",
                    "Async coaching access (submit a question, response within 48 business hours)",
                    "Live webinars (2–4/month beyond Trail Talk)",
                    "Weekly/biweekly Slack challenges",
                    "Monthly Trail Stamp (digital completion badge — fills your trail map)",
                    "ET member coaching rate ($100/hr vs. $150/hr standard)",
                    "Locked-in rate guarantee at renewal",
                    "Annual member recognition + Founding Year badge for charter members",
                    "First access to new Trail Missions before Community Pass members",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <Check size={16} color="#2F6B3F" className="shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#E6F3EA] rounded-lg px-4 py-3 mb-5">
                  <p className="font-['Open_Sans'] text-[12px] text-[#1E4A2A] leading-[1.6]">
                    <span className="font-bold">GT Enrollment Credit:</span> Enroll in Guided Trail during your membership year and receive a prorated credit for unused months toward GT tuition.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://form.jotform.com/261684070494058" target="_blank" rel="noopener noreferrer" className="w-full h-[44px] rounded-[8px] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors hover:opacity-90" style={{ background: "#2F6B3F" }}>
                    Join the Waitlist →
                  </a>
                  <a href="https://form.jotform.com/261684070494058" target="_blank" rel="noopener noreferrer" className="w-full h-[44px] rounded-[8px] border-2 border-[#2F6B3F] text-[#2F6B3F] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center hover:bg-[#E6F3EA] transition-colors">
                    Join the Waitlist →
                  </a>
                </div>
              </div>
            </div>

            {/* Tier 3: Full + Coaching */}
            <div className="bg-white border border-[#2F6F7E] rounded-xl flex flex-col relative">
              <div className="absolute top-4 right-4 bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[9px] uppercase tracking-wide px-2.5 py-1 rounded-sm">BEST VALUE</div>
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 rounded mb-3" style={{ background: "rgba(47,111,126,0.1)", color: "#2F6F7E" }}>FULL + COACHING</span>
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#2A2E2C] mb-2">Full + Coaching</h3>
                <div className="font-['Poppins'] font-bold text-[32px] text-[#2F6F7E] leading-none mb-1">$1,464<span className="font-['Open_Sans'] font-normal text-[15px] text-[#4A4F4D]">/yr</span></div>
                <div className="flex flex-col gap-1.5 mb-5">
                  <div className="flex items-center justify-between bg-[#FAFAF7] border border-[#E2E4E1] rounded-lg px-3 py-2">
                    <span className="font-['Open_Sans'] text-[12px] text-[#2A2E2C] font-semibold">Pay in full</span>
                    <span className="font-['Open_Sans'] text-[12px] text-[#2F6F7E] font-bold">$1,464/yr + content drop + sticker pack</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#FAFAF7] border border-[#E2E4E1] rounded-lg px-3 py-2">
                    <span className="font-['Open_Sans'] text-[12px] text-[#2A2E2C] font-semibold">3 installments</span>
                    <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]">$499 × 3 = $1,497</span>
                  </div>
                </div>
                <div className="h-px bg-[#E2E4E1] mb-5" />
                <ul className="space-y-2.5 mb-5 flex-1">
                  {[
                    "Everything in Full Membership",
                    "4 quarterly coaching sessions (1:1, 60 minutes each)",
                    "Sessions at approximately Month 3, 6, 9, 12",
                    "Available to anyone: current learner, GT graduate, ToM participant, or working admin at any career stage",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#2A2E2C]">
                      <Check size={16} color="#2F6F7E" className="shrink-0" />
                      {item}
                    </li>
                  ))}
                  <li className="flex gap-2.5 font-['Open_Sans'] text-[13px] text-[#4A4F4D] italic">
                    <span className="text-[#2F6F7E] shrink-0 font-bold">→</span>
                    Coaching arc: Where are you now · What's blocking you · What's your next target · How do we close that gap
                  </li>
                </ul>
                <div className="bg-[#E6F3EA] rounded-lg px-4 py-3 mb-5">
                  <p className="font-['Open_Sans'] text-[12px] text-[#1E4A2A] leading-[1.6]">
                    <span className="font-bold">GT Enrollment Credit:</span> Same prorated credit as Full Membership applies when you enroll in Guided Trail.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://form.jotform.com/261684070494058" target="_blank" rel="noopener noreferrer" className="w-full h-[44px] rounded-[8px] font-['Poppins'] font-semibold text-[14px] flex items-center justify-center text-white transition-colors hover:opacity-90" style={{ background: "#2F6F7E" }}>
                    Join the Waitlist →
                  </a>
                  <a href="https://form.jotform.com/261684070494058" target="_blank" rel="noopener noreferrer" className="w-full h-[44px] rounded-[8px] border-2 font-['Poppins'] font-semibold text-[14px] flex items-center justify-center transition-colors hover:opacity-90" style={{ borderColor: "#2F6F7E", color: "#2F6F7E" }}>
                    Join the Waitlist →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pay-in-full bonus note */}
          <div className="mt-6 bg-[#FEF3DB] border border-[#F5A623] rounded-xl p-5">
            <p className="font-['Open_Sans'] text-[13px] text-[#2A2E2C] leading-[1.6]">
              <span className="font-bold">Pay-in-full bonus:</span> Full Membership and Full + Coaching annual pay-in-full options include an exclusive content drop and sticker pack. The small premium on 3-installment plans reflects the flexibility of spreading payments.
            </p>
          </div>

          <p className="font-['Open_Sans'] italic text-[12px] text-[#4A4F4D] text-center mt-6">
            Guided Trail graduates receive 1 year of Full Membership included with program completion. Coaching sessions are with a TT Founder or advanced TT coach.
          </p>
        </div>
      </section>

      {/* SECTION: Earned Membership */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">EARNED MEMBERSHIP</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">Some memberships are earned, not purchased.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GT Graduate */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-7 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Award size={24} color="#2F6B3F" />
                </div>
                <span className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2.5 py-1 rounded mb-3">GT GRADUATE</span>
                <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">1-Year Full Membership — Complimentary</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65] flex-1">
                  Included automatically when you complete Guided Trail. Stay in the TT community while you enter the job market. No charge.
                </p>
              </div>
            </div>

            {/* ET Included in GT Enrollment */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-7 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Users size={24} color="#2F6B3F" />
                </div>
                <span className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2.5 py-1 rounded mb-3">GT ENROLLMENT</span>
                <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">ET Included in GT</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65] flex-1">
                  When you enroll in Guided Trail, 1 year of Full Membership is included. If you're already an active ET member when you enroll, you receive a credit toward GT tuition: Full annual members receive a prorated credit for unused months. Community Pass members receive $27 off GT tuition. Credit reduces what you owe at enrollment — not a future credit.
                </p>
              </div>
            </div>

            {/* Lifetime Full Membership */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="p-7 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-4">
                  <Star size={24} color="#1E4A2A" />
                </div>
                <span className="inline-block bg-[#d4e8d8] text-[#1E4A2A] font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2.5 py-1 rounded mb-3">LIFETIME</span>
                <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Lifetime Full Membership</h3>
                <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.65] flex-1">
                  Earned after completing 6 coaching cohorts (any combination of Coach's Assistant and Associate Coach stages). TT's highest community recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Monthly Rhythm */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT TO EXPECT</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">Your Monthly Rhythm</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] mt-3">The cadence of community. Every month, every week, every day.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Calendar size={18} color="#7FAFC6" />,
                iconBg: "#E0F0F7",
                timing: "1st of the month",
                title: "New Trail Mission drops",
                desc: "Community Pass: current month only · Full Membership: + full archive of all past missions",
                tiers: "ALL TIERS",
                tierColor: "#7FAFC6",
                tierBg: "#E0F0F7",
              },
              {
                icon: <Mic size={18} color="#7FAFC6" />,
                iconBg: "#E0F0F7",
                timing: "First Thursday",
                title: "Monthly Virtual Trail Talk",
                desc: "Live campfire format for all tiers. Community Pass: recording available while active · Full Membership: permanent archive",
                tiers: "ALL TIERS",
                tierColor: "#7FAFC6",
                tierBg: "#E0F0F7",
              },
              {
                icon: <Zap size={18} color="#2F6B3F" />,
                iconBg: "#E6F3EA",
                timing: "Weekly",
                title: "Slack Challenge",
                desc: "Build something, share your result. Weekly or biweekly depending on the month.",
                tiers: "FULL · FULL + COACHING",
                tierColor: "#2F6B3F",
                tierBg: "#E6F3EA",
              },
              {
                icon: <BookOpen size={18} color="#7FAFC6" />,
                iconBg: "#E0F0F7",
                timing: "Weekly",
                title: "Build With Me / Troubleshoot With Me",
                desc: "Community Pass: current month's video only · Full Membership: full archive always accessible",
                tiers: "ALL TIERS",
                tierColor: "#7FAFC6",
                tierBg: "#E0F0F7",
              },
              {
                icon: <MessageCircle size={18} color="#2F6F7E" />,
                iconBg: "rgba(47,111,126,0.1)",
                timing: "Quarterly",
                title: "1:1 Coaching Session",
                desc: "60-minute session with a TT Founder or advanced coach. Coaching arc: where you are → what's blocking you → next target → how to close the gap.",
                tiers: "FULL + COACHING",
                tierColor: "#2F6F7E",
                tierBg: "rgba(47,111,126,0.1)",
              },
              {
                icon: <Award size={18} color="#2F6B3F" />,
                iconBg: "#E6F3EA",
                timing: "Monthly (active)",
                title: "Trail Stamp",
                desc: "Digital completion badge that fills your trail map. One per active month — your visual record of time in the community.",
                tiers: "FULL · FULL + COACHING",
                tierColor: "#2F6B3F",
                tierBg: "#E6F3EA",
              },
            ].map(item => (
              <div key={item.title} className="bg-white border border-[#E2E4E1] rounded-xl p-6 flex gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: item.iconBg }}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="font-['Open_Sans'] text-[11px] font-semibold text-[#8C8882] uppercase tracking-[1px] mb-1">{item.timing}</div>
                  <h4 className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] mb-1">{item.title}</h4>
                  <p className="font-['Open_Sans'] text-[13px] text-[#4A4F4D] leading-[1.6] mb-2">{item.desc}</p>
                  <span className="inline-block font-['Open_Sans'] font-bold text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded" style={{ background: item.tierBg, color: item.tierColor }}>{item.tiers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: The Coaching Pathway */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE COACHING PATHWAY</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-3">From learner to coach. The path is open.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[680px]">Explorer's Trail is where the coaching pipeline starts. Here is what the journey looks like.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
            {/* Stage 1 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
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
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />1 month Explorer's Trail credit per cohort</li>
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />Resume-worthy leadership experience</li>
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />Stay connected to TT while building field experience</li>
                </ul>
                <p className="font-['Open_Sans'] italic text-[12px] text-[#8C8882] leading-[1.6]">Trail of Mastery is not required — Coach's Assistant is available after Guided Trail completion.</p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
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
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />3 months Explorer's Trail credit per cohort</li>
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />Future coaching stipend (coming soon)</li>
                </ul>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
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
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />Compensation model in development</li>
                  <li className="flex gap-2"><Check size={16} color="#2F6B3F" className="shrink-0 mt-0.5" />Complete 6 total cohorts → Lifetime Full Membership</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="font-['Open_Sans'] italic text-[13px] text-[#4A4F4D] text-center mt-10 max-w-[720px] mx-auto">
            Two pathways into coaching: TT program graduates (Guided Trail + 6 months employed) and external Salesforce professionals (2–3 years experience) who want to build leadership skills. Both pathways are welcome.
          </p>
        </div>
      </section>

      {/* SECTION: Community Identity */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">COMMUNITY IDENTITY</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C]">More than a membership.</h2>
            <p className="font-['Poppins'] font-semibold text-[18px] text-[#4A4F4D] mt-2">You are not just a subscriber. You are a Trail Member.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">
                <Star size={24} color="#2F6B3F" />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Monthly Member Spotlight</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                One member featured every month in Trail Talk and across TT social channels. Career Starters who landed their first Salesforce job. Career Builders who doubled their salary. Career Pivoters who left everything behind and built something new. Your story — told by TT, shareable to LinkedIn. Full Membership members eligible.
              </p>
              <div className="mt-4 space-y-2 font-['Open_Sans'] text-[13px] text-[#4A4F4D] italic border-l-2 border-[#E2E4E1] pl-4">
                <p>"I got my first Salesforce job — here is what it took and what the first day felt like"</p>
                <p>"I increased my salary / landed a better role — the skills that made the difference"</p>
                <p>"I left [previous career] behind — the fear, the pivot, and what came after"</p>
              </div>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-3">
                <Target size={24} color="#7FAFC6" />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Annual Limited Edition Drop</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Once a year, current annual pay-in-full members get access to a limited edition TT item — available for a defined window only. Miss the renewal, miss the drop. These are not catalog items. They are markers of when you were here.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3F6] flex items-center justify-center mb-3">
                <TrendingUp size={24} color="#2F6F7E" />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Your Trail Dashboard</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Full Membership members see their full TT journey — content completed, coaching pathway position, milestones earned, patches collected, time in community. Community Pass members see a summary. Full members see the map.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EE] flex items-center justify-center mb-3">
                <MessageCircle size={24} color="#2F6B3F" />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] mb-3">Tenure Recognition</h3>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.65]">
                Your Slack role reflects your journey — Explorer Year 1, Explorer Year 2, Coach's Assistant, Associate Coach. The community sees where you've been. That visibility matters more than you'd expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Community Preview */}
      <section className="bg-[#2A2E2C] py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-white/45 mb-4">THE COMMUNITY</div>
          <h2 className="font-['Poppins'] font-bold text-[30px] text-white mb-6">You will not figure this out alone.</h2>
          <p className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.65] max-w-[680px] mb-12">
            The Explorer's Trail Slack community connects every tier of the TT ecosystem in one place: people who are just starting, people who are mid-program, graduates who are now working in Salesforce, and the TT team itself.
          </p>
          <p className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.65] max-w-[680px] mb-6">
            Ask a question on a Tuesday. Get an answer from someone who was in your position six months ago — and now has the role you are working toward. That is not something a video course can replicate.
          </p>
          <p className="font-['Open_Sans'] text-[16px] text-white/75 leading-[1.65] max-w-[680px] mb-12">
            Two things happen every week and every month without fail: Slack challenges keep your skills sharp and give the community something to rally around. Monthly Trail Talks bring the whole community together — a topic, a Q&A, and an hour of genuine connection with people who are working toward the same things you are.
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

      {/* SECTION: CTA Banner */}
      <section className="bg-[#7FAFC6] py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#1E4A2A] leading-tight mb-4">
              The trail does not have a finish line. Come find your pace.
            </h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#1E4A2A]/80">
              Start with Community Pass. Upgrade to Full Membership when you're ready. Stay as long as the community serves you.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://form.jotform.com/261684070494058"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[52px] px-8 rounded-[8px] bg-[#1E4A2A] text-white font-['Poppins'] font-bold text-[15px] flex items-center justify-center hover:bg-[#163820] transition-colors whitespace-nowrap"
            >
              Join the Waitlist →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
