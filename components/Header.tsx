"use client";

import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { useProps } from "./PropProvider";

export default function Header() {
  const props = useProps();

  return (
    <div
      className="flex justify-between items-center text-white"
      style={{
        backgroundColor: props.tertiaryColor,
        paddingTop: props.header.blockPadding,
        paddingBottom: props.header.blockPadding,
        paddingLeft: props.header.sidePadding,
        paddingRight: props.header.sidePadding,
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
        <Link href="/about">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Location</Link>

        <Button>SIGN UP</Button>
      </nav>
    </div>
  );
}
