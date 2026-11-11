import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1E2B4D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Spotgeto — Travel Like You Know Someone Here",
  description:
    "Skip the tourist traps. Spotgeto pairs you with vetted Spotmates who show you the living city that locals love — secluded riverfront stairs, generational weavers, morning ragas, and alleys no algorithm maps.",
  keywords: [
    "Spotgeto",
    "Spotmate",
    "Varanasi local guide",
    "Hyperlocal walking tour",
    "Varanasi ghats",
    "Assi Ghat",
    "Kashi hidden galis",
    "Private walking journey",
  ],
  authors: [{ name: "Spotgeto Heritage Team" }],
  openGraph: {
    title: "Spotgeto — Hyperlocal Private Guided Walks",
    description: "Travel like you know someone here. Private curated walks with vetted local Spotmates.",
    url: "https://spotgeto.com",
    siteName: "Spotgeto",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[#fcf9f4] text-[#1c1c19] selection:bg-[#FDE68A] selection:text-[#1E2B4D]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
