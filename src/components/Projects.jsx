import React, { forwardRef } from "react";
import "./Projects.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import inari from "../assets/images/inari.png";
import adquiz from "../assets/images/adquiz.png";
import library from "../assets/images/library.png";
import isa from "../assets/images/isa.jpg";
import relaxingsound from "../assets/images/relaxingsound.jpg";
import timer from "../assets/images/timer.jpg";
import { Reveal } from "./Reveal";

const projectsData = [
  {
    image: inari,
    title: "Online Store",
    description:
      "Full-featured e-commerce demo with a product catalog, cart, and a smooth checkout flow.",
    tags: ["React", "Java", "Spring"],
    github: "https://github.com/sanzay83/onlineStore",
    demo: "https://sanjayduwal.com/o/onlineStore/",
  },
  {
    image: adquiz,
    title: "ADQuiz",
    description:
      "American Dream Quiz — US citizenship test prep with quiz, marathon, flashcard, and study modes.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/sanzay83/adquiz",
    demo: "https://sanjayduwal.com/adquiz/",
  },
  {
    image: library,
    title: "Library",
    description:
      "Digital library app for browsing, borrowing, and managing a book collection.",
    tags: ["React", "Node.js"],
    github: "https://github.com/sanzay83/library",
    demo: "https://sanjayduwal.com/o/library/",
  },
  {
    image: relaxingsound,
    title: "Relaxing Sound",
    description:
      "Ambient soundscape player for focus, sleep, and relaxation — mix your own calm.",
    tags: ["JavaScript", "Web Audio"],
    github: "https://github.com/sanzay83/relaxing-sound",
    demo: "https://relaxingsound.sanjayduwal.com/",
  },
  {
    image: timer,
    title: "Timer",
    description:
      "Sleek, minimal timer and stopwatch web app with a clean, distraction-free UI.",
    tags: ["JavaScript", "CSS"],
    github: "",
    demo: "https://timer.sanjayduwal.com/",
  },
  {
    image: isa,
    title: "ISA Website",
    description:
      "Official website for the International Student Association at Minnesota State University, Mankato.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sanzay83/ISA",
    demo: "https://sanjayduwal.com/o/ISA/",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section className="projects-section" ref={ref} id={props.id}>
      <div className="projects-inner">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="title">Projects</h2>
          <p className="lead">
            A few things I&rsquo;ve designed and built — each one taught me
            something new.
          </p>
        </Reveal>

        <div className="project-grid">
          {projectsData.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 120}
              className="project-card"
            >
              <div className="project-media">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    aria-label={`${project.title} live demo`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
