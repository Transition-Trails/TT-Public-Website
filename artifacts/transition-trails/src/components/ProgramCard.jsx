import { CTAButton } from "./CTAButton";

export function ProgramCard({ program, height = "standard" }) {
  const isFeatured = height === "featured";
  const heightClass = isFeatured ? "h-[420px]" : "h-[380px]";
  const wrapperClass = `w-[232px] ${heightClass} bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col`;
  const borderClass = isFeatured ? "border-2 border-[#1E4A2A]" : "border border-[#E2E4E1]";

  return (
    <div className={`${wrapperClass} ${borderClass}`}>
      {isFeatured && (
        <div className="absolute top-[5px] right-0 bg-[#F5A623] text-[#2A2E2C] text-[10px] font-bold font-['Poppins'] px-2 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">

        {/* Top section — grows to fill available space */}
        <div className="text-[10px] uppercase font-['Open_Sans'] font-semibold tracking-[2px] text-[#4A4F4D] mb-2">
          {program.tier}
        </div>
        <h3 className="font-['Poppins'] font-bold text-[17px] text-[#2A2E2C] leading-tight mb-1">
          {program.name}
        </h3>
        <p className="text-[12px] font-['Open_Sans'] italic text-[#4A4F4D] flex-1 min-h-[80px]">
          {program.whoFor}
        </p>

        {/* Divider — consistent position across all cards */}
        <div className="h-px w-full bg-[#E2E4E1] my-2" />

        {/* Price block */}
        <div className="mb-2">
          <div className="font-['Poppins'] font-bold text-[24px] text-[#2A2E2C]">
            {program.price}
          </div>
          <div className="text-[11px] font-['Open_Sans'] text-[#4A4F4D]">
            {program.priceNote}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#E2E4E1] my-2" />

        {/* Highlight tag + CTA */}
        <div className="flex flex-col gap-3">
          <div className="self-start px-2 py-1 bg-[#E6F3EA] text-[#2F6B3F] text-[10px] font-['Open_Sans'] font-semibold rounded-full">
            {program.highlight}
          </div>

          <CTAButton
            href={program.ctaHref}
            variant={program.ctaAmber ? "amber" : "dark"}
            className={!program.ctaAmber ? "!bg-[#2F6B3F] hover:!bg-[#1E4A2A] !text-white !h-10 rounded-md whitespace-nowrap" : "!h-10 rounded-md whitespace-nowrap"}
            external={program.ctaHref.startsWith("http")}
          >
            {program.cta}
          </CTAButton>
        </div>

      </div>
    </div>
  );
}
