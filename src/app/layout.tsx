import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina & LuminaCLI — Autonomous AI Software Engineering Agent & Web Platform",
  description:
    "An autonomous AI software engineering agent that helps developers build, analyze, debug, and architect workflows directly from the terminal, paired with Next.js 16 and Express 5.",
  keywords: [
    "Lumina CLI",
    "AI software engineering agent",
    "terminal AI assistant",
    "Groq LPU",
    "Next.js 16",
    "Express 5",
    "Better Auth",
    "Prisma ORM",
    "Neon PostgreSQL",
    "RFC 8628",
  ],
  authors: [{ name: "Piyush Kumar", url: "https://github.com/piyushkumariiitj" }],
  openGraph: {
    title: "Lumina & LuminaCLI — Autonomous AI Software Engineering Agent",
    description:
      "Build, analyze, debug, and architect workflows directly from your command line. Powered by Groq LPU, PostgreSQL memory, and RFC 8628 device auth.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#f1f5f9] selection:bg-[#e8b339] selection:text-black">
        {children}
      </body>
    </html>
  );
}
