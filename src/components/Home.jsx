// src/components/Home.jsx
import React from "react";
import profileImg from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container animated-bg" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Samrat Desai</span>
        </h1>

        <h2>
          <span className="typed-text">
            <Typewriter
              words={["Full Stack Developer"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p>
          I build modern, scalable web applications using the MERN stack & Java
          Spring Boot.
        </p>

        <div className="home-buttons">
          <a
            href="#projects"
            className="btn-primary"
            aria-label="Navigate to Projects Section"
          >
            View Projects
          </a>

          <a
            href="/SAMRAT.pdf"
            download="SAMRAT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Download Resume PDF"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profileImg} alt="Samrat Desai Profile" />
      </div>
    </section>
  );
};

export default Home;
