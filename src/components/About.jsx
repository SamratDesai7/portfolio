import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container animated-bg">
      <div className="about-content">
        <h2>About <span className="highlight">Me</span></h2>

        <p className="aboutmeinfo">
          I'm a passionate <span className="highlight">Full Stack Developer</span> with experience in building responsive, user-friendly, and performant web applications. 
          I enjoy translating ideas into code, solving real-world problems, and continuously learning modern technologies.
        </p>

        <div className="about-grid">
          {/* Box 1 - Skills */}
          <div className="about-box">
            <h3>Technical Skills</h3>
            <ul>
              <li>JavaScript, TypeScript</li>
              <li>React.js, Next.js</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, MySQL</li>
              <li>Git, GitHub, VS Code</li>
            </ul>
          </div>

          {/* Box 2 - Tools */}
          <div className="about-box">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Postman, Figma</li>
              <li>Netlify, Vercel</li>
              <li>Firebase, Supabase</li>
              <li>Render, Railway</li>
              <li>Linux, Windows</li>
            </ul>
          </div>

          {/* Box 3 - Soft Skills */}
          <div className="about-box">
            <h3>Soft Skills</h3>
            <ul>
              <li>Team Collaboration</li>
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
          </div>

          {/* Box 4 - Education */}
          <div className="about-box">
            <h3>Education</h3>
            <ul>
              <li>Bachelor's in Computer Applications</li>
              <li>Full Stack MERN Bootcamp</li>
              <li>Java Backend Development (Ongoing)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
