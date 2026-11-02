"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseHistoriesSection, { CaseStudy } from "@/components/CaseHistoriesSection";
import StewardshipBanner from "@/components/StewardshipBanner";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import SelectedInsightsSection from "@/components/SelectedInsightsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";
import CaseHistoryModal from "@/components/CaseHistoryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col text-[#E8EFEA] antialiased selection:bg-[#E8C87A] selection:text-[#040D08]">


      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Home Page Content */}
      <main className="relative flex-1 space-y-12 sm:space-y-16 pb-12 sm:pb-20">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 2. Professional Experience & Case Histories Section */}
        <CaseHistoriesSection onSelectCase={(study) => setSelectedCase(study)} />

        {/* 3. Stewardship Quote Banner */}
        <StewardshipBanner onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 4. Disciplined Methodology ("How We Work") */}
        <HowWeWorkSection />

        {/* 5. Core Competencies ("What We Focus On") */}
        <FocusAreasSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 6. The Bizenra Distinction ("Why Founders Partner With Bizenra") */}
        <WhyPartnerSection />

        {/* 7. Advisory Knowledge Base ("Selected Business Insights") */}
        <SelectedInsightsSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 8. Frequently Asked Questions ("Advisory Engagement Details") */}
        <FAQSection />

        {/* 9. Final Call to Action ("Ready to Build Smarter Systems") */}
        <CTASection onOpenConsultation={() => setConsultationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Executive Consultation & Case Study Modals */}
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
