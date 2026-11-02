"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import CaseHistoryModal from "@/components/CaseHistoryModal";
import { caseStudiesData, CaseStudy } from "@/components/CaseHistoriesSection";

interface DeliverableCard {
  title: string;
  description: string;
  deliverableType: "CORE DELIVERABLE:" | "ADVISORY MANDATE:";
  deliverableName: string;
  iconType: string;
}

interface PracticePillar {
  id: number;
  tabTitle: string;
  pillarNumber: string;
  subtitle: string;
  heading: string;
  description: string;
  targetProfile: string;
  failureModes: {
    title: string;
    description: string;
  }[];
  deliverables: DeliverableCard[];
}

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("1. Business Operations Architecture");
  const [activeTab, setActiveTab] = useState(1);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [quoteVisible, setQuoteVisible] = useState(true);

  // Diagnostic form state
  const [intakeName, setIntakeName] = useState("");
  const [intakeEmail, setIntakeEmail] = useState("");
  const [intakeCompany, setIntakeCompany] = useState("");
  const [intakeFocus, setIntakeFocus] = useState("Business Operations & SOP Standardization");
  const [intakeContext, setIntakeContext] = useState("");
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);

  const openConsultationWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setConsultationOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCase = (caseId: string) => {
    const found = caseStudiesData.find((c) => c.id === caseId);
    if (found) {
      setSelectedCase(found);
    }
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIntakeSubmitted(true);
  };

  const pillars: PracticePillar[] = [
    {
      id: 1,
      tabTitle: "1. Business Operations",
      pillarNumber: "PRACTICE PILLAR 01",
      subtitle: "Enterprise Delivery Architecture",
      heading: "Engineering Scalable Operations & Process Integrity",
      description:
        "As enterprises cross inflection points in revenue and headcount, manual goodwill ceases to work. We convert ad-hoc heroic efforts into documented, measurable operating engines with absolute accountability at each handoff.",
      targetProfile:
        "High-growth mid-market organizations ($3M–$50M ARR) encountering structural friction between commercial teams, production fulfillment, and client retention.",
      failureModes: [
        {
          title: "Uncontrolled Handoff Bottlenecks",
          description:
            "Sales closing promises without standard operating validation by the delivery or fulfillment departments.",
        },
        {
          title: "Fragmented Communication Silos",
          description:
            "Teams coordinating through disconnected Slack threads, personal WhatsApps, and scattered spreadsheets.",
        },
        {
          title: "Tribal Knowledge Dependency",
          description:
            "Essential processes stored exclusively in the minds of a few senior employees, creating existential turnover risk.",
        },
        {
          title: "Absence of SLA Standards",
          description:
            "No formal metrics for internal turnaround times, quality assurance gates, or dispute escalations.",
        },
      ],
      deliverables: [
        {
          title: "End-to-End Workflow Audits",
          description:
            "Granular tracing of the customer journey and internal resource movement from demand capture to cash reconciliation.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "BPMN 2.0 Process Map + Friction & Redundancy Register",
          iconType: "nodes",
        },
        {
          title: "SOP Codex & Digital Playbooks",
          description:
            "Transforming complex operations into foolproof, step-by-step procedures with explicit inputs, validation checkpoints, and role ownership.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Centralized SOP Knowledge Repository & Onboarding Checklists",
          iconType: "book",
        },
        {
          title: "Cross-Department Handoffs",
          description:
            "Clear contract boundaries between marketing, sales, production, logistics, and billing to eliminate finger-pointing.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Interdepartmental SLA Matrices & Escalation Protocols",
          iconType: "arrows",
        },
        {
          title: "Executive KPI Cockpits",
          description:
            "Real-time operations dashboards highlighting unit economics, throughput times, backlog queues, and capacity strain indicators.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Operational BI Dashboard (PowerBI / Looker / Notion)",
          iconType: "gauge",
        },
        {
          title: "Workflow Automation Blueprints",
          description:
            "Identifying repetitive human tasks and implementing zero-touch webhook integrations, API relays, and CRM routing logic.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Engineered Zapier / Make.com Workflows & Sync Architecture",
          iconType: "gear",
        },
        {
          title: "Fractional Head of Ops Deployment",
          description:
            "Direct embedded leadership to chair weekly operational syncs, manage vendors, enforce SOP compliance, and mentor internal teams.",
          deliverableType: "ADVISORY MANDATE:",
          deliverableName: "90 to 180-Day Retained Operational Governance",
          iconType: "user-gear",
        },
      ],
    },
    {
      id: 2,
      tabTitle: "2. Financial Management & Reporting",
      pillarNumber: "PRACTICE PILLAR 02",
      subtitle: "Institutional Controllership & Governance",
      heading: "Pristine Management Accounts & Board-Level Visibility",
      description:
        "Delayed monthly closes and opaque transactional ledgers blind executive decisions. We engineer 5-day month-end close schedules, multi-entity consolidation, and executive flash reporting frameworks that satisfy tier-1 boards and audit partners.",
      targetProfile:
        "Multi-entity or international commercial ventures requiring consolidated GAAP/IFRS visibility, clean balance sheet reconciliations, and debt covenant compliance.",
      failureModes: [
        {
          title: "Deferred Month-End Closings",
          description:
            "Books closing 25-45 days late, rendering monthly P&L statements obsolete for proactive capital allocation.",
        },
        {
          title: "Multi-Entity Reconciliation Gaps",
          description:
            "Intercompany transfers and cross-border currency conversions resulting in unreconciled suspense accounts.",
        },
        {
          title: "Opaque Revenue Recognition",
          description:
            "Inconsistent ASC 606 / IFRS 15 application leading to deferred revenue leakage and restatement liabilities.",
        },
        {
          title: "Absence of Executive Flash Metrics",
          description:
            "Leadership relying on historical guesswork while waiting weeks for static backward-looking ledgers.",
        },
      ],
      deliverables: [
        {
          title: "5-Day Month-End Close Engine",
          description:
            "Structured closing checklist, reconciliation schedules, cut-off governance, and accelerated sign-off protocols.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Accelerated Month-End Close Playbook & Balance Sheet Workpapers",
          iconType: "gauge",
        },
        {
          title: "Multi-Entity General Ledger Consolidation",
          description:
            "Harmonizing parent and subsidiary ledgers with automated intercompany eliminations and FX translation logic.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Consolidated Multi-Entity Reporting Engine & COA Hierarchy",
          iconType: "nodes",
        },
        {
          title: "Board-Ready Financial Flash Dashboards",
          description:
            "Executive-grade reporting templates delivering weekly revenue, margin trends, working capital, and budget variance.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Executive & Investor Financial Flash Reporting Packets",
          iconType: "book",
        },
        {
          title: "Technical Revenue Recognition Protocols",
          description:
            "Rigorous ASC 606 / IFRS 15 revenue schedules linking contracts, invoicing milestones, and deferred revenue ledgers.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Standardized Revenue Recognition & Audit Defense Schedule",
          iconType: "arrows",
        },
        {
          title: "Accounts Payable & Receivable Automation",
          description:
            "Streamlining 3-way vendor match, approval thresholds, and automated customer collection escalation sequences.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Automated AP/AR Workflow & Aging Management Dashboard",
          iconType: "gear",
        },
        {
          title: "Fractional Corporate Controller Deployment",
          description:
            "Senior controllership oversight to manage accounting staff, interface with tax authorities, and ensure GAAP compliance.",
          deliverableType: "ADVISORY MANDATE:",
          deliverableName: "90 to 180-Day Retained Controllership Governance",
          iconType: "user-gear",
        },
      ],
    },
    {
      id: 3,
      tabTitle: "3. FP&A Architecture",
      pillarNumber: "PRACTICE PILLAR 03",
      subtitle: "Predictive Financial Engineering",
      heading: "Dynamic FP&A Engines & Capital Allocation Modeling",
      description:
        "Static annual budgets become obsolete within weeks of execution. We build dynamic 13-week rolling cash forecasts, unit economics drivers, and stress-tested scenario simulations that empower leadership to deploy capital with unshakeable confidence.",
      targetProfile:
        "Scaling enterprises ($5M–$60M ARR) managing rapid hiring, inventory working capital cycles, or preparing for debt/equity capital rounds.",
      failureModes: [
        {
          title: "Unforeseen Cash Inversion",
          description:
            "Sudden liquidity squeezes caused by working capital lag between customer receivables and supplier payables.",
        },
        {
          title: "Static Annual Budget Obsolescence",
          description:
            "Rigid annual forecasts incapable of adapting to sudden market shifts, cost shocks, or hiring plan deviations.",
        },
        {
          title: "Distorted Unit Economics & Churn",
          description:
            "Underestimating blended customer acquisition costs and variable fulfillment churn in contribution margin calculations.",
        },
        {
          title: "Board Presentation Asymmetry",
          description:
            "Financial decks presenting surface numbers without defensible operational drivers or sensitivity scenario stress-tests.",
        },
      ],
      deliverables: [
        {
          title: "13-Week Rolling Cash Flow Engine",
          description:
            "Direct-method liquidity forecasting tracking cash inflows, vendor disbursements, payroll runs, and safety cushions.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Dynamic 13-Week Cash Forecast Engine & Liquidity Covenants",
          iconType: "gauge",
        },
        {
          title: "Driver-Based 3-Statement Operational Models",
          description:
            "Fully integrated dynamic P&L, balance sheet, and cash flow forecasts driven by real-time commercial volume inputs.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Institutional 3-Statement Financial Model & Scenario Builder",
          iconType: "nodes",
        },
        {
          title: "Unit Economics & Contribution Margin Audits",
          description:
            "Granular cohort profitability analysis identifying negative-margin customer cohorts and hidden operational cost leakage.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Segmental Unit Economics & Gross Margin Attribution Model",
          iconType: "book",
        },
        {
          title: "Headcount & CapEx Sensitivity Simulations",
          description:
            "Interactive scenario testing modeling runway impact under downside, base, and aggressive hiring/expansion cases.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "CapEx & Hiring Allocation Matrix with Sensitivity Sliders",
          iconType: "arrows",
        },
        {
          title: "Automated Variance & Budget Tracking",
          description:
            "Connecting dynamic models to general ledgers to generate automated monthly actuals-vs-forecast variance diagnostics.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Automated Budget vs. Actuals Variance Diagnostic Dashboard",
          iconType: "gear",
        },
        {
          title: "Fractional Head of FP&A Deployment",
          description:
            "Executive financial partner to lead board presentations, evaluate commercial contracts, and guide capital rounds.",
          deliverableType: "ADVISORY MANDATE:",
          deliverableName: "90 to 180-Day Retained Strategic FP&A Stewardship",
          iconType: "user-gear",
        },
      ],
    },
    {
      id: 4,
      tabTitle: "4. Accounting Advisory",
      pillarNumber: "PRACTICE PILLAR 04",
      subtitle: "Controllership & Audit Preparedness",
      heading: "Rigorous Internal Controls & Institutional Controllership",
      description:
        "Rapid enterprise growth without accounting governance compounds technical debt and exposes founders to compliance liabilities. We restructure charts of accounts, enforce separation of duties, and install institutional audit trails.",
      targetProfile:
        "Mid-market organizations seeking clean valuation defense, preparing for institutional financing, Big 4 audits, or M&A due diligence.",
      failureModes: [
        {
          title: "Compounding Technical Accounting Debt",
          description:
            "Unclassified transactions, manual journal patches, and messy historical records creating significant valuation write-downs.",
        },
        {
          title: "Absence of Segregation of Duties",
          description:
            "Single individuals initiating and approving disbursements, creating substantial fraud and compliance exposure.",
        },
        {
          title: "External Audit Friction & Fee Overruns",
          description:
            "Disorganized supporting schedules and missing documentation causing prolonged audit delays and punitive accounting fees.",
        },
        {
          title: "Incoherent Chart of Accounts (COA)",
          description:
            "Bloated, unstructured account hierarchies that fail to map expenses to functional business units and cost centers.",
        },
      ],
      deliverables: [
        {
          title: "Chart of Accounts (COA) Realignment",
          description:
            "Rebuilding account structures to match institutional GAAP standards, eliminating duplicate and misclassified accounts.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Institutional Multi-Tier Chart of Accounts Hierarchy",
          iconType: "nodes",
        },
        {
          title: "Internal Control & Segregation of Duties Matrix",
          description:
            "Establishing multi-tier approval limits, dual-signatory payment rules, and strict fraud prevention mechanisms.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Formal Internal Controls Matrix & Dual-Authorization Manual",
          iconType: "book",
        },
        {
          title: "External Audit PBC Preparation & Defense",
          description:
            "Assembling complete audit schedules, fixed asset depreciation rolls, and supporting workpapers for external auditors.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Audit Readiness Dossier & Technical Auditor Liaison Protocol",
          iconType: "arrows",
        },
        {
          title: "Balance Sheet Reconciliation Cleanup",
          description:
            "Forensic cleanup of suspense accounts, uncleared receivables, and historical bank reconciliation variances.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Subledger-to-GL Reconciliation Register & Hygiene Sign-off",
          iconType: "gauge",
        },
        {
          title: "Inventory & CapEx Valuation Architecture",
          description:
            "Standardized capitalization policies, inventory cost-layer tracking, and physical stock reconciliation schedules.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Capitalization Policy & Stock Variance Valuation Engine",
          iconType: "gear",
        },
        {
          title: "Retained Accounting Advisory Mandate",
          description:
            "Direct technical accounting counsel for complex equity transactions, debt covenant compliance, and board governance.",
          deliverableType: "ADVISORY MANDATE:",
          deliverableName: "Retained Technical Accounting & Audit Governance Mandate",
          iconType: "user-gear",
        },
      ],
    },
    {
      id: 5,
      tabTitle: "5. Business Systems & Software",
      pillarNumber: "PRACTICE PILLAR 05",
      subtitle: "Enterprise Systems Integration",
      heading: "Unified Enterprise Software Stack & Data Pipelines",
      description:
        "Disconnected point solutions create duplicate data entry, sync failures, and reconciliation nightmares. We architect, integrate, and automate ERP, CRM, billing, and operational toolchains into an immutable single source of enterprise truth.",
      targetProfile:
        "Organizations suffering from software sprawl, manual CSV spreadsheets between departments, or botched ERP/CRM platform rollouts.",
      failureModes: [
        {
          title: "Siloed Software Stack Disconnection",
          description:
            "CRM, ERP, and billing platforms operating in total isolation without automated bidirectional synchronization.",
        },
        {
          title: "Manual CSV Migration Dependency",
          description:
            "Finance and operations wasting dozens of hours weekly exporting, cleansing, and re-importing spreadsheet data.",
        },
        {
          title: "Uncontrolled SaaS Tool Sprawl",
          description:
            "Redundant software subscriptions and zombie licenses quietly draining operating margins without central governance.",
        },
        {
          title: "Fragile Custom Webhook Pipelines",
          description:
            "Unmonitored integration scripts that fail silently during peak transaction loads, dropping customer transactions.",
        },
      ],
      deliverables: [
        {
          title: "Enterprise ERP & CRM Architecture",
          description:
            "Custom configuration and data schema alignment across enterprise platforms (NetSuite, QuickBooks, HubSpot, Salesforce).",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Unified System Blueprint & Object Field Mapping Architecture",
          iconType: "nodes",
        },
        {
          title: "Automated Data Pipeline Synchronization",
          description:
            "Replacing manual CSV imports with secure, monitored bidirectional API sync between billing, CRM, and accounting.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Zero-Latency API Integration & Failover Webhook Framework",
          iconType: "gear",
        },
        {
          title: "SaaS Toolchain Audit & License Rationalization",
          description:
            "Forensic review of company-wide software subscriptions, eliminating redundant seats and reducing annual SaaS burn.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "SaaS Rationalization Register & Vendor Optimization Strategy",
          iconType: "book",
        },
        {
          title: "Automated Billing & Revenue Ops Pipelines",
          description:
            "Engineering automated invoicing, payment gateway capture, and subscription lifecycle triggers directly to ledgers.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Automated RevOps Pipeline & Invoicing Synchronization Engine",
          iconType: "arrows",
        },
        {
          title: "Executive Business Intelligence (BI) Setup",
          description:
            "Deploying unified executive dashboards consolidating operational velocity, customer metrics, and cash telemetry.",
          deliverableType: "CORE DELIVERABLE:",
          deliverableName: "Centralized Executive Telemetry Cockpit (Looker / PowerBI)",
          iconType: "gauge",
        },
        {
          title: "Fractional Systems Architect Deployment",
          description:
            "Embedded systems leadership overseeing vendor integrations, managing security protocols, and enforcing data hygiene.",
          deliverableType: "ADVISORY MANDATE:",
          deliverableName: "90 to 180-Day Retained Enterprise Systems Governance",
          iconType: "user-gear",
        },
      ],
    },
  ];

  const methodologyPhases = [
    {
      number: "01",
      title: "Discovery & Diagnostic",
      description:
        "In-depth interviews with front-line staff and executives, data logs review, and initial process friction mapping across 14 working days.",
      duration: "Week 1 - 2",
    },
    {
      number: "02",
      title: "Architecture & Design",
      description:
        "Formulation of new target operating models, drafting SOPs, defining RACI matrices, and configuring system integration maps.",
      duration: "Week 3 - 5",
    },
    {
      number: "03",
      title: "Pilot Implementation",
      description:
        "Controlled deployment within a single division or product line. Stress testing handoffs, automated triggers, and SLA adherence.",
      duration: "Week 6 - 8",
    },
    {
      number: "04",
      title: "Team Enablement",
      description:
        "Hands-on employee coaching, management transition, audit sign-off, and delivery of permanent training documentation.",
      duration: "Week 9 - 12+",
    },
  ];

  const realisticBenefits = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Clear Operational Visibility",
      description:
        "Executives identify bottlenecks in hours rather than discovering failures months later during client churn audits.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9l6 3" />
        </svg>
      ),
      title: "Reduced Cycle Time",
      description:
        "Elimination of redundant approval layers and manual re-entry cuts processing time systematically across fulfillment phases.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "Interdepartmental Alignment",
      description:
        "Clear RACI ownership resolves team disputes, stabilizes turnover, and allows new hires to become productive within two weeks.",
    },
  ];

  const caseHistories = [
    {
      id: "al-rauf-group",
      tag: "Real Estate & Construction",
      location: "MENA",
      client: "Al Rauf Group",
      description:
        "Architected full company-wide HR & Operational SOP manuals for 150+ staff across engineering, site operations, and corporate administration.",
      mandate: "Mandate: HR & Site Operations Codex Standard",
    },
    {
      id: "aeon-trisl",
      tag: "Brokerage & Assets",
      location: "Dubai / London",
      client: "Aeon & Trisl",
      description:
        "Overhauled listings pipeline, cross-team contract validation, and portal synchronization between sales agents and conveyance paralegals.",
      mandate: "Mandate: Transaction Flow & Agent Handoff Protocol",
    },
    {
      id: "advance-apparels",
      tag: "Manufacturing & Export",
      location: "B2B Commercial",
      client: "Advance Apparels",
      description:
        "Restructured multi-warehouse order fulfillment, inventory reconciliation gates, and shipment QA protocols to reduce return dispute rates.",
      mandate: "Mandate: Supply Chain Fulfillment Optimization",
    },
  ];

  const faqs = [
    {
      q: "What is the standard timeline for an Operations or Financial diagnostic?",
      a: "Our initial forensic diagnostic executes across a structured 14 working day window (Weeks 1–2). This includes front-line staff interviews, system data extraction, workflow audit mapping, and delivery of a prioritized gap-remediation roadmap.",
    },
    {
      q: "How does Bizenra manage employee friction when introducing new SOPs?",
      a: "We don't impose top-down academic theories. Our principals work directly alongside department leads and operational staff during mapping sessions, ensuring SOPs reflect real-world execution constraints while eliminating tedious manual bottlenecks.",
    },
    {
      q: "Do we need to replace our current software platforms (ERP, CRM, Accounting)?",
      a: "Rarely. We prioritize architectural integrity over disruptive rip-and-replace software overhauls. We optimize, clean, and automate pipelines across your existing platforms (QuickBooks, NetSuite, HubSpot, Salesforce, Notion) through monitored webhooks and bidirectional API synchronization.",
    },
    {
      q: "What level of team commitment is required during an advisory engagement?",
      a: "During the diagnostic phase, executive sponsors and department heads allocate approximately 3 to 5 total interview hours. During deployment, our embedded principals execute heavy-lifting system engineering autonomously to protect ongoing business velocity.",
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  const renderDeliverableIcon = (iconType: string) => {
    switch (iconType) {
      case "nodes":
        return (
          <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <rect x="3" y="3" width="6" height="6" rx="1.5" />
            <rect x="15" y="15" width="6" height="6" rx="1.5" />
            <circle cx="18" cy="6" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v9h9M9 6h6" />
          </svg>
        );
      case "book":
        return (
          <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "arrows":
        return (
          <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        );
      case "gauge":
        return (
          <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.05 11a9 9 0 1117.9 0" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
          </svg>
        );
      case "gear":
        return (
          <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        );
      case "user-gear":
        return (
          <svg className="w-5 h-5 text-[#E8C87A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <circle cx="19" cy="11" r="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 8v1m0 4v1m-2.6-4.5l.8.6m3.6 1.8l.8.6m-5.2 0l.8-.6m3.6-1.8l.8-.6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getPillarIcon = (id: number, isActive: boolean) => {
    const iconClass = `w-4 h-4 shrink-0 transition-colors ${
      isActive ? "text-[#081811]" : "text-[#7EA08F] group-hover:text-[#FAF7F0]"
    }`;

    switch (id) {
      case 1:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case 2:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 21h18M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M12 3l9 5H3l9-5z"
            />
          </svg>
        );
      case 3:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 4:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
      case 5:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="3" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#E8EFEA]">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => openConsultationWithService("Executive Advisory Consultation")} />

      <main className="flex-1 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
        {/* 2. Hero Section (Pixel-accurate to screenshot 1) */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-2">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-[11px] font-sans tracking-wider uppercase mb-5">
            <Link
              href="/"
              className="font-medium text-[#7A9E8D] hover:text-[#FAF7F0] transition-colors"
            >
              HOME
            </Link>
            <span className="text-[#3D6952] select-none">/</span>
            <span className="font-medium text-[#7A9E8D]">
              ADVISORY PRACTICE AREAS
            </span>
            <span className="text-[#3D6952] select-none">/</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#0E281C] border border-[#1C5137] text-[10px] font-semibold text-[#5DC792] shadow-sm tracking-widest">
              INSTITUTIONAL ARCHITECTURE
            </span>
          </nav>

          {/* Subtitle Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082216]/90 border border-[#15422C] text-[11px] sm:text-[11.5px] font-medium text-[#7FBFA0] shadow-sm mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#59BA86] inline-block" />
            <span>Executive Advisory &amp; Operations Architecture</span>
          </div>

          {/* Hero Main Grid: Left Titles + Right Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading and Subtitle */}
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] text-[#FAF7F0] font-normal leading-[1.12] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                Tailored Advisory. Connected Systems. Sustainable Growth.
              </h1>
              <p className="mt-6 text-[#98BBAE] text-sm sm:text-base lg:text-[17px] font-light leading-relaxed max-w-2xl">
                Eliminating operational debt and fragmented data through engineered workflows, rigorous financial stewardship, and governance-driven execution frameworks.
              </p>
            </div>

            {/* Right Column: Institutional Precision Card */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-[#061C13]/85 border border-[#143E2B] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.65)] backdrop-blur-md">
                <div className="flex items-center justify-between text-[10.5px] uppercase tracking-[0.2em] font-sans font-semibold text-[#6E9381] mb-3.5">
                  <span>ENGAGEMENT RIGOR</span>
                  <span className="text-[#8FB7A1]">ISO-ALIGNED</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[25px] font-normal text-[#FAF7F0] leading-snug mb-2.5">
                  Institutional Precision
                </h3>

                <p className="text-xs sm:text-[13px] text-[#93B4A4] font-light leading-relaxed mb-6">
                  Direct involvement from experienced operations heads &amp; FP&amp;A directors across MENA, APAC, and North America.
                </p>

                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={() => scrollToSection("diagnostic-intake")}
                    className="cursor-pointer px-4 py-2.5 rounded-md bg-[#E5D2A4] hover:bg-[#EEDBB2] active:scale-[0.98] text-[#0A1B13] text-xs font-semibold tracking-wide transition-all shadow-[0_2px_12px_rgba(229,210,164,0.22)]"
                  >
                    Diagnostic Request
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection("advisory-methodology")}
                    className="cursor-pointer inline-flex items-center gap-1 text-xs font-medium text-[#C8DBD1] hover:text-[#FAF7F0] transition-colors"
                  >
                    <span>View Methods</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Horizontal Practice Selector Bar (Sticky beneath hero) */}
        <section className="w-full border-y border-[#143E2B]/80 bg-[#04140D]/90 backdrop-blur-md sticky top-20 z-40 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
              {pillars.map((pillar) => {
                const isActive = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveTab(pillar.id)}
                    className={`cursor-pointer group shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-md sm:rounded-lg text-xs sm:text-[13px] transition-all duration-200 select-none ${
                      isActive
                        ? "bg-[#E5D3AE] text-[#0A1C12] font-semibold shadow-[0_2px_10px_rgba(229,211,174,0.25)]"
                        : "text-[#84A895] hover:text-[#FAF7F0] hover:bg-[#072016] font-medium"
                    }`}
                  >
                    {getPillarIcon(pillar.id, isActive)}
                    <span>{pillar.tabTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Active Practice Pillar Card (Pixel-accurate to screenshot 1 & top of screenshot 2) */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-[#061810]/85 border border-[#153D29] p-6 sm:p-9 lg:p-11 shadow-[0_12px_44px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Practice Pillar Info */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Eyebrow Tags */}
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <span className="text-[11px] sm:text-xs font-sans font-semibold text-[#52B47F] uppercase tracking-wider">
                      {currentPillar.pillarNumber}
                    </span>
                    <span className="text-[11px] sm:text-xs font-sans text-[#7A9E8D] tracking-wider uppercase">
                      {currentPillar.subtitle}
                    </span>
                  </div>

                  {/* Pillar Heading */}
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#FAF7F0] leading-[1.18] tracking-tight mb-4">
                    {currentPillar.heading}
                  </h2>

                  {/* Pillar Description */}
                  <p className="text-[#9BB7A8] text-sm sm:text-[15.5px] font-light leading-relaxed mb-8">
                    {currentPillar.description}
                  </p>
                </div>

                {/* Target Organization Profile Box */}
                <div className="rounded-xl bg-[#04150E]/85 border border-[#153D2A] p-5 sm:p-6 shadow-sm mt-auto">
                  <div className="flex items-center gap-2.5 text-[#FAF7F0] font-semibold text-sm sm:text-base mb-2">
                    <svg
                      className="w-5 h-5 text-[#59BA86] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.9}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                    <span>Target Organization Profile</span>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#86A896] font-light leading-relaxed">
                    {currentPillar.targetProfile}
                  </p>
                </div>
              </div>

              {/* Right Column: Critical Failure Modes Solved Card */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="h-full rounded-xl bg-[#03110B]/85 border border-[#153C29] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#123323]">
                    <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold text-[#D4B572] uppercase tracking-wider">
                      <svg
                        className="w-4 h-4 text-[#D4B572] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                      <span>CRITICAL FAILURE MODES SOLVED</span>
                    </div>
                    <span className="text-[11px] font-sans text-[#6B8E7D] tracking-wider">
                      Pre-Advisory Status
                    </span>
                  </div>

                  {/* 4 Failure Modes */}
                  <div className="space-y-4 sm:space-y-4.5">
                    {currentPillar.failureModes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-5 h-5 rounded-full border border-[#8C4646]/60 bg-[#2A1111]/50 flex items-center justify-center text-[#D97878] shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.4}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13.5px] font-semibold text-[#FAF7F0] leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[11.5px] sm:text-xs text-[#8EAFA0] font-light leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action inside card */}
                  <div className="pt-5 mt-5 border-t border-[#123323] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openConsultationWithService(currentPillar.tabTitle)}
                      className="cursor-pointer text-xs font-semibold text-[#E8C87A] hover:text-white transition-colors"
                    >
                      Scope Mandate for Pillar {currentPillar.id} &rarr;
                    </button>
                    <span className="text-[11px] text-[#5A7E6B]">Verified Mandate Framework</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Activities & Institutional Deliverables Matrix (Pixel-accurate to screenshot 2) */}
        <section id="deliverables-matrix" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-[#061810]/85 border border-[#153D29] p-6 sm:p-9 lg:p-11 shadow-[0_12px_44px_rgba(0,0,0,0.65)] backdrop-blur-md">
            {/* Header: Title Left + Subtitle Right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="max-w-2xl">
                <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-2">
                  SCOPE &amp; ARTIFACTS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal leading-tight">
                  Activities &amp; Institutional Deliverables Matrix
                </h2>
              </div>

              <p className="text-xs sm:text-[13px] text-[#86A896] font-light leading-relaxed max-w-md text-left md:text-right">
                Every engagement yields production-grade documentation, software architectures, and team operational manuals you own entirely.
              </p>
            </div>

            {/* 6 Deliverables Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {currentPillar.deliverables.map((item, idx) => {
                const isMandate = item.deliverableType === "ADVISORY MANDATE:";
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#03130C]/90 border border-[#133A26] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1F593B] hover:bg-[#04170E] transition-all duration-200 shadow-sm"
                  >
                    <div>
                      {/* Icon */}
                      <div className="mb-5">
                        {renderDeliverableIcon(item.iconType)}
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-semibold text-base sm:text-[17px] text-[#FAF7F0] leading-snug mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Deliverable Box */}
                    <div className="pt-4 border-t border-[#123523]">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider block text-[#52B47F]">
                        {item.deliverableType}
                      </span>
                      <p className="text-xs sm:text-[12.5px] font-medium text-[#FAF7F0] mt-1 leading-snug">
                        {item.deliverableName}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Our 4-Phase Advisory Methodology (Pixel-accurate to screenshot 3 - Top section) */}
        <section id="advisory-methodology" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-2">
              IMPLEMENTATION RIGOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal leading-tight">
              Our 4-Phase Advisory Methodology
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {methodologyPhases.map((phase, pIdx) => (
              <div
                key={pIdx}
                className="rounded-xl bg-[#04150E]/80 border border-[#143926] p-6 flex flex-col justify-between hover:border-[#20583A] transition-all"
              >
                <div>
                  {/* Number 01, 02, etc. with underline */}
                  <div className="border-b border-[#143926] pb-2.5 mb-3">
                    <span className="font-serif text-3xl sm:text-4xl text-[#E8C87A] font-normal leading-none block">
                      {phase.number}
                    </span>
                  </div>

                  {/* Title with underline */}
                  <div className="border-b border-[#143926] pb-2.5 mb-3.5">
                    <h3 className="font-sans font-semibold text-base sm:text-[17px] text-[#FAF7F0] leading-snug">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Timeline Tag with Clock Icon */}
                <div className="border-t border-[#143926] pt-3 mt-6 flex items-center gap-1.5 text-xs text-[#8EAFA0]">
                  <svg
                    className="w-3.5 h-3.5 text-[#E8C87A] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                  </svg>
                  <span className="font-medium">{phase.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Realistic, Structurally Sound Benefits (Pixel-accurate to screenshot 3 - Middle section) */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-[#061810]/85 border border-[#153D29] p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.6)] backdrop-blur-md">
            {/* Header */}
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-2">
                TANGIBLE OUTCOMES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal leading-tight mb-3">
                Realistic, Structurally Sound Benefits
              </h2>
              <p className="text-xs sm:text-sm text-[#8EAFA0] font-light leading-relaxed">
                We avoid making fabricated claims. Operational redesign yields predictable, structurally validated improvements verified by institutional metric baselines.
              </p>
            </div>

            {/* 3 Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {realisticBenefits.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="rounded-xl bg-[#04150E]/80 border border-[#143926] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1F5438] transition-all"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-lg bg-[#082015] border border-[#184830] flex items-center justify-center mb-4 text-[#E8C87A]">
                      {b.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-semibold text-sm sm:text-base text-[#FAF7F0] mb-2 leading-snug">
                      {b.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Connected Case Histories in Operations (Pixel-accurate to screenshot 3 - Bottom section) */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-2">
                DIRECT VERIFICATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal leading-tight">
                Connected Case Histories in Operations
              </h2>
            </div>

            <Link
              href="/case-histories"
              className="cursor-pointer inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#CDE0D5] hover:text-[#E8C87A] transition-colors self-start sm:self-auto"
            >
              <span>Inspect all 8 Advisory Records</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* 3 Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {caseHistories.map((cs, cIdx) => (
              <div
                key={cIdx}
                className="rounded-xl bg-[#04150E]/85 border border-[#143926] p-6 sm:p-7 flex flex-col justify-between hover:border-[#20583A] transition-all shadow-sm"
              >
                <div>
                  {/* Top Tags */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#092518] border border-[#184830] text-[10px] font-semibold tracking-wider uppercase text-[#7EBF9D]">
                      {cs.tag}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-[#A2BEAF] tracking-wider uppercase">
                      {cs.location}
                    </span>
                  </div>

                  {/* Client Heading */}
                  <h3 className="font-serif text-2xl sm:text-[23px] text-[#FAF7F0] font-normal mb-3">
                    {cs.client}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#8EAFA0] font-light leading-relaxed mb-6">
                    {cs.description}
                  </p>
                </div>

                <div>
                  {/* Mandate Box */}
                  <div className="rounded-md bg-[#FAF4E6] text-[#081811] px-3.5 py-2 text-xs font-semibold mb-4 leading-snug">
                    {cs.mandate}
                  </div>

                  {/* Link */}
                  <button
                    type="button"
                    onClick={() => handleOpenCase(cs.id)}
                    className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDE0D5] hover:text-[#E8C87A] transition-colors"
                  >
                    <span>View Case Study</span>
                    <span className="text-sm font-bold">&rsaquo;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Strategic Principles Doctrine Quote Banner (Pixel-accurate to screenshot 4 - Top section) */}
        {quoteVisible && (
          <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl sm:rounded-3xl bg-[#061810]/85 border border-[#153D29] p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.6)] backdrop-blur-md relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                {/* Gold Accent Dash */}
                <div className="w-8 h-1 bg-[#C5A566] mb-5 rounded-full" />

                {/* Quote Text */}
                <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-[32px] text-[#FAF7F0] font-normal leading-snug mb-6">
                  &ldquo;Clarity turns business challenges into actionable next steps.&rdquo;
                </h3>

                {/* Brand Stack */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D2B1C] border border-[#1D5237] flex items-center justify-center text-sm font-semibold text-[#86BA9C] shrink-0">
                    B
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#FAF7F0] leading-snug">
                      Bizenra Strategic Principles
                    </h4>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-[#7A9E8D] block mt-0.5">
                      OPERATIONAL ARCHITECTURE DOCTRINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Close / Dismiss Action Icon Button */}
              <div className="self-end md:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => setQuoteVisible(false)}
                  aria-label="Dismiss doctrine banner"
                  className="cursor-pointer w-11 h-11 rounded-full bg-[#152A20]/90 border border-[#1E4233] flex items-center justify-center text-[#8CB49B] hover:text-[#FAF7F0] hover:border-[#E8C87A]/50 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 10. Frequently Addressed Inquiries (Pixel-accurate to screenshot 4 - Middle section) */}
        <section id="faqs" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#C5A566] uppercase block mb-2">
              ENGAGEMENT QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F0] font-normal leading-tight">
              Frequently Addressed Inquiries
            </h2>
          </div>

          {/* 4 Accordion Items */}
          <div className="space-y-3.5">
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-xl bg-[#04150E]/85 border border-[#143926] hover:border-[#1F5438] transition-all overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    className="cursor-pointer w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#072216]/60 transition-colors"
                  >
                    <span className="font-serif sm:font-sans font-medium text-sm sm:text-base text-[#FAF7F0] leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-[#E8C87A] text-xl font-mono shrink-0 select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#123120] text-xs sm:text-[13.5px] text-[#A2BEAF] font-light leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. Schedule an Operations & Financial Diagnostic Intake Form (Pixel-accurate to screenshot 4 - Bottom section) */}
        <section id="diagnostic-intake" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="rounded-2xl sm:rounded-3xl bg-[#061810]/85 border border-[#153D29] p-6 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Intake Information */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#0D2A1C] border border-[#1B4A33] text-[10px] font-semibold text-[#5DC792] tracking-wider uppercase mb-5">
                    DIAGNOSTIC INTAKE
                  </span>

                  {/* Heading */}
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#FAF7F0] font-normal leading-[1.18] mb-5">
                    Schedule an Operations &amp; Financial Diagnostic
                  </h2>

                  {/* Paragraph */}
                  <p className="text-xs sm:text-sm text-[#8EAFA0] font-light leading-relaxed mb-8">
                    Submit your organizational profile for a preliminary evaluation by our Advisory Practice Leads. Receive a scoped briefing agenda within 24 business hours.
                  </p>
                </div>

                {/* 3 Checkpoints */}
                <div className="space-y-4 pt-4 border-t border-[#133A27]">
                  <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#CDE0D5] font-light">
                    <svg className="w-4 h-4 text-[#E8C87A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Mutual Non-Disclosure Agreement applied by default</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#CDE0D5] font-light">
                    <svg className="w-4 h-4 text-[#E8C87A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
                    </svg>
                    <span>Zero obligation discovery audit and baseline scoping</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#CDE0D5] font-light">
                    <svg className="w-4 h-4 text-[#E8C87A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <rect x="3" y="6" width="18" height="15" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 6h8" />
                    </svg>
                    <span>Conducted exclusively by senior directors</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Diagnostic Form */}
              <div className="lg:col-span-7">
                <div className="rounded-xl bg-[#03130C]/90 border border-[#143A26] p-6 sm:p-8 shadow-inner">
                  {intakeSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#0C2D1D] border border-[#276445] flex items-center justify-center text-[#E8C87A] text-2xl">
                        ✓
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F0]">
                        Diagnostic Intake Received
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A2BEAF] max-w-md mx-auto leading-relaxed">
                        Thank you, {intakeName || "Partner"}. Your organizational dossier has been dispatched to our Practice Leads. We will follow up at {intakeEmail || "your email"} within 24 business hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIntakeSubmitted(false)}
                        className="cursor-pointer px-5 py-2 rounded-lg bg-[#E5D2A4] text-[#0A1B13] text-xs font-semibold hover:bg-[#EEDBB2] transition-colors"
                      >
                        Submit Another Profile
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleIntakeSubmit} className="space-y-4">
                      {/* Row 1: Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#6C8E7D] mb-1.5">
                            EXECUTIVE FULL NAME
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Tariq Al-Mansoor"
                            value={intakeName}
                            onChange={(e) => setIntakeName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#05170F] border border-[#153B28] text-xs sm:text-[13px] text-[#FAF7F0] placeholder-[#436453] focus:outline-none focus:border-[#E8C87A] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#6C8E7D] mb-1.5">
                            CORPORATE EMAIL
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            value={intakeEmail}
                            onChange={(e) => setIntakeEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#05170F] border border-[#153B28] text-xs sm:text-[13px] text-[#FAF7F0] placeholder-[#436453] focus:outline-none focus:border-[#E8C87A] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 2: Company and Focus */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#6C8E7D] mb-1.5">
                            COMPANY NAME &amp; SECTOR
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Sterling Logistics (Logistics)"
                            value={intakeCompany}
                            onChange={(e) => setIntakeCompany(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#05170F] border border-[#153B28] text-xs sm:text-[13px] text-[#FAF7F0] placeholder-[#436453] focus:outline-none focus:border-[#E8C87A] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#6C8E7D] mb-1.5">
                            PRIMARY ADVISORY FOCUS
                          </label>
                          <select
                            value={intakeFocus}
                            onChange={(e) => setIntakeFocus(e.target.value)}
                            className="cursor-pointer w-full px-3.5 py-2.5 rounded-lg bg-[#05170F] border border-[#153B28] text-xs sm:text-[13px] text-[#FAF7F0] focus:outline-none focus:border-[#E8C87A] transition-colors"
                          >
                            <option value="Business Operations & SOP Standardization">
                              Business Operations &amp; SOP Standardization
                            </option>
                            <option value="Financial Management & Reporting">
                              Financial Management &amp; Reporting
                            </option>
                            <option value="FP&A Architecture & Cash Modeling">
                              FP&amp;A Architecture &amp; Cash Modeling
                            </option>
                            <option value="Accounting Advisory & Controllership">
                              Accounting Advisory &amp; Controllership
                            </option>
                            <option value="Business Systems & Software Integration">
                              Business Systems &amp; Software Integration
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Context / Friction */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#6C8E7D] mb-1.5">
                          CURRENT FRICTION POINTS / CONTEXT
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe current operational bottlenecks, reporting delays, or systemic hurdles..."
                          value={intakeContext}
                          onChange={(e) => setIntakeContext(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#05170F] border border-[#153B28] text-xs sm:text-[13px] text-[#FAF7F0] placeholder-[#436453] focus:outline-none focus:border-[#E8C87A] transition-colors resize-none"
                        />
                      </div>

                      {/* Row 4: Action & Guarantee */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-[10.5px] text-[#698E7B] font-light leading-snug">
                          Direct Lead Partner Review Guaranteed
                        </span>

                        <button
                          type="submit"
                          className="cursor-pointer w-full sm:w-auto px-7 py-3 rounded-lg bg-[#C59F60] hover:bg-[#D4AF70] active:scale-[0.98] text-[#081811] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md text-center"
                        >
                          Submit Diagnostic Request
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. Global Footer */}
      <Footer onOpenConsultation={() => openConsultationWithService("Executive Consultation")} />

      {/* 13. Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={selectedService}
      />

      {/* 14. Case History Modal */}
      <CaseHistoryModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenConsultation={() => openConsultationWithService(selectedCase?.client || "Case Study Inquiry")}
      />
    </div>
  );
}
