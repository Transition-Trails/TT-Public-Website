import { CTAButton } from "./CTAButton";

export function ProgramCard({ program, height = "standard" }) {
  const isFeatured = height === "featured";
  const borderClass = isFeatured ? "border-2 border-trail-green" : "border border-warm-gray";

  return (
    <div className={`bg-white rounded-2xl ${borderClass} shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden relative`}>

      {/* 4px top accent bar */}
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: program.accent }} />

      {/* MOST POPULAR badge */}
      {isFeatured && (
        <div className="absolute top-[5px] right-0 bg-sun-amber text-charcoal text-[10px] font-bold font-['Poppins'] px-2 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-3">

        {/* a) Tier label */}
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cool-gray flex-none">
          {program.tier}
        </div>

        {/* b) Program name */}
        <h3 className="font-['Fraunces'] font-bold text-[20px] text-charcoal leading-tight flex-none -mt-1">
          {program.name}
        </h3>

        {/* c) Description — min-h holds space for the longest card */}
        <p className="font-['Open_Sans'] text-[13px] text-cool-gray italic leading-relaxed flex-none min-h-[80px] -mt-1">
          {program.whoFor}
        </p>

        {/* d) Price block — mt-auto pins it and everything below to the bottom */}
        <div className="flex-none mt-auto">
          <div className="font-['Fraunces'] font-bold text-[28px] text-charcoal leading-none">
            {program.price}
          </div>
          {/* min-h keeps the highlight + button rows level across all cards */}
          <div className="font-['Open_Sans'] text-[11px] text-cool-gray mt-1 leading-snug min-h-[52px]">
            {program.priceNote}
          </div>
        </div>

        {/* e) Highlight pill */}
        <div className="inline-flex self-start bg-green-100 text-trail-green text-[11px] font-medium px-3 py-1 rounded-full flex-none">
          {program.highlight}
        </div>

        {/* f) CTA button */}
        <CTAButton
          href={program.ctaHref}
          variant={program.ctaAmber ? "amber" : "dark"}
          className={!program.ctaAmber ? "!bg-trail-green hover:!bg-green-700 !text-white rounded-md whitespace-nowrap w-full" : "rounded-md whitespace-nowrap w-full"}
          external={program.ctaHref.startsWith("http")}
        >
          {program.cta}
        </CTAButton>

      </div>
    </div>
  );
}
