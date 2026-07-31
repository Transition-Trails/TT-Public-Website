import { PageMeta } from "../components/PageMeta";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Terms of Service | Transition Trails"
        description="Terms and conditions governing use of the Transition Trails website and programs. Operated by Transition Trails, EIN 88-2746412."
        path="/terms-of-service"
      />

      <section className="bg-charcoal pt-24 pb-16 px-5">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-['Poppins'] font-bold text-[40px] md:text-[48px] text-white leading-tight">
            Terms of Service
          </h1>
          <p className="font-['Open_Sans'] text-[16px] text-white/60 mt-4">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      <section className="bg-white flex-1 py-16 px-5">
        <div className="max-w-[800px] mx-auto">
          <div className="font-['Open_Sans'] text-[16px] text-slate leading-[1.75] space-y-10">

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">About Transition Trails</h2>
              <p>
                This website is operated by Transition Trails, a 501(c)(3) nonprofit organization incorporated in Texas (EIN: 88-2746412), effective May 15, 2022. Our principal office is located in Dallas, Texas. By accessing or using this website, you agree to these Terms of Service.
              </p>
              <p className="mt-4">
                For questions about these terms, contact us at:{" "}
                <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline font-semibold">
                  hello@transitiontrails.org
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Use of This Website</h2>
              <p>
                You may use this website for lawful purposes only. You agree not to use the site in any way that:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Violates any applicable federal, state, or local law or regulation</li>
                <li>Infringes on the intellectual property rights of Transition Trails or any third party</li>
                <li>Transmits spam, malware, or any form of harmful content</li>
                <li>Attempts to gain unauthorized access to any part of the website or its systems</li>
              </ul>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Program Pricing and Availability</h2>
              <p>
                All program pricing displayed on this website — including Explorer's Trail, Foundations Trail, Guided Trail, Trail of Mastery, and Digital Compass — is subject to change without notice. Scholarship availability is limited and determined at our discretion. Cohort availability depends on enrollment and organizational capacity.
              </p>
              <p className="mt-4">
                Joining the program waitlist does not guarantee enrollment in a cohort. We will contact waitlisted individuals when seats become available. Program terms, pricing, and curriculum content may be updated as we develop and refine our offerings.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Form Submissions and Third-Party Services</h2>
              <p>
                Program enrollment waitlist forms, assessment requests, and other form submissions on this site are handled by JotForm, Inc., a third-party service provider. By submitting a form on our site, you acknowledge that your submission is subject to{" "}
                <a href="https://www.jotform.com/terms/" target="_blank" rel="noopener noreferrer" className="text-trail-green hover:underline">JotForm's Terms of Service</a>{" "}
                in addition to these terms.
              </p>
              <p className="mt-4">
                We are not responsible for the policies or practices of JotForm or any other third-party service linked to or from this website.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, program names ("Explorer's Trail," "Foundations Trail," "Guided Trail," "Trail of Mastery," "Digital Compass," "Trail of Mastery"), and the "Transition Trails" name and branding — is the property of Transition Trails and is protected by applicable copyright and trademark laws.
              </p>
              <p className="mt-4">
                You may share links to our content and quote brief excerpts with attribution. You may not reproduce, distribute, or use our content for commercial purposes without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Disclaimer of Warranties</h2>
              <p>
                This website and its content are provided "as is" and "as available" without warranties of any kind, express or implied. Transition Trails does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee specific outcomes from participation in our programs, including employment or salary results.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Transition Trails shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use this website or our programs. Our total liability for any claim arising out of these terms shall not exceed the amount you paid to us in the prior twelve months, or $100, whichever is greater.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">External Links</h2>
              <p>
                This website contains links to external websites, including our volunteer listing on Idealist, our newsletter on Substack, and our social media profiles on LinkedIn and Facebook. These external sites are governed by their own terms and policies. Transition Trails is not responsible for the content or practices of any external website.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of this website shall be resolved in the courts located in Dallas County, Texas.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will post the revised terms on this page with an updated date. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div className="bg-trail-light border border-warm-gray rounded-xl p-6">
              <p className="font-['Open_Sans'] text-[15px] text-slate">
                <strong className="text-charcoal">Questions about these terms?</strong> Email us at{" "}
                <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline font-semibold">hello@transitiontrails.org</a>.
              </p>
            </div>

            <div className="pt-4 border-t border-warm-gray">
              <Link href="/" className="font-['Open_Sans'] text-[14px] text-trail-green hover:underline">
                ← Back to home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
