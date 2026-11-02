"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const pillars = [
    {
      title: "Direct Operational Record",
      subtitle: "8 Verified Mandates",
      text: "We do not advise from theoretical ivory towers. Our principals embed directly into operational leadership roles to engineer structural solutions that hold up under commercial pressure.",
    },
    {
      title: "Tier-1 Governance",
      subtitle: "Institutional Discipline",
      text: "Every workflow, reporting cadence, and internal control is architected to withstand scrutiny from institutional auditors, private equity boards, and regulatory authorities.",
    },
    {
      title: "End-to-End Systems",
      subtitle: "7 Architectural Pillars",
      text: "Connecting customer acquisition, inventory operations, general ledgers, and executive BI dashboards into a single source of enterprise truth.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-3">
              INSTITUTIONAL FOUNDATION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-tight mb-6">
              About Bizenra Advisory
            </h1>
            <p className="text-[#A2BEAF] text-base sm:text-lg font-light leading-relaxed">
              Bizenra was founded on a singular premise: complex enterprises do not fail from a lack of vision; they fail from fragile operations, fragmented data, and manual friction. We build the architecture that makes growth durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#071911] border border-[#143926] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#D4B572] uppercase tracking-wider block mb-2">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF7F0] font-normal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A2BEAF] leading-relaxed font-light">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Hubs */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#06150E] border border-[#163826] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-semibold text-[#C5A566] uppercase tracking-wider block mb-2">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F0] font-normal mb-2">
                Headquarters &amp; Operational Hubs
              </h2>
              <p className="text-sm text-[#A2BEAF] max-w-xl font-light">
                Managing strategic engagements and cross-border commercial frameworks across key financial and trade hubs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Dubai, UAE", "London, UK", "Karachi, PK"].map((hub, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-[#0B2A1C] border border-[#23583C] text-xs font-semibold text-[#FAF7F0]"
                >
                  {hub}
                </div>
              ))}
            </div>
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
