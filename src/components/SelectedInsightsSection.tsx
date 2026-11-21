"use client";

import { useState } from "react";
import Link from "next/link";

interface InsightArticle {
  id: number;
  tag: string;
  readTime: string;
  title: string;
  description: string;
  typeLabel: string;
  directives: string[];
  takeaway: string;
  framework: string;
  href: string;
}

interface SelectedInsightsSectionProps {
  onOpenConsultation?: () => void;
}

export default function SelectedInsightsSection({
  onOpenConsultation,
}: SelectedInsightsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<"abstract" | "directives" | "framework">("abstract");

  const articles: InsightArticle[] = [
    {
      id: 1,
      tag: "FINANCIAL VISIBILITY",
      readTime: "6 min read",
      title: "The 13-Week Cash Flow Engine: Why P&L Statements Lie to Fast-Growing Companies",
      description:
        "Accounting profit is not cash in bank. Why operational scale fails at the liquidity intersection and how to construct dynamic forecasting models that reveal runway 90 days in advance.",
      typeLabel: "Editorial Analysis",
      directives: [
        "Separate accrual accounting from cash inflows/outflows",
        "Categorize outflows into non-negotiable fixed vs dynamic growth capex",
        "Run weekly Monday morning liquidity cadence with operational leaders",
      ],
      takeaway: "Profit is an opinion; cash in the bank is mathematical reality.",
      framework:
        "Three-tier forecasting: receipts forecast (accounts receivable aging), vendor disbursement scheduling, and baseline operational burn variance.",
      href: "/insights",
    },
    {
      id: 2,
      tag: "OPERATIONS & WORKFLOW",
      readTime: "8 min read",
      title: "The Founder’s Trap: Transitioning from Heroic Effort to Documented Systems",
      description:
        "When business growth outstrips personal bandwidth, systems must carry the enterprise. A practical framework for separating operator from orchestrator without sacrificing velocity.",
      typeLabel: "Operational Brief",
      directives: [
        "Map the 5 decisions that currently bottleneck at the executive desk",
        "Establish single-threaded ownership with defined escalation thresholds",
        "Codify handoffs into living SOPs rather than static shelf documents",
      ],
      takeaway: "If your business requires heroic daily intervention to function, you don't own an enterprise—you own a stressful job.",
      framework:
        "The 4-Step Delegation Matrix: Document the input, calibrate the output rubric, observe 3 successful cycles, and formally transfer decision authority.",
      href: "/insights",
    },
    {
      id: 3,
      tag: "SYSTEMS ARCHITECTURE",
      readTime: "5 min read",
      title: "Avoiding ERP Disaster: Why 70% of Software Migrations Fail and How to Succeed",
      description:
        "Software does not solve broken thinking. The prerequisite operational mappings and data hygiene required before signing multi-year SaaS contracts or launching ERP overhauls.",
      typeLabel: "Strategic Guide",
      directives: [
        "Never automate an uncalibrated, chaotic manual process",
        "Standardize Chart of Accounts and entity structures before data import",
        "Appoint a single operational owner with veto authority over scope creep",
      ],
      takeaway: "Automating an inefficient process merely produces automated inefficiency at higher velocity.",
      framework:
        "The Pre-Migration Audit: Process Map -> Data Cleansing -> Sandbox User Acceptance Testing -> Phased Parallel Run -> Cutover.",
      href: "/insights",
    },
  ];

  const current = articles[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % articles.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);

  return (
    <section id="insights-section" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-9 lg:p-11 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#143524]/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase drop-shadow-sm">
                ADVISORY KNOWLEDGE BASE
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#A3C8B3] px-2 py-0.5 rounded bg-[#072416] border border-[#1b4b32]">
                INSIGHTS CAROUSEL &bull; 0{activeIndex + 1} / 0{articles.length}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#FFFFFF] leading-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Selected Business Insights
            </h2>
            <p className="text-[#C8DED2] text-sm sm:text-[14.5px] leading-relaxed font-light">
              Interactive insights carousel. Practical operational perspectives on liquidity engineering, systems migration, and institutional scaling.
            </p>
          </div>

          {/* Carousel Next/Prev Nav */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/insights"
              className="text-xs sm:text-sm font-semibold text-[#E8C87A] hover:text-[#F3DA96] transition-colors mr-2 hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Explore All Articles</span>
              <span>&rarr;</span>
            </Link>

            <button
              onClick={prev}
              type="button"
              aria-label="Previous Insight"
              className="cursor-pointer w-10 h-10 rounded-xl bg-[#061e13] border border-[#1b4b32] text-[#E8C87A] hover:bg-[#0c3120] hover:border-[#E8C87A]/40 flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              &larr;
            </button>
            <button
              onClick={next}
              type="button"
              aria-label="Next Insight"
              className="cursor-pointer w-10 h-10 rounded-xl bg-[#061e13] border border-[#1b4b32] text-[#E8C87A] hover:bg-[#0c3120] hover:border-[#E8C87A]/40 flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Carousel Selector Chips */}
        <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar border-b border-[#112d1e]">
          {articles.map((a, idx) => (
            <button
              key={a.id}
              onClick={() => {
                setActiveIndex(idx);
                setActiveLayer("abstract");
              }}
              className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 flex items-center gap-2 ${
                idx === activeIndex
                  ? "bg-[#E8C87A] text-[#05170F] shadow-[0_2px_12px_rgba(232,200,122,0.25)]"
                  : "bg-[#061d12] border border-[#173e2a] text-[#A6C9B6] hover:text-white hover:border-[#20573b]"
              }`}
            >
              <span className="text-[10px] opacity-70 font-mono">0{a.id}.</span>
              <span>{a.tag}</span>
            </button>
          ))}
        </div>

        {/* Active Insight Presentation Card with Layered Content */}
        <div className="pt-6">
          <div className="rounded-2xl bg-[#030c07]/90 border border-[#18422d] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300">
            {/* Meta Header */}
            <div className="flex items-center justify-between text-xs pb-4 border-b border-[#123322]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#062013] border border-[#1c5337] text-[10.5px] font-mono text-[#98D2B2] uppercase font-semibold">
                  {current.tag}
                </span>
                <span className="text-[#84A995] font-light">{current.readTime}</span>
              </div>
              <span className="text-[#C5A566] text-xs font-mono uppercase tracking-wider">
                {current.typeLabel}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#FFFFFF] leading-snug my-4 drop-shadow-sm">
              <Link href={current.href} className="hover:text-[#E8C87A] transition-colors">
                {current.title}
              </Link>
            </h3>

            {/* Layer Tabs */}
            <div className="flex items-center gap-2 my-5 p-1.5 rounded-xl bg-[#05180f] border border-[#143d28] overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveLayer("abstract")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "abstract"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                1. Executive Thesis
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("directives")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "directives"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                2. Key Directives
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("framework")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "framework"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                3. Execution Blueprint
              </button>
            </div>

            {/* Dynamic Layer Box */}
            <div className="min-h-[140px] flex flex-col justify-between">
              {activeLayer === "abstract" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <p className="text-[#DCEAE2] text-sm sm:text-base leading-relaxed font-light">
                    {current.description}
                  </p>
                  <div className="border-l-2 border-[#E8C87A] pl-3 py-1.5 bg-[#051a0f]/80 rounded-r">
                    <p className="font-serif italic text-xs sm:text-sm text-[#F3DA96]">
                      &ldquo;{current.takeaway}&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {activeLayer === "directives" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-mono text-[#C5A566] uppercase tracking-wider block">
                    TACTICAL RULES FOR LEADERSHIP
                  </span>
                  <div className="space-y-2">
                    {current.directives.map((dir, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#061e12] border border-[#16452c] text-xs text-[#E8EFEA]">
                        <span className="text-[#E8C87A] font-bold text-xs shrink-0 mt-0.5">&bull;</span>
                        <span className="leading-relaxed">{dir}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLayer === "framework" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-mono text-[#E8C87A] uppercase tracking-wider block">
                    OPERATIONAL METHODOLOGY BLUEPRINT
                  </span>
                  <div className="rounded-xl bg-[#061d11] border border-[#194b30] p-4 text-xs sm:text-[13px] text-[#DCEAE2] font-light leading-relaxed">
                    {current.framework}
                  </div>
                </div>
              )}

              {/* Bottom Action Strip */}
              <div className="pt-6 mt-6 border-t border-[#123322] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {articles.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setActiveIndex(dotIdx);
                        setActiveLayer("abstract");
                      }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === activeIndex ? "w-7 bg-[#E8C87A]" : "w-2 bg-[#1b4b32]"
                      }`}
                      aria-label={`Go to insight ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="cursor-pointer text-xs sm:text-[13px] font-medium text-[#8FB7A1] hover:text-[#FAF7F0] transition-colors"
                  >
                    Discuss in Briefing
                  </button>
                  <Link
                    href={current.href}
                    className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8C87A] text-[#05170F] text-xs sm:text-[13px] font-semibold hover:bg-[#F3DA96] active:scale-98 transition-all shadow-sm"
                  >
                    <span>Read Full Article</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Centered Quote Banner */}
        <div className="mt-8 rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 py-5 sm:py-6 px-6 sm:px-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <p className="font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#E8EFEA] font-normal drop-shadow-sm leading-snug">
            &ldquo;Clarity turns business challenges into actionable next steps.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}