"use client";

import Button from "./Button";
import { useProps } from "./PropProvider";

export default function Footer() {
  const props = useProps();

  return (
    <div
      className="w-full text-center flex flex-col justify-center items-center text-white"
      style={{
        background: 'url("/images/footer.png")',
        height: "420px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        gap: props.footer.gap,
      }}
    >
      <h1 className="text-4xl font-bold">Make Your Life Easier</h1>

      <p className="text-2xl">
        and sign up for a lifetime non-revocable <br /> membership with home
        helper
      </p>

      <div>
        <Button>SIGN UP</Button>
      </div>
    </div>
  );
}
