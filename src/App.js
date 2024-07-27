import React, { useRef, useState, useEffect } from "react";
import "./components/App.scss";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import proImage from "./assets/san.JPG";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Adjust the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionRefs = {
    aboutSection: useRef(null),
    techStacksSection: useRef(null),
    projectsSection: useRef(null),
    contactSection: useRef(null),
  };

  // Function to handle scrolling
  const scrollToSection = (sectionId) => {
    if (sectionRefs[sectionId]?.current) {
      sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <header className="header">
        <div className="header-left">
          <h1>
            {scrolled ? <img src={proImage} alt="Sanjay Duwal" /> : ""}
            Sanjay Duwal
          </h1>
        </div>
        <div className="header-right">
          <button onClick={() => scrollToSection("aboutSection")}>
            AboutMe
          </button>
          <button onClick={() => scrollToSection("techStacksSection")}>
            TechStacks
          </button>
          <button onClick={() => scrollToSection("projectsSection")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contactSection")}>
            Contact
          </button>
          <div
            className={`dark-mode-button `}
            onClick={() => {
              handleButtonDark();
            }}
          >
            <div className={`${isDark ? "on" : "off"}`} />
          </div>
        </div>
      </header>
      <ProfileCard scrollTo={scrollToSection} />
      <AboutMe id="aboutSection" ref={sectionRefs.aboutSection} />
      <TechStacks id="techStacksSection" ref={sectionRefs.techStacksSection} />
      <Projects id="projectsSection" ref={sectionRefs.projectsSection} />
      <Contact id="contactSection" ref={sectionRefs.contactSection} />
      <Footer />
    </div>
  );
}

export default App;
