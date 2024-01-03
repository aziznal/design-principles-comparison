"use client";

import Image from "next/image";
import { useProps } from "./PropProvider";
import Button from "./Button";

export default function About() {
  const props = useProps();

  return (
    <div className="flex w-full justify-between px-[146px]">
      <Image
        src="/images/about.png"
        alt="About"
        width={350}
        height={350}
        className="shrink-0"
      />

      <div
        className="flex flex-col w-[650px]"
        style={{
          gap: props.about.gap,
          lineHeight: props.about.lineHeight,
        }}
      >
        <h2
          className="font-bold"
          style={{
            fontSize: props.about.titleFontSize,
          }}
        >
          About Home Helper
        </h2>

        <p className="text-2xl" style={{ lineHeight: props.about.lineHeight }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"`"}s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <p className="text-2xl" style={{ lineHeight: props.about.lineHeight }}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>

        <div>
          <Button>SIGN UP</Button>
        </div>
      </div>
    </div>
  );
}
