"use client";

import About from "./About";
import Bubbles from "./Bubbles";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { useProps } from "./PropProvider";

export default function ExamplePage() {
  const props = useProps();

  return (
    <div
      className="flex flex-col"
      style={{
        gap: `${props.sectionGapPx}px`,
      }}
    >
      <Header />

      <Hero />

      <Cards />

      <About />

      <Bubbles />

      <Footer />
    </div>
  );
}
