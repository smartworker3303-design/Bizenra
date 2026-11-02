"use client";

interface DistinctionPillar {
  number: string;
  isGoldBadge?: boolean;
  title: string;
  description: string;
}

export default function WhyPartnerSection() {
  const pillars: DistinctionPillar[] = [
    {
      number: "01",
      title: "Practical Thinking",
      description:
        "No generic theoretical frameworks. Every recommendation is directly grounded in real-world feasibility, cash constraints, and immediate operational bandwidth.",
    },
    {
      number: "02",
      isGoldBadge: true,
      title: "Clear Processes",
      description:
        "Every workflow is documented, mapped, and assigned single-threaded ownership so teams execute consistently without executive micromanagement.",
    },
    {
      number: "03",
      title: "Connected Functions",
      description:
        "Finance, operations, sales, and HR do not exist in silos. We integrate the entire data flow so numbers reflect operational realities in real time.",
    },
    {
      number: "04",
      title: "Sustainable Improvement",
      description:
        "We build systems that outlast advisory engagements, equipping internal leadership teams with the training, tools, and instincts to maintain rigor.",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Top Part: The Bizenra Distinction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, intro & core tenet quote */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
                THE BIZENRA DISTINCTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FFFFFF] leading-[1.15] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Why Founders Partner <br className="hidden sm:inline" />
                With Bizenra
              </h2>
              <p className="text-[#A3B8AC] text-sm sm:text-[14.5px] font-light leading-relaxed">
                We operate without the bloated overhead of conventional consultancies and without the high-altitude
                abstractions that fail on Monday morning. We deploy battle-tested execution directly inside your business.
              </p>
            </div>

            {/* Core Tenet Quote Box */}
            <div className="rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 border-l-[3px] border-l-[#E8C87A] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <p className="font-serif italic text-base sm:text-[17px] text-[#E8EFEA] font-normal leading-snug mb-2">
                &ldquo;Growth becomes sustainable when your processes grow with you.&rdquo;
              </p>
              <span className="text-[11px] sm:text-xs text-[#8EA396] font-sans font-light">
                Bizenra Core Tenet
              </span>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Distinction Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-5 sm:p-6 hover:border-[#20583A] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm"
              >
                <div className="mb-3.5">
                  {pillar.isGoldBadge ? (
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-[#E8C87A] text-[#040E08] font-mono font-bold text-xs shadow-sm">
                      {pillar.number}
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-[#051C11] border border-[#1A4B31] text-[#A3B8AC] font-mono text-xs shadow-sm">
                      {pillar.number}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-semibold text-[#FFFFFF] text-[15px] sm:text-base mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#A3B8AC] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Part: Institutional Rigor Policy Container */}
        <div className="mt-10 sm:mt-14 rounded-2xl border border-[#143A26]/80 bg-[#020A05]/60 p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          {/* Header & Audit-Grade Badge */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-2 drop-shadow-sm">
                INSTITUTIONAL RIGOR POLICY
              </span>
              <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#FFFFFF] leading-snug mb-3 drop-shadow-sm">
                Zero Vanity Metrics. 100% Verified Records.
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#A3B8AC] font-light leading-relaxed">
                Bizenra rejects fabricated vanity badges, paid business directories, and inflated marketing claims. Our
                reputation rests strictly on demonstrated controllership and operational leadership across verifiable
                enterprises.
              </p>
            </div>

            <div className="shrink-0 self-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#051C11] border border-[#1A4B31] text-[#A3B8AC] text-xs font-medium shadow-sm">
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
                <span>Audit-Grade Standards</span>
              </div>
            </div>
          </div>

          {/* Testimonial Box with Dashed Border */}
          <div className="rounded-xl border border-dashed border-[#1B4D33] bg-[#031109]/70 p-5 sm:p-7 relative shadow-sm">
            {/* Top row: Stars & Placeholder Disclaimer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-1 text-[#E8C87A]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11px] sm:text-xs text-[#6F8A7B] font-mono">
                [Approved Testimonial Placeholder &mdash; Draft pending client sign-off]
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif italic text-base sm:text-[17px] text-[#E8EFEA] font-normal leading-relaxed my-4 sm:my-5 max-w-3xl">
              &ldquo;Bizenra&rsquo;s controllership brought immediate discipline to our balance sheets. For the first
              time in six years, our executive committee was able to make decisions based on confirmed figures rather
              than month-late projections.&rdquo;
            </blockquote>

            {/* Client Attribution */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-md bg-[#051C11] border border-[#1A4B31] flex items-center justify-center text-xs font-mono font-semibold text-[#8EA396] shrink-0">
                MD
              </div>
              <div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#FFFFFF]">Managing Director</div>
                <div className="text-[11px] sm:text-xs text-[#7E988A] font-light">
                  Multinational Commercial Contracting Entity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
