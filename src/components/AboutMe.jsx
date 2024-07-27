import React, { forwardRef } from "react";
import "./AboutMe.scss"; // Import CSS for styling

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className="main-container-about-me" ref={ref} id={props.id}>
      <h3>Get to know me</h3>
      <h1 className="title">About Me</h1>
      <div className="about-me">
        <section className="about-me-section">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>4+ years</h3>
              <p>Software Development</p>
            </li>
          </ul>
        </section>

        <section className="about-me-section">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Bachelor's of Science in Information Technology</h3>
              <p>Minnesota State University, Mankato, 2016 - 2019</p>
            </li>
          </ul>
        </section>
      </div>
      <div className="about-me">
        <div className="p1">
          I am a passionate software engineer with a strong background in web
          development and a keen interest in solving complex problems. I enjoy
          working on innovative projects and continuously learning new
          technologies to stay updated with industry trends. My journey into
          software engineering began during my time at Minnesota State
          University, where I pursued a Bachelor of Science in Information
          Technology degree with a focus on Software Engineering. I've had the
          privilege of working with industry leaders like John Deere and OATI,
          where I've honed my skills in Agile methodologies and collaborative
          development practices. My approach to software engineering is deeply
          rooted in a commitment to continuous learning and growth. I actively
          engage in individual development sessions with my team, addressing
          challenges, and exploring new technologies to stay ahead of industry
          trends. Whether it's developing responsive UIs with React or
          architecting scalable Microservices with Spring framework. I bring a
          blend of technical expertise, leadership experience, and a passion for
          problem-solving to every project I undertake.
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
