"use client";

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
    ],
    mandateType: "Direct Employment Mandate",
    fullDetails: {
      overview:
        "Large-scale multi-entity property developments requiring unified financial controls and liquidity forecasting across simultaneous construction pipelines.",
      metrics: [
        { label: "Reporting Variance", value: "-34%" },
        { label: "Ledger Sync", value: "Real-time" },
        { label: "Audit Compliance", value: "100%" },
      ],
      solution:
        "Architected automated inter-company transaction reconciliation rules, standardized chart of accounts, and implemented automated variance tracking connected to bank feeds.",
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
    ],
    mandateType: "Executive Leadership Mandate",
    fullDetails: {
      overview:
        "High-volume luxury real estate brokerage spanning cross-border transaction teams across UAE, UK, and Pakistan.",
      metrics: [
        { label: "Broker Volume", value: "180+ Active" },
        { label: "Dispute Rate", value: "0%" },
        { label: "Sync Speed", value: "<15 mins" },
      ],
      solution:
        "Engineered centralized deal-tracking middleware with automated split commission formulas, multi-currency conversion, and dynamic lead-to-close pipeline visibility.",
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
    ],
    mandateType: "Operational Restructuring Mandate",
    fullDetails: {
      overview:
        "Textile manufacturing and worldwide logistics operation grappling with shipping bottlenecks, customs document delays, and stock shrinkage.",
      metrics: [
        { label: "Cycle Acceleration", value: "22 Days" },
        { label: "Inventory Accuracy", value: "99.4%" },
        { label: "Units Tracked", value: "Multi-Million" },
      ],
      solution:
        "Designed standardized warehouse inventory reconciliation workflows, synchronized automated barcode verification with General Ledger, and systematized international trade customs documentation.",
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
    ],
    mandateType: "Institutional Modernization Mandate",
    fullDetails: {
      overview:
        "Established accounting and taxation firm modernizing from on-premise servers to cloud practice management without disrupting ongoing client deliverables.",
      metrics: [
        { label: "Liquidity Unlocked", value: "+$420,000" },
        { label: "Billing Cycle", value: "Weekly auto" },
        { label: "Compliance Status", value: "SOC / GDPR" },
      ],
      solution:
        "Deployed secure cloud-native work-in-progress (WIP) tracking, client billing automation with payment portal integration, and audited security access matrices.",
    },
  },
];

interface CaseHistoriesSectionProps {
  onSelectCase?: (study: CaseStudy) => void;
}

export default function CaseHistoriesSection({ onSelectCase }: CaseHistoriesSectionProps) {
  return (
    <section
      id="case-histories"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
    >
      <div className="rounded-t-[32px] sm:rounded-t-[44px] bg-[#040E08]/85 border-t border-x border-[#173D29]/75 p-7 sm:p-10 lg:p-12 shadow-[0_-12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#143524]/80">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
              DOCUMENTED TRACK RECORD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#FFFFFF] leading-[1.18] tracking-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Professional Experience &amp; Case Histories
            </h2>
            <p className="text-[#D4E8DC] text-[15px] sm:text-base leading-relaxed font-light">
              Verified executive advisory, controllership, and operational architecture executed under strict enterprise standards across high-growth ventures.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/case-histories"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#FFFFFF] hover:text-[#E8C87A] transition-colors drop-shadow-sm"
            >
              <span>Browse all 8 Case Mandates</span>
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* 2x2 Grid of Case History Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 pt-10">
          {caseStudiesData.map((card) => {
            const isGold = card.tagTheme === "gold";

            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-7 sm:p-9 hover:border-[#22573B] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-sm"
              >
                <div>
                  {/* Card Header: Tag & Discipline */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`inline-block px-3 py-1 rounded text-[10.5px] font-semibold tracking-wider uppercase ${
                        isGold
                          ? "bg-[#241C0A]/90 border border-[#C5A566] text-[#F3DA96]"
                          : "bg-[#062013]/90 border border-[#1E5236] text-[#A6E8C2]"
                      }`}
                    >
                      {card.tag}
                    </span>
                    <span className="text-[12px] font-medium text-[#93BCA6] tracking-wide">
                      {card.discipline}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#FFFFFF] mb-1.5 drop-shadow-sm">
                    {card.client}
                  </h3>
                  <p className="text-[13px] font-semibold text-[#E8C87A] mb-4">
                    {card.role}
                  </p>

                  {/* Description */}
                  <p className="text-[#D0E5DA] text-[14px] leading-relaxed mb-6 font-light">
                    {card.description}
                  </p>

                  {/* Checkpoint Bullets */}
                  <div className="space-y-2.5 mb-8">
                    {card.bulletPoints.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] text-[#E8F1EC]">
                        <span className="shrink-0 w-4 h-4 rounded-full border border-[#22573B] bg-[#071F13] flex items-center justify-center text-[10px] text-[#E8C87A] mt-0.5 font-bold">
                          ✓
                        </span>
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Mandate & Action */}
                <div className="pt-5 border-t border-[#123120] flex items-center justify-between text-[12.5px]">
                  <span className="text-[#8FB7A1] font-medium">
                    {card.mandateType}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectCase?.(card)}
                    className="cursor-pointer group/link inline-flex items-center gap-1.5 font-semibold text-[#FFFFFF] hover:text-[#E8C87A] transition-colors"
                  >
                    <span>View Case History</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
