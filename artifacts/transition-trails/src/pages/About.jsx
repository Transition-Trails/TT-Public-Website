import { Link } from "wouter";
import { FounderCard } from "../components/FounderCard";
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
                Angela and Hugh realized this wasn't just a mentorship success story — it was a scalable model. In 2020, along with Kim Barnes and Kel Landrith, they founded Transition Trails in Dallas, TX, to make that pathway available to everyone.
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
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#F5A623] mb-4">THE TEAM</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-white">Meet the Founders</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {FOUNDERS.map(founder => (
              <FounderCard key={founder.key} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-y border-[#E2E4E1]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] text-center mb-12">Timeline</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#2F6B3F]/20">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FAFAF7] bg-[#2F6B3F] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-[#E2E4E1] shadow-sm ml-4 md:ml-0">
                <div className="font-['Poppins'] font-bold text-[18px] text-[#2F6B3F] mb-1">Founded 2020</div>
                <div className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Angela and co-founders launch Transition Trails in Dallas, TX.</div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FAFAF7] bg-[#2F6F7E] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-[#E2E4E1] shadow-sm ml-4 md:ml-0">
                <div className="font-['Poppins'] font-bold text-[18px] text-[#2F6F7E] mb-1">501(c)(3) Effective May 15, 2022</div>
                <div className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Official public charity status achieved.</div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FAFAF7] bg-[#F5A623] text-[#2A2E2C] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-[#E2E4E1] shadow-sm ml-4 md:ml-0">
                <div className="font-['Poppins'] font-bold text-[18px] text-[#D4890A] mb-1">First Nonprofit Clients</div>
                <div className="font-['Open_Sans'] text-[15px] text-[#4A4F4D]">Hartford Promises, CLYLP, and KC Global One become our first dual-impact partners.</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-8">Want to be part of the story?</h2>
          <CTAButton href={LINKS.angelaCalendar} variant="amber" size="lg" external>
            Schedule Time With Angela
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
