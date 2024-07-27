import React, { forwardRef } from "react";
import "./Contact.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import boy from "../assets/images/boy.png";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="main-container" ref={ref} id={props.id}>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Reach out and say hello</h1>
          <h2>Get in touch</h2>
          <h3>Email: sanjayduwal5@gmail.com</h3>
          <a
            href="https://www.linkedin.com/in/sanjay-d-a69764150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <h3>
                <FaLinkedin /> LinkedIn
              </h3>
            </button>
          </a>
          <a
            href="https://github.com/sanzay83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <h3>
                <FaGithub /> GitHub
              </h3>
            </button>
          </a>
        </div>

        <div className="contact-right">
          <img src={boy} alt="Fun" className="contact-image" />
        </div>
      </div>
    </div>
  );
});

export default Contact;
