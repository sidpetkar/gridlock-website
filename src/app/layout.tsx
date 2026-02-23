import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Gridlock - A Minimalist Word Game",
  description: "A strategic word-building game where you compete to create intersecting words on an expanding grid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${sourceSerif.className} flex min-h-full flex-col antialiased bg-white text-black selection:bg-[#d9d5eb] selection:text-black`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}