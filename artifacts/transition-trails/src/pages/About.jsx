import { Link } from "wouter";
import { FOUNDERS } from "../constants/founders";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="About Transition Trails | Our Mission & Founding Team | Dallas TX"
        description="Transition Trails is a 501(c)(3) nonprofit assisting people in transitioning to the digital economy through education, mentoring and training in the Salesforce ecosystem. Founded 2020, Dallas TX. EIN 88-2746412."
        path="/about"
      />
      <section className="bg-[#FAFAF7] py-20 px-5 md:px-10 border-b border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto text-center">
          <h1 className="font-['Poppins'] font-bold text-[40px] md:text-[48px] text-[#2A2E2C] leading-tight max-w-3xl mx-auto mb-8">
            Built by people who know what it costs to break in.
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-6">OUR MISSION</div>
          <div className="border-l-[5px] border-[#2F6B3F] bg-[#E6F3EA] px-10 py-8 rounded-r-xl mb-4">
            <p className="font-['Poppins'] font-semibold text-[20px] text-[#1E4A2A] leading-[1.6] tracking-[-0.2px]">
              To assist people in transitioning to the digital economy through education, mentoring and training. Our primary focus is within the Salesforce ecosystem, providing a system of online and real world education and experience.
            </p>
          </div>
          <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-5">
            Registered mission statement · Transition Trails · EIN 88-2746412 · 501(c)(3) effective May 15, 2022
          </p>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
            The Trail Forward Scholarship — one fully funded Guided Trail seat per cohort — is a direct expression of this mission.{" "}
            <Link href="/scholarships" className="text-[#2F6B3F] font-semibold hover:underline">Learn more →</Link>
          </p>
          <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65] mt-4">
            Our coaches are Salesforce professionals who have done the work — and come back to help others do it too.{" "}
            <Link href="/coaches" className="text-[#2F6B3F] font-semibold hover:underline">Become a TT coach →</Link>
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-16 px-5 md:px-10 border-y border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-10 text-center">WHO WE BUILD FOR</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden">
              <div className="h-1.5 bg-[#7FAFC6]" />
              <div className="p-8">
                <div className="text-[28px] mb-3">🧭</div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Career Starters</h3>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
                  You are new to Salesforce — or new to tech entirely. You are trying to figure out if this is the right path, building foundational skills, and looking for a place to learn without feeling left behind. Explorer's Trail and Foundations Trail were built for you.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden">
              <div className="h-1.5 bg-[#2F6B3F]" />
              <div className="p-8">
                <div className="text-[28px] mb-3">🎯</div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Career Builders</h3>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
                  You have a Salesforce certification — or you are close to earning one. The job you want requires experience you have not had the chance to build yet. The Guided Trail and Trail of Mastery exist to close that gap with real work, real clients, and a real portfolio.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E2E4E1] rounded-xl overflow-hidden">
              <div className="h-1.5 bg-[#1E4A2A]" />
              <div className="p-8">
                <div className="text-[28px] mb-3">🔄</div>
                <h3 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-3">Career Pivoters</h3>
                <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.65]">
                  You are coming from somewhere else entirely — a different industry, a different career, a different version of your life. Hugh came from 16 years of truck driving. Transition Trails was built on the belief that the pivot is possible for anyone willing to do the work. Every trail is open to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-6">The Origin Story</h2>
            <div className="font-['Open_Sans'] text-[17px] text-[#4A4F4D] leading-[1.7] space-y-6">
              <p>
                Hugh Richardson spent 16 years driving trucks. During the pandemic, he studied Salesforce between loads, eventually earning his Admin certification. He sent out 47 applications. He received zero offers.
              </p>
              <p>
                The problem wasn't his knowledge — it was the paradox of the ecosystem: you need experience to get hired, but you need a job to get experience.
              </p>
              <p>
                Then he found Angela Landrith, an SVP with 20+ years of Salesforce transformation experience. Angela didn't just give Hugh advice; she gave him a project. One real implementation for a real nonprofit.
              </p>
              <p>
                That one project changed everything. Hugh landed his first role as a Business Analyst, and five years later, he's a Solutions Architect at Salesforce.
              </p>
              <p>
                Angela and Hugh realized this wasn't just a mentorship success story — it was a scalable model. In 2020, along with Kim Barnes and Kel Landrith, they founded Transition Trails in Dallas, TX, to make that pathway available to everyone. Angela and Kel Landrith are married — Kel's commitment to the mission is both professional and personal.
              </p>
              <p>
                Today, Angela leads Transition Trails as CEO and Co-Founder — full time, building what she spent 20 years wishing existed.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-[400px] shrink-0">
            <div className="bg-[#E6F3EA] border border-[#2F6B3F]/20 rounded-2xl p-8 relative">
              <div className="font-['Poppins'] font-bold text-[24px] text-[#1E4A2A] mb-4">The Dual Impact Model</div>
              <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] leading-[1.6]">
                "We are structured as a 501(c)(3) because impact is the product. The Dual Impact Model is the engine: learners need real experience, nonprofits need real support. We connect the two."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2A2E2C] py-20 px-5">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">THE TEAM</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-white">Meet the Founders</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {FOUNDERS.map(founder => (
              <div key={founder.key} className="bg-[#2E3330] border border-white/10 rounded-xl overflow-hidden flex items-center gap-4 p-5">
                <div
                  className="w-[52px] h-[52px] rounded-full shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: founder.accent }}
                >
                  <span className="font-['Poppins'] font-bold text-white text-[16px]">{founder.initials}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-['Poppins'] font-bold text-[16px] text-white leading-snug">{founder.name}</div>
                  <div className="font-['Open_Sans'] text-[13px] mb-2 truncate" style={{ color: founder.accent }}>{founder.title}</div>
                  <span
                    className="inline-block px-3 py-0.5 rounded-full font-['Open_Sans'] font-semibold text-[10px] uppercase tracking-wider text-white/80 bg-white/10"
                  >
                    {founder.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[760px] mx-auto text-center mb-10">
            <p className="font-['Open_Sans'] text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Transition Trails was founded by four professionals who each bring a distinct perspective to workforce development — strategic vision, operational execution, technical depth, and financial stewardship. Together they built the programs, the infrastructure, and the culture that makes TT work.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/about/team"
              className="h-[48px] px-8 rounded-[8px] border border-[#2F6B3F] text-[#2F6B3F] font-['Poppins'] font-semibold text-[15px] flex items-center justify-center hover:bg-[#2F6B3F]/10 transition-colors"
            >
              Meet the full team →
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="bg-white py-20 px-5 md:px-10 border-t border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">WHAT PEOPLE ARE SAYING</div>
            <h2 className="font-['Poppins'] font-bold text-[32px] text-[#2A2E2C] mb-3">Real outcomes. Real voices.</h2>
            <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] max-w-[580px] mx-auto">
              From the nonprofits we serve and the learners who have done the work.
            </p>
          </div>
          <div className="max-w-[600px] mx-auto">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-7 relative" style={{ borderLeft: "5px solid #2F6F7E" }}>
              <div className="absolute top-3 left-4 font-['Poppins'] text-[80px] leading-none select-none" style={{ color: "rgba(47,111,126,0.15)" }}>"</div>
              <p className="font-['Poppins'] font-medium italic text-[16px] text-[#2A2E2C] leading-[1.6] mb-4 relative z-10">
                Transition Trails Salesforce Experts go beyond! After working with the team, our productivity and data accuracy soared — and we felt supported every step of the way.
              </p>
              <div className="font-['Open_Sans'] font-semibold text-[14px] text-[#2F6F7E]">Hartford Promises</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882]">Nonprofit Partner · Digital Compass Member · Hartford, CT</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-8">Want to be part of the story?</h2>
          <CTAButton href={LINKS.angelaCalendar} variant="amber" size="lg" external>
            Schedule time with us
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
