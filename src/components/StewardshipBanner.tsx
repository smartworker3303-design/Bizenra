"use client";

interface StewardshipBannerProps {
  onOpenConsultation?: () => void;
}

export default function StewardshipBanner({ onOpenConsultation }: StewardshipBannerProps) {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="relative rounded-2xl bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-8 lg:p-10 shadow-[0_8px_36px_rgba(0,0,0,0.65)] backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Quote Content */}
        <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
          {/* Distinct Gold Quote Mark */}
          <div className="shrink-0 select-none">
            <span className="font-serif text-3xl sm:text-4xl text-[#E8C87A] font-bold leading-none block drop-shadow-sm">
              &ldquo;
            </span>
          </div>

          <div className="space-y-1.5">
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[23px] text-[#FFFFFF] font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              &ldquo;Better systems create room for better decisions.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-[13px] font-sans font-medium text-[#A6CCB9] tracking-wide">
              The Bizenra Institutional Stewardship Principle
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 self-start md:self-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="cursor-pointer px-6 py-3 rounded bg-[#E8C87A] text-[#05160E] text-[13px] font-semibold tracking-wide hover:bg-[#F3DA96] active:scale-[0.98] transition-all shadow-[0_2px_14px_rgba(0,0,0,0.6)] whitespace-nowrap"
          >
            Request Diagnostic Briefing
          </button>
        </div>
      </div>
    </section>
  );
}
