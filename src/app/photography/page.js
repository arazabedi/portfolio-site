"use client";
import MovingText from "react-moving-text";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "300" });

const Navbar = () => {
  return (
    <div className={`className=${cormorant.className} flex flex-row space-x-4`}>
      <a href="/photography">Home</a>
      <a href="">F&F</a>
      <a href="">Scenery</a>
      <a href="/">Contact</a>
    </div>
  );
};

const Photography = () => {
  return (
    <main>
      <div className="bg-white p-5 flex flex-row-reverse">
        <Navbar />
      </div>
      <div className="flex flex-col items-center p-10"></div>
    </main>
  );
};

export default Photography;

<div className="flex flex-row font-sans text-6xl">
  <MovingText
    type="swing"
    duration="600ms"
    delay="0s"
    direction="normal"
    timing="ease"
    iteration="2"
    fillMode="none"
  >
    Photography
  </MovingText>
</div>;
