import "./globals.css";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import ScrollProgress from "@/components/scroll-progress";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Mohammed Lamchiyakh — Backend & AI Engineer",
  description:
    "Mohammed Lamchiyakh is a backend & AI-focused full-stack developer building scalable SaaS platforms, REST APIs, and AI-powered automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${fraunces.variable} ${hanken.variable} ${mono.variable}`}
    >
      <body className="relative bg-paper font-sans text-ink antialiased">
        {/* ambient atmosphere */}
        <div className="field">
          <div className="tile" />
          <div className="glow g1" />
          <div className="glow g2" />
        </div>

        <Loader />
        <ScrollProgress />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main className="relative z-[5] flex flex-col items-center">
              {children}
            </main>
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
