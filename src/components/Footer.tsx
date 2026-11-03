"use client";

import { useState } from "react";
import Link from "next/link";

interface FooterProps {
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const [bubbleOpen, setBubbleOpen] = useState(true);

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

      {/* Floating "Advisory Buddy" Intelligence Widget (matching design specification) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Speech / Intelligence Bubble */}
        {bubbleOpen && (
          <div className="w-[280px] sm:w-[310px] rounded-xl bg-[#061810]/95 border border-[#1A4B31] p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
            <div className="flex items-center justify-between pb-2 border-b border-[#143524] mb-2.5">
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[#C5A566] uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block animate-pulse" />
                BIZENRA INTELLIGENCE
              </span>
              <button
                type="button"
                onClick={() => setBubbleOpen(false)}
                className="text-[#6E8A7B] hover:text-[#FAF7F0] text-xs p-0.5 cursor-pointer"
                aria-label="Close message"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#E8EFEA] font-light leading-relaxed mb-3">
              Hi, I&apos;m Buddy. What would you like to improve in your business today?
            </p>

            <div className="flex items-center gap-2 text-[11px]">
              <button
                type="button"
                onClick={handleAction}
                className="cursor-pointer px-2.5 py-1 rounded bg-[#133b27] border border-[#23583e] text-[#E8C87A] font-medium hover:bg-[#1b4e33] transition-colors"
              >
                Start Advisory Prompt
              </button>
              <button
                type="button"
                onClick={handleAction}
                className="cursor-pointer px-2.5 py-1 rounded bg-[#082417] border border-[#1A4B31] text-[#FAF7F0] font-light hover:text-[#E8C87A] transition-colors"
              >
                Direct AI Partner
              </button>
            </div>
          </div>
        )}

        {/* Floating Pill Button */}
        <button
          type="button"
          onClick={() => {
            if (!bubbleOpen) {
              setBubbleOpen(true);
            } else {
              handleAction();
            }
          }}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#04140B]/95 border border-[#1A4B31] shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-[#276445] transition-all duration-200 group cursor-pointer"
          aria-label="Advisory Buddy"
        >
          <div className="w-6 h-6 rounded-full bg-[#082417] border border-[#22573B] flex items-center justify-center shrink-0">
            <svg
              className="w-3.5 h-3.5 text-[#E8C87A]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="5" y="7" width="14" height="12" rx="3" />
              <circle cx="9" cy="12" r="1.2" fill="currentColor" />
              <circle cx="15" cy="12" r="1.2" fill="currentColor" />
              <path strokeLinecap="round" d="M12 4v3m-3-3h6" />
            </svg>
          </div>
          <span className="text-xs font-medium text-[#FAF7F0] group-hover:text-[#E8C87A] transition-colors">
            Advisory Buddy
          </span>
        </button>
      </div>
    </footer>
  );
}
