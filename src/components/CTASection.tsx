"use client";

interface CTASectionProps {
  onOpenConsultation?: () => void;
}

export default function CTASection({ onOpenConsultation }: CTASectionProps) {
  const scrollToPractice = () => {
    const el = document.getElementById("practice-areas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1200, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-8 sm:p-12 lg:p-16 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#051C11] border border-[#1A4B31] mb-6 shadow-sm">
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.2em] text-[#E8C87A] uppercase">
            STRATEGIC STEWARDSHIP &bull; DIRECT CONSULTATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#FFFFFF] leading-[1.2] mb-5 max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Ready to Build Smarter Systems for Your Business?
        </h2>

        {/* Subtitle */}
        <p className="text-[#A3B8AC] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Schedule a confidential 45-minute advisory briefing to evaluate your current operational
          infrastructure, uncover hidden cash-flow leverage, and chart a sustainable growth trajectory.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#E8C87A] hover:bg-[#F3DA96] text-[#040E08] font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
          >
            Schedule Advisory Briefing
          </button>

          <button
            type="button"
            onClick={scrollToPractice}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#051C11] hover:bg-[#072416] text-[#FFFFFF] border border-[#1A4B31] hover:border-[#22573B] font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer"
          >
            Review Practice Pillars
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#8EA396] font-light">
          {/* Badge 1: Strict NDA Protected */}
          <div className="inline-flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-[#E8C87A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0v4" />
            </svg>
            <span>Strict NDA Protected</span>
          </div>

          {/* Badge 2: Direct Executive Dialogue */}
          <div className="inline-flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-[#E8C87A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Direct Executive Dialogue</span>
          </div>

          {/* Badge 3: Zero Sales Pressure */}
          <div className="inline-flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-[#E8C87A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <span>Zero Sales Pressure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
