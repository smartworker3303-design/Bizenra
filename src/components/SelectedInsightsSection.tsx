"use client";

import Link from "next/link";

interface InsightArticle {
  id: number;
  tag: string;
  readTime: string;
  title: string;
  description: string;
  typeLabel: string;
  href?: string;
}

interface SelectedInsightsSectionProps {
  onOpenConsultation?: () => void;
}

export default function SelectedInsightsSection({
  onOpenConsultation,
}: SelectedInsightsSectionProps) {
  const articles: InsightArticle[] = [
    {
      id: 1,
      tag: "FINANCIAL VISIBILITY",
      readTime: "6 min read",
      title: "The 13-Week Cash Flow Engine: Why P&L Statements Lie to Fast-Growing Companies",
      description:
        "Accounting profit is not cash in bank. Why operational scale fails at the liquidity intersection and how to construct dynamic forecasting models.",
      typeLabel: "Editorial Analysis",
      href: "/insights",
    },
    {
      id: 2,
      tag: "OPERATIONS & WORKFLOW",
      readTime: "8 min read",
      title: "The Founder’s Trap: Transitioning from Heroic Effort to Documented Systems",
      description:
        "When business growth outstrips personal bandwidth, systems must carry the enterprise. A practical framework for separating operator from orchestrator.",
      typeLabel: "Operational Brief",
      href: "/insights",
    },
    {
      id: 3,
      tag: "SYSTEMS ARCHITECTURE",
      readTime: "5 min read",
      title: "Avoiding ERP Disaster: Why 70% of Software Migrations Fail and How to Succeed",
      description:
        "Software does not solve broken thinking. The prerequisite operational mappings required before signing multi-year SaaS contracts.",
      typeLabel: "Strategic Guide",
      href: "/insights",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-xl">
            <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
              ADVISORY KNOWLEDGE BASE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FFFFFF] leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Selected Business Insights
            </h2>
            <p className="text-[#A3B8AC] text-sm sm:text-[14.5px] font-light leading-relaxed">
              Original analysis and operational perspectives on scaling, governance, and institutional
              financial mechanics.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/insights"
              className="cursor-pointer group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFFFFF] hover:text-[#E8C87A] transition-colors drop-shadow-sm"
            >
              <span>Explore All Insights</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-10">
          {articles.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-6 sm:p-7 hover:border-[#20583A] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm ${
                idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Meta Header: Tag & Read Time */}
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-sans font-semibold tracking-wider text-[#8EA396] uppercase">
                    {item.tag}
                  </span>
                  <span className="font-sans font-light text-[#6F8A7B]">
                    {item.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#FFFFFF] leading-snug my-3.5 drop-shadow-sm hover:text-[#E8C87A] transition-colors">
                  <Link href={item.href || "/insights"}>{item.title}</Link>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#A3B8AC] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#123120] flex items-center justify-between text-xs">
                <span className="text-[#6F8A7B] font-light text-[11px] sm:text-xs">
                  {item.typeLabel}
                </span>

                <Link
                  href={item.href || "/insights"}
                  className="cursor-pointer group/link inline-flex items-center gap-1.5 font-semibold text-[#E8C87A] hover:text-[#FFFFFF] transition-colors"
                >
                  <span>Read Article</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Quote Banner */}
        <div className="rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 py-6 sm:py-8 px-6 sm:px-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <p className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-[#E8EFEA] font-normal drop-shadow-sm leading-snug">
            &ldquo;Clarity turns business challenges into actionable next steps.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
