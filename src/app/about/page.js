// "use client";
// import { useEffect, useState } from "react";

const introduction = [
  "I am thrilled to present my journey as a passionate software developer.",
  "In this portfolio you can find numerous projects, thoughts, and other personal expressions...",
];

// Store specific skills within categorised arrays

// Programming Languages
const programmingLanguages = ["Ruby", "JavaScript", "Python", "Java"];

// Testing Tools
const testingTools = ["Cucumber", "RSpec", "Selenium"];

// Client-Side Technologies
const clientSideTechnologies = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "SCSS",
  "SASS",
  "Bootstrap",
  "Tailwind",
];

// Server-Side Technologies
const serverSideTechnologies = [
  "Ruby on Rails",
  "Node",
  "NextJS",
  "SQL",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Heroku",
];

// Development Tools
const developmentTools = ["Git", "GitHub", "Docker", "VSCode"];

// Analysis and Design
const analysisAndDesign = [
  "MVC architecture",
  "OOP concepts",
  "Test-Driven Development",
];

// Graphics and Design Software
const graphicsAndDesignSoftware = [
  "Photoshop",
  "Figma",
  "Lightroom",
  "Capture One",
];

// Publishing Software
const publishingSoftware = [
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft Powerpoint",
];

// Accounting Software
const accountingSoftware = ["Sage", "Quickbooks"];

// Audio Software
const audioSoftware = ["Logic", "Ableton", "Reaper"];

const Skills = ({ skillsArray }) => {
  return (
    <>
      {skillsArray.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </>
  );
};

const About = () => {
  return (
    <main
      className="font-sans items-center p-24 h-full flex flex-row"
    >
      <div>

      </div>
      <div>
        <p>Programming Languages</p>
        <div className="items-items-center">
          <Skills skillsArray={programmingLanguages} />
        </div>
      </div>

      <div>
        <p>Testing Tools</p>
        <Skills skillsArray={testingTools} />
      </div>

      <div>
        <p>Client-Side Technologies</p>
        <Skills skillsArray={clientSideTechnologies} />
      </div>

      <div>
        <p>Server-Side Technologies</p>
        <Skills skillsArray={serverSideTechnologies} />
      </div>

      <div>
        <p>Development Tools</p>
        <Skills skillsArray={developmentTools} />
      </div>

      <div>
        <p>Analysis and Design</p>
        <Skills skillsArray={analysisAndDesign} />
      </div>

      <div>
        <p>Graphics and Design Software</p>
        <Skills skillsArray={graphicsAndDesignSoftware} />
      </div>

      <div>
        <p>Publishing Software</p>
        <Skills skillsArray={publishingSoftware} />
      </div>

      <div>
        <p>Accounting Software</p>
        <Skills skillsArray={accountingSoftware} />
      </div>

      <div>
        <p>Audio Software</p>
        <Skills skillsArray={audioSoftware} />
      </div>
    </main>
  );
};

export default About;
