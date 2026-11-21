"use client";

import { useState } from "react";
import Link from "next/link";

export interface CaseStudy {
  id: string;
  tag: string;
  tagTheme: "green" | "gold";
  discipline: string;
  client: string;
  role: string;
  description: string;
  bulletPoints: string[];
  mandateType: string;
  fullDetails?: {
    overview: string;
    metrics: { label: string; value: string }[];
    solution: string;
    takeaway?: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "al-rauf-group",
    tag: "REAL ESTATE & CONSTRUCTION",
    tagTheme: "green",
    discipline: "Executive Controllership",
    client: "Al Rauf Group",
    role: "Director of Finance & Operations Advisory",
    description:
      "Consolidated financial governance and structured cash-flow workflows across parallel high-rise property ventures, reducing reporting variance by 34% through automated ledger synchronization.",
    bulletPoints: [
      "Multi-entity capital expenditure audit protocols",
      "Executive dashboarding for board-level capital allocation",
      "Phased transition from manual logs to centralized digital personnel records",
    ],
    mandateType: "Direct Employment Mandate",
    fullDetails: {
      overview:
        "Large-scale multi-entity property developments requiring unified financial controls, liquidity forecasting, and statutory labor-law compliance across simultaneous construction pipelines.",
      metrics: [
        { label: "Reporting Variance", value: "-34%" },
        { label: "Ledger Sync", value: "Real-time" },
        { label: "Statutory Adherence", value: "100%" },
        { label: "Onboarding Cadence", value: "30/60/90 Day" },
      ],
      solution:
        "Architected automated inter-company transaction reconciliation rules, standardized chart of accounts, and implemented automated variance tracking connected to bank feeds.",
      takeaway: "Strong teams thrive when expectations and systems are clear.",
    },
  },
  {
    id: "aeon-trisl",
    tag: "INTERNATIONAL BROKERAGE",
    tagTheme: "gold",
    discipline: "Operational Architecture",
    client: "Aeon & Trisl Real Estate",
    role: "Head of Strategic Systems & FP&A",
    description:
      "Overhauled commission settlement frameworks and unified multinational sales performance analytics across GCC branches, unlocking real-time forecasting for 180+ active brokers.",
    bulletPoints: [
      "Commission calculation automated down to zero manual disputes",
      "ERP pipeline integration across Dubai, London, and Karachi",
      "Dynamic lead-to-close pipeline visibility with multi-currency conversion",
    ],
    mandateType: "Executive Leadership Mandate",
    fullDetails: {
      overview:
        "High-volume luxury real estate brokerage spanning cross-border transaction teams across UAE, UK, and Pakistan needing transparent settlement structures.",
      metrics: [
        { label: "Active Brokers", value: "180+" },
        { label: "Dispute Rate", value: "0.0%" },
        { label: "Ledger Sync", value: "<15 mins" },
        { label: "Offices Unified", value: "3 Countries" },
      ],
      solution:
        "Engineered centralized deal-tracking middleware with automated split commission formulas, multi-currency conversion, and dynamic lead-to-close pipeline visibility.",
      takeaway: "Incentive structures must be mathematically immutable to eliminate friction.",
    },
  },
  {
    id: "advance-apparels",
    tag: "GLOBAL SUPPLY & APPAREL",
    tagTheme: "green",
    discipline: "Supply Chain & ERP",
    client: "Advance Apparels",
    role: "Senior Operations Architect",
    description:
      "Standardized warehouse inventory reconciliation, export customs document flows, and cross-border vendor payment tracking for multi-million unit textile distributions.",
    bulletPoints: [
      "Turnaround cycle time contracted by 22 business days",
      "Rigid inventory variance tracking linked directly to GL",
      "Customs clearing delays eliminated via standardized document pipeline",
    ],
    mandateType: "Operational Restructuring Mandate",
    fullDetails: {
      overview:
        "Textile manufacturing and worldwide logistics operation grappling with shipping bottlenecks, customs document delays, and stock shrinkage across regional hubs.",
      metrics: [
        { label: "Cycle Acceleration", value: "22 Days" },
        { label: "Inventory Accuracy", value: "99.4%" },
        { label: "Volume Tracked", value: "Multi-Million" },
        { label: "Customs Hold-ups", value: "Zero" },
      ],
      solution:
        "Designed standardized warehouse inventory reconciliation workflows, synchronized automated barcode verification with General Ledger, and systematized international trade customs documentation.",
      takeaway: "Physical inventory velocity cannot exceed documentation clarity.",
    },
  },
  {
    id: "kam-associates",
    tag: "PROFESSIONAL SERVICES",
    tagTheme: "gold",
    discipline: "Accounting Modernization",
    client: "KAM Associates",
    role: "Head of Practice & Systems Advisory",
    description:
      "Re-engineered firm-wide client onboarding and time-to-billing lifecycles, migrating legacy desktop infrastructure to an enterprise cloud stack with automated compliance auditing.",
    bulletPoints: [
      "WIP invoicing acceleration improving liquidity by $420k",
      "Strict SOC/GDPR-compliant file repository deployment",
      "Unified practice dashboards eliminating inter-departmental latency",
    ],
    mandateType: "Institutional Modernization Mandate",
    fullDetails: {
      overview:
        "Established accounting and taxation firm modernizing from on-premise servers to cloud practice management without disrupting ongoing client deliverables.",
      metrics: [
        { label: "Liquidity Unlocked", value: "+$420,000" },
        { label: "Billing Cycle", value: "Weekly Auto" },
        { label: "Security Status", value: "SOC / GDPR" },
        { label: "Billing Dispute", value: "Near-Zero" },
      ],
      solution:
        "Deployed secure cloud-native work-in-progress (WIP) tracking, client billing automation with payment portal integration, and audited security access matrices.",
      takeaway: "Billing lag is the quietest drain on institutional liquidity.",
    },
  },
];

