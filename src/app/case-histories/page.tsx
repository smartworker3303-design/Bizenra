"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import CaseHistoryModal from "@/components/CaseHistoryModal";
import { caseStudiesData, CaseStudy } from "@/components/CaseHistoriesSection";

const allEightMandates: CaseStudy[] = [
  ...caseStudiesData,
  {
    id: "gcc-logistics",
    tag: "REGIONAL LOGISTICS",
    tagTheme: "green",
    discipline: "Fleet & Warehouse Systems",
    client: "Trans-Arabia Logistics",
    role: "Lead Systems Advisor",
    description:
      "Modernized cross-border dispatch routing, telematics tracking, and automated fuel audit protocols across 350+ commercial transport assets.",
    bulletPoints: [
      "Fuel discrepancy variance dropped below 1.2%",
      "Custom EDI integration with Port Customs authorities",
    ],
    mandateType: "Strategic Retainer Mandate",
    fullDetails: {
      overview:
        "Regional haulage operator needing automated fleet dispatch and compliance reporting across GCC borders.",
      metrics: [
        { label: "Fleet Assets", value: "350+" },
        { label: "Fuel Variance", value: "<1.2%" },
        { label: "Transit Time", value: "-18%" },
      ],
      solution:
        "Standardized IoT telematics feeds with general ledger fuel cards, establishing real-time route profitability analytics.",
    },
  },
  {
    id: "fintech-settlement",
    tag: "FINANCIAL TECHNOLOGY",
    tagTheme: "gold",
    discipline: "Treasury Architecture",
    client: "Apex Payments EMEA",
    role: "FinOps & Treasury Architect",
    description:
      "Constructed multi-currency settlement ledger with automated liquidity sweeps, decreasing daily float requirements by $1.8M.",
    bulletPoints: [
      "Instantaneous clearing across 14 fiat currencies",
      "Automated SWIFT MT940 reconciliation engine",
    ],
    mandateType: "Enterprise Advisory Mandate",
    fullDetails: {
      overview:
        "Cross-border remittance and B2B payout platform requiring resilient treasury controls.",
      metrics: [
        { label: "Float Optimization", value: "$1.8M" },
        { label: "Currency Corridors", value: "14 Pairs" },
        { label: "Reconciliation", value: "Real-Time" },
      ],
      solution:
        "Engineered automated clearing algorithms and continuous liquidity pooling across tier-1 banking partners.",
    },
  },
  {
    id: "retail-holdings",
    tag: "OMNICHANNEL RETAIL",
    tagTheme: "green",
    discipline: "Financial Re-Engineering",
    client: "Veritas Retail Group",
    role: "Interim CFO & Systems Director",
    description:
      "Structured consolidated unit economics across 42 physical storefronts and e-commerce channels, identifying $850k in recurring margin leakages.",
    bulletPoints: [
      "Store-level contribution margin daily visibility",
      "Automated supplier rebates and discount clawback tracking",
    ],
    mandateType: "Controllership Mandate",
    fullDetails: {
      overview:
        "Multi-brand retail conglomerate with disjointed POS systems and manual inventory write-downs.",
      metrics: [
        { label: "Margin Recovery", value: "$850k/yr" },
        { label: "Store Locations", value: "42 Units" },
        { label: "E-Comm Growth", value: "+45%" },
      ],
      solution:
        "Reconciled disparate ERP and POS transactional streams into unified executive financial intelligence dashboards.",
    },
  },
  {
    id: "healthcare-saas",
    tag: "HEALTHCARE TECHNOLOGY",
    tagTheme: "gold",
    discipline: "Compliance & Scale Architecture",
    client: "BioSync Clinical",
    role: "Institutional Systems Lead",
    description:
      "Directed enterprise HIPAA/GDPR clinical data pipeline overhaul prior to Series B institutional funding round.",
    bulletPoints: [
      "Passed institutional institutional audits with zero deficiencies",
      "Accelerated clinical trial onboarding cycle by 60%",
    ],
    mandateType: "Institutional Readiness Mandate",
    fullDetails: {
      overview:
        "Healthtech scale-up preparing for institutional diligence from top-tier healthcare private equity investors.",
      metrics: [
        { label: "Audit Deficiencies", value: "0" },
        { label: "Onboarding Speed", value: "+60%" },
        { label: "Data Integrity", value: "99.99%" },
      ],
      solution:
        "Deployed zero-trust architecture, encrypted audit trails, and strict role-based access management across patient databases.",
    },
  },
];

