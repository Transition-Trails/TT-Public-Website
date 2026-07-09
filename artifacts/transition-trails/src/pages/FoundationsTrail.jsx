import { Check, MonitorPlay, Users, Calendar, Sparkles } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { LINKS } from "../constants/links";
import { PageMeta } from "../components/PageMeta";

export default function FoundationsTrail() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Foundations Trail | 12-Week Salesforce Build | Transition Trails"
        description="A 12-week guided Salesforce build program. Implement a complete org for a simulated nonprofit client. Portfolio-ready. Admin cert required. Starting at $997."
        path="/programs/foundations-trail"
      />
      <section className="bg-gradient-to-br from-[#2F6B3F] via-[#2F6F7E] to-[#1E4F5C] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm" style={{ background: "rgba(127,175,198,0.15)", border: "1px solid rgba(127,175,198,0.4)", color: "#7FAFC6" }}>
              ENTRY TIER · EARN YOUR CERT · BUILD YOUR FIRST PROJECT
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Foundations Trail.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-[#7FAFC6] mb-6">
              The certification is the door. The Foundations Trail is how you prove you can walk through it.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/80 leading-[1.6] mb-8">
              You have completed your Salesforce Platform Foundations certification and are working toward your Salesforce Platform Administrator certification. The goal of Foundations Trail is to earn that certification. The capstone project is aligned to the 9 Salesforce Admin exam domains — working through it reinforces exactly what you need to know for the exam. Build With Me videos guide you through each build step so you develop both the practical skill and the exam confidence to pass.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: "rgba(127,175,198,0.15)", border: "1px solid rgba(127,175,198,0.4)" }}>
              <Check className="w-5 h-5 shrink-0" style={{ color: "#7FAFC6" }} />
              <span className="font-['Open_Sans'] text-sm font-semibold" style={{ color: "#7FAFC6" }}>Prerequisite: Salesforce Platform Foundations certification completed · Salesforce Platform Administrator certification in progress</span>
            </div>
          </div>

          <div className="w-full md:w-[380px] bg-white rounded-2xl p-8 shadow-xl shrink-0">
            <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-1">$997 <span className="text-[18px] font-medium text-[#4A4F4D]">one-time</span></div>
            <div className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] mb-4">Or 3 × $367/mo ($1,101 total)</div>

            <div className="bg-[#F5F5F4] border border-[#E2E4E1] rounded-lg px-4 py-3 mb-5">
              <div className="font-['Open_Sans'] font-semibold text-[12px] text-[#8C8882] mb-1">Scholarship — Coming Soon</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#8C8882] leading-[1.55]">Need-based scholarship funding is in development. Check back for updates or <a href="/contact" className="underline hover:text-[#4A4F4D]">contact us</a> to learn more.</div>
            </div>

            <div className="h-px bg-[#E2E4E1] w-full mb-5" />

            <ul className="space-y-2 mb-6">
              {[
                "12 weeks · 3 Sprints × 4 weeks",
                "Build With Me videos + AI-assisted learning",
                "Weekly Office Hours included",
                "2 private coaching sessions",
                "Structured capstone project",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#2F6F7E]" />
                  <span className="font-['Open_Sans'] text-[13px] text-[#2A2E2C]">{item}</span>
                </li>
              ))}
            </ul>

            <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-[#7FAFC6] hover:!bg-[#6A9DB5] !text-[#1A2E38]" size="lg">
              Join the Waitlist
            </CTAButton>
            <p className="text-center font-['Open_Sans'] text-[11px] text-[#8A9A9A] mt-3">
              ⚙ Enrollment form coming soon — waitlist opens cohort when ready
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20 px-5 border-b border-[#E2E4E1]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-4">What's Included</h2>
            <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] max-w-2xl mx-auto">
              Everything you need to complete your first end-to-end Salesforce implementation in a safe environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 flex gap-5">
              <MonitorPlay className="w-8 h-8 text-[#2F6B3F] shrink-0" />
              <div>
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Build With Me Videos</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                  Step-by-step guidance on how to implement each feature. Watch the architect do it, then replicate the pattern.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 flex gap-5">
              <Sparkles className="w-8 h-8 text-[#2F6B3F] shrink-0" />
              <div>
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">AI-Assisted Learning Tools</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                  AI-assisted learning support to help you work through the material and stay unblocked throughout the 12 weeks.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 flex gap-5">
              <Users className="w-8 h-8 text-[#2F6B3F] shrink-0" />
              <div>
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Weekly Office Hours</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                  Live weekly sessions with Transition Trails architects to review work and ask questions.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-[#E2E4E1] rounded-xl p-8 flex gap-5">
              <Calendar className="w-8 h-8 text-[#2F6B3F] shrink-0" />
              <div>
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">2 Private Coaching Sessions</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                  1-on-1 time to review your capstone build and ensure you're developing the right technical habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="font-['Open_Sans'] font-semibold text-[12px] tracking-[2px] uppercase text-[#2F6B3F] mb-4">THE CAPSTONE</div>
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-6">The Structured Capstone Project</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] mb-6">
              You won't just be doing platform modules. You'll be building out a complete org through a structured capstone project aligned to the 9 Salesforce Admin exam domains — working through it reinforces exactly what you need to know for the exam.
            </p>
            <ul className="space-y-4 font-['Open_Sans'] text-[15px] text-[#4A4F4D]">
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5" /> <strong>Build WITH guidance:</strong> In Foundations Trail, Build With Me videos guide you through each build step — you develop both the practical skill and the exam confidence to pass.</li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5" /> <strong>End-to-end:</strong> From discovery documentation to security models, flows, and final dashboards.</li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5" /> <strong>Guided Trail uses the same capstone — independently:</strong> In Guided Trail, learners solve the same project with no step-by-step guidance. Guided Trail proves you can do the work on your own.</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 bg-[#FAFAF7] rounded-2xl p-10 border border-[#E2E4E1] text-center">
            <h3 className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C] mb-4">Ready to start building?</h3>
            <p className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-8">
              Foundations Trail is self-paced but structured over 12 weeks. Enroll today and get immediate access to Week 1.
            </p>
            <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-[#2F6B3F] hover:!bg-[#1E4A2A]">
              Join the Waitlist
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
