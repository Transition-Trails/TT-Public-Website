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
      <section className="bg-gradient-to-br from-[#1E4A2A] to-[#2F6B3F] pt-24 pb-20 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block bg-white/10 border border-white/20 text-white font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 backdrop-blur-sm">
              ENTRY TIER · 12 WEEKS · GUIDED BUILD
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[56px] text-white tracking-[-1.5px] leading-[1.15] mb-6">
              Foundations Trail.
            </h1>
            <p className="font-['Poppins'] font-medium text-[24px] text-[#E6F3EA] mb-6">
              Build the right habits before you build the real thing.
            </p>
            <p className="font-['Open_Sans'] text-[18px] text-white/80 leading-[1.6] mb-8">
              A 12-week guided build where you implement Salesforce alongside our experts. You watch how we do it, then you do it yourself in your own org.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg border border-white/20">
              <Check className="w-5 h-5 text-[#F5A623]" />
              <span className="font-['Open_Sans'] text-sm text-white font-semibold">Prerequisite: Platform Foundations cert (or in progress)</span>
            </div>
          </div>
          
          <div className="w-full md:w-[380px] bg-white rounded-2xl p-8 shadow-xl shrink-0">
            <div className="font-['Poppins'] font-bold text-[40px] text-[#2A2E2C] mb-2">$997</div>
            <div className="font-['Open_Sans'] text-[15px] text-[#4A4F4D] mb-6">or 3 × $367 payment plan</div>
            
            <div className="h-px bg-[#E2E4E1] w-full mb-6" />
            
            <div className="bg-[#E6F3EA] rounded-lg p-4 mb-6">
              <div className="font-['Poppins'] font-semibold text-[14px] text-[#1E4A2A] mb-1">Scholarship Rate</div>
              <div className="font-['Poppins'] font-bold text-[24px] text-[#2F6B3F]">$497</div>
              <div className="font-['Open_Sans'] text-[12px] text-[#2F6B3F]/80">Available based on need</div>
            </div>

            <CTAButton href={LINKS.waitlist} variant="dark" className="w-full !bg-[#2F6B3F] hover:!bg-[#1E4A2A]" size="lg">
              Join the Waitlist
            </CTAButton>
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
                <h3 className="font-['Poppins'] font-bold text-[18px] text-[#2A2E2C] mb-2">Penny AI Access</h3>
                <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.6]">
                  Our custom Salesforce-trained AI assistant that helps unblock you when you're stuck on a configuration.
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
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#2A2E2C] mb-6">The Horizon Community Hub Build</h2>
            <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D] leading-[1.65] mb-6">
              You won't just be doing platform modules. You'll be building out a complete org for Horizon Community Hub — a simulated nonprofit with real-world complexity.
            </p>
            <ul className="space-y-4 font-['Open_Sans'] text-[15px] text-[#4A4F4D]">
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5" /> <strong>Guided, not live:</strong> This is the exact same org our Guided Trail learners build for live clients, but in a safe sandbox environment.</li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5" /> <strong>End-to-end:</strong> From discovery documentation to security models, flows, and final dashboards.</li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5" /> <strong>Portfolio ready:</strong> Complete the 12 weeks and you have a demonstrable build to show employers.</li>
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
