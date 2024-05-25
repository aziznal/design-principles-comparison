import { ModTool } from "@/components/ModTool";
import { PropProvider } from "@/components/PropProvider";
import { getDefaultProps } from "@/lib/default-props";
import { Github } from "lucide-react";
import Link from "next/link";

export default function DemoPageLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
