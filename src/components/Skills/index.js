import { useState, useEffect } from "react";
import AnimatedLetter from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import TagCloud from "TagCloud";

const Tags = [
  "HTML5",
  "CSS3",
  "ANGULARJS",
  "REACT JS",
  "BOOTSTRAP",
  "TAILWIND",
  "MATERIAL UI",
  "JSON",
  "APIs",
  "GIT",
  "FIGMA",
  "UI/UX",
  "GSAP",
  "PHP",
  "MYSQL",
  "NODE",
  "JAVA",
  "SASS",
  "AXD",
];

const skillsArr = [
  "S",
  "k",
  "i",
  "l",
  "l",
  "s",
];

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  TagCloud(".content", Tags, {
    radius: 350,
    maxSpeed: "fast",
    initSpeed: "fast",
    direction: 135,
    keep: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              idx={13}
              letterClass={letterClass}
              strArray={skillsArr}
            />
          </h1>
          <div className="gd-bar" />
          <p>
            The technology I'm using are ReactJS, AngularJS, Bootstrap, HTML5, CSS3, APIs, Json,
            Figma, Tailwind, Material UI, GSAP, SASS, MySQL, TypeScript, GIT. I am still exploring 
            and learning about technologies.
          
          </p>
          <div className="gd-bar" />
          <p>
            My other skills are
            Excellent time management skills,
            Strong interpersonal and communication skills,
            Analytical with excellent creative problem solving skills,
            Extremely organized and detail oriented.
          </p>
          <div className="gd-bar" />
          <p>
            Feel free to use my contact page to ask questions.
          </p>
        </div>
        <div className="tag-cloud-container">
          <h1 className="content">{}</h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;