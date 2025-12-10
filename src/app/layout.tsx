import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Business School of Accountancy",
  description: "Business School of Accountancy official site",
  keywords: [
    "Business School of Accountancy",
    "BSA",
    "ACCA",
    "accounting education",
    "professional certification",
    "learning partner",
    "CBE centre"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Business School of Accountancy",
    description: "Business School of Accountancy official site",
    url: "/",
    siteName: "Business School of Accountancy",
    images: [
      {
        url: "/bsa_icon.jpg",
        width: 512,
        height: 512,
        alt: "Business School of Accountancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business School of Accountancy",
    description: "Business School of Accountancy official site",
    images: ["/bsa_icon.jpg"],
  },
  themeColor: "#1C68B4",
  icons: {
    icon: [
      { url: "/bsa_icon.jpg", rel: "icon", sizes: "any" },
      { url: "/bsa_icon.jpg", rel: "shortcut icon", sizes: "any" },
    ],
    apple: "/bsa_icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${ibmPlexSans.variable} antialiased w-full m-0 p-0`}
      >
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
