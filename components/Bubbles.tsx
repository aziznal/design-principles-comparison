"use client";

import { Coffee, Lock, Thermometer } from "lucide-react";
import Bubble from "./Bubble";
import { useProps } from "./PropProvider";

export default function Bubbles() {
  const { props } = useProps();

  return (
    <div
      className="flex px-[146px]"
      style={{
        gap: props.bubbles.bubblesGap,
        color: props.bubbles.textColor,
      }}
    >
      <Bubble
        color={props.bubbles.bubble1Color}
        text="Have your coffee automatically made every morning."
      >
        <Coffee size={48} color="white" />
      </Bubble>

      <Bubble
        color={props.bubbles.bubble2Color}
        text="Lock your home remotely. Just hope the power never goes out."
      >
        <Lock size={48} />
      </Bubble>

      <Bubble
        color={props.bubbles.bubble3Color}
        text="Mess with people by making it freezing cold in the summer"
      >
        <Thermometer size={48} />
      </Bubble>
    </div>
  );
}
