"use client";

import { useProps } from "./PropProvider";

type BubbleProps = {
  color: string;
  text: string;
  children: React.ReactNode;
};

export default function Bubble({ color, text, children }: BubbleProps) {
  const { props, setProps } = useProps();

  return (
    <div
      className="flex items-center flex-1"
      style={{
        gap: props.bubbles.bubbleGap,
      }}
    >
      <div
        className="rounded-full flex items-center justify-center p-5 border-[10px]"
        style={{
          backgroundColor: color,
          borderColor: props.secondaryColor,
        }}
      >
        {children}
      </div>

      <p
        style={{
          fontSize: props.bubbles.fontSize,
        }}
      >
        {text}
      </p>
    </div>
  );
}
