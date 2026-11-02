"use client";

import Link from "next/link";

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
              <div className="inline-block px-3 py-1.5 rounded-md bg-[#051C11] border border-[#1A4B31] text-[#6E9580] text-[11px] font-medium tracking-wide">
                Corporate Advisory &amp; Operations
              </div>
            </div>
          </div>

          {/* Column 2: PRACTICE AREAS */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FFFFFF] font-semibold mb-4">
              PRACTICE AREAS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-light">
              {practiceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#E8C87A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CORPORATE */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#FFFFFF] font-semibold mb-4">
              CORPORATE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-light">
              {corporateLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#E8C87A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: ADVISORY HQ */}
          <div className="lg:col-span-3 space-y-2.5 text-xs sm:text-[13px]">
            <h4 className="text-xs uppercase tracking-widest text-[#FFFFFF] font-semibold mb-4">
              ADVISORY HQ
            </h4>
            <p className="text-[#A0B4A8] font-light leading-relaxed">
              Corporate Practice Group
            </p>
            <p className="text-[#A0B4A8] font-light leading-relaxed">
              Institutional Engagements &amp; Inquiries
            </p>
            <p className="pt-1">
              <a
                href="mailto:inquiries@bizenra.com"
                className="text-[#E8C87A] hover:underline transition-colors"
              >
                inquiries@bizenra.com
              </a>
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={handleAction}
                className="cursor-pointer group inline-flex items-center gap-1.5 font-semibold text-[#E8C87A] hover:text-[#FFFFFF] transition-colors text-xs sm:text-[13px]"
              >
                <span>Schedule Briefing</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Strict Compliance Note */}
        <div className="pt-8 pb-6 border-t border-[#0F291C]">
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

      {/* Floating "Buddy" Bizenra Companion Widget */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={handleAction}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#04140B]/95 border border-[#1A4B31] shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-[#276445] transition-all duration-200 group cursor-pointer"
          aria-label="Buddy - Bizenra Companion"
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
          <div className="text-left">
            <div className="text-xs font-semibold text-white leading-tight">
              Buddy
            </div>
            <div className="text-[10px] text-[#8EA396] font-light leading-none">
              Bizenra Companion
            </div>
          </div>
        </button>
      </div>
    </footer>
  );
}
