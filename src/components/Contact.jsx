import React, { forwardRef } from "react";
import "./Contact.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Reveal } from "./Reveal";

const EMAIL = "sanjayduwal5@gmail.com";

const Contact = forwardRef((props, ref) => {
  return (
    <section className="contact-section" ref={ref} id={props.id}>
      <div className="contact-inner">
        <Reveal>
          <div className="contact-card">
            <div className="contact-card-glow" aria-hidden="true" />
            <span className="eyebrow">Get in touch</span>
            <h2 className="title">
              Let&rsquo;s build something{" "}
              <span className="gradient-text">great</span> together
            </h2>
            <p className="lead">
              Have a project in mind, a role to fill, or just want to say
              hello? My inbox is always open — I&rsquo;ll get back to you as
              soon as I can.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                <FaEnvelope /> {EMAIL}
              </a>
              <div className="contact-socials">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
});

export default Contact;
