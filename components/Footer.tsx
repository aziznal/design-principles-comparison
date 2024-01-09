"use client";

import Button from "./Button";
import { useProps } from "./PropProvider";

export default function Footer() {
  const { props } = useProps();

  return (
    <div
      className="w-full text-center flex flex-col justify-center items-center"
      style={{
        background: 'url("/images/footer.png")',
        height: "450px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: props.tertiaryColorCopy1,
        gap: props.footer.gap,
        color: props.footer.textColor,
      }}
    >
      <h1
        style={{
          fontSize: props.footer.titleFontSize,
          fontWeight: props.footer.titleFontWeight,
          lineHeight: props.footer.titleLineHeight,
        }}
      >
        Make Your Life Easier
      </h1>

      <p
        style={{
          fontSize: props.footer.textFontSize,
          fontWeight: props.footer.textFontWeight,
          lineHeight: props.footer.textLineHeight,
        }}
      >
        and sign up for a lifetime non-revocable <br /> membership with home
        helper
      </p>

      <div>
        <Button>SIGN UP</Button>
      </div>
    </div>
  );
}
