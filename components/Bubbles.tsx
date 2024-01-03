"use client";

import Bubble from "./Bubble";
import { useProps } from "./PropProvider";

export default function Bubbles() {
  const props = useProps();

  return (
    <span>
      <Bubble />
      <Bubble />
      <Bubble />
    </span>
  );
}
