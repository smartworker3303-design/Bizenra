"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function InsightsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const articles = [
    {
      tag: "FINANCIAL CONTROLLERSHIP",
      title: "Eliminating Ledger Asymmetry Across Multi-Entity Real Estate Portfolios",
      date: "October 2026",
      readTime: "7 min read",
      summary:
        "Why standard ERP implementations fail high-rise developments, and how automated bank-feed reconciliation protocols reduce reporting variance by 30%+.",
    },
    {
      tag: "OPERATIONAL ARCHITECTURE",
      title: "Zero-Dispute Brokerage Systems: Structuring Commission Feeds at GCC Scale",
      date: "September 2026",
      readTime: "9 min read",
      summary:
        "A technical blueprint for scaling 180+ real estate agents across multinational branches without manual spreadsheets or settlement delays.",
    },
    {
      tag: "SUPPLY CHAIN",
      title: "Compressing Inventory Reconciliation from 45 to 23 Days in Apparel Exports",
      date: "August 2026",
      readTime: "6 min read",
      summary:
        "Synchronizing customs clearing documents, port dispatch notifications, and warehouse barcodes directly into General Ledger entries.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-3">
              INSTITUTIONAL PERSPECTIVES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-tight mb-6">
              Executive Insights &amp; Briefings
            </h1>
            <p className="text-[#A2BEAF] text-base sm:text-lg font-light leading-relaxed">
              Empirical analyses and systemic frameworks derived from active controllership and operational architectural mandates.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((item, idx) => (
              <article
                key={idx}
                className="rounded-xl bg-[#071911] border border-[#143926] p-7 sm:p-8 hover:border-[#276445] transition-all"
              >
                <div className="flex items-center gap-4 text-xs text-[#8BAE9A] mb-3">
                  <span className="text-[#C5A566] font-semibold tracking-wider">
                    {item.tag}
                  </span>
                  <span>&bull;</span>
                  <span>{item.date}</span>
                  <span>&bull;</span>
                  <span>{item.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F0] font-normal mb-3 hover:text-[#E8C87A] transition-colors cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-sm text-[#A2BEAF] leading-relaxed max-w-3xl font-light mb-4">
                  {item.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setConsultationOpen(true)}
                  className="text-xs font-semibold text-[#E8C87A] hover:underline"
                >
                  Request Full Executive Briefing &rarr;
                </button>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
