"use client";

import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { useProps } from "./PropProvider";

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
        <span className="font-bold text-2xl">Home Helper</span>
      </div>

      <nav
        className="flex items-center"
        style={{
          gap: props.header.linksGap,
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Location</Link>

        <Button>SIGN UP</Button>
      </nav>
    </div>
  );
}
