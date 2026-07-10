import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import ttLogoWhite from "../assets/TT_Horizontal_White_600px.png";

function DropItem({ href, label, desc, variant = "default", onClick }) {
  return (
    <Link href={href} role="menuitem" onClick={onClick}
      className="group block px-5 py-3.5 hover:bg-[#FAFAF7] focus:outline-none focus:bg-[#FAFAF7] transition-colors">
      <div className={`font-['Open_Sans'] font-semibold text-[14px] mb-0.5 transition-colors ${
        variant === "accent" ? "text-[#D4890A]" : "text-[#2A2E2C] group-hover:text-[#2F6B3F]"
      }`}>{label}</div>
      {desc && <div className="font-['Open_Sans'] text-[12px] text-[#8C8882] leading-[1.4]">{desc}</div>}
    </Link>
  );
}

function Divider() {
  return <div className="h-px bg-[#E2E4E1] my-1" role="separator" />;
}

function GroupLabel({ children }) {
  return (
    <div className="font-['Open_Sans'] font-semibold text-[10px] tracking-[1.5px] uppercase text-[#A8A39D] px-5 pt-3 pb-1">
      {children}
    </div>
  );
}

export function Nav() {
  const [location] = useLocation();
  const [mobile, setMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [programsOpen, setProgramsOpen] = useState(false);
  const [nonprofitOpen, setNonprofitOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeAll = () => {
    setProgramsOpen(false);
    setNonprofitOpen(false);
    setInvolvedOpen(false);
    setAboutOpen(false);
  };

  const closeMenu = () => {
    setMobile(false);
    closeAll();
    setOpenDropdown(null);
  };

  const blurHandler = (setter) => (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setter(false);
  };

  const desktopNavClass = (active) =>
    `font-['Open_Sans'] font-semibold text-[15px] flex items-center gap-1 h-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm ${
      active ? "text-white" : "text-white/70 hover:text-white"
    }`;

  const isPrograms = location.startsWith("/programs") || location === "/scholarship-application" || location === "/scholarships";
  const isNonprofit = location === "/nonprofit-assessment" || location === "/programs/digital-compass";
  const isInvolved = location === "/waitlist" || location === "/volunteer" || location.startsWith("/partners") || location === "/board" || location === "/board-application" || location === "/donate";
  const isAbout = location === "/about" || location === "/about/team" || location === "/impact";

  const dropdownBase = "absolute top-[80px] bg-white rounded-xl shadow-xl border border-[#E2E4E1] py-2 z-50 min-w-[280px]";

  return (
    <nav className="bg-[#2F6F7E] h-[80px] sticky top-0 z-[200] w-full border-b border-white/10" aria-label="Main navigation">
      <div className="max-w-[1440px] h-full mx-auto px-5 md:px-8 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="z-50 flex items-center shrink-0">
          <img src={ttLogoWhite} alt="Transition Trails" style={{ height: "40px", width: "auto" }} />
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-1 h-full flex-1 justify-center">

          {/* Find Your Trail */}
          <Link href="/programs"
            className={`${desktopNavClass(location === "/programs" && !isPrograms)} px-3`}>
            Find Your Trail
          </Link>

          {/* Programs ↓ */}
          <div className="relative h-full flex items-center" onBlur={blurHandler(setProgramsOpen)}>
            <button className={`${desktopNavClass(isPrograms)} px-3`}
              aria-haspopup="true" aria-expanded={programsOpen} aria-controls="programs-menu"
              onClick={() => { setProgramsOpen(v => !v); setNonprofitOpen(false); setInvolvedOpen(false); setAboutOpen(false); }}
              onKeyDown={(e) => { if (e.key === "Escape") setProgramsOpen(false); }}>
              Programs
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${programsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {programsOpen && (
              <div id="programs-menu" role="menu" aria-label="Programs" className={`${dropdownBase} left-0 w-[320px]`}>
                <GroupLabel>Featured</GroupLabel>
                <DropItem href="/programs/guided-trail" label={<span className="flex items-center gap-2">Guided Trail <span className="inline-block bg-[#FEF3DC] text-[#D4890A] font-['Open_Sans'] font-bold text-[10px] tracking-[0.5px] uppercase px-1.5 py-0.5 rounded">Flagship</span></span>} desc="Our flagship program — real nonprofit clients" onClick={() => setProgramsOpen(false)} />
                <DropItem href="/scholarship-application" label="Trail Forward Scholarship" desc="Need-based funding for Guided Trail" onClick={() => setProgramsOpen(false)} />
                <Divider />
                <GroupLabel>All Programs</GroupLabel>
                <DropItem href="/programs" label="All Programs" desc="Explorer's Trail, Foundations, Guided & Trail of Mastery" onClick={() => setProgramsOpen(false)} />
                <DropItem href="/programs/digital-compass" label="Digital Compass" desc="Salesforce support & membership for nonprofits" onClick={() => setProgramsOpen(false)} />
                <Divider />
                <DropItem href="/waitlist" label="Join the Waitlist" desc="Apply for the next cohort" onClick={() => setProgramsOpen(false)} />
              </div>
            )}
          </div>

          {/* For Nonprofits ↓ */}
          <div className="relative h-full flex items-center" onBlur={blurHandler(setNonprofitOpen)}>
            <button className={`${desktopNavClass(isNonprofit)} px-3`}
              aria-haspopup="true" aria-expanded={nonprofitOpen} aria-controls="nonprofit-menu"
              onClick={() => { setNonprofitOpen(v => !v); setProgramsOpen(false); setInvolvedOpen(false); setAboutOpen(false); }}
              onKeyDown={(e) => { if (e.key === "Escape") setNonprofitOpen(false); }}>
              For Nonprofits
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${nonprofitOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {nonprofitOpen && (
              <div id="nonprofit-menu" role="menu" aria-label="For Nonprofits" className={`${dropdownBase} left-0 w-[320px]`}>
                <DropItem href="/programs/digital-compass" label="Digital Compass" desc="Salesforce support & membership for nonprofits" onClick={() => setNonprofitOpen(false)} />
                <DropItem href="/nonprofit-assessment" label="How Partnerships Work" desc="Eligibility, process, and what to expect" onClick={() => setNonprofitOpen(false)} />
                <Divider />
                <DropItem href="/nonprofit-assessment" label="Start Free Assessment →" variant="accent" onClick={() => setNonprofitOpen(false)} />
              </div>
            )}
          </div>

          {/* Get Involved ↓ */}
          <div className="relative h-full flex items-center" onBlur={blurHandler(setInvolvedOpen)}>
            <button className={`${desktopNavClass(isInvolved)} px-3`}
              aria-haspopup="true" aria-expanded={involvedOpen} aria-controls="involved-menu"
              onClick={() => { setInvolvedOpen(v => !v); setProgramsOpen(false); setNonprofitOpen(false); setAboutOpen(false); }}
              onKeyDown={(e) => { if (e.key === "Escape") setInvolvedOpen(false); }}>
              Get Involved
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${involvedOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {involvedOpen && (
              <div id="involved-menu" role="menu" aria-label="Get Involved" className={`${dropdownBase} left-0 w-[320px]`}>
                <DropItem href="/volunteer" label="Volunteer & Mentor" desc="Coaches, assistants, and nonprofit technologists" onClick={() => setInvolvedOpen(false)} />
                <DropItem href="/partners/recruiters" label="Recruiters" desc="Hire certified, project-ready Salesforce graduates" onClick={() => setInvolvedOpen(false)} />
                <DropItem href="/partners/employers" label="Employers" desc="Sponsor, upskill, or hire Salesforce talent" onClick={() => setInvolvedOpen(false)} />
                <DropItem href="/board-application" label="Board Membership" desc="Join the Transition Trails board" onClick={() => setInvolvedOpen(false)} />
                <Divider />
                <DropItem href="/donate" label="Donate / Fund a Scholarship →" variant="accent" onClick={() => setInvolvedOpen(false)} />
              </div>
            )}
          </div>

          {/* About ↓ */}
          <div className="relative h-full flex items-center" onBlur={blurHandler(setAboutOpen)}>
            <button className={`${desktopNavClass(isAbout)} px-3`}
              aria-haspopup="true" aria-expanded={aboutOpen} aria-controls="about-menu"
              onClick={() => { setAboutOpen(v => !v); setProgramsOpen(false); setNonprofitOpen(false); setInvolvedOpen(false); }}
              onKeyDown={(e) => { if (e.key === "Escape") setAboutOpen(false); }}>
              About
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${aboutOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {aboutOpen && (
              <div id="about-menu" role="menu" aria-label="About" className={`${dropdownBase} left-0 w-[240px]`}>
                <DropItem href="/about" label="Our Story" onClick={() => setAboutOpen(false)} />
                <DropItem href="/about/team" label="Meet the Team" onClick={() => setAboutOpen(false)} />
                <DropItem href="/impact" label="Vision & Impact" onClick={() => setAboutOpen(false)} />
              </div>
            )}
          </div>

          {/* Blog */}
          <Link href="/blog" className={`${desktopNavClass(location === "/blog")} px-3`}>
            Blog
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link href="/donate" className="font-['Open_Sans'] font-semibold text-[15px] text-white/75 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded">
            Donate
          </Link>
          <Link href="/waitlist"
            className="bg-[#F5A623] hover:bg-[#D4890A] text-[#2A2E2C] font-['Open_Sans'] font-bold text-[14px] h-[42px] px-5 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] whitespace-nowrap">
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 -mr-2 z-50 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls="mobile-menu">
          {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div id="mobile-menu"
        className={`fixed inset-0 bg-[#2F6F7E] pt-[80px] px-5 flex flex-col lg:hidden transition-transform duration-300 ease-in-out z-40 ${mobile ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden={!mobile}>
        <div className="flex flex-col gap-5 pt-6 overflow-y-auto pb-20">

          <Link href="/programs" onClick={closeMenu}
            className="font-['Open_Sans'] font-bold text-[18px] text-white py-2 border-b border-white/10">
            Find Your Trail
          </Link>

          {/* Programs */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-bold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setOpenDropdown(openDropdown === "programs" ? null : "programs")} aria-expanded={openDropdown === "programs"}>
              Programs
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === "programs" ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${openDropdown === "programs" ? "mt-4 max-h-[400px]" : "max-h-0"}`}>
              <div className="font-['Open_Sans'] font-semibold text-[10px] tracking-[1.5px] uppercase text-white/40 pb-1">Featured</div>
              <Link href="/programs/guided-trail" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2 flex items-center gap-2">
                Guided Trail <span className="bg-[#FEF3DC] text-[#D4890A] font-bold text-[10px] uppercase px-1.5 py-0.5 rounded">Flagship</span>
              </Link>
              <Link href="/scholarship-application" onClick={closeMenu} className="text-[#6BBF85] font-['Open_Sans'] font-semibold text-[16px] py-2">Trail Forward Scholarship</Link>
              <div className="h-px bg-white/10 my-2" />
              <div className="font-['Open_Sans'] font-semibold text-[10px] tracking-[1.5px] uppercase text-white/40 pb-1">All Programs</div>
              <Link href="/programs" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">All Programs</Link>
              <Link href="/programs/digital-compass" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Digital Compass</Link>
              <div className="h-px bg-white/10 my-2" />
              <Link href="/waitlist" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Join the Waitlist</Link>
            </div>
          </div>

          {/* For Nonprofits */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-bold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setOpenDropdown(openDropdown === "nonprofit" ? null : "nonprofit")} aria-expanded={openDropdown === "nonprofit"}>
              For Nonprofits
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === "nonprofit" ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${openDropdown === "nonprofit" ? "mt-4 max-h-[300px]" : "max-h-0"}`}>
              <Link href="/programs/digital-compass" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Digital Compass</Link>
              <Link href="/nonprofit-assessment" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">How Partnerships Work</Link>
              <Link href="/nonprofit-assessment" onClick={closeMenu} className="text-[#F5A623] font-['Open_Sans'] font-semibold text-[16px] py-2">Start Free Assessment →</Link>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-bold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setOpenDropdown(openDropdown === "involved" ? null : "involved")} aria-expanded={openDropdown === "involved"}>
              Get Involved
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === "involved" ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${openDropdown === "involved" ? "mt-4 max-h-[400px]" : "max-h-0"}`}>
              <Link href="/volunteer" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Volunteer & Mentor</Link>
              <Link href="/partners/recruiters" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Recruiters</Link>
              <Link href="/partners/employers" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Employers</Link>
              <Link href="/board-application" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Board Membership</Link>
              <Link href="/donate" onClick={closeMenu} className="text-[#F5A623] font-['Open_Sans'] font-semibold text-[16px] py-2">Donate / Fund a Scholarship →</Link>
            </div>
          </div>

          {/* About */}
          <div>
            <button className="flex items-center justify-between w-full font-['Open_Sans'] font-bold text-[18px] text-white/90 py-2 border-b border-white/10"
              onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")} aria-expanded={openDropdown === "about"}>
              About
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${openDropdown === "about" ? "mt-4 max-h-[200px]" : "max-h-0"}`}>
              <Link href="/about" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Our Story</Link>
              <Link href="/about/team" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Meet the Team</Link>
              <Link href="/impact" onClick={closeMenu} className="text-white/70 font-['Open_Sans'] text-[16px] py-2">Vision & Impact</Link>
            </div>
          </div>

          <Link href="/blog" onClick={closeMenu}
            className="font-['Open_Sans'] font-bold text-[18px] text-white/90 py-2 border-b border-white/10">
            Blog
          </Link>

          <div className="flex flex-col gap-3 mt-2">
            <Link href="/donate" onClick={closeMenu}
              className="font-['Open_Sans'] font-semibold text-[16px] text-white/75 py-2 text-center">
              Donate
            </Link>
            <Link href="/waitlist" onClick={closeMenu}
              className="bg-[#F5A623] text-[#2A2E2C] font-['Open_Sans'] font-bold text-[16px] h-[54px] rounded-lg flex items-center justify-center w-full">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