export default function CaseHistoriesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const filteredMandates =
    filter === "ALL"
      ? allEightMandates
      : allEightMandates.filter((m) =>
          filter === "REAL_ESTATE"
            ? m.tag.includes("REAL ESTATE") || m.tag.includes("BROKERAGE")
            : filter === "SUPPLY"
            ? m.tag.includes("SUPPLY") || m.tag.includes("LOGISTICS")
            : filter === "FINANCE"
            ? m.tag.includes("PROFESSIONAL") || m.tag.includes("FINANCIAL") || m.tag.includes("RETAIL")
            : true
        );

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-3">
              DOCUMENTED TRACK RECORD
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-tight mb-5">
              All 8 Executive Case Mandates
            </h1>
            <p className="text-[#A2BEAF] text-base sm:text-lg font-light leading-relaxed">
              Empirical case histories spanning real estate conglomerates, international brokerages, global supply chains, and modernized professional service firms.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2.5 pb-10 border-b border-[#133021]">
            {[
              { id: "ALL", label: "All 8 Mandates" },
              { id: "REAL_ESTATE", label: "Real Estate & Brokerage" },
              { id: "SUPPLY", label: "Supply Chain & Logistics" },
              { id: "FINANCE", label: "Financial Services & Retail" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`cursor-pointer px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all ${
                  filter === btn.id
                    ? "bg-[#E8C87A] text-[#05160E]"
                    : "bg-[#071F14] text-[#A2BEAF] border border-[#163826] hover:text-[#FAF7F0] hover:border-[#276445]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 pt-12">
            {filteredMandates.map((card) => {
              const isGold = card.tagTheme === "gold";

              return (
                <div
                  key={card.id}
                  className="group relative flex flex-col justify-between rounded-xl bg-[#081B12]/80 border border-[#143926] p-7 sm:p-9 hover:border-[#276445] hover:bg-[#0A2217] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span
                        className={`inline-block px-3 py-1 rounded text-[10.5px] font-semibold tracking-wider uppercase ${
                          isGold
                            ? "bg-[#282110]/80 border border-[#B8964C]/70 text-[#E8C87A]"
                            : "bg-[#0B2A1C]/90 border border-[#23583C] text-[#86BA9C]"
                        }`}
                      >
                        {card.tag}
                      </span>
                      <span className="text-[12px] font-medium text-[#7A9C8A]">
                        {card.discipline}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#FAF7F0] mb-1.5">
                      {card.client}
                    </h3>
                    <p className="text-[13px] font-medium text-[#D4B572] mb-4">
                      {card.role}
                    </p>

                    <p className="text-[#A2BEAF] text-[14px] leading-relaxed mb-6 font-light">
                      {card.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {card.bulletPoints.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-[13px] text-[#CDE0D5]">
                          <span className="shrink-0 w-4 h-4 rounded-full border border-[#276445] bg-[#0A2A1B] flex items-center justify-center text-[10px] text-[#E8C87A] mt-0.5">
                            ✓
                          </span>
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#133523] flex items-center justify-between text-[12.5px]">
                    <span className="text-[#6D8F7D] font-medium">
                      {card.mandateType}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedCase(card)}
                      className="cursor-pointer group/link inline-flex items-center gap-1.5 font-semibold text-[#FAF7F0] hover:text-[#E8C87A] transition-colors"
                    >
                      <span>View Case History</span>
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <CaseHistoryModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </div>
  );
}
