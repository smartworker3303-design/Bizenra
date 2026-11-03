import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consultation | Bizenra Advisory",
  description:
    "Direct advisory channel for private enterprise engagements. Explore your operational friction points, reporting clarity, and systems roadmap with zero institutional ambiguity.",
  alternates: {
    canonical: "https://bizenra.com/contact",
  },
  openGraph: {
    title: "Contact & Consultation | Bizenra Advisory",
    description:
      "Direct advisory channel for private enterprise engagements. Explore your operational friction points, reporting clarity, and systems roadmap with zero institutional ambiguity.",
    url: "https://bizenra.com/contact",
    siteName: "Bizenra Advisory",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
