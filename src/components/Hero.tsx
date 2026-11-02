"use client";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const stats = [
    { value: "8 Roles", label: "DIRECT OPERATIONAL RECORD" },
    { value: "Tier-1", label: "INSTITUTIONAL GOVERNANCE" },
    { value: "7 Pillars", label: "END-TO-END ENTERPRISE FLOW" },
    { value: "100%", label: "VERIFIED CASE HISTORY" },
  ];

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("case-histories");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden pt-10 sm:pt-14 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Kicker Subtitle */}
        <div className="mb-4">
          <p className="text-[12px] sm:text-[13px] font-semibold tracking-[0.22em] text-[#E8C87A] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            PRECISION STRATEGIC ADVISORY &bull; INSTITUTIONAL SYSTEMS
          </p>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.08] tracking-tight text-[#FFFFFF] max-w-4xl mb-6 drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)]">
          Smarter Systems.
          <br />
          <span className="italic font-normal bg-gradient-to-r from-[#FFF3D1] via-[#F3DA96] to-[#C99E44] bg-clip-text text-transparent">
            Stronger Businesses.
          </span>
        </h1>

        {/* Description Paragraph */}
        <p className="text-[#E5EFE9] text-base sm:text-lg md:text-[19px] leading-relaxed max-w-2xl font-light mb-9 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Bizenra helps businesses improve operations, strengthen financial visibility, build the right systems, and pursue sustainable growth with practical, tailored solutions.
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-20 sm:mb-28">
          <button
            onClick={onOpenConsultation}
            type="button"
            className="cursor-pointer px-7 py-3.5 rounded bg-[#E8C87A] text-[#05160E] text-[15px] font-semibold tracking-wide hover:bg-[#F3DA96] active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          >
            Book a Consultation
          </button>

          <a
            href="#case-histories"
            onClick={handleScrollToWork}
            className="group flex items-center gap-2 text-[#FFFFFF] hover:text-[#E8C87A] text-[15px] font-medium transition-colors drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          >
            <span>Explore Our Work</span>
            <span className="text-lg transition-transform duration-200 group-hover:translate-y-1">
              &darr;
            </span>
          </a>
        </div>

        {/* 4 Metrics / Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#1C4A33]/70">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1.5">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#F3DA96] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {stat.value}
              </span>
              <span className="text-[10.5px] sm:text-[11.5px] font-sans font-semibold tracking-[0.16em] text-[#A8CCBA] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
