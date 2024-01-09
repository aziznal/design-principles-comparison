"use client";

import { PropsWithChildren } from "react";
import { useProps } from "./PropProvider";
import { cn } from "@/lib/utils";

export default function Card({ children }: PropsWithChildren) {
  const { props } = useProps();

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border flex-1 shrink-0",
        !props.badContrastEnabled && "shadow-lg shadow-gray",
        props.interactiveEnabled &&
          "hover:bg-slate-100 transition-all duration-75",
        props.overinteractiveEnabled &&
          !props.badContrastEnabled &&
          "hover:shadow-2xl hover:shadow-gray-900 duration-300 cursor-pointer hover:bg-slate-100 transition-all hover:scale-105"
      )}
      style={{
        height: props.cards.height,
        padding: props.cards.padding,
        lineHeight: props.cards.lineHeight,
        gap: props.cards.cardGap,
        color: props.cards.textColor,
      }}
    >
      {children}
    </div>
  );
}
