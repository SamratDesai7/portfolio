// src/components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container animated-bg" id="about">
      <div className="about-content">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <p className="aboutmeinfo" >
          I’m <strong>Samrat Desai</strong>, a passionate Full Stack Developer
          (Java + MERN) who loves creating beautiful, efficient, and scalable
          web applications. I constantly experiment with modern technologies and
          aim to build user-friendly interfaces and powerful backend systems.
        </p>

        <div className="about-grid">
          <div className="about-box">
            <h3>Programming Languages</h3>
            <ul>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="about-box">
            <h3>Frontend & UI</h3>
            <ul>
              <li>React.js</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          <div className="about-box">
            <h3>Backend & Frameworks</h3>
            <ul>
              <li>Spring Boot</li>
              <li>Node.js & Express</li>
              <li>JSP & Servlets</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div className="about-box">
            <h3>Tools & Databases</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>VS Code, IntelliJ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
