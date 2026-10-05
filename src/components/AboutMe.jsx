import React, { forwardRef } from "react";
import "./AboutMe.scss";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Reveal } from "./Reveal";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className="about-section" ref={ref} id={props.id}>
      <div className="about-inner">
        <Reveal className="section-head">
          <span className="eyebrow">Get to know me</span>
          <h2 className="title">About Me</h2>
          <p className="lead">
            A quick snapshot of my background — and the story behind it.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-cards">
            <div className="info-card">
              <span className="info-icon">
                <FaBriefcase />
              </span>
              <h3>Experience</h3>
              <p className="info-highlight">5+ years</p>
              <p className="info-sub">Software Development</p>
            </div>
            <div className="info-card">
              <span className="info-icon">
                <FaGraduationCap />
              </span>
              <h3>Education</h3>
              <p className="info-highlight">
                B.S. in Information Technology
              </p>
              <p className="info-sub">
                Minnesota State University, Mankato
                <br />
                2016 – 2019 · Software Engineering focus
              </p>
            </div>
          </Reveal>

          <Reveal className="about-bio" delay={150}>
            <p>
              I&rsquo;m a passionate software engineer with a strong background
              in web development and a keen interest in solving complex
              problems. I enjoy working on innovative projects and continuously
              learning new technologies to stay ahead of industry trends.
            </p>
            <p>
              My journey began at Minnesota State University, where I earned a
              Bachelor of Science in Information Technology with a focus on
              Software Engineering. Since then I&rsquo;ve had the privilege of
              working with industry leaders like{" "}
              <strong>John Deere</strong> and <strong>OATI</strong>, honing my
              skills in Agile methodologies and collaborative development.
            </p>
            <p>
              Whether it&rsquo;s building responsive UIs with React or
              architecting scalable microservices with Spring, I bring a blend
              of technical expertise, leadership experience, and a genuine
              passion for problem-solving to every project I take on.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
