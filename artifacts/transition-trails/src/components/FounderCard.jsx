import { FOUNDER_PHOTOS } from "../constants/founders";
import { LINKS } from "../constants/links";

export function FounderCard({ founder }) {
  const photoUrl = FOUNDER_PHOTOS[founder.key];
  const bioLines = Array.isArray(founder.bio) ? founder.bio : [founder.bio];

  return (
    <div className="bg-[#2E3330] border border-white/10 rounded-xl w-[296px] flex flex-col relative overflow-hidden shrink-0">
      <div className="h-1 w-full" style={{ backgroundColor: founder.accent }} />

      <div className="p-6 flex flex-col items-center text-center">
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

        <div className="space-y-2 mb-4 text-left w-full">
          {bioLines.map((line, i) => (
            <p key={i} className="font-['Open_Sans'] text-xs text-white/65 leading-[1.6]">
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 justify-center mt-2 mb-3 w-full">
          {founder.skills.map((skill, i) => (
            <span
              key={i}
              className="font-['Open_Sans'] font-semibold text-[11px] rounded inline-flex items-center"
              style={{ color: "#2F6B3F", background: "#E6F3EA", padding: "3px 10px", margin: "2px" }}
            >
              {skill}
            </span>
          ))}
        </div>

        {founder.contactEmail && (
          <a
            href={`mailto:${founder.contactEmail}`}
            className="mt-2 font-['Open_Sans'] font-semibold text-[12px] hover:underline transition-colors"
            style={{ color: "#7FAFC6" }}
          >
            {founder.contactEmail}
          </a>
        )}

        {founder.calendarLink && (
          <a
            href={LINKS.angelaCalendar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 px-4 border border-[#F5A623] text-[#F5A623] font-['Open_Sans'] font-semibold text-xs rounded-lg hover:bg-[#F5A623]/10 transition-colors text-center"
          >
            Schedule Time With Me →
          </a>
        )}

        {founder.coachingLink && (
          <a
            href={LINKS.coaching}
            className="mt-2 font-['Open_Sans'] font-semibold text-[11px] hover:underline transition-colors"
            style={{ color: "#2F6B3F" }}
          >
            Available for individual coaching →
          </a>
        )}
      </div>
    </div>
  );
}
