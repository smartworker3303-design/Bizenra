"use client";

import Link from "next/link";
import AIAssistantBuddy from "@/components/AIAssistantBuddy";

interface FooterProps {
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {

  const practiceLinks = [
    { label: "Operations & Workflow", href: "/services" },
    { label: "Financial Reporting", href: "/services" },
    { label: "FP&A Architecture", href: "/services" },
    { label: "Accounting Advisory", href: "/services" },
    { label: "Systems Setup", href: "/services" },
    { label: "Growth & Strategy", href: "/services" },
    { label: "HR Management", href: "/services" },
  ];

  const corporateLinks = [
    { label: "Home Overview", href: "/" },
    { label: "Case Histories (8 Roles)", href: "/case-histories" },
    { label: "About Stewardship", href: "/about" },
    { label: "Advisory Insights", href: "/insights" },
    { label: "Consultation Office", href: "/contact" },
  ];

  const handleAction = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <footer className="w-full bg-[#030B07] border-t border-[#133021] text-[#A0B4A8] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <span className="font-serif text-2xl sm:text-[26px] font-medium text-[#FFFFFF] tracking-wide">
                Bizenra
              </span>
            </Link>

            <p className="text-xs sm:text-[13px] text-[#A0B4A8] max-w-sm font-light leading-relaxed">
              Smarter Systems. Stronger Businesses. Precision operational architecture, FP&amp;A, and strategic
              leadership for discerning enterprises.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-[#071911] border border-[#18442F] text-[11px] font-medium tracking-wide text-[#8EA396]">
                Corporate Advisory &amp; Operations
              </span>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A566] mb-4">
              PRACTICE AREAS
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {practiceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FAF7F0] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A566] mb-4">
              CORPORATE
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {corporateLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FAF7F0] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Advisory HQ */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A566] mb-4">
              ADVISORY HQ
            </h4>
            <div className="space-y-2 text-xs sm:text-[13px] text-[#A0B4A8]">
              <p>Corporate Practice Group</p>
              <p>Institutional Engagements &amp; Inquiries</p>
              <p>
                <a
                  href="mailto:inquiries@bizenra.com"
                  className="text-[#E8C87A] hover:underline"
                >
                  inquiries@bizenra.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleAction}
                type="button"
                className="cursor-pointer text-xs font-medium text-[#FAF7F0] hover:text-[#E8C87A] transition-colors flex items-center gap-1.5"
              >
                <span>Schedule Briefing</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory & Institutional Notice Banner */}
        <div className="pt-8 pb-6 border-t border-[#133021]/80">
          <p className="text-center text-[10.5px] sm:text-[11px] text-[#6E8A7B] font-light leading-relaxed max-w-4xl mx-auto px-4">
            Strict Compliance Note: Professional Experience &amp; Case Histories reflect direct professional and
            operational employment records, confidential client engagements, and structured advisory mandates executed
            under strict institutional governance standards.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Governance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E8A7B] gap-4">
          <p>&copy; 2025 Bizenra Advisory. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-[#A0B4A8] transition-colors">
              Governance
            </Link>
            <span className="hover:text-[#A0B4A8] transition-colors cursor-pointer">
              Confidentiality Protocol
            </span>
          </div>
        </div>
      </div>

      {/* Interactive AI Assistant Buddy */}
      <AIAssistantBuddy onOpenConsultation={onOpenConsultation} />
    </footer>
  );
}
