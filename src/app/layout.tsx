import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { HydrationOverlay } from "@/components/ui/HydrationOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumina | Premium Learning Dashboard",
  description: "A futuristic education platform built with Next.js 15, Framer Motion, and Supabase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-[#050505] text-white antialiased`}
        suppressHydrationWarning
      >
        <HydrationOverlay>
          {children}
        </HydrationOverlay>
      </body>
    </html>
  );
}
