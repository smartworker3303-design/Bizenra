"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function CaseHistoriesPage() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const initialFivePoints = [
    {
      number: "01",
      title: "Executive Role & Strategic Authority",
      badge: "MANDATE SCOPE",
      description:
        "Spearheaded organization-wide human capital development, managing end-to-end recruitment pipelines, executive compliance, and labor standards across diverse real estate and commercial operations. Established direct reporting cadence with executive leadership to insulate human asset strategy from short-cycle disruptions.",
    },
    {
      number: "02",
      title: "Commercial & Operational Context",
      badge: "ECOSYSTEM STATE",
      description:
        "A multi-unit enterprise in high-demand cycles experiencing rapid workforce scaling without standardized role scorecards or digital employee logs. Commercial teams were operating under asynchronous expectations, leading to departmental siloing and variable operational velocity.",
    },
    {
      number: "03",
      title: "Structural Challenge",
      badge: "FRICTION NODES",
      description:
        "Disparate onboarding procedures across departments, uncalibrated performance reviews leading to retention friction, and unrecorded employee grievance protocols. The absence of an immutable personnel trail amplified compliance vulnerabilities and introduced erratic administrative drag during quarterly review cycles.",
    },
    {
      number: "04",
      title: "Scope of Work Executed",
      badge: "INTERVENTION SCOPE",
      description:
        "Comprehensive drafting of corporate HR SOPs, statutory labor-law compliance audits, implementation of 30/60/90-day onboarding milestones, and administrative coordination across real estate transactions, asset management units, and internal business back-offices.",
    },
    {
      number: "05",
      title: "Methodology & Steps Taken",
      badge: "EXECUTION CADENCE",
      description:
        "Conducted deep departmental talent audits, established standard hiring rubrics to eliminate bias, phased the complete transition from paper logs to centralized digital personnel records, and conducted executive KPI alignment workshops for general managers and team leads.",
    },
  ];

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
                  href="#deep-dive"
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

          {/* 5. The 10-Point Architectural Deep Dive */}
          <section id="deep-dive" className="pt-4 space-y-4">
            {/* Section Header */}
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-2">
                PROCEDURAL RECORD
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal tracking-tight mb-3">
                The 10-Point Architectural Deep Dive
              </h2>
              <p className="text-xs sm:text-sm text-[#A2BEAF] font-light leading-relaxed max-w-2xl">
                A granular breakdown of the organizational conditions, systems interventions, statutory protocols, and permanent operational frameworks engineered during this mandate.
              </p>
            </div>

            {/* Points 01 to 05 */}
            {initialFivePoints.map((item) => (
              <div
                key={item.number}
                className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 shadow-md hover:border-[#1d5236] transition-all"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Left: Number + Vertical Line */}
                  <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-0.5">
                    <span className="font-serif text-2xl sm:text-[28px] text-[#E8C87A] font-normal leading-none">
                      {item.number}
                    </span>
                    <div className="w-px h-8 sm:h-10 bg-[#163e2a] mt-2.5" />
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                      <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] font-normal">
                        {item.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded bg-[#04120a] border border-[#143524] text-[#C5A566] text-[10px] font-semibold tracking-wider uppercase shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Point 06: Systems & Workflows Implemented */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 shadow-md hover:border-[#1d5236] transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-0.5">
                  <span className="font-serif text-2xl sm:text-[28px] text-[#E8C87A] font-normal leading-none">
                    06
                  </span>
                  <div className="w-px h-8 sm:h-10 bg-[#163e2a] mt-2.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] font-normal">
                      Systems &amp; Workflows Implemented
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#04120a] border border-[#143524] text-[#C5A566] text-[10px] font-semibold tracking-wider uppercase shrink-0">
                      ARCHITECTURAL ARTIFACTS
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mt-2.5 mb-4">
                    Engineered durable business artifacts, codifying organizational behavior into standardized modules:
                  </p>

                  {/* 4 Artifact Modules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Module 1 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-semibold text-[#FAF7F0] mb-0.5">
                          Formalized HR Codex
                        </h4>
                        <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                          Complete policy baseline covering conduct, leave, and accountability.
                        </p>
                      </div>
                    </div>

                    {/* Module 2 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-semibold text-[#FAF7F0] mb-0.5">
                          Standardized Escalation Workflows
                        </h4>
                        <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                          Immutable path for grievances and conflict resolution.
                        </p>
                      </div>
                    </div>

                    {/* Module 3 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-semibold text-[#FAF7F0] mb-0.5">
                          Unified Performance Scorecards
                        </h4>
                        <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                          Objective metric indices linked to departmental goals.
                        </p>
                      </div>
                    </div>

                    {/* Module 4 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-semibold text-[#FAF7F0] mb-0.5">
                          Cross-Departmental HR Analytics
                        </h4>
                        <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                          Transparent dashboards monitoring turnover and ramp-up rate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 07: Verified Outcomes & Evidence */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 shadow-md hover:border-[#1d5236] transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-0.5">
                  <span className="font-serif text-2xl sm:text-[28px] text-[#E8C87A] font-normal leading-none">
                    07
                  </span>
                  <div className="w-px h-8 sm:h-10 bg-[#163e2a] mt-2.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] font-normal">
                      Verified Outcomes &amp; Evidence
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#04120a] border border-[#143524] text-[#C5A566] text-[10px] font-semibold tracking-wider uppercase shrink-0">
                      AUDITED IMPACT
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mt-2.5 mb-4">
                    Documented reduction in onboarding ramp-up time, measurable increase in employee tenure stability, and zero statutory compliance infractions during regional regulatory inspection reviews.
                  </p>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* Metric 1 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5">
                      <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                        RAMP-UP SPEED
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-[#E8C87A] font-normal leading-tight mb-1">
                        Accelerated
                      </p>
                      <p className="text-xs text-[#8EAFA0] font-light">
                        30-day milestone compliance
                      </p>
                    </div>

                    {/* Metric 2 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5">
                      <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                        TENURE COHORTS
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-[#E8C87A] font-normal leading-tight mb-1">
                        Stabilized
                      </p>
                      <p className="text-xs text-[#8EAFA0] font-light">
                        Predictable core talent retention
                      </p>
                    </div>

                    {/* Metric 3 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5">
                      <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                        STATUTORY INFRACTIONS
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-[#E8C87A] font-normal leading-tight mb-1">
                        Zero (0)
                      </p>
                      <p className="text-xs text-[#8EAFA0] font-light">
                        Full audit verification
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 08: Connected Bizenra Practice Pillars */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 shadow-md hover:border-[#1d5236] transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-0.5">
                  <span className="font-serif text-2xl sm:text-[28px] text-[#E8C87A] font-normal leading-none">
                    08
                  </span>
                  <div className="w-px h-8 sm:h-10 bg-[#163e2a] mt-2.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 mb-4">
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] font-normal">
                      Connected Bizenra Practice Pillars
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#04120a] border border-[#143524] text-[#C5A566] text-[10px] font-semibold tracking-wider uppercase shrink-0">
                      METHODOLOGY ALIGNMENT
                    </span>
                  </div>

                  {/* 2 Pillar Action Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                      href="/services"
                      className="rounded-lg bg-[#04120a] border border-[#133522] p-4 flex items-center justify-between hover:border-[#1d5236] transition-all group"
                    >
                      <div>
                        <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                          PRACTICE AREA
                        </span>
                        <span className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] group-hover:text-[#E8C87A] transition-colors">
                          HR Management &amp; People Infrastructure
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#E8C87A] group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>

                    <Link
                      href="/services"
                      className="rounded-lg bg-[#04120a] border border-[#133522] p-4 flex items-center justify-between hover:border-[#1d5236] transition-all group"
                    >
                      <div>
                        <span className="block text-[10px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-1">
                          PRACTICE AREA
                        </span>
                        <span className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] group-hover:text-[#E8C87A] transition-colors">
                          Business Operations &amp; Workflow Standardization
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#E8C87A] group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 09: Cross-Referenced Case Histories */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 shadow-md hover:border-[#1d5236] transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-0.5">
                  <span className="font-serif text-2xl sm:text-[28px] text-[#E8C87A] font-normal leading-none">
                    09
                  </span>
                  <div className="w-px h-8 sm:h-10 bg-[#163e2a] mt-2.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] font-normal">
                      Cross-Referenced Case Histories
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#04120a] border border-[#143524] text-[#C5A566] text-[10px] font-semibold tracking-wider uppercase shrink-0">
                      ADJACENT MANDATES
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mt-2.5 mb-4">
                    Similar structural architecture implemented across real estate and operational client portfolios:
                  </p>

                  {/* 2 Cross Reference Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-4">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-[#E8C87A]">
                          Aeon &amp; Trisl
                        </span>
                        <span className="text-[11px] text-[#7A9E8D]">
                          Real Estate Advisory
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] mb-1.5">
                        CRM &amp; Listing Governance
                      </h4>
                      <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                        Standardized sales team reporting pipelines and asset compliance verification.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-4">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-[#E8C87A]">
                          KAM Associates
                        </span>
                        <span className="text-[11px] text-[#7A9E8D]">
                          Operational Design
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] mb-1.5">
                        Cross-Team Alignment
                      </h4>
                      <p className="text-xs text-[#8EAFA0] font-light leading-relaxed">
                        Inter-departmental operating frameworks and structured accountability reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 10: Actionable Advisory Handoff */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 shadow-md hover:border-[#1d5236] transition-all">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center shrink-0 w-8 sm:w-10 pt-0.5">
                  <span className="font-serif text-2xl sm:text-[28px] text-[#E8C87A] font-normal leading-none">
                    10
                  </span>
                  <div className="w-px h-8 sm:h-10 bg-[#163e2a] mt-2.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F0] font-normal">
                      Actionable Advisory Handoff
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-[#04120a] border border-[#143524] text-[#34d399] text-[10px] font-semibold tracking-wider uppercase shrink-0">
                      IMMEDIATE DIRECTIVE
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mt-2.5 mb-5 max-w-2xl">
                    Experiencing similar organizational friction or talent churn? Transition from informal practices to an institutional people governance architecture designed for sustained corporate velocity.
                  </p>

                  <button
                    type="button"
                    onClick={() => setConsultationModalOpen(true)}
                    className="cursor-pointer px-5 py-2.5 rounded-lg bg-[#E8C87A] text-[#05170F] font-semibold text-xs sm:text-sm hover:bg-[#DEBE7F] active:scale-[0.99] transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <span>Discuss a Similar People Challenge</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

          </section>

          {/* 6. Guiding Principle Section (Pixel-accurate to design) */}
          <section className="text-center pt-8 pb-4 sm:pt-12 sm:pb-6">
            <div className="w-8 h-[2px] bg-[#C5A566] mx-auto mb-4" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-4">
              GUIDING PRINCIPLE
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] text-[#FAF7F0] font-normal leading-snug max-w-2xl mx-auto mb-4">
              &ldquo;Strong teams thrive when expectations and systems are clear.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed max-w-xl mx-auto">
              Bizenra People Practice Thesis: Clarified boundary systems produce unencumbered executive execution.
            </p>
          </section>

          {/* 7. Verified Client Protocol Notice Banner (Pixel-accurate to design) */}
          <section className="pt-2 pb-4">
            <div className="rounded-xl bg-[#061810]/95 border border-[#153825] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8C87A] text-[#05170F] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-[0.14em] text-[#FAF7F0] uppercase mb-1">
                    VERIFIED CLIENT PROTOCOL NOTICE
                  </h4>
                  <p className="text-xs text-[#8EAFA0] font-light leading-relaxed max-w-2xl">
                    Professional employment records and operational case histories reflect direct verified leadership mandates under strict non-disclosure safeguards. Non-speculative, zero fabricated figures.
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="text-[11px] font-semibold tracking-[0.16em] text-[#C5A566] hover:text-[#FAF7F0] transition-colors uppercase flex items-center gap-1.5 shrink-0 self-start sm:self-center"
              >
                <span>AUDIT STANDARDS</span>
                <span className="text-xs">&nearr;</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* 6. Global Footer */}
      <Footer onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 7. Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService="People Architecture Consultation"
      />
    </div>
  );
}
