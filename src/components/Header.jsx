import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ scrollTo }) => {
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

  return (
    <header className="header">
      <div className="header-left">
        <h1>
          {scrolled ? (
            <img
              src="https://sanjayduwal.com/assets/profilepic.JPG"
              alt="Sanjay Duwal"
            />
          ) : (
            ""
          )}
          Sanjay Duwal
        </h1>
      </div>
      <div className="header-right">
        <button onClick={() => scrollTo("aboutSection")}>About Me</button>
        <button onClick={() => scrollTo("techStacksSection")}>
          Tech Stacks
        </button>
        <button onClick={() => scrollTo("projectsSection")}>Projects</button>
        <button onClick={() => scrollTo("contactSection")}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
