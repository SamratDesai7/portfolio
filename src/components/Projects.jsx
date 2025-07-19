import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Counter",
      description:
        "Counter App is a simple interactive tool that lets you increment, decrement, and reset values with real-time updates.",
      tech: "React,css",
      github: "https://github.com/SamratDesai7/Counter",
      live: "https://counter-ten-gamma.vercel.app/",
    },
    {
      title: "ToDo App",
      description:
        "A clean React-based ToDo application with MUI design and state management.",
      tech: "React, MUI",
      github: "https://github.com/SamratDesai7/ToDo",
      live: "https://to-do-flame-three-92.vercel.app/",
    },
    {
      title: "Simon Says Game",
      description:
        "Memory-based JS game that challenges users to repeat color patterns.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/SamratDesai7/Simon-Says-Game",
      live: "https://samratdesai7.github.io/Simon-Says-Game/",
    },
    {
      title: "StopWatch",
      description: "Stopwatch App is a precise timer tool that lets you start, pause, and reset time tracking effortlessly.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/SamratDesai7/StopWatch",
      live: "https://samratdesai7.github.io/StopWatch/",
    },
    {
      title: "Expense Tracker",
      description:
        "Expense Tracker is a sleek web app to manage and visualize your daily income and expenses in real time.",
      tech: "HTML,CSS,JS,BOOTSTRAP",
      github: "https://github.com/SamratDesai7/Expense-Tracker",
      live: "https://samratdesai7.github.io/Expense-Tracker/",
    },
    {
      title: "PortFolio",
      description:
        "Personal Portfolio showcasing my projects, skills, and resume with smooth navigation, interactive UI, and modern responsive design.",
      tech: "React,css",
      github: "https://github.com/SamratDesai7/portfolio.git",
      live: "https://portfolio-wheat-alpha-21.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-cards">
        {projectList.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech}
            </p>
            <div className="project-buttons">
              <a
                className="btn"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              {project.live && project.live !== "#" && (
                <a
                  className="btn btn-outline"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
