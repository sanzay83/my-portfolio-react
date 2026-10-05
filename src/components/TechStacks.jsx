import React, { forwardRef } from "react";
import "./TechStacks.scss";
import { FaNodeJs } from "react-icons/fa";
import htmlicon from "../assets/icons/html.svg";
import cssicon from "../assets/icons/css.svg";
import javascripticon from "../assets/icons/javascript.svg";
import javaicon from "../assets/icons/java.svg";
import bootstrapicon from "../assets/icons/bootstrap.svg";
import pythonicon from "../assets/icons/python.svg";
import mysqlicon from "../assets/icons/mysql.svg";
import oracleicon from "../assets/icons/oracle.svg";
import reacticon from "../assets/icons/react.svg";
import githubicon from "../assets/icons/github.svg";
import jenkinsicon from "../assets/icons/jenkins.svg";
import { Reveal } from "./Reveal";

const LEVEL_WIDTH = { Expert: 95, Advanced: 80, Intermediate: 60 };

const TechStacks = forwardRef((props, ref) => {
  const stacks = [
    {
      title: "Languages & Frameworks",
      items: [
        { name: "HTML", icon: htmlicon, exp: "Expert" },
        { name: "CSS", icon: cssicon, exp: "Expert" },
        { name: "JavaScript", icon: javascripticon, exp: "Expert" },
        { name: "React", icon: reacticon, exp: "Expert" },
        { name: "Python", icon: pythonicon, exp: "Expert" },
        { name: "Java", icon: javaicon, exp: "Expert" },
      ],
    },
    {
      title: "Database, Tools & DevOps",
      items: [
        { name: "MySQL", icon: mysqlicon, exp: "Expert" },
        { name: "Oracle", icon: oracleicon, exp: "Expert" },
        { name: "Node.js", iconComponent: FaNodeJs, exp: "Expert" },
        { name: "Bootstrap", icon: bootstrapicon, exp: "Expert" },
        { name: "GitHub", icon: githubicon, exp: "Expert" },
        { name: "Jenkins", icon: jenkinsicon, exp: "Expert" },
      ],
    },
  ];

  return (
    <section className="skills-section" ref={ref} id={props.id}>
      <div className="skills-inner">
        <Reveal className="section-head">
          <span className="eyebrow">What I work with</span>
          <h2 className="title">Tech Stacks</h2>
          <p className="lead">
            The languages, frameworks, and tools I reach for when building
            software.
          </p>
        </Reveal>

        <div className="skill-cards">
          {stacks.map((stack, i) => (
            <Reveal key={stack.title} delay={i * 120} className="skill-card">
              <h3>{stack.title}</h3>
              <div className="skill-items">
                {stack.items.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <div className="skill-top">
                      <span className="skill-icon">
                        {item.icon ? (
                          <img src={item.icon} alt={`${item.name} logo`} />
                        ) : (
                          <item.iconComponent />
                        )}
                      </span>
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-exp">{item.exp}</span>
                    </div>
                    <div className="skill-bar">
                      <span
                        className="skill-fill"
                        style={{
                          width: `${LEVEL_WIDTH[item.exp] || 80}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TechStacks;
