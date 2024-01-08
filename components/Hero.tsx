"use client";

import Image from "next/image";
import { useProps } from "./PropProvider";

export default function Hero() {
  const { props } = useProps();

  return (
    <div
      className="flex px-[146px] items-center"
      style={{
        marginTop: props.hero.marginTop,
        color: props.hero.textColor,
      }}
    >
      <div
        className="flex flex-col flex-1"
        style={{
          gap: props.hero.titleGap,
        }}
      >
        <span
          style={{
            color: props.secondaryColor,
            fontSize: "1.2rem",
          }}
        >
          Become the master of your space
        </span>

        <h1
          style={{
            fontSize: props.hero.titleFontSize,
            fontWeight: "bold",
            lineHeight: props.hero.lineHeight,
            color: props.hero.titleColor,
          }}
        >
          Smart Home <br /> Automation
        </h1>

        <p className="w-[440px]">
          Make your life easier by forgetting about the little things. Never
          thing again about whether you left the door open or the oven on.
        </p>
      </div>

      <Image
        src="/images/hero.png"
        width={600}
        height={600}
        alt="Smart home automation"
      />
    </div>
  );
}
