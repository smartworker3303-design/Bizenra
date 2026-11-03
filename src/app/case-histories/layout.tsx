import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case History — Al Rauf Group | Bizenra Advisory",
  description:
    "How institutional HR governance, digitized SOP codices, and transparent KPI metrics stabilized talent retention across an expanding commercial enterprise.",
  alternates: {
    canonical: "https://bizenra.com/case-histories",
  },
  openGraph: {
    title: "Case History — Al Rauf Group | Bizenra Advisory",
    description:
      "How institutional HR governance, digitized SOP codices, and transparent KPI metrics stabilized talent retention across an expanding commercial enterprise.",
    url: "https://bizenra.com/case-histories",
    siteName: "Bizenra Advisory",
    type: "website",
  },
};

export default function CaseHistoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
