import { FOUNDER_PHOTOS } from "../constants/founders";
import { LINKS } from "../constants/links";

export function FounderCard({ founder }) {
  const photoUrl = FOUNDER_PHOTOS[founder.key];

  return (
    <div className="bg-[#2E3330] border border-white/10 rounded-xl w-[296px] h-[440px] flex flex-col relative overflow-hidden shrink-0">
      {/* Top Accent Bar */}
      <div className="h-1 w-full" style={{ backgroundColor: founder.accent }} />
      
      <div className="p-6 flex flex-col h-full items-center text-center">
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt={founder.name} 
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#2F6B3F] flex items-center justify-center mb-4">
            <span className="font-['Poppins'] font-bold text-white text-xl">{founder.initials}</span>
          </div>
        )}

        <h3 className="font-['Poppins'] font-bold text-base text-white mb-1">
          {founder.name}
        </h3>
        <p className="font-['Open_Sans'] font-semibold text-xs mb-3" style={{ color: founder.accent }}>
          {founder.title}
        </p>

        <div className="px-3 py-1 rounded-full bg-white/15 text-white font-['Open_Sans'] text-[10px] uppercase tracking-wider mb-4 inline-block">
          {founder.role}
        </div>

        <p className="font-['Open_Sans'] text-xs text-white/65 leading-[1.6] mb-auto">
          {founder.bio}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {founder.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-white/10 text-white/70 rounded text-[10px] font-['Open_Sans']">
              {skill}
            </span>
          ))}
        </div>

        {founder.calendarLink && (
          <a 
            href={LINKS.angelaCalendar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-2 px-4 border border-[#F5A623] text-[#F5A623] font-['Open_Sans'] font-semibold text-xs rounded-lg hover:bg-[#F5A623]/10 transition-colors"
          >
            Schedule Time With Me
          </a>
        )}
      </div>
    </div>
  );
}
