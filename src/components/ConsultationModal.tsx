"use client";

import { useState, useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialService }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService || "1. Business Operations Architecture",
    message: "",
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      // onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#020704]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#061810] border border-[#1C4731] shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 z-10 text-[#E8EFEA]">
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

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#0C2D1D] border border-[#276445] flex items-center justify-center text-[#E8C87A] text-2xl">
              ✓
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F0]">
              Consultation Request Received
            </h3>
            <p className="text-[#A2BEAF] text-sm leading-relaxed max-w-md mx-auto">
              Thank you, {formData.name || "partner"}. A Senior Bizenra Principal will review your venture mandate and contact you at {formData.email || "your email"} within one business day.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded bg-[#E8C87A] text-[#05160E] text-sm font-semibold hover:bg-[#F3DA96]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C5A566] uppercase block mb-1.5">
                EXECUTIVE INQUIRY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F0] font-medium leading-tight">
                Book an Advisory Consultation
              </h3>
              <p className="text-xs sm:text-[13px] text-[#A2BEAF] mt-1.5">
                Discuss operational architecture, institutional governance, or FP&amp;A controllership for your enterprise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-[13px]">
              <div>
                <label className="block text-[#A2BEAF] font-medium mb-1.5">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alexander Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[#A2BEAF] font-medium mb-1.5">Work Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="alexander@venture.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#A2BEAF] font-medium mb-1.5">Company / Entity</label>
                  <input
                    type="text"
                    placeholder="Venture Holding Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#A2BEAF] font-medium mb-1.5">Primary Advisory Area</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] focus:outline-none focus:border-[#E8C87A] transition-colors"
                >
                  <option value="1. Business Operations Architecture">1. Business Operations Architecture</option>
                  <option value="2. Financial Management & Reporting">2. Financial Management &amp; Reporting</option>
                  <option value="3. FP&A Architecture & Modeling">3. FP&amp;A Architecture &amp; Modeling</option>
                  <option value="4. Accounting Advisory & Controllership">4. Accounting Advisory &amp; Controllership</option>
                  <option value="5. Business Systems & Software Integration">5. Business Systems &amp; Software Integration</option>
                  <option value="Diagnostic Mandate Scope Request">Diagnostic Mandate Scope Request</option>
                </select>
              </div>

              <div>
                <label className="block text-[#A2BEAF] font-medium mb-1.5">Mandate Brief / Scope</label>
                <textarea
                  rows={3}
                  placeholder="Outline key operational bottlenecks, reporting variances, or strategic goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 rounded-lg bg-[#E8C87A] text-[#05160E] text-[13.5px] font-semibold tracking-wide hover:bg-[#F3DA96] active:scale-[0.99] transition-all shadow-md"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
