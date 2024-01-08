import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModTool } from "@/components/ModTool";
import { PropProvider } from "@/components/PropProvider";
import { getDefaultProps } from "@/lib/default-props";
import { Github } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design Principles Comparison",
  description: "An interactive comparison of design principles - By Aziz Nal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "min-h-full")}>
        <PropProvider props={getDefaultProps()}>
          {children}

          <ModTool />

          <div className="text-center w-full py-8 flex gap-1 items-center justify-center">
            <span>Made by</span>

            <Link
              href="https://github.com/aziznal/design-principles-comparison"
              target="_blank"
              className="flex gap-2 hover:text-rose-700 text-rose-500"
            >
              aziznal <Github />
            </Link>
          </div>
        </PropProvider>
      </body>
    </html>
  );
}
