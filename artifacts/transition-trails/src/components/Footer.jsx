import { Link } from "wouter";
import { LINKS } from "../constants/links";
import ttLogoWhite from "../assets/TT_Stacked_White_NoTag.png";

export function Footer() {
  return (
    <footer className="bg-[#2F6F7E] pt-16 px-5 md:px-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="max-w-xs">
          <Link href="/" className="block mb-4">
            <img src={ttLogoWhite} alt="Transition Trails" style={{ height: "48px", width: "auto" }} />
          </Link>
          <p className="font-['Open_Sans'] text-sm text-white/70">
            Empowering nonprofits and building digital careers — Together.
          </p>
          <p className="font-['Open_Sans'] text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
            To assist people in transitioning to the digital economy through education, mentoring and training. Our primary focus is within the Salesforce ecosystem, providing a system of online and real world education and experience.
          </p>
          <address className="font-['Open_Sans'] text-[12px] not-italic mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            1228 Hollywood Ave<br />
            Dallas, TX 75208
          </address>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 w-full md:w-auto">
          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/impact" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link href="/contact" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Programs
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/programs/explorers-trail" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Explorer's Trail</Link></li>
              <li><Link href="/programs/foundations-trail" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Foundations Trail</Link></li>
              <li><Link href="/programs/guided-trail" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Guided Trail</Link></li>
              <li><Link href="/programs/trail-of-mastery" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Trail of Mastery</Link></li>
              <li><Link href="/programs/digital-compass" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Digital Compass</Link></li>
              <li><Link href="/scholarships" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Trail Forward Scholarship</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/coaching" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Individual Coaching</Link></li>
              <li><Link href="/consulting" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Consulting</Link></li>
              <li><Link href="/nonprofit-assessment" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Free Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Partners
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/partners/recruiters" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">For Recruiters</Link></li>
              <li><Link href="/partners/employers" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">For Employers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/donate" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="/board" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Join Our Board</Link></li>
              <li><Link href="/contact" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href={LINKS.angelaCalendar} target="_blank" rel="noopener noreferrer" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Schedule time with us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Open_Sans'] text-xs text-white/50 text-center md:text-left">
            © 2026 Transition Trails · EIN: 88-2746412 · 501(c)(3) Public Charity · Founded 2020 · Dallas, TX
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="font-['Open_Sans'] text-xs text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/30 text-xs">·</span>
            <Link href="/terms-of-service" className="font-['Open_Sans'] text-xs text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
