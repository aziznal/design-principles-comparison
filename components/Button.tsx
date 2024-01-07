"use client";

import { PropsWithChildren } from "react";
import { useProps } from "./PropProvider";

export default function Button({ children }: PropsWithChildren) {
  const { props, setProps } = useProps();

  return (
    <button
      className="py-[16px] px-10 flex items-center justify-center leading-none"
      style={{
        background: "none",
        color: "white",
        backgroundColor: props.secondaryColor,
        borderRadius: "0.5rem",
        fontWeight: "bold",
      }}
    >
      {children}
    </button>
  );
}
