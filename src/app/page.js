"use client";
import { TypeAnimation } from "react-type-animation";

const Summary = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          // Same String at the start will only be typed once, initially
          "Hello! My name is Araz.",
          1000,
          "I'm a full-stack software developer.",
          1000,
          "I know Java, Python, Ruby, and JavaScript.",
          1000,
          "Click the arrow on the right to see some projects.",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </>
  );
};

export default function Home() {
  return (
      <main className="font-sans items-center p-24 h-full">
        <Summary />
      </main>
  );
}
