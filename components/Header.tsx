"use client";

import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { useProps } from "./PropProvider";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { props } = useProps();

  return (
    <div
      className="flex justify-between items-center"
      style={{
        backgroundColor: props.tertiaryColor,
        paddingTop: props.header.blockPadding,
        paddingBottom: props.header.blockPadding,
        paddingLeft: props.header.sidePadding,
        paddingRight: props.header.sidePadding,
        color: props.header.textColor,
      }}
    >
      <div
        className="flex items-center"
        style={{
          gap: props.header.titleGap,
        }}
      >
        <BrainCircuit className="rotate-90" size={70} />

        <span
          className="font-bold text-2xl"
          style={{
            fontSize: props.header.logoFontSize,
          }}
        >
          Home Helper
        </span>
      </div>

      <nav
        className="flex items-center"
        style={{
          gap: props.header.linksGap,
        }}
      >
        <CustomLink>Home</CustomLink>
        <CustomLink>About</CustomLink>
        <CustomLink>Location</CustomLink>

        <Button>SIGN UP</Button>
      </nav>
    </div>
  );
}

function CustomLink({ children }: PropsWithChildren) {
  const { props } = useProps();

  return (
    <Link
      href="/"
      className={cn(
        props.interactiveEnabled &&
          "transition-all hover:text-blue-400 duration-75",
        props.overinteractiveEnabled &&
          "hover:font-bold hover:scale-110 hover:text-blue-400 duration-300"
      )}
      style={{
        fontSize: props.header.linkFontSize,
        fontWeight: props.header.linkFontWeight,
      }}
    >
      {children}
    </Link>
  );
}
