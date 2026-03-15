import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import SOSButton from "@/components/SOSButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KumariOne - Smart Tourism Platform",
  description:
    "Discover the hidden gems of Kanniyakumari with AI-powered smart tourism. Explore attractions, book hotels, and shop tribal products.",
  keywords: "Kanniyakumari, tourism, smart travel, Kanyakumari, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300 antialiased`}
      >
        <AppProvider>
          {children}
          <SOSButton />
        </AppProvider>
      </body>
    </html>
  );
}
