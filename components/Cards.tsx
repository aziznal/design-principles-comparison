"use client";

import { Cctv, CircleDollarSign, Lightbulb } from "lucide-react";
import Card from "./Card";
import { useProps } from "./PropProvider";

export default function Cards() {
  const props = useProps();

  return (
    <div
      className="flex px-[146px]"
      style={{
        gap: props.cards.cardsGap,
      }}
    >
      <Card>
        <CircleDollarSign
          size={136}
          color={props.secondaryColor}
          className="shrink-0"
        />

        <h3 className="text-3xl font-bold">
          Spend Half Your <br /> Salary
        </h3>

        <p className="text-lg">
          every month on things you’ll put in your closet, forever.
        </p>
      </Card>

      <Card>
        <Lightbulb size={136} color={props.primaryColor} className="shrink-0" />

        <h3 className="text-3xl font-bold">
          Become Very <br /> Lazy
        </h3>

        <p className="text-lg">
          by never having to ever get up to turn the lights off. Soon enough,
          you won’t be able to get up at all.
        </p>
      </Card>

      <Card>
        <Cctv size={136} color={props.secondaryColor} className="shrink-0" />

        <h3 className="text-3xl font-bold">
          Invade All <br /> Privacy
        </h3>

        <p className="text-lg">
          with cameras placed in every corner of your small 3+1 apartment
        </p>
      </Card>
    </div>
  );
}
