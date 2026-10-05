import React, { useRef, useState, useEffect } from "react";
import "./components/App.scss";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import proImage from "./assets/san.JPG";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";

const NAV_LINKS = [
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (y / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (key) => {
    setMenuOpen(false);
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <button
            className="brand"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <span className="brand-mark">SD</span>
            <span className="brand-name">Sanjay Duwal</span>
          </button>

          <nav className="desktop-nav" aria-label="Sections">
            {NAV_LINKS.map((link) => (
              <button key={link.key} onClick={() => scrollTo(link.key)}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            {scrolled && (
              <img
                src={proImage}
                alt="Sanjay Duwal"
                className="header-avatar"
              />
            )}
            <button
              className="icon-btn theme-toggle"
              onClick={() => setIsDark((d) => !d)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
            <button
              className="icon-btn menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Sections">
            {NAV_LINKS.map((link) => (
              <button key={link.key} onClick={() => scrollTo(link.key)}>
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        <ProfileCard scrollTo={scrollTo} />
        <AboutMe id="about" ref={sectionRefs.about} />
        <TechStacks id="skills" ref={sectionRefs.skills} />
        <Projects id="projects" ref={sectionRefs.projects} />
        <Contact id="contact" ref={sectionRefs.contact} />
      </main>

      <Footer />

      {scrolled && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
