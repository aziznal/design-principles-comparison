import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design Principles Comparison",
  description: "An interactive comparison of design principles - By Aziz Nal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "min-h-full")}>{children}</body>
    </html>
  );
}
