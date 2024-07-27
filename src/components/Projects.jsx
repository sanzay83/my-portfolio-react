import React, { forwardRef } from "react";
import "./Projects.scss";
import { FaGithub } from "react-icons/fa";
import inari from "../assets/images/inari.png";
import adquiz from "../assets/images/adquiz.png";
import library from "../assets/images/library.png";
import isa from "../assets/images/isa.jpg";

const Projects = forwardRef((props, ref) => {
  const projectsData = [
    {
      image: inari,
      alt: "i",
      github: "https://github.com/sanzay83/onlineStore",
      demo: "https://sanjayduwal.com/o/onlineStore/",
    },
    {
      image: adquiz,
      alt: "ADQuiz",
      github: "https://github.com/sanzay83/adquiz",
      demo: "https://sanjayduwal.com/adquiz/",
    },
    {
      image: library,
      alt: "library",
      github: "https://github.com/sanzay83/library",
      demo: "https://sanjayduwal.com/o/library/",
    },
    {
      image: isa,
      alt: "isa",
      github: "https://github.com/sanzay83/ISA",
      demo: "https://sanjayduwal.com/o/ISA/",
    },
  ];
  return (
    <div className="main-container" ref={ref} id={props.id}>
      <h1>Projects</h1>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.alt} />
            <div className="github-button">
              <a href={project.github}>
                <FaGithub />
              </a>
              <div className="github-button-label">
                <a href={project.github}>Open GitHub</a>
              </div>
            </div>

            <div className="demo-button">
              O
              <div className="demo-button-label">
                <a href={project.demo}>Open Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
