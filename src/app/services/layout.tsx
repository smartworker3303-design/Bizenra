import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Advisory Solutions | Bizenra Advisory",
  description:
    "Eliminating operational debt and fragmented data through engineered workflows, rigorous financial stewardship, and governance-driven execution frameworks.",
  alternates: {
    canonical: "https://bizenra.com/services",
  },
  openGraph: {
    title: "Services — Advisory Solutions | Bizenra Advisory",
    description:
      "Eliminating operational debt and fragmented data through engineered workflows, rigorous financial stewardship, and governance-driven execution frameworks.",
    url: "https://bizenra.com/services",
    siteName: "Bizenra Advisory",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

