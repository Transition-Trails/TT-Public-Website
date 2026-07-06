import { Link } from "wouter";
import { LINKS } from "../constants/links";

export function Footer() {
  return (
    <footer className="bg-[#2F6F7E] pt-16 px-5 md:px-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="max-w-xs">
          {/* TODO: Swap to TT_Stacked_White_NoTag.png when available */}
          <Link href="/" className="font-['Poppins'] font-bold text-xl text-white block mb-4">
            Transition Trails
          </Link>
          <p className="font-['Open_Sans'] text-sm text-white/70">
            Empowering nonprofits and building digital careers — Together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full md:w-auto">
          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/programs" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/programs/digital-compass" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">For Nonprofits</Link></li>
              <li><Link href="/donate" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Our Trails
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/programs/explorers-trail" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Explorer's Trail <span className="opacity-60 text-xs ml-1">$47/mo</span></Link></li>
              <li><Link href="/programs/foundations-trail" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Foundations Trail <span className="opacity-60 text-xs ml-1">$997</span></Link></li>
              <li><Link href="/programs/guided-trail" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Guided Trail <span className="opacity-60 text-xs ml-1">$1,497</span></Link></li>
              <li><Link href="/programs/trail-of-mastery" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Trail of Mastery <span className="opacity-60 text-xs ml-1">$1,997</span></Link></li>
              <li><Link href="/programs/digital-compass" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Digital Compass <span className="opacity-60 text-xs ml-1">$149/mo</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Open_Sans'] font-semibold text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
              Support Our Mission
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/donate" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Donate</Link></li>
              <li><a href={LINKS.volunteer} target="_blank" rel="noopener noreferrer" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Volunteer</a></li>
              <li><Link href="/contact" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><a href={LINKS.angelaCalendar} target="_blank" rel="noopener noreferrer" className="font-['Open_Sans'] text-sm text-white/70 hover:text-white transition-colors">Schedule Time With Angela</a></li>
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
