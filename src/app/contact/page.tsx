"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "Full Enterprise Audit & Architecture",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-3">
                  ENGAGEMENT INQUIRIES
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl text-[#FAF7F0] font-normal leading-tight mb-4">
                  Initiate an Advisory Discussion
                </h1>
                <p className="text-[#A2BEAF] text-base font-light leading-relaxed">
                  Bizenra maintains a selective client roster to ensure direct principal engagement on every operational and financial architecture mandate.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#133523]">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A566] font-semibold mb-1">
                    Direct Email
                  </h4>
                  <a
                    href="mailto:info@bizenra.com"
                    className="text-lg font-serif text-[#FAF7F0] hover:text-[#E8C87A] transition-colors"
                  >
                    info@bizenra.com
                  </a>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A566] font-semibold mb-1">
                    Registered Domain &amp; Network
                  </h4>
                  <p className="text-sm text-[#A2BEAF]">
                    bizenra.com &bull; Bizenra Advisory
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A566] font-semibold mb-2">
                    Executive Hubs
                  </h4>
                  <div className="space-y-1.5 text-sm text-[#8BAE9A]">
                    <p><strong className="text-[#FAF7F0]">Dubai Hub:</strong> DIFC Gate District, Dubai, UAE</p>
                    <p><strong className="text-[#FAF7F0]">London Hub:</strong> Mayfair Financial District, London, UK</p>
                    <p><strong className="text-[#FAF7F0]">Operations:</strong> Executive Towers, Karachi, PK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#061810] border border-[#163826] p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#0C2D1D] border border-[#276445] flex items-center justify-center text-[#E8C87A] text-2xl">
                      ✓
                    </div>
                    <h3 className="font-serif text-3xl text-[#FAF7F0]">
                      Inquiry Logged Securely
                    </h3>
                    <p className="text-[#A2BEAF] text-sm leading-relaxed max-w-md mx-auto">
                      Thank you, {form.name}. Our principal advisory committee has logged your mandate parameters. We will reply to {form.email} promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-2xl text-[#FAF7F0] font-normal mb-1">
                      Mandate Assessment Form
                    </h3>
                    <p className="text-xs text-[#8BAE9A] mb-6">
                      Strict non-disclosure protocols apply to all communications.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#A2BEAF] font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Marcus Sterling"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] text-sm placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#A2BEAF] font-medium mb-1.5">
                          Work Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="marcus@enterprise.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] text-sm placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#A2BEAF] font-medium mb-1.5">
                          Enterprise / Venture Name
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Sterling Capital / Holdings"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] text-sm placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#A2BEAF] font-medium mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+971 50 ... / +44 20 ..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] text-sm placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-[#A2BEAF] font-medium mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] text-sm focus:outline-none focus:border-[#E8C87A] transition-colors"
                      >
                        <option value="Full Enterprise Audit & Architecture">
                          Full Enterprise Audit &amp; Architecture
                        </option>
                        <option value="Financial Controllership & Ledger Automation">
                          Financial Controllership &amp; Ledger Automation
                        </option>
                        <option value="Commission & Broker Performance Infrastructure">
                          Commission &amp; Broker Performance Infrastructure
                        </option>
                        <option value="Supply Chain Inventory & Customs Re-Engineering">
                          Supply Chain Inventory &amp; Customs Re-Engineering
                        </option>
                        <option value="Accounting Practice Cloud Modernization">
                          Accounting Practice Cloud Modernization
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-[#A2BEAF] font-medium mb-1.5">
                        Mandate Context &amp; Objectives
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please provide details regarding operational bottlenecks, software stack, entity count, and ideal engagement timelines..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#082015] border border-[#19442F] text-[#FAF7F0] text-sm placeholder-[#537361] focus:outline-none focus:border-[#E8C87A] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full py-3.5 rounded-lg bg-[#E8C87A] text-[#05160E] text-sm font-semibold tracking-wide hover:bg-[#F3DA96] active:scale-[0.99] transition-all shadow-md"
                    >
                      Submit Confidential Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
