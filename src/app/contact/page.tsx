"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form");
  const [submitted, setSubmitted] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyIndustry: "",
    teamScale: "",
    serviceInterest: "",
    challenge: "",
    sessionPreference: "Next 48 Hours",
    agreedNDA: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqItems = [
    {
      question: "What is the format and duration of the initial discovery consultation?",
      answer:
        "Initial discovery consultations are structured as 45-to-60-minute confidential working sessions conducted via secure video conference. Led by a Senior Strategic Partner, we focus on identifying root-cause operational friction, tech stack fragmentation, and reporting bottlenecks with zero sales ambiguity.",
    },
    {
      question: "Do we need to prepare proprietary financial data or technical documents beforehand?",
      answer:
        "No prior document transmission is mandatory for the initial exploratory session. A high-level overview of your current head count, software stack, and primary friction points is sufficient. Detailed P&L statements, chart of accounts, or architectural diagrams are only requested under executed mutual NDA during formal scoping.",
    },
    {
      question: "How quickly can Bizenra commence an advisory engagement or diagnostic sprint?",
      answer:
        "Following mutual alignment and formal scope execution, our diagnostic sprints typically mobilize within 5 to 7 business days. We deploy immediately into structured stakeholder interviews and data tracing to minimize operational downtime.",
    },
    {
      question: "Does Bizenra provide fractional executive leadership (Fractional COO/CFO)?",
      answer:
        "Yes. In addition to targeted project sprints and architectural audits, Bizenra deploys embedded Fractional Heads of Operations and Fractional CFOs on 90-to-180-day retained governance mandates to oversee implementation, manage vendor handoffs, and mentor internal leadership.",
    },
    {
      question: "What fee structures does Bizenra support?",
      answer:
        "We operate on transparent, fixed-scope project milestones for diagnostic sprints and system implementations, and monthly retained advisory governance for fractional executive mandates. We do not charge variable hourly fees or open-ended consulting retainers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setConsultationModalOpen(true)} />

      <main className="flex-1 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 2. Hero Section (Pixel-accurate to screenshot) */}
          <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
            {/* Left Hero Content */}
            <div className="max-w-2xl">
              {/* Direct Advisory Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#092217] border border-[#16422d] text-[#C5A566] text-[10.5px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block shrink-0" />
                <span>DIRECT ADVISORY CHANNEL • PRIVATE ENGAGEMENTS</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#FAF7F0] font-normal leading-[1.15] tracking-tight mb-4">
                Start With a Focused Consultation
              </h1>

              {/* Subtitle */}
              <p className="text-[#A2BEAF] text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Let&apos;s explore your operational friction points, reporting clarity, and systems roadmap with zero institutional ambiguity.
              </p>
            </div>

            {/* Right Hero: Response Standard Card */}
            <div className="rounded-xl bg-[#061810]/95 border border-[#163826] p-4 sm:p-5 w-full sm:w-[280px] lg:w-[290px] shrink-0 shadow-lg">
              <span className="block text-[10.5px] font-medium tracking-[0.16em] text-[#7A9E8D] uppercase mb-1.5">
                RESPONSE STANDARD
              </span>

              <div className="flex items-center gap-2 text-[#FAF7F0] font-semibold text-sm sm:text-[15px]">
                <svg
                  className="w-4 h-4 text-[#A2BEAF] shrink-0"
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
                <span>Within 1 Business Day</span>
              </div>

              <div className="h-px bg-[#143524] my-3" />

              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7A9E8D]">Status</span>
                <span className="text-[#FAF7F0] flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#34d399] inline-block animate-pulse" />
                  Open for Q2 Mandates
                </span>
              </div>
            </div>
          </section>

          {/* 3. Main Outer Card Container (Advisory Desk + Booking Form) */}
          <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-[#153a27]/80 bg-[#04140c]/45 p-5 sm:p-7 lg:p-9 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* LEFT COLUMN: Channels + Methodology + Quote + Developer Spec */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 1. Direct Verified Channels */}
                <div className="rounded-xl bg-[#061810] border border-[#153825] p-5 sm:p-6 shadow-md">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-1">
                    ADVISORY DESK
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF7F0] font-normal mb-5">
                    Direct Verified Channels
                  </h3>

                  <div className="space-y-3">
                    {/* Item 1: Confidential Inquiries */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-md bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#8EAFA0] text-sm shrink-0 font-medium">
                        @
                      </div>
                      <div>
                        <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-0.5">
                          CONFIDENTIAL INQUIRIES
                        </span>
                        <a
                          href="mailto:advisory@bizenra.com"
                          className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] hover:text-[#E8C87A] transition-colors block"
                        >
                          advisory@bizenra.com
                        </a>
                        <span className="block text-xs text-[#6B8E7D] mt-0.5">
                          PGP Key available on formal request
                        </span>
                      </div>
                    </div>

                    {/* Item 2: Practice Headquarters */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-md bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#8EAFA0] shrink-0">
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-0.5">
                          PRACTICE HEADQUARTERS
                        </span>
                        <span className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] block">
                          United States / Remote Advisory
                        </span>
                        <span className="block text-xs text-[#6B8E7D] mt-0.5">
                          Operating across EST, CST, and PST timezones
                        </span>
                      </div>
                    </div>

                    {/* Item 3: Response Window */}
                    <div className="rounded-lg bg-[#04120a] border border-[#133522] p-3.5 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-md bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#8EAFA0] shrink-0">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#7A9E8D] uppercase mb-0.5">
                          RESPONSE WINDOW
                        </span>
                        <span className="text-sm sm:text-[14.5px] font-semibold text-[#FAF7F0] block">
                          Initial response within 1 business day
                        </span>
                        <span className="block text-xs text-[#6B8E7D] mt-0.5">
                          Direct triage by senior strategic partners
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. What to Expect During Your Call */}
                <div className="rounded-xl bg-[#061810] border border-[#153825] p-5 sm:p-6 shadow-md">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-1">
                    METHODOLOGY
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF7F0] font-normal mb-5">
                    What to Expect During Your Call
                  </h3>

                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#C5A566] text-[#061810] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-[15px] font-semibold text-[#FAF7F0] mb-1">
                          Zero Sales Pressure
                        </h4>
                        <p className="text-xs text-[#8EAFA0] leading-relaxed font-light">
                          We conduct clinical assessments, not sales pitches. If your systems are already performing well, we will tell you directly.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#C5A566] text-[#061810] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-[15px] font-semibold text-[#FAF7F0] mb-1">
                          Practical Roadblock Assessment
                        </h4>
                        <p className="text-xs text-[#8EAFA0] leading-relaxed font-light">
                          A line-by-line review of workflow bottlenecks, reporting blindspots, FP&amp;A friction, or platform misconfigurations.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#C5A566] text-[#061810] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-[15px] font-semibold text-[#FAF7F0] mb-1">
                          Actionable Implementation Steps
                        </h4>
                        <p className="text-xs text-[#8EAFA0] leading-relaxed font-light">
                          You depart with a high-level architectural roadmap, whether you choose to execute in-house or engage Bizenra for turnkey stewardship.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Quote Card */}
                <div className="rounded-xl bg-[#061810] border border-[#153825] p-6 shadow-md relative overflow-hidden">
                  <div className="w-8 h-[2px] bg-[#C5A566] mb-4" />
                  <p className="font-serif italic text-lg sm:text-[19px] text-[#FAF7F0] leading-snug mb-5 font-normal">
                    &ldquo;Strong teams thrive when expectations and systems are clear.&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#C5A566] text-[#061810] font-bold text-xs flex items-center justify-center tracking-wider shrink-0">
                      BZ
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-[#FAF7F0]">
                        The Bizenra Principle
                      </span>
                      <span className="block text-[11px] text-[#7A9E8D]">
                        Operational Architecture Charter
                      </span>
                    </div>
                  </div>

                  {/* Watermark quote mark */}
                  <div className="absolute -top-3 right-4 text-[#153b27]/25 font-serif text-7xl select-none pointer-events-none italic">
                    &rdquo;
                  </div>
                </div>

                {/* 4. Developer Handoff Specification (Pixel-accurate to design) */}
                <div className="rounded-xl bg-[#061810] border border-[#153825] p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#C5A566]">
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
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[#C5A566] uppercase">
                      DEVELOPER HANDOFF SPECIFICATION
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7A9E8D] leading-relaxed font-light">
                    Calendar scheduling, CRM ingestion (HubSpot / Salesforce), and email dispatch endpoints require backend webhook configuration. Ensure payload conforms to institutional security standards.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Consultation Booking Form */}
              <div className="lg:col-span-7" id="booking-form">
                <div className="rounded-xl bg-[#061810] border border-[#153825] p-6 sm:p-8 lg:p-9 shadow-xl relative">
                  
                  {/* Card Header & Tab Switcher */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-1">
                        SECURE INTAKE
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F0] font-normal">
                        Consultation Booking
                      </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="inline-flex rounded-lg bg-[#04120a] border border-[#133824] p-1 self-start sm:self-center">
                      <button
                        type="button"
                        onClick={() => setActiveTab("form")}
                        className={`cursor-pointer px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                          activeTab === "form"
                            ? "bg-[#143b27] text-[#FAF7F0] shadow-sm"
                            : "text-[#7A9E8D] hover:text-[#FAF7F0]"
                        }`}
                      >
                        Form Intake
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("preview")}
                        className={`cursor-pointer px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                          activeTab === "preview"
                            ? "bg-[#143b27] text-[#FAF7F0] shadow-sm"
                            : "text-[#7A9E8D] hover:text-[#FAF7F0]"
                        }`}
                      >
                        Preview Confirmation
                      </button>
                    </div>
                  </div>

                  {/* Top Divider */}
                  <div className="h-px w-full bg-[#133824] my-6" />

                  {/* Submitted State */}
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#0a271b] border border-[#276445] flex items-center justify-center text-[#E8C87A] text-2xl shadow-lg">
                        ✓
                      </div>
                      <h3 className="font-serif text-3xl text-[#FAF7F0] font-normal">
                        Executive Briefing Requested
                      </h3>
                      <p className="text-[#A2BEAF] text-sm leading-relaxed max-w-lg mx-auto font-light">
                        Thank you, <strong className="text-[#FAF7F0] font-medium">{form.fullName || "Executive"}</strong>. Your operational overview has been transmitted securely under mutual non-disclosure protocols. Senior strategic partners will triage your mandate and follow up at <strong className="text-[#FAF7F0] font-medium">{form.email || "your email address"}</strong> within 1 business day.
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setActiveTab("form");
                          }}
                          className="cursor-pointer px-6 py-2.5 rounded-lg bg-[#143b27] border border-[#23583e] text-[#FAF7F0] text-xs font-semibold hover:bg-[#1b4e33] transition-colors"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : activeTab === "preview" ? (
                    /* Preview Confirmation Tab */
                    <div className="space-y-5 py-2">
                      <div className="rounded-lg bg-[#04120a] border border-[#133824] p-5 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Full Name
                            </span>
                            <span className="text-[#FAF7F0] font-medium">
                              {form.fullName || <em className="text-[#516f60]">Not provided yet</em>}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Business Email Address
                            </span>
                            <span className="text-[#FAF7F0] font-medium">
                              {form.email || <em className="text-[#516f60]">Not provided yet</em>}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Company Name &amp; Industry
                            </span>
                            <span className="text-[#FAF7F0] font-medium">
                              {form.companyIndustry || <em className="text-[#516f60]">Not provided yet</em>}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Team Size • Revenue Bracket
                            </span>
                            <span className="text-[#FAF7F0] font-medium">
                              {form.teamScale || <em className="text-[#516f60]">Not selected</em>}
                            </span>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Primary Service Interest
                            </span>
                            <span className="text-[#FAF7F0] font-medium">
                              {form.serviceInterest || <em className="text-[#516f60]">Not selected</em>}
                            </span>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Specific Challenge or Primary Objective
                            </span>
                            <span className="text-[#FAF7F0] font-light leading-relaxed">
                              {form.challenge || <em className="text-[#516f60]">No challenge description provided yet</em>}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#7A9E8D] block uppercase tracking-wider text-[10px] mb-0.5">
                              Session Preference
                            </span>
                            <span className="text-[#FAF7F0] font-medium">
                              {form.sessionPreference}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => setActiveTab("form")}
                          className="cursor-pointer text-xs font-semibold text-[#A2BEAF] hover:text-[#FAF7F0] transition-colors"
                        >
                          ← Back to Edit Form
                        </button>
                        <button
                          type="button"
                          onClick={() => setSubmitted(true)}
                          className="cursor-pointer w-full sm:w-auto px-7 py-3 rounded-lg bg-[#C5A566] text-[#071c13] font-semibold text-sm hover:bg-[#DEBE7F] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <span>Confirm &amp; Request Executive Briefing</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Main Form Intake Tab */
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row 1: Full Name & Business Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-[#FAF7F0] mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <input
                              required
                              type="text"
                              value={form.fullName}
                              onChange={(e) =>
                                setForm({ ...form, fullName: e.target.value })
                              }
                              placeholder="e.g., Katherine Vance"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#04120a] border border-[#153827] text-[#FAF7F0] text-sm placeholder-[#425d4f] focus:outline-none focus:border-[#C5A566] transition-colors pr-10"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#425d4f] pointer-events-none">
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
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-[#FAF7F0] mb-1.5">
                            Business Email Address <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <input
                              required
                              type="email"
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              placeholder="katherine@enterprise.com"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#04120a] border border-[#153827] text-[#FAF7F0] text-sm placeholder-[#425d4f] focus:outline-none focus:border-[#C5A566] transition-colors pr-10"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#425d4f] pointer-events-none">
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
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Company Name & Team Size / Revenue Bracket */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-[#FAF7F0] mb-1.5">
                            Company Name &amp; Industry <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <input
                              required
                              type="text"
                              value={form.companyIndustry}
                              onChange={(e) =>
                                setForm({ ...form, companyIndustry: e.target.value })
                              }
                              placeholder="Vance Logistics – Supply Chain 🏢"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#04120a] border border-[#153827] text-[#FAF7F0] text-sm placeholder-[#425d4f] focus:outline-none focus:border-[#C5A566] transition-colors pr-10"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#425d4f] pointer-events-none">
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
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-[#FAF7F0] mb-1.5">
                            Team Size • Revenue Bracket <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.teamScale}
                              onChange={(e) =>
                                setForm({ ...form, teamScale: e.target.value })
                              }
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#04120a] border border-[#153827] text-[#FAF7F0] text-sm focus:outline-none focus:border-[#C5A566] transition-colors appearance-none cursor-pointer pr-10"
                            >
                              <option value="" disabled className="bg-[#04120a] text-[#425d4f]">
                                Select Current Scale
                              </option>
                              <option value="Seed / Early ($1M - $5M ARR, 10-25 FTE)" className="bg-[#061810] text-[#FAF7F0]">
                                Seed / Early ($1M - $5M ARR, 10-25 FTE)
                              </option>
                              <option value="Growth Stage ($5M - $15M ARR, 25-75 FTE)" className="bg-[#061810] text-[#FAF7F0]">
                                Growth Stage ($5M - $15M ARR, 25-75 FTE)
                              </option>
                              <option value="Mid-Market ($15M - $50M ARR, 75-250 FTE)" className="bg-[#061810] text-[#FAF7F0]">
                                Mid-Market ($15M - $50M ARR, 75-250 FTE)
                              </option>
                              <option value="Upper Mid-Market ($50M - $150M ARR, 250+ FTE)" className="bg-[#061810] text-[#FAF7F0]">
                                Upper Mid-Market ($50M - $150M ARR, 250+ FTE)
                              </option>
                              <option value="Enterprise ($150M+ ARR, 500+ FTE)" className="bg-[#061810] text-[#FAF7F0]">
                                Enterprise ($150M+ ARR, 500+ FTE)
                              </option>
                            </select>
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#425d4f] pointer-events-none">
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
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Primary Service Interest */}
                      <div>
                        <label className="block text-xs font-medium text-[#FAF7F0] mb-1.5">
                          Primary Service Interest <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.serviceInterest}
                            onChange={(e) =>
                              setForm({ ...form, serviceInterest: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#04120a] border border-[#153827] text-[#FAF7F0] text-sm focus:outline-none focus:border-[#C5A566] transition-colors appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled className="bg-[#04120a] text-[#425d4f]">
                              Select One of the 7 Practice Areas
                            </option>
                            <option value="1. Business Operations & Workflow Audits" className="bg-[#061810] text-[#FAF7F0]">
                              1. Business Operations &amp; Workflow Audits
                            </option>
                            <option value="2. Financial Management & Reporting" className="bg-[#061810] text-[#FAF7F0]">
                              2. Financial Management &amp; Reporting
                            </option>
                            <option value="3. FP&A Architecture & Cash Flow Modeling" className="bg-[#061810] text-[#FAF7F0]">
                              3. FP&amp;A Architecture &amp; Cash Flow Modeling
                            </option>
                            <option value="4. Accounting Advisory & Close Acceleration" className="bg-[#061810] text-[#FAF7F0]">
                              4. Accounting Advisory &amp; Close Acceleration
                            </option>
                            <option value="5. Business Systems, ERP & Tool Stacks" className="bg-[#061810] text-[#FAF7F0]">
                              5. Business Systems, ERP &amp; Tool Stacks
                            </option>
                            <option value="6. Corporate Governance & Executive Controls" className="bg-[#061810] text-[#FAF7F0]">
                              6. Corporate Governance &amp; Executive Controls
                            </option>
                            <option value="7. Turnkey Operational Stewardship & Fractional Ops" className="bg-[#061810] text-[#FAF7F0]">
                              7. Turnkey Operational Stewardship &amp; Fractional Ops
                            </option>
                          </select>
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#425d4f] pointer-events-none">
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
                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Row 4: Specific Challenge or Primary Objective */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-medium text-[#FAF7F0]">
                            Specific Challenge or Primary Objective <span className="text-red-400">*</span>
                          </label>
                          <span className="text-xs text-[#7A9E8D] italic">
                            Keep it frank &amp; direct
                          </span>
                        </div>
                        <textarea
                          required
                          rows={4}
                          value={form.challenge}
                          onChange={(e) =>
                            setForm({ ...form, challenge: e.target.value })
                          }
                          placeholder="Describe the current operational friction: redundant manual reporting, misaligned inventory tracking, lack of forward-looking financial forecasting, or software sprawl..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#04120a] border border-[#153827] text-[#FAF7F0] text-sm placeholder-[#425d4f] focus:outline-none focus:border-[#C5A566] transition-colors resize-none leading-relaxed"
                        />
                      </div>

                      {/* Row 5: Session Preferences */}
                      <div className="pt-2">
                        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#C5A566] uppercase mb-2.5 block">
                          SESSION PREFERENCES
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {/* Option 1: Next 48 Hours */}
                          <button
                            type="button"
                            onClick={() =>
                              setForm({ ...form, sessionPreference: "Next 48 Hours" })
                            }
                            className={`cursor-pointer rounded-lg p-3 flex items-center gap-2.5 transition-all text-left ${
                              form.sessionPreference === "Next 48 Hours"
                                ? "bg-[#0d2a1c] border border-[#1d5236] text-[#FAF7F0]"
                                : "bg-[#04120a] border border-[#133824] text-[#A2BEAF] hover:border-[#1d5236]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                form.sessionPreference === "Next 48 Hours"
                                  ? "bg-[#0284c7] ring-2 ring-[#0284c7]/30"
                                  : "border border-[#7A9E8D]"
                              }`}
                            >
                              {form.sessionPreference === "Next 48 Hours" && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </span>
                            <span className="text-xs font-medium">Next 48 Hours</span>
                          </button>

                          {/* Option 2: Within 2 Weeks */}
                          <button
                            type="button"
                            onClick={() =>
                              setForm({ ...form, sessionPreference: "Within 2 Weeks" })
                            }
                            className={`cursor-pointer rounded-lg p-3 flex items-center gap-2.5 transition-all text-left ${
                              form.sessionPreference === "Within 2 Weeks"
                                ? "bg-[#0d2a1c] border border-[#1d5236] text-[#FAF7F0]"
                                : "bg-[#04120a] border border-[#133824] text-[#A2BEAF] hover:border-[#1d5236]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                form.sessionPreference === "Within 2 Weeks"
                                  ? "bg-[#0284c7] ring-2 ring-[#0284c7]/30"
                                  : "border border-[#7A9E8D]"
                              }`}
                            >
                              {form.sessionPreference === "Within 2 Weeks" && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </span>
                            <span className="text-xs font-medium">Within 2 Weeks</span>
                          </button>

                          {/* Option 3: Exploratory */}
                          <button
                            type="button"
                            onClick={() =>
                              setForm({ ...form, sessionPreference: "Exploratory" })
                            }
                            className={`cursor-pointer rounded-lg p-3 flex items-center gap-2.5 transition-all text-left ${
                              form.sessionPreference === "Exploratory"
                                ? "bg-[#0d2a1c] border border-[#1d5236] text-[#FAF7F0]"
                                : "bg-[#04120a] border border-[#133824] text-[#A2BEAF] hover:border-[#1d5236]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                form.sessionPreference === "Exploratory"
                                  ? "bg-[#0284c7] ring-2 ring-[#0284c7]/30"
                                  : "border border-[#7A9E8D]"
                              }`}
                            >
                              {form.sessionPreference === "Exploratory" && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </span>
                            <span className="text-xs font-medium">Exploratory</span>
                          </button>
                        </div>
                      </div>

                      {/* Row 6: Confidentiality Checkbox */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer select-none">
                          <input
                            required
                            type="checkbox"
                            checked={form.agreedNDA}
                            onChange={(e) =>
                              setForm({ ...form, agreedNDA: e.target.checked })
                            }
                            className="mt-0.5 w-4 h-4 rounded bg-[#04120a] border border-[#276445] text-[#C5A566] focus:ring-0 focus:outline-none cursor-pointer accent-[#C5A566]"
                          />
                          <span className="text-xs text-[#8EAFA0] leading-relaxed font-light">
                            I agree to the confidential transmission of this operational overview. Bizenra treats all operational and financial metrics under strict non-disclosure governance.
                          </span>
                        </label>
                      </div>

                      {/* Row 7: Action Row & Submit Button */}
                      <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <button
                          type="submit"
                          className="cursor-pointer px-7 py-3 rounded-lg bg-[#C5A566] text-[#071c13] font-semibold text-sm hover:bg-[#DEBE7F] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <span>Request Executive Briefing</span>
                          <span>→</span>
                        </button>

                        <span className="text-xs text-[#6B8E7D] tracking-wide text-center sm:text-right">
                          Direct Dispatch
                        </span>
                      </div>
                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>

          {/* 4. The Bizenra Engagement Commitment (Pixel-accurate to design) */}
          <section className="mt-16 sm:mt-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-2">
                RIGOROUS STEWARDSHIP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#FAF7F0] font-normal tracking-tight mb-3">
                The Bizenra Engagement Commitment
              </h2>
              <p className="text-xs sm:text-sm text-[#A2BEAF] font-light leading-relaxed max-w-2xl mx-auto">
                Advisory without academic abstraction. We structure our consultations as actionable working sessions designed to surface measurable leverage.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Institutional Confidentiality */}
              <div className="rounded-xl bg-[#061810] border border-[#153825] p-6 sm:p-7 shadow-lg hover:border-[#1d5236] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] mb-5">
                  <svg
                    className="w-5 h-5"
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
                <h3 className="font-serif text-xl sm:text-[22px] text-[#FAF7F0] font-normal mb-3">
                  Institutional Confidentiality
                </h3>
                <p className="text-xs sm:text-[13px] text-[#8EAFA0] leading-relaxed font-light">
                  All discovery metrics, systems configurations, and P&amp;L discussions remain protected under strict non-disclosure safeguards from the moment of form dispatch.
                </p>
              </div>

              {/* Card 2: Direct Architectural Fit */}
              <div className="rounded-xl bg-[#061810] border border-[#153825] p-6 sm:p-7 shadow-lg hover:border-[#1d5236] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] mb-5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl sm:text-[22px] text-[#FAF7F0] font-normal mb-3">
                  Direct Architectural Fit
                </h3>
                <p className="text-xs sm:text-[13px] text-[#8EAFA0] leading-relaxed font-light">
                  We do not apply cookie-cutter enterprise templates. Every workflow recommendation is calibrated against your exact head count, tech stack, and margin profile.
                </p>
              </div>

              {/* Card 3: Immediate Technical Clarity */}
              <div className="rounded-xl bg-[#061810] border border-[#153825] p-6 sm:p-7 shadow-lg hover:border-[#1d5236] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0a2317] border border-[#18482f] flex items-center justify-center text-[#E8C87A] mb-5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl sm:text-[22px] text-[#FAF7F0] font-normal mb-3">
                  Immediate Technical Clarity
                </h3>
                <p className="text-xs sm:text-[13px] text-[#8EAFA0] leading-relaxed font-light">
                  Walk away from our initial briefing with clear identification of software redundancies, manual reconciliation errors, and immediate quick-win opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Frequently Addressed Questions (Consultation & Mandate FAQ) */}
          <section className="mt-16 sm:mt-20">
            {/* Header with right link */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-2">
                  FREQUENTLY ADDRESSED QUESTIONS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal tracking-tight mb-2">
                  Consultation &amp; Mandate FAQ
                </h2>
                <p className="text-xs sm:text-sm text-[#A2BEAF] font-light leading-relaxed max-w-xl">
                  Essential details regarding session formats, preliminary document preparation, and engagement structure.
                </p>
              </div>

              <a
                href="mailto:advisory@bizenra.com"
                className="text-xs text-[#7A9E8D] hover:text-[#FAF7F0] transition-colors flex items-center gap-1.5 self-start md:self-end font-medium pb-1"
              >
                <span>Have an unlisted question?</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-[#061810] border border-[#153825] overflow-hidden transition-all hover:border-[#1d5236]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="cursor-pointer w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-[15px] font-semibold text-[#FAF7F0]">
                        {item.question}
                      </span>
                      <span className="text-[#8EAFA0] text-lg font-light shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed border-t border-[#133522]/80">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 6. Ready to institutionalize your operations? CTA Banner */}
          <section className="mt-16 sm:mt-20">
            <div className="rounded-xl bg-[#061810] border border-[#153825] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="font-serif text-2xl sm:text-[26px] text-[#FAF7F0] font-normal mb-1.5">
                  Ready to institutionalize your operations?
                </h3>
                <p className="text-xs sm:text-sm text-[#A2BEAF] font-light">
                  Direct consultation booking remains open for Q2 advisory cohorts.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("booking-form");
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="cursor-pointer px-6 py-2.5 rounded-lg bg-[#C5A566] text-[#071c13] text-xs sm:text-sm font-semibold hover:bg-[#DEBE7F] active:scale-[0.99] transition-all shadow-md shrink-0"
              >
                Return to Booking Form
              </button>
            </div>
          </section>

        </div>
      </main>

      {/* 7. Global Footer with floating Advisory Buddy */}
      <Footer onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 8. Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService="Direct Advisory Consultation"
      />
    </div>
  );
}
