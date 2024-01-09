"use client";

import { PropsWithChildren, useState } from "react";
import { useProps } from "./PropProvider";
import { cn } from "@/lib/utils";

export default function Button({ children }: PropsWithChildren) {
  const { props } = useProps();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      className={cn(
        "py-[16px] px-10 flex items-center justify-center leading-none",
        !isLoading &&
          props.interactiveEnabled &&
          !props.overinteractiveEnabled &&
          "hover:brightness-110 transition-all active:brightness-90",
        !isLoading &&
          props.overinteractiveEnabled &&
          "hover:brightness-110 hover:font-black transition-all active:brightness-90 duration-300 hover:scale-110",
        props.interactiveEnabled && isLoading && "cursor-wait !bg-slate-500"
      )}
      style={{
        background: "none",
        color: "white",
        backgroundColor: props.secondaryColor,
        borderRadius: "0.5rem",
        fontWeight: props.button.fontWeight,
        fontSize: props.button.fontSize,
      }}
      disabled={props.interactiveEnabled && isLoading}
      onClick={() => {
        setIsLoading(true);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }}
    >
      {children}
    </button>
  );
}
