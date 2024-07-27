import React, { forwardRef } from "react";
import "./Contact.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import boy from "../assets/images/boy.png";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact-container" ref={ref} id={props.id}>
      <div className="contact-left">
        <h1>Reach out and say hello</h1>
        <h2>Get in touch</h2>
        <p className="contact-email">
          Email:{" "}
          <a href="mailto:sanjayduwal5@gmail.com">sanjayduwal5@gmail.com</a>
        </p>
        <p className="contact-email">
          <a
            href="https://www.linkedin.com/in/sanjay-d-a69764150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </p>
        <p className="contact-email">
          <a
            href="https://github.com/sanzay83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </p>
      </div>
      <div className="contact-right">
        <img src={boy} alt="Fun" className="contact-image" />
      </div>
    </div>
  );
});

export default Contact;
