import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ETH Ankara Summit - 23-24 Mayıs 2025",
  description:
    "Where Ethereum Meets the Multi-Chain Future. TEDU Blockchain Topluluğu tarafından düzenlenen ETH Ankara Summit, 23-24 Mayıs 2025 tarihlerinde Ankara'da. Konferans, Hackathon ve daha fazlası.",
  keywords: [
    "Ethereum",
    "Ankara",
    "Blockchain",
    "Hackathon",
    "Web3",
    "DeFi",
    "Layer 2",
    "TEDU",
  ],
  openGraph: {
    title: "ETH Ankara Summit - 23-24 Mayıs 2025",
    description:
      "Where Ethereum Meets the Multi-Chain Future. Konferans + Hackathon @ TED Üniversitesi, Ankara",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
