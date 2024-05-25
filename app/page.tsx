import { LucideColumns2, LucideGithub, LucideRows4 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="mb-6 text-center flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Design Principles</h1>

        <div className="flex flex-col items-center justify-center gap-2 text-zinc-500 text-balance max-w-[550px]">
          <p className="whitespace-nowrap text-lg">
            A demonstration of how adhering to design principles can make or break a web site /
            component.
          </p>

          <p className="text-sm">
            The examples section is a list where each principle is implemented in a component where
            it{`'`}s applied in one and not applied / incorrectly applied in the other.
          </p>

          <p className="text-sm">
            The demo page is a bunch of the design principles applied together and any combination
            of them can be toggled on or off usign the mod sideabr.
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <SectionLink href="/examples">
          <LucideRows4 size={36} />
          Examples Page
        </SectionLink>

        <SectionLink href="/demo-page">
          <LucideColumns2 size={36} />
          Demo Page
        </SectionLink>
      </div>

      <div className="text-center w-full py-8 flex gap-1 items-center justify-center">
        <span>Made by</span>

        <Link
          href="https://github.com/aziznal/design-principles-comparison"
          target="_blank"
          className="flex gap-2 hover:text-rose-700 text-rose-500"
        >
          aziznal <LucideGithub />
        </Link>
      </div>
    </div>
  );
}

function SectionLink(props: { href: string; children: ReactNode }) {
  return (
    <Link
      href={props.href}
      className="h-[200px] w-[200px] flex flex-col items-center justify-center text-center gap-1 border rounded-lg hover:bg-zinc-100 transition-colors duration-75"
    >
      {props.children}
    </Link>
  );
}
