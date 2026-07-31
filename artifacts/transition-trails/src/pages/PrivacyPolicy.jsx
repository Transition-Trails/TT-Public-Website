import { PageMeta } from "../components/PageMeta";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Privacy Policy | Transition Trails"
        description="How Transition Trails collects, uses, and protects your personal information. We do not sell your data."
        path="/privacy-policy"
      />

      <section className="bg-charcoal pt-24 pb-16 px-5">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-['Poppins'] font-bold text-[40px] md:text-[48px] text-white leading-tight">
            Privacy Policy
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
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Who We Are</h2>
              <p>
                Transition Trails is a 501(c)(3) nonprofit organization (EIN: 88-2746412) headquartered in Dallas, Texas. Our mailing address is 1228 Hollywood Ave, Dallas, TX 75208. We operate the website at transitiontrails.org and deliver Salesforce career training programs and nonprofit technology support services.
              </p>
              <p className="mt-4">
                For privacy questions, contact us at:{" "}
                <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline font-semibold">
                  hello@transitiontrails.org
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">What Information We Collect</h2>
              <p>We collect personal information in the following ways:</p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong className="text-charcoal">Program enrollment and waitlist forms:</strong> When you complete a JotForm submission to join a program waitlist, book a free assessment, or request information, JotForm collects your name, email address, and any other information you provide in the form. This information is transmitted to us via JotForm.
                </li>
                <li>
                  <strong className="text-charcoal">Direct email contact:</strong> When you email us at hello@transitiontrails.org or kim@transitiontrails.org, we receive your name, email address, and message content.
                </li>
                <li>
                  <strong className="text-charcoal">Website analytics:</strong> We use Google Analytics 4 (GA4) to collect anonymized usage data including pages visited, time on page, and general geographic region. This data does not identify you personally and is governed by Google's Privacy Policy.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Respond to your program inquiries and enrollment requests</li>
                <li>Communicate about program availability, cohort openings, and waitlist status</li>
                <li>Send updates and newsletters you have explicitly opted into (via our Substack publications)</li>
                <li>Coordinate nonprofit assessment and Digital Compass membership services</li>
                <li>Improve our website content and user experience through aggregate analytics data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">We Do Not Sell Your Data</h2>
              <p>
                Transition Trails does not sell, rent, trade, or otherwise transfer your personal information to third parties for their marketing purposes. We do not share your information with advertisers.
              </p>
              <div className="mt-5 rounded-xl p-6 bg-green-100 border-l-[5px] border-l-trail-green">
                <p className="font-bold text-charcoal">
                  Transition Trails does not sell, rent, share, or trade your personal information with any third party for marketing, advertising, or commercial purposes. Ever.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Third-Party Services</h2>
              <p>We use the following third-party services that have their own privacy policies:</p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong className="text-charcoal">JotForm:</strong> Our program enrollment, waitlist, and assessment forms are hosted by JotForm, Inc. Data submitted through these forms is subject to{" "}
                  <a href="https://www.jotform.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-trail-green hover:underline">JotForm's Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-charcoal">Google Analytics:</strong> We use GA4 to understand how visitors use our site. Google's data practices are governed by{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-trail-green hover:underline">Google's Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-charcoal">Substack:</strong> Our newsletter publications are hosted on Substack. Substack's data practices are governed by{" "}
                  <a href="https://substack.com/privacy" target="_blank" rel="noopener noreferrer" className="text-trail-green hover:underline">Substack's Privacy Policy</a>.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Data Retention</h2>
              <p>
                We retain your contact information for as long as necessary to communicate with you about programs and services, or until you ask us to remove it. You may request deletion of your information at any time by emailing{" "}
                <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline font-semibold">hello@transitiontrails.org</a>.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of any communications at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline font-semibold">hello@transitiontrails.org</a>.
              </p>
            </div>

            <div>
              <h2 className="font-['Poppins'] font-bold text-[22px] text-charcoal mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised date. Continued use of our website after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-trail-light border border-warm-gray rounded-xl p-6">
              <p className="font-['Open_Sans'] text-[15px] text-slate">
                <strong className="text-charcoal">Questions?</strong> Email us at{" "}
                <a href="mailto:hello@transitiontrails.org" className="text-trail-green hover:underline font-semibold">hello@transitiontrails.org</a>
                . We're a small team and we'll respond personally.
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
