import { Link } from "wouter";
import { Check, Clipboard, RefreshCw, Target, Database, Users, DollarSign } from "lucide-react";
import { PageMeta } from "../components/PageMeta";
import { CTAButton } from "../components/CTAButton";
import { ProgramCard } from "../components/ProgramCard";
import { FounderCard } from "../components/FounderCard";
import { PROGRAMS } from "../constants/programs";
import { FOUNDERS } from "../constants/founders";
import { LINKS } from "../constants/links";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Transition Trails | Salesforce Career Training | Dallas TX"
        description="Transition Trails connects certified Salesforce professionals with real nonprofit client work. Five programs. Real experience. 501(c)(3) nonprofit. Dallas, TX."
        path="/"
      />
      {/* Section 2: Hero */}
      <section className="bg-gradient-to-r from-[#1E4A2A] via-[#2F6B3F] to-[#2F6F7E] min-h-[640px] flex items-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-[640px]">
            <div className="inline-flex items-center justify-center bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6">
              SALESFORCE CAREER DEVELOPMENT • DALLAS, TX
            </div>
            <h1 className="font-['Poppins'] font-bold text-[36px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              You passed the exam. Now get the experience.
            </h1>
            <p className="font-['Open_Sans'] text-[18px] md:text-[20px] text-white/90 leading-[1.6] mb-10">
              Whether you are just discovering Salesforce, turning your certification into your first role, or pivoting from a completely different career — Transition Trails gives you real project experience, real clients, and a professional delivery methodology that makes you stand out. Five programs. One ecosystem. Built for every stage of the journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href={LINKS.waitlist} size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/programs/digital-compass" variant="outline" size="lg" className="text-white hover:bg-white/10">
                For Nonprofits
              </CTAButton>
            </div>
          </div>
          
          <div className="bg-white/10 border border-white/15 rounded-2xl w-full max-w-[380px] p-8 lg:p-10 backdrop-blur-sm shrink-0">
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-[#F5A623] leading-none mb-1">12 weeks</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">Guided Trail practicum</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-[#F5A623] leading-none mb-1">$0</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">Cost to scholarship learners</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-[#F5A623] leading-none mb-1">5 programs</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">One connected ecosystem</div>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <div className="font-['Poppins'] font-bold text-[28px] text-[#F5A623] leading-none mb-1">$1,547</div>
                <div className="font-['Open_Sans'] text-[15px] text-white/85">Cost of one scholarship seat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Trust Strip */}
      <section className="bg-white border-b border-[#E2E4E1] py-5">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4 font-['Open_Sans'] font-semibold text-[14px] text-[#4A4F4D]">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2F6B3F]" /> 501(c)(3) Nonprofit</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#E2E4E1]" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2F6B3F]" /> Dallas TX</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#E2E4E1]" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2F6B3F]" /> Salesforce Ecosystem</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#E2E4E1]" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2F6B3F]" /> Dual Impact Model</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#E2E4E1]" />
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2F6B3F]" /> Real Project Experience</div>
          </div>
        </div>
      </section>

      {/* Section 4: The Experience Gap */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-16 items-center xl:items-start">
          <div className="flex-1 max-w-[560px]">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE EXPERIENCE GAP</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[40px] text-[#2A2E2C] tracking-[-0.8px] leading-tight mb-4">
              Certified. Qualified. Still waiting for a chance.
            </h2>
            <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-6">
              <span className="font-semibold text-[#7FAFC6]">Career Starters</span>
              <span className="mx-2 text-[#C8CAC8]">·</span>
              <span className="font-semibold text-[#2F6B3F]">Career Builders</span>
              <span className="mx-2 text-[#C8CAC8]">·</span>
              <span className="font-semibold text-[#1E4A2A]">Career Pivoters</span>
            </p>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.65]">
              Maybe you are just starting — trying to figure out if Salesforce is the right path. Maybe you passed the exam and cannot get your first role because every job posting asks for experience you have not had a chance to build yet. Maybe you are like Hugh — 16 years in a completely different career, starting over, wondering if it is too late.
            </p>
            <p className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.65] mt-4">
              It is not too late. The gap is not your fault. And Transition Trails exists to close it — for all three of you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full xl:w-auto overflow-x-auto pb-4 sm:pb-0">
            <div className="bg-white border border-[#E2E4E1] rounded-xl w-[260px] sm:w-[220px] h-auto p-6 shrink-0 flex flex-col">
              <div className="text-[28px] mb-3">🧭</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#7FAFC6] mb-2">CAREER STARTERS</div>
              <div className="font-['Poppins'] font-bold text-[17px] text-[#2A2E2C] mb-3">Where do I even begin?</div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                You know Salesforce is a valuable skill. You are not sure where to start, whether you are cut out for it, or how long it will take. Explorer's Trail and Foundations Trail are built for exactly this moment.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl w-[260px] sm:w-[220px] h-auto p-6 shrink-0 flex flex-col">
              <div className="text-[28px] mb-3">🎯</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#2F6B3F] mb-2">CAREER BUILDERS</div>
              <div className="font-['Poppins'] font-bold text-[17px] text-[#2A2E2C] mb-3">I have the cert. I cannot get hired.</div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                The paradox of the Salesforce ecosystem: every entry-level role requires experience you cannot get without a job. The Guided Trail breaks that cycle with real client work and a real portfolio.
              </p>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl w-[260px] sm:w-[220px] h-auto p-6 shrink-0 flex flex-col">
              <div className="text-[28px] mb-3">🔄</div>
              <div className="font-['Open_Sans'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#1E4A2A] mb-2">CAREER PIVOTERS</div>
              <div className="font-['Poppins'] font-bold text-[17px] text-[#2A2E2C] mb-3">I am starting over. On purpose.</div>
              <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                Hugh drove trucks for 16 years. He is now a Solutions Architect at Salesforce. The pivot is possible — and Transition Trails was built specifically to make it happen for people who are willing to do the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Program Ecosystem */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="w-16 h-[5px] bg-[#2F6B3F] mb-8" />
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">FIVE PROGRAMS. ONE ECOSYSTEM.</div>
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-12">Find your trail.</h2>
          
          <div className="flex gap-6 overflow-x-auto pb-8 items-end snap-x snap-mandatory">
            {PROGRAMS.map(program => (
              <div key={program.slug} className="snap-start shrink-0">
                <ProgramCard program={program} height={program.mostPopular ? "featured" : "standard"} />
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-xl p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="font-['Poppins'] font-semibold text-[15px] text-[#1E4A2A] shrink-0 text-center lg:text-left">
              Not sure which trail is yours?
            </div>
            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] text-center lg:text-left hidden md:block">
              No cert yet → Explorer's Trail <span className="mx-2 text-[#2F6B3F]">•</span> 
              Working toward cert → Foundations Trail <span className="mx-2 text-[#2F6B3F]">•</span> 
              Certified, not hired → Guided Trail <span className="mx-2 text-[#2F6B3F]">•</span> 
              Employed admin → Trail of Mastery <span className="mx-2 text-[#2F6B3F]">•</span> 
              Nonprofit org → Digital Compass
            </div>
            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] text-center lg:text-left md:hidden flex flex-col gap-2">
              <span>No cert yet → Explorer's Trail</span>
              <span>Working toward cert → Foundations Trail</span>
              <span>Certified, not hired → Guided Trail</span>
              <span>Employed admin → Trail of Mastery</span>
              <span>Nonprofit org → Digital Compass</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5b: Dual Impact Bridge */}
      <section className="bg-[#FAFAF7] py-10 px-5">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-6 items-stretch">
          <div className="flex-1 bg-[#2F6B3F]/10 border border-[#2F6B3F]/20 rounded-xl p-8 flex flex-col justify-center">
            <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6B3F] mb-3">LEARNERS NEED</div>
            <div className="font-['Poppins'] font-bold text-[18px] text-[#1E4A2A]">Real nonprofit projects to build their portfolio</div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="font-['Poppins'] text-[#E2E4E1] text-3xl">→</div>
          </div>
          
          <div className="flex-[1.2] bg-[#2A2E2C] border-t-4 border-t-[#F5A623] rounded-xl p-8 flex flex-col justify-center items-center text-center">
            <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#F5A623] mb-3">THE DUAL IMPACT MODEL</div>
            <div className="font-['Poppins'] font-bold text-[17px] text-white">Learners need your projects. You need their work. That's the model.</div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="font-['Poppins'] text-[#E2E4E1] text-3xl">→</div>
          </div>

          <div className="flex-1 bg-[#2F6F7E]/10 border border-[#2F6F7E]/25 rounded-xl p-8 flex flex-col justify-center">
            <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#2F6F7E] mb-3">NONPROFITS NEED</div>
            <div className="font-['Poppins'] font-bold text-[18px] text-[#1a3440]">Salesforce support they couldn't afford to hire</div>
          </div>
        </div>
      </section>

      {/* Section 6: For Nonprofits */}
      <section className="bg-gradient-to-br from-[#1E4F5C] to-[#2F6F7E] py-20 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">FOR NONPROFITS</div>
          <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-white mb-6 max-w-2xl">
            Your mission deserves technology that works.
          </h2>
          <p className="font-['Open_Sans'] text-[18px] text-white/75 leading-[1.65] max-w-3xl mb-16">
            You have the Power of Us grant. You have a team that cares. What you may not have: the expertise to implement Salesforce and keep it running. That's not a failure — it's the gap we exist to close.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <Database className="w-8 h-8 text-[#7FAFC6] mb-5" />
              <h3 className="font-['Poppins'] font-bold text-[16px] text-white mb-3">You have Salesforce. You're not using it.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                You invested in the platform. Without implementation expertise, adoption stalls and the grant feels wasted.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <Users className="w-8 h-8 text-[#7FAFC6] mb-5" />
              <h3 className="font-['Poppins'] font-bold text-[16px] text-white mb-3">Your team is the accidental tech lead.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                Someone on staff inherited Salesforce without training. They're doing their best, but they need support.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <DollarSign className="w-8 h-8 text-[#7FAFC6] mb-5" />
              <h3 className="font-['Poppins'] font-bold text-[16px] text-white mb-3">Consulting rates are out of reach.</h3>
              <p className="font-['Open_Sans'] text-[14px] text-white/70 leading-[1.6]">
                Traditional Salesforce consulting runs $1,000–$3,000/month. Digital Compass starts at $149.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 rounded-xl p-8 flex flex-col">
              <h4 className="font-['Poppins'] font-bold text-[20px] text-white mb-2">Entry</h4>
              <div className="font-['Poppins'] font-bold text-[36px] text-white mb-6">$149<span className="text-xl text-white/60">/mo</span></div>
              <ul className="flex flex-col gap-3 font-['Open_Sans'] text-[14px] text-white/80 mb-8 flex-grow">
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#7FAFC6] shrink-0 mt-0.5" /> Weekly Office Hours</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#7FAFC6] shrink-0 mt-0.5" /> TrailKit Library access</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#7FAFC6] shrink-0 mt-0.5" /> Trail OS Installation</li>
              </ul>
              <div className="text-[12px] text-white/50 text-center">Annual: $1,490/yr (2 mos free)</div>
            </div>
            
            <div className="bg-white border-2 border-[#F5A623] rounded-xl p-8 relative flex flex-col transform md:-translate-y-4 shadow-lg shadow-black/20">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#F5A623] text-[#2A2E2C] font-['Poppins'] font-bold text-[11px] px-3 py-1 rounded-sm uppercase tracking-wide">
                MOST POPULAR
              </div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-2">Mid</h4>
              <div className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-6">$349<span className="text-xl text-[#4A4F4D]">/mo</span></div>
              <ul className="flex flex-col gap-3 font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-8 flex-grow">
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#2F6F7E] shrink-0 mt-0.5" /> All Entry features</li>
                <li className="flex gap-2 font-semibold text-[#2A2E2C]"><Check className="w-4 h-4 text-[#2F6F7E] shrink-0 mt-0.5" /> Project support (mid-level)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#2F6F7E] shrink-0 mt-0.5" /> AI-assisted learning tools</li>
              </ul>
              <CTAButton href={LINKS.nonprofitAssessment} variant="dark" className="w-full !bg-[#2F6F7E] hover:!bg-[#1a3440]">
                Book Free Assessment
              </CTAButton>
            </div>
            
            <div className="bg-white/5 rounded-xl p-8 flex flex-col">
              <h4 className="font-['Poppins'] font-bold text-[20px] text-white mb-2">Full</h4>
              <div className="font-['Poppins'] font-bold text-[36px] text-white mb-6">$749<span className="text-xl text-white/60">/mo</span></div>
              <ul className="flex flex-col gap-3 font-['Open_Sans'] text-[14px] text-white/80 mb-8 flex-grow">
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#7FAFC6] shrink-0 mt-0.5" /> All Mid features</li>
                <li className="flex gap-2 font-semibold text-white"><Check className="w-4 h-4 text-[#7FAFC6] shrink-0 mt-0.5" /> Full project support</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#7FAFC6] shrink-0 mt-0.5" /> Dedicated advisor</li>
              </ul>
              <div className="text-[12px] text-white/50 text-center">Annual: $7,490/yr (2 mos free)</div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
            <p className="font-['Open_Sans'] text-[16px] text-white m-0 text-center md:text-left max-w-2xl">
              Not sure where to start? Book a free Salesforce assessment (up to 1 hour) — no pitch, just clarity.
            </p>
            <CTAButton href={LINKS.nonprofitAssessment} variant="dark" className="shrink-0 whitespace-nowrap !bg-[#2F6F7E] hover:!bg-[#1a3440]">
              Book Free Assessment
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 7: Founding Team */}
      <section className="bg-[#2A2E2C] py-20 px-5">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">CO-FOUNDED IN 2020</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-white">Meet the founding team.</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {FOUNDERS.map(founder => (
              <FounderCard key={founder.key} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Social Proof */}
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto">
          
          {/* Hugh's Story Timeline */}
          <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-2xl p-6 md:p-10 mb-12">
            <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#1E4A2A] mb-12 text-center md:text-left">Hugh's Journey</h3>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-[#2F6B3F]/25 hidden md:block" />
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 md:gap-y-0 relative z-10">
                {[
                  { label: "16 years", desc: "Truck Driver & Military Vet", bg: "bg-gray-400" },
                  { label: "2020", desc: "Admin Cert Earned", bg: "bg-[#2F6B3F]" },
                  { label: "47 jobs", desc: "Applications Sent", bg: "bg-[#BF2E2E]" },
                  { label: "1 project", desc: "Real Nonprofit Implementation", bg: "bg-[#F5A623]" },
                  { label: "Hired", desc: "Business Analyst at Salesforce", bg: "bg-[#1E4A2A]" },
                  { label: "5 years", desc: "Co-Founder & CTO · Solutions Architect", bg: "bg-[#1E4A2A]" }
                ].map((node, i) => (
                  <div key={i} className="flex flex-col items-center text-center px-2">
                    <div className="font-['Poppins'] font-bold text-[13px] text-[#2A2E2C] h-6 mb-2 flex items-end">{node.label}</div>
                    <div className={`w-[36px] h-[36px] rounded-full ${node.bg} border-[4px] border-[#E6F3EA] shrink-0 mb-3`} />
                    <div className="font-['Open_Sans'] text-[11px] text-[#4A4F4D] max-w-[120px]">{node.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="font-['Open_Sans'] italic text-[13px] text-[#4A4F4D] mt-10 text-center md:text-left">
              Hugh Richardson · Solutions Architect at Salesforce · TT Co-Founder & CTO · This is the story Transition Trails was built from.
            </p>
          </div>

          {/* Hugh's Quote Card */}
          <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-2xl p-8 md:p-12 relative mb-12">
            <div className="absolute top-4 left-6 font-['Poppins'] text-[120px] text-[#2F6B3F]/30 leading-none select-none">"</div>
            <p className="font-['Poppins'] font-medium text-[19px] text-[#2A2E2C] leading-[1.65] relative z-10 mb-8 max-w-3xl">
              I spent 16 years driving trucks. I studied Salesforce between loads during the pandemic — and still couldn't get hired without experience. One real project with a real nonprofit changed everything. I joined Salesforce as a Business Analyst. Five years later I'm a Solutions Architect.
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-[44px] h-[44px] rounded-full bg-[#2F6B3F] text-white flex items-center justify-center font-['Poppins'] font-bold">HR</div>
              <div>
                <div className="font-['Poppins'] font-semibold text-[14px] text-[#2A2E2C]">Hugh Richardson</div>
                <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">Co-Founder & CTO · Transition Trails · Solutions Architect</div>
              </div>
            </div>
          </div>

          <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute top-4 left-6 font-['Poppins'] text-[100px] text-[#2F6B3F]/25 leading-none select-none">"</div>
            <p className="font-['Poppins'] font-medium text-[18px] text-[#2A2E2C] leading-[1.65] relative z-10 mb-8 max-w-3xl">
              I had the Admin cert for eight months and couldn't get past the "no experience" wall. Every job listing said entry-level but wanted two years. After completing the Guided Trail, I had a real Salesforce implementation I could walk any hiring manager through — screenshots, architecture decisions, the whole thing. I landed a Salesforce Admin role at a Dallas nonprofit within six weeks of finishing the program.
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-[44px] h-[44px] rounded-full bg-[#2F6B3F] text-white flex items-center justify-center font-['Poppins'] font-bold">MC</div>
              <div>
                <div className="font-['Poppins'] font-semibold text-[14px] text-[#2A2E2C]">M. Chen</div>
                <div className="font-['Open_Sans'] text-[13px] text-[#4A4F4D]">Guided Trail Graduate · Salesforce Admin · Dallas, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Nonprofit Partners */}
      <section className="bg-[#FAFAF7] border-y border-[#E2E4E1] py-10 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#4A4F4D] text-center mb-8">
            NONPROFITS WE'VE SERVED
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-[280px] h-[56px] bg-white border border-[#E2E4E1] rounded-lg flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-[#4A4F4D]">
              Hartford Promises
            </div>
            <div className="w-[280px] h-[56px] bg-white border border-[#E2E4E1] rounded-lg flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-[#4A4F4D]">
              CLYLP
            </div>
            <div className="w-[280px] h-[56px] bg-white border border-[#E2E4E1] rounded-lg flex items-center justify-center font-['Open_Sans'] font-semibold text-[14px] text-[#4A4F4D]">
              KC Global One
            </div>
          </div>
        </div>
      </section>

      {/* Section 9.5: Testimonials */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT PEOPLE ARE SAYING</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-4">Real outcomes. Real voices.</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] max-w-[640px] mx-auto">
              From the nonprofits we serve and the learners who have done the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Nonprofit Partner — Deep Teal */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6F7E" }}>
              <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,111,126,0.15)" }}>"</div>
              <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                Transition Trails Salesforce Experts go beyond! After working with the team, our productivity and data accuracy soared — and we felt supported every step of the way.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6F7E]">Hartford Promises</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Nonprofit Partner · Digital Compass Member · Hartford, CT</div>
            </div>

            {/* Program Learners — Trail Green */}
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6B3F" }}>
              <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,107,63,0.15)" }}>"</div>
              <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                The hands-on experience and the team environment were what I valued most. Working on a real project made everything click in a way that self-study never could.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6B3F]">Cohort 0 Participant</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Guided Trail · Dec. 2025 Retrospective</div>
            </div>

            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6B3F" }}>
              <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,107,63,0.15)" }}>"</div>
              <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                This program teaches you how to think like a professional — not just how to pass a test. The coaching and real-world exposure gave me a completely different kind of confidence.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6B3F]">Cohort 0 Participant</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Guided Trail · Dec. 2025 Retrospective</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Action Banner */}
      <section className="bg-[#2F6B3F] py-16 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-white mb-2 leading-tight">
              Your trail starts with one real project.
            </h2>
            <p className="font-['Open_Sans'] text-[18px] text-white/80">
              Guided Trail Cohort 1 waitlist is open. 8–12 seats. Application required.
            </p>
          </div>
          <div className="shrink-0">
            <CTAButton href={LINKS.waitlist} variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Join the Waitlist
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
