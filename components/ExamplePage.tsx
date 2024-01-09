"use client";

import About from "./About";
import Bubbles from "./Bubbles";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { useProps } from "./PropProvider";

export default function ExamplePage() {
  const { props } = useProps();

  return (
    <div
      className="flex flex-col w-[1330px] shrink-0"
      style={{
        gap: `${props.sectionGapPx}px`,
        color: props.textColor,
      }}
    >
      <Header />

      <Hero />

      <Cards />

      <About />

      <hr className="border-gray-400 mx-[146px]" />

      <Bubbles />

      <Footer />
    </div>
  );
}