interface CaseHistoriesSectionProps {
  onSelectCase?: (study: CaseStudy) => void;
}

export default function CaseHistoriesSection({ onSelectCase }: CaseHistoriesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<"overview" | "metrics" | "solution" | "takeaway">("overview");

  const currentCase = caseStudiesData[activeIndex];
  const isGold = currentCase.tagTheme === "gold";

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudiesData.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);
  };

  return (
    <section
      id="case-histories"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
    >
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-9 lg:p-11 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#143524]/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase drop-shadow-sm">
                DOCUMENTED TRACK RECORD
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#A3C8B3] px-2 py-0.5 rounded bg-[#072416] border border-[#1b4b32]">
                CAROUSEL &bull; 0{activeIndex + 1} / 0{caseStudiesData.length}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#FFFFFF] leading-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Case Histories &amp; Verified Outcomes
            </h2>
            <p className="text-[#C8DED2] text-sm sm:text-[14.5px] leading-relaxed font-light">
              Interactive case study carousel. Explore multiple layers of institutional governance, verified quantitative metrics, and permanent frameworks.
            </p>
          </div>

          {/* Carousel Next/Prev Nav */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`/case-histories?client=${encodeURIComponent(currentCase.client)}#deep-dive`}
              className="text-xs sm:text-sm font-semibold text-[#E8C87A] hover:text-[#F3DA96] transition-colors mr-2 hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Explore Full Record</span>
              <span>&rarr;</span>
            </Link>

            <button
              onClick={prevCase}
              type="button"
              aria-label="Previous Case Study"
              className="cursor-pointer w-10 h-10 rounded-xl bg-[#061e13] border border-[#1b4b32] text-[#E8C87A] hover:bg-[#0c3120] hover:border-[#E8C87A]/40 flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              &larr;
            </button>
            <button
              onClick={nextCase}
              type="button"
              aria-label="Next Case Study"
              className="cursor-pointer w-10 h-10 rounded-xl bg-[#061e13] border border-[#1b4b32] text-[#E8C87A] hover:bg-[#0c3120] hover:border-[#E8C87A]/40 flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Carousel Case Tabs (Pill selector) */}
        <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar border-b border-[#112d1e]">
          {caseStudiesData.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveIndex(idx);
                setActiveLayer("overview");
              }}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 flex items-center gap-2 ${
                idx === activeIndex
                  ? "bg-[#E8C87A] text-[#05170F] shadow-[0_2px_12px_rgba(232,200,122,0.25)]"
                  : "bg-[#061d12] border border-[#173e2a] text-[#A6C9B6] hover:text-white hover:border-[#20573b]"
              }`}
            >
              <span className="text-[10px] opacity-70 font-mono">0{idx + 1}.</span>
              <span>{c.client}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Presentation Card with Layered Content */}
        <div className="pt-6">
          <div className="rounded-2xl bg-[#030c07]/90 border border-[#18422d] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300">
            {/* Card Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#123322]">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase ${
                    isGold
                      ? "bg-[#241C0A] border border-[#C5A566] text-[#F3DA96]"
                      : "bg-[#062013] border border-[#1E5236] text-[#A6E8C2]"
                  }`}
                >
                  {currentCase.tag}
                </span>
                <span className="text-xs text-[#8DB49F] font-medium tracking-wide">
                  {currentCase.discipline}
                </span>
              </div>
              <span className="text-xs text-[#C5A566] font-mono tracking-wider uppercase">
                {currentCase.mandateType}
              </span>
            </div>

            {/* Title & Role */}
            <div className="pt-5 pb-6">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FFFFFF] mb-1.5">
                {currentCase.client}
              </h3>
              <p className="text-sm sm:text-[15px] font-semibold text-[#E8C87A]">
                {currentCase.role}
              </p>
            </div>

            {/* Layer Navigation Tabs */}
            <div className="flex items-center gap-2 mb-6 p-1.5 rounded-xl bg-[#05180f] border border-[#143d28] overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveLayer("overview")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "overview"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                1. Executive Scope
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("metrics")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "metrics"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                2. Audited Metrics
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("solution")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "solution"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                3. Architectural Intervention
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("takeaway")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "takeaway"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                4. Guiding Principle
              </button>
            </div>

            {/* Dynamic Layer Content Box */}
            <div className="min-h-[160px] flex flex-col justify-between">
              {activeLayer === "overview" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <p className="text-[#D6E6DE] text-sm sm:text-base leading-relaxed font-light">
                    {currentCase.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentCase.bulletPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#A6C9B6]">
                        <span className="w-4 h-4 rounded-full bg-[#0a2c1b] border border-[#1d5737] flex items-center justify-center text-[#E8C87A] shrink-0 mt-0.5 text-[10px]">
                          ✓
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLayer === "metrics" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <p className="text-xs sm:text-sm text-[#8CAFA0]">
                    Verified quantitative benchmarks logged and audited under executive mandate standards:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-1">
                    {currentCase.fullDetails?.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-xl bg-[#061d11] border border-[#19472e] p-3.5 flex flex-col justify-between"
                      >
                        <span className="text-[10.5px] font-mono text-[#86AB96] uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="font-serif text-2xl sm:text-3xl font-medium text-[#F3DA96] mt-2">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLayer === "solution" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A566] block">
                    ENGINEERED ARCHITECTURE
                  </span>
                  <p className="text-[#E0EEE7] text-sm sm:text-[15px] leading-relaxed font-light">
                    {currentCase.fullDetails?.solution}
                  </p>
                  <p className="text-xs text-[#8DB49F] pt-2 border-t border-[#123322]">
                    Scope: {currentCase.fullDetails?.overview}
                  </p>
                </div>
              )}

              {activeLayer === "takeaway" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="border-l-3 border-[#E8C87A] pl-4 py-2 bg-[#061e12]/80 rounded-r-xl">
                    <p className="font-serif italic text-base sm:text-lg text-[#F3DA96]">
                      &ldquo;{currentCase.fullDetails?.takeaway || currentCase.description}&rdquo;
                    </p>
                    <span className="text-xs text-[#86AB96] font-sans mt-2 block">
                      Bizenra Institutional Governance Thesis &bull; Mandate ID #{currentCase.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Action Strip */}
              <div className="pt-6 mt-6 border-t border-[#123322] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {caseStudiesData.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setActiveIndex(dotIdx);
                        setActiveLayer("overview");
                      }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === activeIndex ? "w-7 bg-[#E8C87A]" : "w-2 bg-[#1b4b32]"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCase?.(currentCase)}
                    className="cursor-pointer text-xs sm:text-[13px] font-medium text-[#8FB7A1] hover:text-[#FAF7F0] transition-colors"
                  >
                    Quick Modal View
                  </button>
                  <Link
                    href={`/case-histories?client=${encodeURIComponent(currentCase.client)}#deep-dive`}
                    className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8C87A] text-[#05170F] text-xs sm:text-[13px] font-semibold hover:bg-[#F3DA96] active:scale-98 transition-all shadow-sm"
                  >
                    <span>Explore Full Case History</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}