import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import ttLogoWhite from "../assets/TT_Stacked_White_NoTag.png";

export function Nav() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const isActive = (path) => location === path;
  const isProgramsActive = location.startsWith("/programs") && location !== "/programs/digital-compass";
  const isDcActive = location === "/programs/digital-compass";
  const isPartnersActive = location.startsWith("/partners");
  const isServicesActive = location === "/coaching" || location === "/consulting";
  const isSupportActive = location === "/donate" || location === "/volunteer" || location === "/board";

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setIsPartnersOpen(false);
    setIsServicesOpen(false);
    setIsSupportOpen(false);
  };

  return (
    <nav className="bg-[#2F6F7E] h-[80px] sticky top-0 z-[200] w-full border-b border-white/10">
      <div className="max-w-[1280px] h-full mx-auto px-5 md:px-10 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="z-50 flex items-center">
          <img
            src={ttLogoWhite}
            alt="Transition Trails"
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <div className="flex items-center gap-8 h-full">
            {/* Programs Dropdown */}
            <div className="relative h-full flex items-center group">
              <Link 
                href="/programs" 
                className={`font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1 transition-colors ${isProgramsActive ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Programs <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </Link>
              
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/programs/explorers-trail" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">Explorer's Trail</Link>
                <Link href="/programs/foundations-trail" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">Foundations Trail</Link>
                <Link href="/programs/guided-trail" className="flex items-center justify-between px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">
                  <span>Guided Trail</span>
                  <span className="text-[9px] font-bold bg-[#F5A623]/20 text-[#D4890A] px-2 py-0.5 rounded uppercase">Most Popular</span>
                </Link>
                <Link href="/programs/trail-of-mastery" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">Trail of Mastery</Link>
                <div className="h-px bg-[#E2E4E1] my-1" />
                <Link href="/programs/digital-compass" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">Digital Compass (Nonprofits)</Link>
                <div className="h-px bg-[#E2E4E1] my-1" />
                <Link href="/scholarships" className="block px-4 py-3 text-sm font-['Open_Sans'] font-semibold text-[#2F6B3F] hover:bg-[#FAFAF7]">🏅 Trail Forward Scholarship</Link>
                <Link href="/coaches" className="block px-4 py-3 text-sm font-['Open_Sans'] font-semibold text-[#2F6B3F] hover:bg-[#FAFAF7]">🎓 Become a Coach</Link>
                <div className="h-px bg-[#E2E4E1] my-1" />
                <Link href="/nonprofit-assessment" className="block px-4 py-3 text-sm font-['Open_Sans'] font-semibold text-[#2F6F7E] hover:bg-[#FAFAF7]">Free Nonprofit Assessment →</Link>
                <div className="h-px bg-[#E2E4E1] my-1" />
                <Link href="/waitlist" className="block px-4 py-3 text-sm font-['Open_Sans'] font-semibold text-[#D4890A] hover:bg-[#FAFAF7]">Join the Waitlist →</Link>
              </div>
            </div>

            <Link href="/about" className={`font-['Open_Sans'] font-semibold text-[15px] transition-colors ${isActive("/about") ? "text-white" : "text-white/70 hover:text-white"}`}>About</Link>
            <Link href="/programs/digital-compass" className={`font-['Open_Sans'] font-semibold text-[15px] transition-colors ${isDcActive ? "text-white" : "text-white/70 hover:text-white"}`}>For Nonprofits</Link>

            {/* Partners Dropdown */}
            <div className="relative h-full flex items-center group">
              <button className={`font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1 transition-colors ${isPartnersActive ? "text-white" : "text-white/70 hover:text-white"}`}>
                Partners <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/partners/recruiters" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">For Recruiters</Link>
                <Link href="/partners/employers" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">For Employers</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative h-full flex items-center group">
              <button className={`font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1 transition-colors ${isServicesActive ? "text-white" : "text-white/70 hover:text-white"}`}>
                Services <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/coaching" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">Individual Coaching</Link>
                <Link href="/consulting" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">Consulting</Link>
              </div>
            </div>

            <Link href="/expedition" className={`font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1.5 transition-colors ${isActive("/expedition") ? "text-white" : "text-white/70 hover:text-white"}`}>
              <span style={{ color: "rgba(245,166,35,0.85)", fontSize: "7px", lineHeight: 1 }}>●</span>
              The Expedition
            </Link>
            <Link href="/blog" className={`font-['Open_Sans'] font-semibold text-[15px] transition-colors ${isActive("/blog") ? "text-white" : "text-white/70 hover:text-white"}`}>Blog</Link>

            {/* Support Dropdown */}
            <div className="relative h-full flex items-center group">
              <button className={`font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1 transition-colors ${isSupportActive ? "text-white" : "text-white/70 hover:text-white"}`}>
                Support <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/donate" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">❤️ Donate</Link>
                <Link href="/volunteer" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">🤝 Volunteer</Link>
                <Link href="/board" className="block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F]">🏛️ Join Our Board</Link>
              </div>
            </div>
          </div>

          <Link
            href="/waitlist"
            className="bg-[#F5A623] hover:bg-[#D4890A] text-[#2A2E2C] font-['Open_Sans'] font-semibold text-[15px] h-[44px] px-6 rounded-lg flex items-center justify-center transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 -mr-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#2F6F7E] pt-[80px] px-5 flex flex-col md:hidden transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-col gap-6 pt-6 overflow-y-auto pb-20">
          <div>
            <button 
              className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
            >
              Programs
              <ChevronDown className={`w-5 h-5 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isProgramsOpen ? "mt-4 max-h-[480px]" : "max-h-0"}`}>
              <Link href="/programs" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">All Programs</Link>
              <Link href="/programs/explorers-trail" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Explorer's Trail</Link>
              <Link href="/programs/foundations-trail" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Foundations Trail</Link>
              <Link href="/programs/guided-trail" onClick={closeMenu} className="text-[#F5A623] font-['Open_Sans'] text-base py-1 flex items-center gap-2">
                Guided Trail <span className="text-[10px] uppercase font-bold bg-[#F5A623]/20 px-2 py-0.5 rounded">Popular</span>
              </Link>
              <Link href="/programs/trail-of-mastery" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Trail of Mastery</Link>
              <Link href="/programs/digital-compass" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Digital Compass</Link>
              <div className="h-px bg-white/10 my-1" />
              <Link href="/scholarships" onClick={closeMenu} className="text-[#6BBF85] font-['Open_Sans'] font-semibold text-base py-1">🏅 Trail Forward Scholarship</Link>
              <Link href="/coaches" onClick={closeMenu} className="text-[#6BBF85] font-['Open_Sans'] font-semibold text-base py-1">🎓 Become a Coach</Link>
              <Link href="/nonprofit-assessment" onClick={closeMenu} className="text-[#7FCEE0] font-['Open_Sans'] font-semibold text-base py-1">Free Nonprofit Assessment →</Link>
              <Link href="/waitlist" onClick={closeMenu} className="text-[#F5A623] font-['Open_Sans'] font-semibold text-base py-1">Join the Waitlist →</Link>
            </div>
          </div>

          <Link href="/about" onClick={closeMenu} className="font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10">About</Link>
          <Link href="/programs/digital-compass" onClick={closeMenu} className="font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10">For Nonprofits</Link>

          <div>
            <button
              className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsPartnersOpen(!isPartnersOpen)}
            >
              Partners
              <ChevronDown className={`w-5 h-5 transition-transform ${isPartnersOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isPartnersOpen ? "mt-4 max-h-[200px]" : "max-h-0"}`}>
              <Link href="/partners/recruiters" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">For Recruiters</Link>
              <Link href="/partners/employers" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">For Employers</Link>
            </div>
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isServicesOpen ? "mt-4 max-h-[200px]" : "max-h-0"}`}>
              <Link href="/coaching" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Individual Coaching</Link>
              <Link href="/consulting" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Consulting</Link>
            </div>
          </div>

          <Link href="/expedition" onClick={closeMenu} className="font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10 flex items-center gap-2">
            <span style={{ color: "rgba(245,166,35,0.85)", fontSize: "8px" }}>●</span>
            The Expedition
          </Link>
          <Link href="/blog" onClick={closeMenu} className="font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10">Blog</Link>

          <div>
            <button
              className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsSupportOpen(!isSupportOpen)}
            >
              Support
              <ChevronDown className={`w-5 h-5 transition-transform ${isSupportOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isSupportOpen ? "mt-4 max-h-[200px]" : "max-h-0"}`}>
              <Link href="/donate" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">❤️ Donate</Link>
              <Link href="/volunteer" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">🤝 Volunteer</Link>
              <Link href="/board" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">🏛️ Join Our Board</Link>
            </div>
          </div>

          <Link
            href="/waitlist"
            onClick={closeMenu}
            className="mt-4 bg-[#F5A623] text-[#2A2E2C] font-['Open_Sans'] font-semibold text-[16px] h-[56px] rounded-lg flex items-center justify-center w-full"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
