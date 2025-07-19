import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "BookNest – Online Book Store",
      description: "A full-stack online bookstore with secure login, cart, and admin dashboard.",
      tech: "HTML, CSS, JS, PHP, MySQL",
      github: "https://github.com/SamratDesai7/BOOKNEST",
      live: "#",
    },
    {
      title: "ToDo App",
      description: "A clean React-based ToDo application with MUI design and state management.",
      tech: "React, MUI",
      github: "https://github.com/SamratDesai7/ToDo",
      live: "#",
    },
    {
      title: "Simon Says Game",
      description: "Memory-based JS game that challenges users to repeat color patterns.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/SamratDesai7/Simon-Says-Game",
      live: "https://samratdesai7.github.io/Simon-Says-Game/",
    },
    {
      title: "Weather App",
      description: "Live weather updates using OpenWeather API with sleek UI.",
      tech: "HTML, CSS, JavaScript, API",
      github: "https://github.com/SamratDesai7/WeatherApp",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React, responsive and animated UI.",
      tech: "React, CSS, React Router",
      github: "https://github.com/SamratDesai7/Portfolio",
      live: "#",
    },
    {
      title: "Calculator App",
      description: "Basic calculator with modern design and all core functionalities.",
      tech: "HTML, CSS, JS",
      github: "https://github.com/SamratDesai7/Calculator",
      live: "#",
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
            <p><strong>Tech:</strong> {project.tech}</p>
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
