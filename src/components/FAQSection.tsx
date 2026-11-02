"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What engagement models does Bizenra offer?",
      answer:
        "We provide structured sprint diagnostic audits (2–4 weeks), interim executive controllership/COO retainers (3–12 months), and dedicated operational transformation projects focused on specific functional milestones like ERP implementation or FP&A setup.",
    },
    {
      id: 2,
      question: "How quickly can we expect measurable operational improvements?",
      answer:
        "Immediate operational stabilization begins within the first two weeks of diagnostic review. Most clients experience measurable reporting clarity and workflow cycle-time reductions within 30 to 45 days of implementation.",
    },
    {
      id: 3,
      question: "How do you manage confidentiality and sensitive company financials?",
      answer:
        "All engagements are governed by strict mutual non-disclosure agreements before any financial data or operational documentation is reviewed. Data access is restricted to senior advisory personnel and handled through encrypted enterprise systems.",
    },
    {
      id: 4,
      question: "Does Bizenra replace our internal team or empower them?",
      answer:
        "We empower and elevate your existing team. Our approach focuses on building clear SOPs, training internal leaders, and eliminating operational friction so your staff can execute with confidence without dependence on outside consultants.",
    },
    {
      id: 5,
      question: "What types of businesses see the highest ROI from your advisory?",
      answer:
        "Fast-scaling ventures, multi-entity enterprises, and companies generating $3M–$50M+ in revenue facing operational bottlenecks, reporting delays, rapid headcount growth, or impending audits derive the highest immediate leverage from our advisory.",
    },
  ];

  // First item open by default as shown in the Figma design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FFFFFF] leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Advisory Engagement Details
          </h2>
          <p className="text-[#A3B8AC] text-sm sm:text-[14.5px] font-light leading-relaxed max-w-2xl mx-auto">
            Straight answers on how Bizenra structures partnerships, safeguards proprietary information,
            and drives measurable return on engagement.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 overflow-hidden hover:border-[#20583A] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-[#FFFFFF] text-sm sm:text-[15px] pr-4 group-hover:text-[#E8C87A] transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#8EA396] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#E8C87A]" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-[13.5px] text-[#A3B8AC] font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
