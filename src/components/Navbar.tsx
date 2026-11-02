"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Histories", href: "/case-histories" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#05170F]/85 border-b border-[#1E4D35]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group focus:outline-none">
          <span className="font-serif text-2xl sm:text-[26px] font-semibold tracking-wide text-[#FAF7F0] group-hover:text-[#E8C87A] transition-colors leading-none">
            Bizenra
          </span>
          <span className="text-[10px] tracking-[0.3em] font-sans font-medium text-[#C5A566] uppercase mt-1 leading-none">
            Advisory
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#E8C87A] font-semibold"
                    : "text-[#D6E2DB] hover:text-[#FAF7F0]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3.5">
          <button
            onClick={onOpenConsultation}
            type="button"
            className="cursor-pointer px-5 py-2.5 rounded bg-[#E8C87A] text-[#05160E] text-[13px] font-semibold tracking-wide hover:bg-[#F3DA96] active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(232,200,122,0.22)]"
          >
            Book a Consultation
          </button>

          {/* User / Profile Icon Button */}
          <button
            type="button"
            aria-label="Account Access"
            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-[#072016] border border-[#194732] text-[#8CB49B] hover:text-[#E8C87A] hover:border-[#E8C87A]/40 transition-colors"
          >
            <svg
              className="w-4.5 h-4.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onOpenConsultation}
            type="button"
            className="cursor-pointer px-3 py-1.5 rounded bg-[#E8C87A] text-[#05160E] text-[11px] font-semibold tracking-wide"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md text-[#D6E2DB] hover:text-white hover:bg-[#072016] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#143525] bg-[#05140D]/95 px-5 py-6 space-y-4 backdrop-blur-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-1.5 transition-colors ${
                    isActive
                      ? "text-[#E8C87A] font-semibold"
                      : "text-[#D6E2DB] hover:text-[#FAF7F0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[#143525]/70 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              type="button"
              className="w-full py-3 rounded bg-[#E8C87A] text-[#05160E] text-sm font-semibold text-center tracking-wide hover:bg-[#F3DA96]"
            >
              Book a Consultation
            </button>
            <div className="text-center text-xs text-[#7B9E8A]">
              info@bizenra.com • Institutional Advisory
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
