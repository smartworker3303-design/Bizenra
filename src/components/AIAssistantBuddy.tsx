"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AIAssistantBuddyProps {
  onOpenConsultation?: () => void;
}

interface Message {
  sender: "buddy" | "user";
  text: string;
  chips?: { label: string; action: () => void }[];
}

export default function AIAssistantBuddy({ onOpenConsultation }: AIAssistantBuddyProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [dockSide, setDockSide] = useState<"right" | "left">("right");
  const [contextMessage, setContextMessage] = useState("Hi! I'm Buddy, your Bizenra AI Advisor. How can I assist your enterprise today?");
  const [activeSection, setActiveSection] = useState<string>("top");
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "buddy",
      text: "Welcome to Bizenra Advisory. I'm Buddy — your interactive strategic companion. How can I help you explore our operational architecture, financial frameworks, or case histories?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll spy to detect active section and provide contextual insights
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;

      const caseEl = document.getElementById("case-histories");
      const focusEl = document.getElementById("focus-areas");
      const whyEl = document.getElementById("why-partner");
      const insightsEl = document.getElementById("insights-section");
      const faqEl = document.getElementById("faq-section");

      if (faqEl && scrollPos >= faqEl.offsetTop) {
        if (activeSection !== "faq") {
          setActiveSection("faq");
          setContextMessage("Have specific questions about fee structures or mandate formats? Ask me directly!");
        }
      } else if (insightsEl && scrollPos >= insightsEl.offsetTop) {
        if (activeSection !== "insights") {
          setActiveSection("insights");
          setContextMessage("Reviewing our publications? Ask me about the 13-Week Cash Flow Engine or ERP safeguards.");
        }
      } else if (whyEl && scrollPos >= whyEl.offsetTop) {
        if (activeSection !== "why") {
          setActiveSection("why");
          setContextMessage("Discover why discerning founders choose Bizenra's 4-pillar execution framework.");
        }
      } else if (focusEl && scrollPos >= focusEl.offsetTop) {
        if (activeSection !== "focus") {
          setActiveSection("focus");
          setContextMessage("Exploring our 7 Practices? I can break down our FP&A, Operations SOPs, or M&A readiness.");
        }
      } else if (caseEl && scrollPos >= caseEl.offsetTop) {
        if (activeSection !== "case") {
          setActiveSection("case");
          setContextMessage("Curious how we eliminated reporting variance by 34% at Al Rauf or automated settlements at Aeon & Trisl?");
        }
      } else if (scrollPos < 600) {
        if (activeSection !== "top") {
          setActiveSection("top");
          setContextMessage("Hi! I'm Buddy, your Bizenra AI Advisor. How can I assist your enterprise today?");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Knowledge base responses for user queries
  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: Message = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    const lower = query.toLowerCase();
    setTimeout(() => {
      let reply = "Bizenra designs structured operational and financial systems tailored to mid-market and scaling enterprises. Would you like to schedule an introductory consultation to discuss your specific infrastructure?";
      let chips: { label: string; action: () => void }[] = [
        { label: "Book Discovery Briefing", action: () => onOpenConsultation && onOpenConsultation() },
        { label: "Explore Case Histories", action: () => window.location.assign("/case-histories") },
      ];

      if (lower.includes("price") || lower.includes("fee") || lower.includes("cost")) {
        reply = "Bizenra supports flexible engagement models: Diagnostic Sprints (fixed-scope 2-4 week institutional audits), Fractional Executive Mandates (monthly retainer for COO/CFO leadership), and Project Milestone Architecture. We do not bill hourly open-ended invoices.";
        chips = [
          { label: "Book Consultation", action: () => onOpenConsultation && onOpenConsultation() },
          { label: "View FAQ", action: () => window.location.assign("/contact#faq") },
        ];
      } else if (lower.includes("al rauf") || lower.includes("real estate") || lower.includes("variance")) {
        reply = "At Al Rauf Group, Bizenra engineered automated ledger synchronization and multi-entity capital expenditure controls across parallel high-rise property ventures, reducing monthly financial reporting variance by 34% and achieving 100% statutory compliance.";
        chips = [
          { label: "Read Al Rauf Deep Dive", action: () => window.location.assign("/case-histories#deep-dive") },
          { label: "HR Practice Overview", action: () => window.location.assign("/services") },
        ];
      } else if (lower.includes("service") || lower.includes("practice") || lower.includes("focus")) {
        reply = "Bizenra operates across 7 core disciplines: 1. Business Operations & Workflow, 2. Financial Reporting & Controls, 3. FP&A & Cash-Flow Architecture, 4. Strategic Systems Setup, 5. Growth & Margin Optimization, 6. HR & People Governance, 7. M&A Readiness.";
        chips = [
          { label: "View All 7 Practices", action: () => window.location.assign("/services") },
          { label: "Schedule Diagnostic", action: () => onOpenConsultation && onOpenConsultation() },
        ];
      } else if (lower.includes("erp") || lower.includes("cash flow") || lower.includes("insight")) {
        reply = "In our latest publications, we cover 'The 13-Week Cash Flow Engine' (liquidity modeling vs P&L illusions) and 'Avoiding ERP Disaster' (process prerequisites before software acquisition).";
        chips = [
          { label: "Read Insights", action: () => window.location.assign("/insights") },
          { label: "Book Briefing", action: () => onOpenConsultation && onOpenConsultation() },
        ];
      } else if (lower.includes("consult") || lower.includes("book") || lower.includes("contact")) {
        reply = "You can schedule a direct working session with our practice leadership. Discovery consultations are confidential, actionable 45-minute architectural assessments.";
        chips = [
          { label: "Open Booking Form", action: () => onOpenConsultation && onOpenConsultation() },
          { label: "Contact Advisory HQ", action: () => window.location.assign("/contact") },
        ];
      }

      setMessages((prev) => [...prev, { sender: "buddy", text: reply, chips }]);
    }, 450);
  };

  const isCaseHistories = pathname.includes("/case-histories");

  return (
    <>
      {/* Floating Buddy Container (Anchored Left or Right) */}
      <div
        className={`fixed bottom-6 ${
          dockSide === "right" ? "right-5 sm:right-7" : "left-5 sm:left-7"
        } z-50 flex flex-col ${
          dockSide === "right" ? "items-end" : "items-start"
        } select-none transition-all duration-300`}
      >
        {/* Full Chat Dialog */}
        {isOpen && !isMinimized && (
          <div className="w-[92vw] sm:w-[380px] max-h-[82vh] h-[520px] rounded-2xl bg-[#030e07]/95 border border-[#1b4b32] shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col overflow-hidden mb-3.5 animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Header */}
            <div className="px-4 py-3.5 bg-gradient-to-r from-[#04190e] via-[#082817] to-[#04190e] border-b border-[#1b4b32] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Buddy Mascot Avatar */}
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0c3922] to-[#051c11] border border-[#276a47] flex items-center justify-center shadow-inner">
                  <svg
                    className="w-5 h-5 text-[#E8C87A]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <rect x="4" y="6" width="16" height="13" rx="3" />
                    <circle cx="9" cy="11" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="11" r="1.5" fill="currentColor" />
                    <path strokeLinecap="round" d="M10 15h4M12 3v3m-3-3h6" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-[#051c11] animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#FAF7F0] tracking-wide">
                      Buddy
                    </span>
                    <span className="text-[9.5px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#0b2d1c] text-[#E8C87A] border border-[#1b4b32] uppercase">
                      AI Advisor
                    </span>
                  </div>
                  <p className="text-[10.5px] text-[#86AB96] font-light">
                    Context: {activeSection === "top" ? "General Overview" : activeSection.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5 text-[#86AB96]">
                <button
                  type="button"
                  onClick={() => setDockSide(dockSide === "right" ? "left" : "right")}
                  title={`Dock to ${dockSide === "right" ? "left" : "right"}`}
                  className="p-1 rounded hover:text-[#FAF7F0] hover:bg-[#0c2a1c] transition-colors text-xs"
                >
                  {dockSide === "right" ? "◧" : "◨"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  title="Minimize"
                  className="p-1 rounded hover:text-[#FAF7F0] hover:bg-[#0c2a1c] transition-colors text-xs"
                >
                  –
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="p-1 rounded hover:text-[#FAF7F0] hover:bg-[#0c2a1c] transition-colors text-xs"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Quick Context Tip Banner */}
            <div className="px-4 py-2 bg-[#05170d]/90 border-b border-[#143d28] flex items-center justify-between text-[11px] text-[#A3C8B3]">
              <span className="truncate pr-2 italic font-light">&ldquo;{contextMessage}&rdquo;</span>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    m.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      m.sender === "user"
                        ? "bg-[#E8C87A] text-[#05170E] font-medium rounded-tr-sm shadow-sm"
                        : "bg-[#082215] border border-[#1b4b32] text-[#E8EFEA] font-light rounded-tl-sm shadow-sm"
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Suggestion Chips */}
                  {m.chips && m.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.chips.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={chip.action}
                          className="cursor-pointer text-[10.5px] px-2.5 py-1 rounded-full bg-[#0b2d1c] border border-[#215a3c] text-[#E8C87A] hover:bg-[#15462c] transition-colors"
                        >
                          {chip.label} &rarr;
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="px-3 py-2 bg-[#031309] border-t border-[#143b27] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] uppercase tracking-wider text-[#688E79] font-medium shrink-0">
                Ask:
              </span>
              <button
                type="button"
                onClick={() => handleSend("What is Bizenra's fee structure?")}
                className="shrink-0 text-[10.5px] px-2.5 py-1 rounded-full bg-[#072416] border border-[#17482f] text-[#CBE5D7] hover:text-[#E8C87A] hover:border-[#E8C87A]/40 transition-colors"
              >
                Fees &amp; Models
              </button>
              <button
                type="button"
                onClick={() => handleSend("Explain Al Rauf 34% variance reduction")}
                className="shrink-0 text-[10.5px] px-2.5 py-1 rounded-full bg-[#072416] border border-[#17482f] text-[#CBE5D7] hover:text-[#E8C87A] hover:border-[#E8C87A]/40 transition-colors"
              >
                Al Rauf Mandate
              </button>
              <button
                type="button"
                onClick={() => handleSend("What are the 7 Practice Pillars?")}
                className="shrink-0 text-[10.5px] px-2.5 py-1 rounded-full bg-[#072416] border border-[#17482f] text-[#CBE5D7] hover:text-[#E8C87A] hover:border-[#E8C87A]/40 transition-colors"
              >
                7 Practices
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#04150b] border-t border-[#16422b]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask Buddy anything about Bizenra..."
                  className="flex-1 bg-[#020b06] border border-[#1d4d34] rounded-xl px-3 py-2 text-xs text-[#E8EFEA] placeholder-[#5C7E6C] focus:outline-none focus:border-[#E8C87A]"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim()}
                  className="px-3.5 py-2 rounded-xl bg-[#E8C87A] text-[#05170E] font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F3DA96] transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Minimized Peek Bubble */}
        {!isOpen && (
          <div
            className={`max-w-[280px] sm:max-w-[320px] mb-2.5 rounded-xl bg-[#04150c]/95 border border-[#1c4e34] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 ${
              dockSide === "right" ? "origin-bottom-right" : "origin-bottom-left"
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-[#072517] border border-[#1c5537] flex items-center justify-center shrink-0 text-[#E8C87A] mt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="4" y="6" width="16" height="13" rx="3" />
                <circle cx="9" cy="11" r="1.5" fill="currentColor" />
                <circle cx="15" cy="11" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-[#E8C87A] uppercase font-semibold">
                  BUDDY &bull; AI ADVISOR
                </span>
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  className="text-[#6C8E7D] hover:text-[#FAF7F0] text-xs leading-none p-0.5"
                  aria-label="Dismiss message"
                >
                  ✕
                </button>
              </div>
              <p className="text-[11.5px] text-[#D8E6DE] font-light leading-snug mt-1 line-clamp-2">
                {contextMessage}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="text-[10px] font-semibold text-[#041209] bg-[#E8C87A] hover:bg-[#F3DA96] px-2 py-0.5 rounded transition-colors"
                >
                  Ask Buddy &rarr;
                </button>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-[10px] font-medium text-[#A3C8B3] hover:text-[#FAF7F0] transition-colors"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Mascot Trigger Pill / Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }}
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#04170E]/95 border border-[#1b4b32] shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md hover:border-[#E8C87A]/50 hover:bg-[#072417] transition-all duration-200 cursor-pointer"
          aria-label="Toggle Bizenra AI Advisor"
        >
          {/* Animated Mascot Head */}
          <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-[#0c3922] to-[#04180e] border border-[#23603f] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <svg
              className="w-4 h-4 text-[#E8C87A]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="4" y="6" width="16" height="13" rx="3" />
              <circle cx="9" cy="11" r="1.5" fill="currentColor" />
              <circle cx="15" cy="11" r="1.5" fill="currentColor" />
              <path strokeLinecap="round" d="M12 3v3" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10b981] animate-ping opacity-75" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10b981]" />
          </div>

          <div className="flex flex-col text-left pr-1">
            <span className="text-xs font-semibold text-[#FAF7F0] group-hover:text-[#E8C87A] transition-colors leading-tight">
              {isCaseHistories ? "Bizenra Buddy" : "Advisory Buddy"}
            </span>
            <span className="text-[9.5px] font-mono text-[#769C87] tracking-wider uppercase leading-none mt-0.5">
              {isOpen ? "Close Advisor" : "Interactive AI"}
            </span>
          </div>

          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C87A] ml-0.5" />
        </button>
      </div>
    </>
  );
}