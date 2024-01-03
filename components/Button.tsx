"use client";

import { PropsWithChildren } from "react";
import { useProps } from "./PropProvider";

export default function Button({ children }: PropsWithChildren) {
  const props = useProps();

  return (
    <button
      className="py-3 px-10"
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
