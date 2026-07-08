import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import ttLogoWhite from "../assets/TT_Stacked_White_NoTag.png";

const menuItemClass =
  "block px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F] whitespace-nowrap focus:outline-none focus:bg-[#FAFAF7] focus:text-[#2F6B3F]";
const menuItemHighlightClass =
  "block px-4 py-3 text-sm font-['Open_Sans'] font-semibold text-[#2F6B3F] hover:bg-[#FAFAF7] whitespace-nowrap focus:outline-none focus:bg-[#FAFAF7]";
const menuItemAmberClass =
  "block px-4 py-3 text-sm font-['Open_Sans'] font-semibold text-[#D4890A] hover:bg-[#FAFAF7] whitespace-nowrap focus:outline-none focus:bg-[#FAFAF7]";

const Divider = () => <div className="h-px bg-[#E2E4E1] my-1" role="separator" />;

export function Nav() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const isProgramsActive =
    location.startsWith("/programs") || location === "/scholarships" || location === "/coaches";
  const isDcActive =
    location === "/nonprofit-assessment" || location === "/programs/digital-compass";
  const isAboutActive =
    location === "/about" || location === "/about/team" || location === "/impact";
  const isGetInvolvedActive =
    location === "/donate" || location === "/volunteer" || location === "/board" ||
    location === "/board-application" || location === "/waitlist" ||
    location === "/scholarships" || location === "/coaches";
  const isResourcesActive =
    location === "/coaching" || location === "/consulting" ||
    location.startsWith("/partners") || location === "/expedition";

  const handleBlur = (setter) => (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setter(false);
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setIsAboutOpen(false);
    setIsGetInvolvedOpen(false);
    setIsResourcesOpen(false);
  };

  const desktopBtnClass = (active) =>
    `font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1 h-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm ${
      active ? "text-white" : "text-white/70 hover:text-white"
    }`;

  return (
    <nav
      className="bg-[#2F6F7E] h-[80px] sticky top-0 z-[200] w-full border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] h-full mx-auto px-5 md:px-10 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="z-50 flex items-center">
          <img src={ttLogoWhite} alt="Transition Trails" style={{ height: "48px", width: "auto" }} />
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-6 h-full">

          {/* Programs */}
          <div className="relative h-full flex items-center" onBlur={handleBlur(setIsProgramsOpen)}>
            <button
              className={desktopBtnClass(isProgramsActive)}
              aria-haspopup="true"
              aria-expanded={isProgramsOpen}
              aria-controls="programs-menu"
              onClick={() => setIsProgramsOpen((v) => !v)}
              onKeyDown={(e) => { if (e.key === "Escape") setIsProgramsOpen(false); }}
            >
              Programs
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {isProgramsOpen && (
              <div id="programs-menu" role="menu" aria-label="Programs menu"
                className="absolute top-[80px] left-0 w-64 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 z-50">
                <Link href="/programs/explorers-trail" role="menuitem" className={menuItemClass} onClick={() => setIsProgramsOpen(false)}>Explorer's Trail</Link>
                <Link href="/programs/foundations-trail" role="menuitem" className={menuItemClass} onClick={() => setIsProgramsOpen(false)}>Foundations Trail</Link>
                <Link href="/programs/guided-trail" role="menuitem"
                  className="flex items-center justify-between px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F] focus:outline-none focus:bg-[#FAFAF7]"
                  onClick={() => setIsProgramsOpen(false)}>
                  <span>Guided Trail</span>
                  <span className="text-[9px] font-bold bg-[#F5A623]/20 text-[#D4890A] px-2 py-0.5 rounded uppercase">Most Popular</span>
                </Link>
                <Link href="/programs/trail-of-mastery" role="menuitem" className={menuItemClass} onClick={() => setIsProgramsOpen(false)}>Trail of Mastery</Link>
                <Divider />
                <Link href="/programs/digital-compass" role="menuitem" className={menuItemClass} onClick={() => setIsProgramsOpen(false)}>Digital Compass (Nonprofits)</Link>
                <Divider />
                <Link href="/scholarships" role="menuitem" className={menuItemHighlightClass} onClick={() => setIsProgramsOpen(false)}>🏅 Trail Forward Scholarship</Link>
                <Link href="/coaches" role="menuitem" className={menuItemHighlightClass} onClick={() => setIsProgramsOpen(false)}>🎓 Become a Coach</Link>
                <Divider />
                <Link href="/waitlist" role="menuitem" className={menuItemAmberClass} onClick={() => setIsProgramsOpen(false)}>Join the Waitlist →</Link>
              </div>
            )}
          </div>

          {/* For Nonprofits — direct link */}
          <Link href="/nonprofit-assessment" className={desktopBtnClass(isDcActive)}>
            For Nonprofits
          </Link>

          {/* About */}
          <div className="relative h-full flex items-center" onBlur={handleBlur(setIsAboutOpen)}>
            <button
              className={desktopBtnClass(isAboutActive)}
              aria-haspopup="true"
              aria-expanded={isAboutOpen}
              aria-controls="about-menu"
              onClick={() => setIsAboutOpen((v) => !v)}
              onKeyDown={(e) => { if (e.key === "Escape") setIsAboutOpen(false); }}
            >
              About
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {isAboutOpen && (
              <div id="about-menu" role="menu" aria-label="About menu"
                className="absolute top-[80px] left-1/2 -translate-x-1/2 w-48 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 z-50">
                <Link href="/about" role="menuitem" className={menuItemClass} onClick={() => setIsAboutOpen(false)}>Our Story</Link>
                <Link href="/about/team" role="menuitem" className={menuItemClass} onClick={() => setIsAboutOpen(false)}>Meet the Team</Link>
                <Link href="/impact" role="menuitem" className={menuItemClass} onClick={() => setIsAboutOpen(false)}>Our Impact</Link>
              </div>
            )}
          </div>

          {/* Get Involved */}
          <div className="relative h-full flex items-center" onBlur={handleBlur(setIsGetInvolvedOpen)}>
            <button
              className={desktopBtnClass(isGetInvolvedActive)}
              aria-haspopup="true"
              aria-expanded={isGetInvolvedOpen}
              aria-controls="get-involved-menu"
              onClick={() => setIsGetInvolvedOpen((v) => !v)}
              onKeyDown={(e) => { if (e.key === "Escape") setIsGetInvolvedOpen(false); }}
            >
              Get Involved
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isGetInvolvedOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {isGetInvolvedOpen && (
              <div id="get-involved-menu" role="menu" aria-label="Get Involved menu"
                className="absolute top-[80px] left-1/2 -translate-x-1/2 w-52 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 z-50">
                <Link href="/waitlist" role="menuitem" className={menuItemAmberClass} onClick={() => setIsGetInvolvedOpen(false)}>Join the Waitlist →</Link>
                <Divider />
                <Link href="/scholarships" role="menuitem" className={menuItemHighlightClass} onClick={() => setIsGetInvolvedOpen(false)}>🏅 Trail Forward Scholarship</Link>
                <Link href="/coaches" role="menuitem" className={menuItemHighlightClass} onClick={() => setIsGetInvolvedOpen(false)}>🎓 Become a Coach</Link>
                <Divider />
                <Link href="/donate" role="menuitem" className={menuItemClass} onClick={() => setIsGetInvolvedOpen(false)}>❤️ Donate</Link>
                <Link href="/volunteer" role="menuitem" className={menuItemClass} onClick={() => setIsGetInvolvedOpen(false)}>🤝 Volunteer</Link>
                <Link href="/board" role="menuitem" className={menuItemClass} onClick={() => setIsGetInvolvedOpen(false)}>🏛️ Join Our Board</Link>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="relative h-full flex items-center" onBlur={handleBlur(setIsResourcesOpen)}>
            <button
              className={desktopBtnClass(isResourcesActive)}
              aria-haspopup="true"
              aria-expanded={isResourcesOpen}
              aria-controls="resources-menu"
              onClick={() => setIsResourcesOpen((v) => !v)}
              onKeyDown={(e) => { if (e.key === "Escape") setIsResourcesOpen(false); }}
            >
              Resources
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {isResourcesOpen && (
              <div id="resources-menu" role="menu" aria-label="Resources menu"
                className="absolute top-[80px] right-0 w-52 bg-white rounded-xl shadow-lg border border-[#E2E4E1] py-2 z-50">
                <Link href="/coaching" role="menuitem" className={menuItemClass} onClick={() => setIsResourcesOpen(false)}>Individual Coaching</Link>
                <Link href="/consulting" role="menuitem" className={menuItemClass} onClick={() => setIsResourcesOpen(false)}>Consulting</Link>
                <Divider />
                <Link href="/partners/recruiters" role="menuitem" className={menuItemClass} onClick={() => setIsResourcesOpen(false)}>For Recruiters</Link>
                <Link href="/partners/employers" role="menuitem" className={menuItemClass} onClick={() => setIsResourcesOpen(false)}>For Employers</Link>
                <Divider />
                <Link href="/expedition" role="menuitem"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-['Open_Sans'] text-[#4A4F4D] hover:bg-[#FAFAF7] hover:text-[#2F6B3F] whitespace-nowrap focus:outline-none focus:bg-[#FAFAF7]"
                  onClick={() => setIsResourcesOpen(false)}>
                  <span style={{ color: "rgba(245,166,35,0.85)", fontSize: "7px", lineHeight: 1 }}>●</span>
                  The Expedition
                </Link>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link href="/waitlist"
            className="bg-[#F5A623] hover:bg-[#D4890A] text-[#2A2E2C] font-['Open_Sans'] font-semibold text-[15px] h-[44px] px-6 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Join the Waitlist
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="md:hidden text-white p-2 -mr-2 z-50 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div id="mobile-menu"
        className={`fixed inset-0 bg-[#2F6F7E] pt-[80px] px-5 flex flex-col md:hidden transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden={!isMobileMenuOpen}>
        <div className="flex flex-col gap-6 pt-6 overflow-y-auto pb-20">

          {/* Programs */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsProgramsOpen(!isProgramsOpen)} aria-expanded={isProgramsOpen}>
              Programs
              <ChevronDown className={`w-5 h-5 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isProgramsOpen ? "mt-4 max-h-[560px]" : "max-h-0"}`}>
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
              <Link href="/waitlist" onClick={closeMenu} className="text-[#F5A623] font-['Open_Sans'] font-semibold text-base py-1">Join the Waitlist →</Link>
            </div>
          </div>

          {/* For Nonprofits */}
          <Link href="/nonprofit-assessment" onClick={closeMenu} className="font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10">
            For Nonprofits
          </Link>

          {/* About */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsAboutOpen(!isAboutOpen)} aria-expanded={isAboutOpen}>
              About
              <ChevronDown className={`w-5 h-5 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isAboutOpen ? "mt-4 max-h-[180px]" : "max-h-0"}`}>
              <Link href="/about" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Our Story</Link>
              <Link href="/about/team" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Meet the Team</Link>
              <Link href="/impact" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Our Impact</Link>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)} aria-expanded={isGetInvolvedOpen}>
              Get Involved
              <ChevronDown className={`w-5 h-5 transition-transform ${isGetInvolvedOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isGetInvolvedOpen ? "mt-4 max-h-[320px]" : "max-h-0"}`}>
              <Link href="/waitlist" onClick={closeMenu} className="text-[#F5A623] font-['Open_Sans'] font-semibold text-base py-1">Join the Waitlist →</Link>
              <Link href="/scholarships" onClick={closeMenu} className="text-[#6BBF85] font-['Open_Sans'] font-semibold text-base py-1">🏅 Trail Forward Scholarship</Link>
              <Link href="/coaches" onClick={closeMenu} className="text-[#6BBF85] font-['Open_Sans'] font-semibold text-base py-1">🎓 Become a Coach</Link>
              <div className="h-px bg-white/10 my-1" />
              <Link href="/donate" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">❤️ Donate</Link>
              <Link href="/volunteer" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">🤝 Volunteer</Link>
              <Link href="/board" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">🏛️ Join Our Board</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-semibold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)} aria-expanded={isResourcesOpen}>
              Resources
              <ChevronDown className={`w-5 h-5 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${isResourcesOpen ? "mt-4 max-h-[280px]" : "max-h-0"}`}>
              <Link href="/coaching" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Individual Coaching</Link>
              <Link href="/consulting" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">Consulting</Link>
              <div className="h-px bg-white/10 my-1" />
              <Link href="/partners/recruiters" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">For Recruiters</Link>
              <Link href="/partners/employers" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">For Employers</Link>
              <div className="h-px bg-white/10 my-1" />
              <Link href="/expedition" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-base py-1">The Expedition</Link>
            </div>
          </div>

          {/* CTA */}
          <Link href="/waitlist" onClick={closeMenu}
            className="mt-4 bg-[#F5A623] text-[#2A2E2C] font-['Open_Sans'] font-semibold text-[16px] h-[56px] rounded-lg flex items-center justify-center w-full">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
