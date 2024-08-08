// src/ProfileCard.js
import React from "react";
import "./ProfileCard.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import proImage from "../assets/san.JPG";

const ProfileCard = ({ scrollTo }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={proImage} alt="Sanjay Duwal" />
      </div>
      <div className="profile-text">
        <h2>Hello, I'm</h2>
        <h1>Sanjay Duwal</h1>
        <h3>Software Engineer</h3>
        <div className="buttons">
          <a href="https://sanjayduwal.com/assets/resume.pdf">
            <button>Download CV</button>
          </a>
          <button onClick={() => scrollTo("contactSection")}>
            Contact Info
          </button>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sanjay-d-a69764150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sanzay83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
