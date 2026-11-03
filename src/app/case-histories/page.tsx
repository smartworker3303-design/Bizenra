"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function CaseHistoriesPage() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 2. Top Breadcrumb & Archive Identification Bar */}
      <section className="w-full border-b border-[#143524]/60 bg-[#04120a]/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px]">
          {/* Breadcrumbs Left */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#7A9E8D] uppercase font-medium tracking-wider">
            <Link href="/" className="hover:text-[#FAF7F0] transition-colors">
              HOME
            </Link>
            <span className="text-[#365947]">/</span>
            <Link href="/case-histories" className="hover:text-[#FAF7F0] transition-colors">
              CASE HISTORIES
            </Link>
            <span className="text-[#365947]">/</span>
          </nav>

          {/* Archive Status Right */}
          <div className="flex items-center gap-3">
            <span className="text-[#7A9E8D] font-mono tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block animate-pulse" />
              ARCHIVE ID: BZN-EMP-0492
            </span>
            <span className="text-[#1D4A32] select-none">|</span>
            <span className="text-[#C5A566] font-medium tracking-wide flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#C5A566] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Institutional Record</span>
            </span>
          </div>
        </div>
      </section>

      <main className="flex-1 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* 3. Hero Section (Pixel-accurate to screenshot) */}
          <section className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Left Column: Mandate Header & Tags */}
            <div className="max-w-3xl">
              {/* Verified Mandate Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#E8C87A] text-[#05170F] text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase mb-5 shadow-sm">
                <svg
                  className="w-3.5 h-3.5 text-[#05170F] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>VERIFIED PROFESSIONAL MANDATE • STRICT EMPLOYMENT EVIDENCE</span>
              </div>

              {/* Editorial Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#FAF7F0] font-normal leading-[1.18] tracking-tight mb-4">
                Al Rauf Group: End-to-End People Architecture &amp; Lifecycle Standardization
              </h1>

              {/* Sub-headline */}
              <p className="text-[#A2BEAF] text-sm sm:text-base font-light leading-relaxed max-w-2xl mb-7">
                How institutional HR governance, digitized SOP codices, and transparent KPI metrics stabilized talent retention across an expanding commercial enterprise.
              </p>

              {/* 3 Pill Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Pill 1: Human Resource Manager (Mint) */}
                <span className="px-3.5 py-1.5 rounded-md bg-[#A7F3D0] text-[#064E3B] text-xs font-semibold tracking-wide">
                  Human Resource Manager
                </span>

                {/* Pill 2: Real Estate & Commercial Enterprises (White/Cream) */}
                <span className="px-3.5 py-1.5 rounded-md bg-[#FAF7F0] text-[#071911] text-xs font-medium tracking-wide">
                  Real Estate &amp; Commercial Enterprises
                </span>

                {/* Pill 3: Workforce Governance Audit (White/Cream) */}
                <span className="px-3.5 py-1.5 rounded-md bg-[#FAF7F0] text-[#071911] text-xs font-medium tracking-wide">
                  Workforce Governance Audit
                </span>
              </div>
            </div>

            {/* Right Column: Mandate Governance Card */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#163826] p-5 sm:p-6 w-full sm:w-[300px] lg:w-[310px] shrink-0 shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#143524] mb-4">
                <span className="text-[10.5px] font-semibold tracking-[0.16em] text-[#7A9E8D] uppercase">
                  MANDATE GOVERNANCE
                </span>
                <div className="w-5 h-5 rounded bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A]">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Primary Objective */}
              <div className="mb-4">
                <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                  PRIMARY OBJECTIVE
                </span>
                <p className="text-sm font-semibold text-[#FAF7F0] leading-snug">
                  Talent Retention &amp; Operational Codification
                </p>
              </div>

              {/* Compliance State */}
              <div className="mb-5">
                <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                  COMPLIANCE STATE
                </span>
                <p className="font-serif text-[22px] text-[#E8C87A] font-normal leading-tight mb-1">
                  100% Statutory Adherence
                </p>
                <p className="text-xs text-[#7A9E8D] font-light leading-snug">
                  Zero labor-law infractions across audited departments
                </p>
              </div>

              {/* Bottom Explore Link */}
              <div className="pt-3 border-t border-[#143524]">
                <a
                  href="#governance-matrix"
                  className="text-xs font-semibold text-[#FAF7F0] hover:text-[#E8C87A] transition-colors flex items-center justify-between group"
                >
                  <span>Explore 10-Point Architectural Record</span>
                  <span className="text-sm group-hover:translate-y-0.5 transition-transform">
                    &darr;
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* 4. Executive Fact Sheet: Institutional Governance Matrix */}
          <section id="governance-matrix" className="pt-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-1.5">
                  EXECUTIVE FACT SHEET
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal tracking-tight">
                  Institutional Governance Matrix
                </h2>
              </div>
              <p className="text-xs text-[#7A9E8D] font-light max-w-md text-left md:text-right leading-relaxed">
                Structured operational baseline verifying organizational authority, mandate boundaries, and observed qualitative outcomes.
              </p>
            </div>

            {/* Two Side-by-Side Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              
              {/* Card 1 (Left): Organizational Parameters */}
              <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-7 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Card Title & Confirmed Badge */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#143524] mb-5">
                    <h3 className="font-serif text-2xl text-[#FAF7F0] font-normal">
                      Organizational Parameters
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#062817] border border-[#0d4a2b] text-[#34d399] text-[10px] font-semibold tracking-wider uppercase">
                      RECORD CONFIRMED
                    </span>
                  </div>

                  {/* Parameter Rows */}
                  <div className="space-y-3.5 text-xs sm:text-[13px]">
                    {/* Row 1: Organization */}
                    <div className="py-1 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-[#7A9E8D] w-36 shrink-0 font-medium">
                        Organization
                      </span>
                      <span className="text-[#FAF7F0]">
                        <strong className="font-semibold text-[#FAF7F0]">Al Rauf Group</strong>{" "}
                        <span className="text-[#A2BEAF] font-light">(Commercial &amp; Real Estate Enterprises)</span>
                      </span>
                    </div>

                    {/* Row 2: Mandate Role (Highlighted row) */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="text-[#7A9E8D] w-36 shrink-0 font-medium">
                        Mandate Role
                      </span>
                      <span className="text-sm font-semibold text-[#E8C87A]">
                        Human Resource Manager
                      </span>
                    </div>

                    {/* Row 3: Governance Standard */}
                    <div className="py-1 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-[#7A9E8D] w-36 shrink-0 font-medium">
                        Governance Standard
                      </span>
                      <span className="text-[#D6E2DB] font-light leading-relaxed">
                        Authentic operational employment record &amp; internal advisory review.
                      </span>
                    </div>

                    {/* Row 4: Focus Domain (Highlighted row) */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                      <span className="text-[#7A9E8D] w-36 shrink-0 font-medium pt-0.5">
                        Focus Domain
                      </span>
                      <span className="text-[#D6E2DB] font-light leading-relaxed">
                        Workforce Lifecycle, Statutory Compliance, KPI Frameworks, Organizational SOPs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 (Right): Verified Outcomes */}
              <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-7 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Card Title & Empirical Review Badge */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#143524] mb-5">
                    <h3 className="font-serif text-2xl text-[#FAF7F0] font-normal">
                      Verified Outcomes
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#C5A566] text-[#061810] text-[10px] font-bold tracking-wider uppercase">
                      EMPIRICAL REVIEW
                    </span>
                  </div>

                  {/* Outcome Item 1: Organizational Efficiency */}
                  <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 sm:p-4 flex items-start gap-3.5 mb-3.5">
                    <div className="w-9 h-9 rounded-md bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#34d399] shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF7F0] mb-1">
                        Organizational Efficiency
                      </h4>
                      <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                        Measurable efficiency gains and quantifiable internal productivity through unified team metrics, eliminating role overlap and administrative latency.
                      </p>
                    </div>
                  </div>

                  {/* Outcome Item 2: Lifecycle Stabilization */}
                  <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 sm:p-4 flex items-start gap-3.5 mb-5">
                    <div className="w-9 h-9 rounded-md bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF7F0] mb-1">
                        Lifecycle Stabilization
                      </h4>
                      <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                        Structured, predictable onboarding pipelines, formal milestone check-ins, and strengthened retention workflows stabilizing critical talent pools.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar Row */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-[#FAF7F0] font-medium">
                      Onboarding Cadence Standardization (Day 30/60/90)
                    </span>
                    <span className="text-[#E8C87A] font-semibold tracking-wide">
                      100% Deployed
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#04120a] border border-[#143524] overflow-hidden">
                    <div className="w-full h-full bg-[#E8C87A] rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* 5. Global Footer */}
      <Footer onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 6. Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService="Case History Review Mandate"
      />
    </div>
  );
}
