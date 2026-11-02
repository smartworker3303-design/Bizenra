"use client";

import { CaseStudy } from "./CaseHistoriesSection";

interface CaseHistoryModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export default function CaseHistoryModal({
  caseStudy,
  onClose,
  onOpenConsultation,
}: CaseHistoryModalProps) {
  if (!caseStudy) return null;

  const isGold = caseStudy.tagTheme === "gold";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#020704]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#061810] border border-[#1C4731] shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-6 sm:p-8 z-10 text-[#E8EFEA] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="cursor-pointer absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-[#8CB49B] hover:text-[#FAF7F0] hover:bg-[#0C2A1C] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Tags & Header */}
        <div className="flex items-center justify-between gap-3 mb-4 pr-8">
          <span
            className={`inline-block px-3 py-1 rounded text-[11px] font-semibold tracking-wider uppercase ${
              isGold
                ? "bg-[#282110]/80 border border-[#B8964C]/70 text-[#E8C87A]"
                : "bg-[#0B2A1C]/90 border border-[#23583C] text-[#86BA9C]"
            }`}
          >
            {caseStudy.tag}
          </span>
          <span className="text-[12px] font-medium text-[#7A9C8A]">
            {caseStudy.mandateType}
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal mb-1">
          {caseStudy.client}
        </h3>
        <p className="text-sm font-medium text-[#D4B572] mb-6">
          {caseStudy.role} • {caseStudy.discipline}
        </p>

        {/* Overview Statement */}
        <div className="p-4 rounded-xl bg-[#082015] border border-[#163D29] mb-6">
          <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#86BA9C] mb-1.5">
            Executive Summary
          </h4>
          <p className="text-[#C6DFD1] text-sm leading-relaxed">
            {caseStudy.description}
          </p>
        </div>

        {/* Quantified Metrics */}
        {caseStudy.fullDetails?.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {caseStudy.fullDetails.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#071F14] border border-[#143926] text-center"
              >
                <div className="font-serif text-2xl sm:text-3xl font-medium text-[#E8C87A]">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7A9C8A] mt-1 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Strategic Protocols Implemented */}
        <div className="mb-6">
          <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A566] mb-3">
            Core Enterprise Deliverables
          </h4>
          <div className="space-y-2">
            {caseStudy.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#D3E5DB]">
                <span className="shrink-0 w-4 h-4 rounded-full border border-[#276445] bg-[#0A2A1B] flex items-center justify-center text-[10px] text-[#E8C87A] mt-0.5">
                  ✓
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Solution */}
        {caseStudy.fullDetails?.solution && (
          <div className="mb-8">
            <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A566] mb-2">
              System Architecture &amp; Execution
            </h4>
            <p className="text-sm text-[#A2BEAF] leading-relaxed font-light">
              {caseStudy.fullDetails.solution}
            </p>
          </div>
        )}

        {/* Modal Actions */}
        <div className="pt-5 border-t border-[#143525] flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-[#8BAE9A] hover:text-[#FAF7F0] transition-colors"
          >
            ← Back to Mandates
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation?.();
            }}
            className="px-5 py-2.5 rounded bg-[#E8C87A] text-[#05160E] text-xs font-semibold hover:bg-[#F3DA96] transition-colors"
          >
            Inquire About Similar Mandates
          </button>
        </div>
      </div>
    </div>
  );
}
