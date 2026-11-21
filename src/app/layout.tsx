import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bizenra Advisory — Smarter Systems. Stronger Businesses.",
  description:
    "Bizenra helps businesses improve operations, strengthen financial visibility, build the right systems, and pursue sustainable growth with practical, tailored solutions.",
  metadataBase: new URL("https://bizenra.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Bizenra Advisory — Smarter Systems. Stronger Businesses.",
    description:
      "Verified executive advisory, controllership, and operational architecture executed under strict enterprise standards across high-growth ventures.",
    url: "https://bizenra.com",
    siteName: "Bizenra Advisory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#030906] text-[#E8EFEA] font-sans antialiased selection:bg-[#E8C87A] selection:text-[#040D08] min-h-screen relative"
      >
        <BackgroundVideo />
        {children}
      </body>
    </html>
  );
}
