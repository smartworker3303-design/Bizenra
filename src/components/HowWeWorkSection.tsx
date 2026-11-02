"use client";

interface Stage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export default function HowWeWorkSection() {
  const stages: Stage[] = [
    {
      number: "01",
      title: "Understand Your Business",
      description:
        "Deep dive into current operating models, pain points, data flow, balance sheets, and team friction points.",
      deliverable: "Diagnostic Baseline Audit",
    },
    {
      number: "02",
      title: "Identify Key Priorities",
      description:
        "Isolate high-impact friction points. Separate vanity optimizations from direct cash-flow and operational bottlenecks.",
      deliverable: "Strategic Impact Matrix",
    },
    {
      number: "03",
      title: "Design Practical Improvements",
      description:
        "Engineer fit-for-purpose workflows, chart of accounts revisions, automation maps, and role accountabilities.",
      deliverable: "Target Operating Blueprint",
    },
    {
      number: "04",
      title: "Implement Systems & Processes",
      description:
        "Hands-on configuration of cloud ERPs, automated reconciliations, role-playbooks, and change management.",
      deliverable: "Live System Deployment",
    },
    {
      number: "05",
      title: "Review Progress",
      description:
        "Continuous variance testing, executive reviews, KPI monitoring, and operational fine-tuning for durability.",
      deliverable: "Monthly Health Scorecard",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#040E08]/85 border border-[#173D29]/75 p-7 sm:p-10 lg:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="inline-block text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-[0.22em] text-[#E8C87A] uppercase mb-3 drop-shadow-sm">
            DISCIPLINED METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#FFFFFF] leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            How We Work
          </h2>
          <p className="text-[#D4E8DC] text-sm sm:text-[15px] font-light leading-relaxed">
            Advisory cannot be guesswork. We execute an uncompromising 5-stage transformation framework designed to safeguard capital, establish clarity, and deploy resilient operational infrastructure.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="flex flex-col justify-between rounded-xl bg-[#020A05]/80 border border-[#143A26]/80 p-6 hover:border-[#22573B] hover:bg-[#041209]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <div>
                {/* Number */}
                <span className="font-serif text-3xl sm:text-4xl text-[#E8C87A] font-light block mb-4 leading-none drop-shadow-sm">
                  {stage.number}
                </span>

                {/* Title */}
                <h3 className="font-sans font-semibold text-[15px] text-[#FFFFFF] leading-snug mb-3">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-[12.5px] text-[#CFE3D8] leading-relaxed font-light mb-8">
                  {stage.description}
                </p>
              </div>

              {/* Deliverable Footer */}
              <div className="pt-4 border-t border-[#123120]">
                <span className="text-[9.5px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8FB7A1] block mb-1">
                  DELIVERABLE
                </span>
                <span className="text-[12px] font-medium text-[#FFFFFF] block leading-tight">
                  {stage.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
