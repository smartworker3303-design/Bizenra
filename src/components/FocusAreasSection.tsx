"use client";

interface FocusArea {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  linkText: string;
  icon: React.ReactNode;
}

interface FocusAreasSectionProps {
  onOpenConsultation?: () => void;
}

export default function FocusAreasSection({ onOpenConsultation }: FocusAreasSectionProps) {
  const standardAreas: FocusArea[] = [
    {
      id: 1,
      title: "1. Business Operations",
      description:
        "Eliminate friction in day-to-day workflow. We map handoffs, eliminate shadow processes, and establish measurable accountability loops.",
      bullets: [
        "Process standardizations & SOPs",
        "Cross-department SLA protocols",
        "Bottleneck diagnostic resolution",
      ],
      linkText: "Operations Practice",
      icon: (
        <svg
          className="w-5 h-5 text-[#E8C87A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <rect x="4" y="4" width="5" height="5" rx="1" />
          <rect x="4" y="15" width="5" height="5" rx="1" />
          <rect x="15" y="15" width="5" height="5" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 9v6M6.5 12h11v3" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "2. Financial Reporting",
      description:
        "Turn opaque transaction logs into pristine management accounts. Accurate monthly close cycles with transparent board-ready disclosures.",
      bullets: [
        "5-day month-end close schedules",
        "GAAP & IFRS reconciliation hygiene",
        "Executive KPI financial flash reports",
      ],
      linkText: "Reporting Practice",
      icon: (
        <svg
          className="w-5 h-5 text-[#E8C87A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 3.5h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4.5h6V3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "3. FP&A Architecture",
      description:
        "Dynamic financial modeling, Rolling 13-week cash projections, and capital sensitivity analysis tailored to founder decisions.",
      bullets: [
        "Rolling 13-week cash flow engines",
        "Unit economics & contribution margins",
        "Scenario modeling & runway testing",
      ],
      linkText: "FP&A Practice",
      icon: (
        <svg
          className="w-5 h-5 text-[#E8C87A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "4. Finance & Accounting",
      description:
        "Controllership oversight, clean chart of accounts design, and rigorous audit preparedness to protect valuation integrity.",
      bullets: [
        "Restructuring charts of accounts",
        "Internal controls & separation of duties",
        "Year-end external audit facilitation",
      ],
      linkText: "Accounting Practice",
      icon: (
        <svg
          className="w-5 h-5 text-[#E8C87A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m0-18l-7 4m7-4l7 4M5 7l-2.5 5h5L5 7zm14 0l-2.5 5h5L19 7zM9 21h6"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "5. Systems & Setup",
      description:
        "Selection and rollout of enterprise platforms (NetSuite, QuickBooks, HubSpot, ClickUp, Notion) without technical debt.",
      bullets: [
        "Software stack audit & consolidation",
        "Cloud ERP migration & configuration",
        "Secure automation workflows & webhooks",
      ],
      linkText: "Systems Practice",
      icon: (
        <svg
          className="w-5 h-5 text-[#E8C87A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="12" cy="12" r="2.2" />
          <circle cx="6" cy="7" r="1.8" />
          <circle cx="18" cy="7" r="1.8" />
          <circle cx="6" cy="17" r="1.8" />
          <circle cx="18" cy="17" r="1.8" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.6 8.2l2.9 2.5m3 2.6l2.9 2.5m-8.8 0l2.9-2.5m3-2.6l2.9-2.5"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "6. Growth & Strategy",
      description:
        "Calibrated commercial models, market-entry feasibility, and operational roadmaps that support scaling without organizational collapse.",
      bullets: [
        "Scalable pricing & packaging architecture",
        "Customer acquisition unit economics",
        "Capacity & capital allocation roadmaps",
      ],
      linkText: "Strategy Practice",
      icon: (
        <svg
          className="w-5 h-5 text-[#E8C87A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <polyline points="3 17 8.5 11.5 13.5 16.5 21 8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="3" cy="17" r="1.5" fill="currentColor" />
          <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" />
          <circle cx="13.5" cy="16.5" r="1.5" fill="currentColor" />
          <circle cx="21" cy="8" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="practice-areas" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
              CORE COMPETENCIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FFFFFF] leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              What We Focus On
            </h2>
            <p className="text-[#A3B8AC] text-sm sm:text-[15px] font-light leading-relaxed">
              Seven targeted practice areas designed to eliminate operational chaos and establish enterprise-grade financial resilience.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="cursor-pointer group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFFFFF] hover:text-[#E8C87A] transition-colors drop-shadow-sm"
            >
              <span>Explore Detailed Service Scope</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards 1 to 6 */}
          {standardAreas.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-7 hover:border-[#20583A] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-[#051C11] border border-[#1A4B31] flex items-center justify-center mb-5 shadow-sm">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#FFFFFF] leading-snug mb-3 drop-shadow-sm">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#A3B8AC] font-light leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#DCEAE2] font-light">
                      <span className="text-[#648F76] leading-tight select-none font-bold">&bull;</span>
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-[#123120]">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="cursor-pointer group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8C87A] hover:text-[#FFFFFF] transition-colors"
                >
                  <span>{card.linkText}</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          ))}

          {/* Card 7: HR Management & People Infrastructure (Spans 2 columns on lg & md) */}
          <div className="flex flex-col justify-between rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-7 hover:border-[#20583A] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm md:col-span-2 lg:col-span-2">
            <div>
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-[#051C11] border border-[#1A4B31] flex items-center justify-center mb-5 shadow-sm">
                <svg
                  className="w-5 h-5 text-[#E8C87A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <circle cx="9" cy="8" r="3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 18.5c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 5.5a2.8 2.8 0 010 5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 18.5c0-2.3-1.6-4.2-3.8-4.8" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#FFFFFF] leading-snug mb-3 drop-shadow-sm">
                7. HR Management &amp; People Infrastructure
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#A3B8AC] font-light leading-relaxed mb-6">
                Transform human operations from unstructured staffing into structured organizational architecture. Performance evaluation systems, clear compensation bands, employee handbooks, and compliance workflows tailored to fast-scaling US ventures.
              </p>

              {/* 2-Column Bullets Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-xs text-[#DCEAE2] font-light">
                    <span className="text-[#648F76] leading-tight select-none font-bold">&bull;</span>
                    <span className="leading-snug">Clear role scorecards &amp; KPI definitions</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#DCEAE2] font-light">
                    <span className="text-[#648F76] leading-tight select-none font-bold">&bull;</span>
                    <span className="leading-snug">Compensation benchmarking &amp; review cycles</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-xs text-[#DCEAE2] font-light">
                    <span className="text-[#648F76] leading-tight select-none font-bold">&bull;</span>
                    <span className="leading-snug">Structured hiring &amp; onboarding pipelines</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#DCEAE2] font-light">
                    <span className="text-[#648F76] leading-tight select-none font-bold">&bull;</span>
                    <span className="leading-snug">Employment policy &amp; handbook governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 8: People Stewardship Callout Card (Spans 1 column on lg, 2 columns on md) */}
          <div className="flex flex-col justify-between rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-7 hover:border-[#20583A] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <div>
              <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.2em] text-[#8FB7A1] uppercase mb-4 drop-shadow-sm">
                PEOPLE STEWARDSHIP
              </span>
              <h3 className="font-serif text-xl sm:text-[23px] font-normal text-[#FFFFFF] leading-snug drop-shadow-sm">
                Operational clarity empowers high performance.
              </h3>
            </div>

            <div className="pt-6 sm:pt-8">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="cursor-pointer group/link inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#E8C87A] hover:text-[#FFFFFF] transition-colors"
              >
                <span>View HR Scope Details</span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
