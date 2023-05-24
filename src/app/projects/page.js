"use client";
import MovingText from "react-moving-text";

const Letters = ["P", "r", "o", "j", "e", "c", "t", "s"];

const Projects = () => (
  <main className="flex flex-col items-center p-10">
    <div className="flex flex-row font-sans text-6xl">
      {Letters.map((letter, index) => (
        <MovingText
          key={index}
          type="swing"
          duration="700ms"
          delay={index * 100 + "ms"}
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none"
        >
          {letter}
        </MovingText>
      ))}
    </div>
  </main>
);

export default Projects;
