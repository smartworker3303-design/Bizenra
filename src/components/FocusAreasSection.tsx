"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface FocusArea {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  deliverables: string[];
  impact: string;
  caseRef: { client: string; outcome: string };
  linkText: string;
  icon: React.ReactNode;
}

interface FocusAreasSectionProps {
  onOpenConsultation?: () => void;
}

export default function FocusAreasSection({ onOpenConsultation }: FocusAreasSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<"overview" | "deliverables" | "impact" | "case">("overview");

  const practices: FocusArea[] = [
    {
      id: 1,
      title: "Business Operations & Workflow",
      subtitle: "Process Mapping, SOP Codification & SLA Protocols",
      description:
        "Eliminate operational drag across daily business cycles. We systematically document handoffs, eliminate shadow spreadsheets, and engineer single-threaded accountability loops.",
      bullets: [
        "Process standardizations & immutable SOP codices",
        "Cross-departmental Service Level Agreements (SLAs)",
        "Operational bottleneck diagnostic and cadence resolution",
      ],
      deliverables: [
        "Complete Departmental SOP Matrix",
        "Cross-Functional Handoff Map",
        "Escalation & Resolution Cadence Protocols",
        "Executive Velocity Scorecards",
      ],
      impact:
        "Reduces departmental latency by up to 45%, isolates operational friction, and frees founder bandwidth for high-leverage strategic growth.",
      caseRef: {
        client: "Al Rauf Group",
        outcome: "Standardized cross-departmental HR and operational procedures across 12 commercial units.",
      },
      linkText: "Operations Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="4" y="4" width="5" height="5" rx="1" />
          <rect x="4" y="15" width="5" height="5" rx="1" />
          <rect x="15" y="15" width="5" height="5" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 9v6M6.5 12h11v3" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Financial Reporting & Controls",
      subtitle: "Controllership Hygiene, 5-Day Close & Board Reporting",
      description:
        "Turn opaque transaction logs into pristine, board-ready management accounts. We institute rigorous monthly close cycles with transparent disclosures and audit-grade hygiene.",
      bullets: [
        "Rigorous 5-day month-end close schedules",
        "GAAP & IFRS multi-entity reconciliation hygiene",
        "Executive KPI flash reports & automated variance flags",
      ],
      deliverables: [
        "Unified Chart of Accounts",
        "Automated Multi-Entity Balance Sheet Sync",
        "Monthly Financial Close Checklist & Audit Trail",
        "Executive Board-Deck Reporting Engine",
      ],
      impact:
        "Replaces financial guesswork with crystal-clear visibility, eliminating delayed closings and protecting valuation integrity.",
      caseRef: {
        client: "Al Rauf Group",
        outcome: "34% reduction in reporting variance via automated ledger synchronization.",
      },
      linkText: "Reporting Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 3.5h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4.5h6V3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "FP&A & Cash Flow Architecture",
      subtitle: "13-Week Cash Flow Engine, Sensitivity & Runway Modeling",
      description:
        "Dynamic forecasting models that translate raw accounting numbers into actionable forward-looking leverage. Model hiring, capex decisions, and stress-test liquidity.",
      bullets: [
        "Rolling 13-week liquidity engines updated weekly",
        "Unit economics & contribution margin breakdown",
        "Scenario stress-testing & runway variance sensitivity",
      ],
      deliverables: [
        "Live 13-Week Cash Flow Model",
        "Dynamic Headcount & Capacity Planning Tool",
        "Customer Acquisition vs LTV Modeling Matrix",
        "Scenario Stress-Testing Dashboard",
      ],
      impact:
        "Ensures zero cash crunches during rapid scaling, providing executive visibility 90+ days before liquidity decisions hit bank accounts.",
      caseRef: {
        client: "Aeon & Trisl",
        outcome: "Real-time revenue and settlement forecasting deployed for 180+ active brokers across 3 countries.",
      },
      linkText: "FP&A Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Finance & Accounting Advisory",
      subtitle: "Controllership Oversight & Valuation Protection",
      description:
        "Institutional oversight, segregation of duties, and audit preparedness to protect valuation integrity during financings, audits, and leadership transitions.",
      bullets: [
        "Restructuring complex multi-company charts of accounts",
        "Internal controls & separation of duties matrices",
        "Year-end external audit management and facilitation",
      ],
      deliverables: [
        "Inter-company Transfer Pricing Guidelines",
        "Internal Financial Controls Matrix",
        "Clean Historical General Ledger Sanitization",
        "External Auditor Working Paper Packets",
      ],
      impact:
        "Guarantees 100% statutory compliance, insulates executives from personal liability, and eliminates costly audit adjustments.",
      caseRef: {
        client: "KAM Associates",
        outcome: "+$420,000 liquidity unlocked by automating WIP billing and client invoice cycles.",
      },
      linkText: "Accounting Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-7 4m7-4l7 4M5 7l-2.5 5h5L5 7zm14 0l-2.5 5h5L19 7zM9 21h6" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Systems & Strategic Setup",
      subtitle: "ERP, CRM & Automation Without Technical Debt",
      description:
        "Selection, architecture, and deployment of modern platforms (NetSuite, QuickBooks, HubSpot, ClickUp) calibrated to your actual workflows rather than software vendor sales pitches.",
      bullets: [
        "Software stack audit, vendor consolidation & license pruning",
        "Cloud ERP/CRM configuration tailored to operational realities",
        "Secure automated middleware webhooks and data pipelines",
      ],
      deliverables: [
        "Systems Architecture Schema & Data Flow Map",
        "Clean Field-Mapping Migration Plan",
        "Custom Automated Integrations & Notification Webhooks",
        "User Permission & Access Governance Matrix",
      ],
      impact:
        "Eliminates duplicate software spend, cuts manual data entry by 80%, and establishes an immutable single source of truth.",
      caseRef: {
        client: "Advance Apparels",
        outcome: "Turnaround cycle time contracted by 22 business days via automated inventory reconciliation.",
      },
      linkText: "Systems Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="12" cy="12" r="2.2" />
          <circle cx="6" cy="7" r="1.8" />
          <circle cx="18" cy="7" r="1.8" />
          <circle cx="6" cy="17" r="1.8" />
          <circle cx="18" cy="17" r="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.6 8.2l2.9 2.5m3 2.6l2.9 2.5m-8.8 0l2.9-2.5m3-2.6l2.9-2.5" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Growth & Capital Strategy",
      subtitle: "Commercial Architecture, Unit Economics & Roadmap Execution",
      description:
        "Calibrated commercial models, packaging architecture, and operational roadmaps that support commercial expansion without organizational collapse.",
      bullets: [
        "Scalable pricing & packaging tier architecture",
        "Customer acquisition unit economics & payback calibration",
        "Capital expenditure roadmaps & capacity forecasting",
      ],
      deliverables: [
        "Pricing Elasticity & Margin Model",
        "Commercial Deal Approval Matrix",
        "Quarterly Strategic OKR & Milestone Roadmap",
        "Sales Incentive & Commission Calculator",
      ],
      impact:
        "Aligns sales momentum directly with bottom-line profitability so growth generates cash instead of consuming it.",
      caseRef: {
        client: "Aeon & Trisl",
        outcome: "Automated split commission formulas eliminated 100% of internal compensation disputes.",
      },
      linkText: "Strategy Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <polyline points="3 17 8.5 11.5 13.5 16.5 21 8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="3" cy="17" r="1.5" fill="currentColor" />
          <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" />
          <circle cx="13.5" cy="16.5" r="1.5" fill="currentColor" />
          <circle cx="21" cy="8" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "HR & People Governance",
      subtitle: "Scorecards, Compensation Bands & Institutional Onboarding",
      description:
        "Transform personnel management from unstructured staffing into structured organizational architecture. Objective KPI indices, clear compensation bands, and statutory compliance workflows.",
      bullets: [
        "Clear role scorecards & transparent KPI definitions",
        "Compensation benchmarking & structured 30/60/90 onboarding",
        "Employment handbook governance & statutory labor compliance",
      ],
      deliverables: [
        "Universal Role Scorecard Repository",
        "30-60-90 Day Milestone Onboarding Framework",
        "Tiered Compensation & Performance Bands",
        "Employee Policy Codex & Escalation Protocol",
      ],
      impact:
        "Stabilizes core talent retention, cuts onboarding ramp-up time by 50%, and insulates the enterprise against compliance infractions.",
      caseRef: {
        client: "Al Rauf Group",
        outcome: "100% statutory labor-law adherence and zero compliance infractions across regional audits.",
      },
      linkText: "People Practice",
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="9" cy="8" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18.5c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 5.5a2.8 2.8 0 010 5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 18.5c0-2.3-1.6-4.2-3.8-4.8" />
        </svg>
      ),
    },
  ];

  const current = practices[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % practices.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + practices.length) % practices.length);

  return (
    <section id="focus-areas" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden">
      <ScrollReveal direction="right" distance={50} duration={850}>
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-9 lg:p-11 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#143524]/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase drop-shadow-sm">
                CORE COMPETENCIES
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#A3C8B3] px-2 py-0.5 rounded bg-[#072416] border border-[#1b4b32]">
                PRACTICE CAROUSEL &bull; 0{activeIndex + 1} / 0{practices.length}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#FFFFFF] leading-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              What We Focus On &bull; 7 Advisory Disciplines
            </h2>
            <p className="text-[#C8DED2] text-sm sm:text-[14.5px] leading-relaxed font-light">
              Interactive practice carousel. Explore strategic methodology, key systems deliverables, executive outcomes, and verified evidence.
            </p>
          </div>

          {/* Carousel Next/Prev Nav */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`/services#service-${current.id}`}
              className="text-xs sm:text-sm font-semibold text-[#E8C87A] hover:text-[#F3DA96] transition-colors mr-2 hidden sm:inline-flex items-center gap-1.5"
            >
              <span>View All 7 Scopes</span>
              <span>&rarr;</span>
            </Link>

            <button
              onClick={prev}
              type="button"
              aria-label="Previous Practice"
              className="cursor-pointer w-10 h-10 rounded-xl bg-[#061e13] border border-[#1b4b32] text-[#E8C87A] hover:bg-[#0c3120] hover:border-[#E8C87A]/40 flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              &larr;
            </button>
            <button
              onClick={next}
              type="button"
              aria-label="Next Practice"
              className="cursor-pointer w-10 h-10 rounded-xl bg-[#061e13] border border-[#1b4b32] text-[#E8C87A] hover:bg-[#0c3120] hover:border-[#E8C87A]/40 flex items-center justify-center transition-all active:scale-95 shadow-sm"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Practice Selector Tabs */}
        <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto no-scrollbar border-b border-[#112d1e]">
          {practices.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveIndex(idx);
                setActiveLayer("overview");
              }}
              className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 flex items-center gap-2 ${
                idx === activeIndex
                  ? "bg-[#E8C87A] text-[#05170F] shadow-[0_2px_12px_rgba(232,200,122,0.25)]"
                  : "bg-[#061d12] border border-[#173e2a] text-[#A6C9B6] hover:text-white hover:border-[#20573b]"
              }`}
            >
              <span className="text-[10px] opacity-70 font-mono">0{p.id}.</span>
              <span>{p.title.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Practice Card with Layered Content */}
        <div className="pt-6">
          <div className="rounded-2xl bg-[#030c07]/90 border border-[#18422d] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300">
            {/* Card Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#123322]">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#072416] border border-[#1d5939] flex items-center justify-center shrink-0 shadow-sm">
                  {current.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFFFF] leading-snug">
                    {current.id}. {current.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#E8C87A] font-medium mt-0.5">
                    {current.subtitle}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#86AB96] tracking-wider uppercase px-2.5 py-1 rounded bg-[#061e12] border border-[#19472e] shrink-0 hidden sm:inline-block">
                PRACTICE PILLAR #0{current.id}
              </span>
            </div>

            {/* Layer Tabs */}
            <div className="flex items-center gap-2 my-6 p-1.5 rounded-xl bg-[#05180f] border border-[#143d28] overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveLayer("overview")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "overview"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                1. Strategic Focus
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("deliverables")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "deliverables"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                2. Key Deliverables
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("impact")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "impact"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                3. Measurable Impact
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer("case")}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeLayer === "case"
                    ? "bg-[#123e27] text-[#FAF7F0] shadow-sm font-semibold border border-[#23633f]"
                    : "text-[#8CAFA0] hover:text-[#FAF7F0]"
                }`}
              >
                4. Client Evidence
              </button>
            </div>

            {/* Dynamic Layer Box */}
            <div className="min-h-[150px] flex flex-col justify-between">
              {activeLayer === "overview" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <p className="text-[#D6E6DE] text-sm sm:text-base leading-relaxed font-light">
                    {current.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                    {current.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="rounded-xl bg-[#061d11] border border-[#16422b] p-3 text-xs text-[#C5E1D1]">
                        <span className="text-[#E8C87A] font-bold mr-1.5">&bull;</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLayer === "deliverables" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10.5px] font-mono text-[#E8C87A] uppercase tracking-wider block">
                    CODIFIED ARTIFACTS &amp; SYSTEMS IMPLEMENTED
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#061e12] border border-[#19472e] text-xs text-[#E8EFEA]">
                        <span className="w-5 h-5 rounded bg-[#0a2f1d] border border-[#1d5b39] flex items-center justify-center text-[#E8C87A] text-[10px] shrink-0 font-bold">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLayer === "impact" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="rounded-xl bg-[#061e12] border border-[#1a4f32] p-4">
                    <span className="text-[10px] font-mono text-[#C5A566] uppercase tracking-wider block mb-1">
                      EXECUTIVE BUSINESS BENEFIT
                    </span>
                    <p className="text-sm sm:text-base text-[#FAF7F0] font-light leading-relaxed">
                      {current.impact}
                    </p>
                  </div>
                </div>
              )}

              {activeLayer === "case" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="border-l-3 border-[#E8C87A] pl-4 py-2 bg-[#061e12]/80 rounded-r-xl">
                    <span className="text-xs font-mono uppercase text-[#A3C8B3] tracking-wider block mb-1">
                      MANDATE PROOF &bull; {current.caseRef.client}
                    </span>
                    <p className="font-serif italic text-base text-[#F3DA96]">
                      {current.caseRef.outcome}
                    </p>
                    <Link
                      href={`/case-histories?client=${encodeURIComponent(current.caseRef.client)}#deep-dive`}
                      className="inline-block text-xs text-[#A3C8B3] hover:text-[#FAF7F0] underline mt-2"
                    >
                      Inspect verified case history &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* Bottom Action Strip */}
              <div className="pt-6 mt-6 border-t border-[#123322] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {practices.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setActiveIndex(dotIdx);
                        setActiveLayer("overview");
                      }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === activeIndex ? "w-7 bg-[#E8C87A]" : "w-2 bg-[#1b4b32]"
                      }`}
                      aria-label={`Go to practice ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="cursor-pointer text-xs sm:text-[13px] font-medium text-[#8FB7A1] hover:text-[#FAF7F0] transition-colors"
                  >
                    Consult on this Pillar
                  </button>
                  <Link
                    href={`/services#service-${current.id}`}
                    className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8C87A] text-[#05170F] text-xs sm:text-[13px] font-semibold hover:bg-[#F3DA96] active:scale-98 transition-all shadow-sm"
                  >
                    <span>View Full Service Scope</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}