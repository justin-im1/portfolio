import type { Metadata } from "next";
import { Oxanium, Electrolize } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700'],
});

const electrolize = Electrolize({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
});

const activeFont = electrolize;

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A modern portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${activeFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
