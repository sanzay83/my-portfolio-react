import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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

  return (
    <div className="App">
      <Header scrollTo={scrollToSection} />
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
