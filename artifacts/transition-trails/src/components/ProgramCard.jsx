import { CTAButton } from "./CTAButton";

export function ProgramCard({ program, height = "standard" }) {
  const isFeatured = height === "featured";
  const heightClass = isFeatured ? "h-[460px]" : "h-[420px]";
  const borderClass = isFeatured ? "border-2 border-[#2F6B3F]" : "border border-[#E2E4E1]";

  return (
    <div className={`w-[240px] ${heightClass} bg-white rounded-2xl ${borderClass} shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden relative`}>

      {/* 4px top accent bar */}
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: program.accent }} />

      {/* MOST POPULAR badge */}
      {isFeatured && (
        <div className="absolute top-[5px] right-0 bg-[#F5A623] text-[#2A2E2C] text-[10px] font-bold font-['Poppins'] px-2 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-4">

        {/* a) Tier label */}
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
          {program.tier}
        </div>

        {/* b) Program name */}
        <h3 className="font-['Fraunces'] font-bold text-[20px] text-[#2A2E2C] leading-tight -mt-2">
          {program.name}
        </h3>

        {/* c) Description */}
        <p className="font-['Open_Sans'] text-[13px] text-[#6B7280] italic leading-relaxed min-h-[60px] flex-none -mt-2">
          {program.whoFor}
        </p>

        {/* Spacer — pushes price block to consistent position across all cards */}
        <div className="flex-1" />

        {/* d) Price block */}
        <div className="flex-none">
          <div className="font-['Fraunces'] font-bold text-[28px] text-[#2A2E2C] leading-none">
            {program.price}
          </div>
          <div className="font-['Open_Sans'] text-[11px] text-[#6B7280] mt-1 leading-snug">
            {program.priceNote}
          </div>
        </div>

        {/* e) Highlight pill */}
        <div className="inline-flex self-start bg-[#EBF3EE] text-[#2F6B3F] text-[11px] font-medium px-3 py-1 rounded-full flex-none">
          {program.highlight}
        </div>

        {/* f) CTA button */}
        <CTAButton
          href={program.ctaHref}
          variant={program.ctaAmber ? "amber" : "dark"}
          className={!program.ctaAmber ? "!bg-[#2F6B3F] hover:!bg-[#1E4A2A] !text-white rounded-md whitespace-nowrap w-full" : "rounded-md whitespace-nowrap w-full"}
          external={program.ctaHref.startsWith("http")}
        >
          {program.cta}
        </CTAButton>

      </div>
    </div>
  );
}
