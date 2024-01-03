"use client";

import { PropsWithChildren } from "react";
import { useProps } from "./PropProvider";

export default function Card({ children }: PropsWithChildren) {
  const props = useProps();

  return (
    <div
      className="flex flex-col rounded-xl border shadow-lg shadow-gray flex-1 shrink-0"
      style={{
        height: props.cards.height,
        padding: props.cards.padding,
        lineHeight: props.cards.lineHeight,
        gap: props.cards.cardGap,
      }}
    >
      {children}
    </div>
  );
}
