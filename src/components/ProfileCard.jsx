import React, { useEffect, useState } from "react";
import "./ProfileCard.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import proImage from "../assets/san.JPG";
import { Reveal } from "./Reveal";

const ROLES = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

function useTypewriter(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const current = words[word];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
        timer = setTimeout(tick, 70);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
        timer = setTimeout(tick, 35);
      }
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "12+", label: "Technologies" },
];

const ProfileCard = ({ scrollTo }) => {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <Reveal className="hero-text">
          <span className="hello-pill">
            <span className="pulse-dot" />
            Hello, I&rsquo;m
          </span>
          <h1>
            Sanjay <span className="accent-text">Duwal</span>
          </h1>
          <h2 className="typed-role">
            {role}
            <span className="caret" aria-hidden="true" />
          </h2>
          <p className="hero-bio">
            I build fast, scalable web applications and delightful user
            experiences — from responsive React frontends to robust
            microservices.
          </p>
          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("contact")}
            >
              Contact Info
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo("about")}
            >
              About Me
            </button>
          </div>
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/sanjay-d-a69764150/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sanzay83"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={150}>
          <div className="portrait-wrap">
            <div className="portrait-ring">
              <img src={proImage} alt="Sanjay Duwal" />
            </div>
            <span className="float-chip chip-a">⚛️ React</span>
            <span className="float-chip chip-b">☕ Java</span>
            <span className="float-chip chip-c">10+ yrs</span>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-stats" delay={250}>
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default ProfileCard;
