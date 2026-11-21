"use client";

import ScrollReveal, { RevealDirection } from "@/components/ScrollReveal";

interface DistinctionPillar {
  number: string;
  isGoldBadge?: boolean;
  title: string;
  description: string;
}

export default function WhyPartnerSection() {
  const pillarDirections: RevealDirection[] = ["top", "right", "left", "bottom"];

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
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Top Part: The Bizenra Distinction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, intro & core tenet quote */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal direction="left" distance={45} duration={850}>
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
                    THE BIZENRA DISTINCTION
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FFFFFF] leading-[1.15] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    Why Choose Bizenra
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
            </ScrollReveal>
          </div>

          {/* Right Column: 2x2 Grid of 4 Distinction Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.number}
                direction={pillarDirections[idx]}
                delay={idx * 110}
                distance={35}
                className="h-full"
              >
                <div className="flex flex-col justify-between h-full rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-5 sm:p-6 hover:border-[#20583A] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm">
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
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Part: Institutional Rigor Policy Container */}
        <ScrollReveal direction="bottom" distance={40} delay={200}>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block"></span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E8C87A]">
                    Audit-Grade Integrity
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Pillars of Rigor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#123120]">
              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-[13px] font-semibold text-[#FFFFFF] flex items-center gap-2">
                  <span className="text-[#E8C87A]">&bull;</span>
                  <span>Verifiable Evidence</span>
                </h4>
                <p className="text-xs text-[#8EA396] font-light leading-relaxed">
                  Every metric, case study, and operational outcome stems directly from executed contracts and corporate records.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-[13px] font-semibold text-[#FFFFFF] flex items-center gap-2">
                  <span className="text-[#E8C87A]">&bull;</span>
                  <span>Zero Marketing Fillers</span>
                </h4>
                <p className="text-xs text-[#8EA396] font-light leading-relaxed">
                  We publish only proven frameworks tested across commercial transactions, audited balance sheets, and real workforces.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-[13px] font-semibold text-[#FFFFFF] flex items-center gap-2">
                  <span className="text-[#E8C87A]">&bull;</span>
                  <span>Strict Confidentiality</span>
                </h4>
                <p className="text-xs text-[#8EA396] font-light leading-relaxed">
                  Client identities and proprietary data remain insulated under enforceable non-disclosure protocols from day one.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}