import React, { forwardRef } from "react";
import "./TechStacks.scss";
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

const TechStacks = forwardRef((props, ref) => {
  const stacks = [
    {
      title: "Programming Languages",
      items: [
        {
          name: "HTML",
          icon: htmlicon,
          exp: "Expert",
        },
        {
          name: "CSS",
          icon: cssicon,
          exp: "Expert",
        },
        {
          name: "JavaScript",
          icon: javascripticon,
          exp: "Expert",
        },
        {
          name: "React",
          icon: reacticon,
          exp: "Expert",
        },
        {
          name: "Python",
          icon: pythonicon,
          exp: "Expert",
        },
        {
          name: "Java",
          icon: javaicon,
          exp: "Expert",
        },
      ],
    },
    {
      title: "Database & Other",
      items: [
        {
          name: "MySQL",
          icon: mysqlicon,
          exp: "Expert",
        },
        {
          name: "Oracle",
          icon: oracleicon,
          exp: "Expert",
        },
        {
          name: "NodeJS",
          icon: "",
          exp: "Expert",
        },
        {
          name: "BootStraps",
          icon: bootstrapicon,
          exp: "Expert",
        },
        {
          name: "GitHub",
          icon: githubicon,
          exp: "Expert",
        },
        {
          name: "Jenkins",
          icon: jenkinsicon,
          exp: "Expert",
        },
      ],
    },
  ];

  return (
    <div className="tech-stacks" ref={ref} id={props.id}>
      <h1>Tech Stacks</h1>
      <div className="cards">
        {stacks.map((stack, index) => (
          <div className="card" key={index}>
            <h3>{stack.title}</h3>
            <div className="items">
              {stack.items.map((item, itemIndex) => (
                <div className="item" key={itemIndex}>
                  <img src={item.icon} alt="" className="icon" />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TechStacks;
