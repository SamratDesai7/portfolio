import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Weather App",
      description:
        "Weather App is a user-friendly tool that provides real-time weather updates, allowing you to search and view current temperature, location-based conditions, and more with a clean, responsive interface.",
      tech: "React, CSS,Api",
      github: "https://github.com/SamratDesai7/WeatherApp",
      live: "https://weather-app-tau-six-41.vercel.app/",
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
      description:
        "Stopwatch App is a precise timer tool that lets you start, pause, and reset time tracking effortlessly.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/SamratDesai7/StopWatch",
      live: "https://samratdesai7.github.io/StopWatch/",
    },
    {
      title: "Expense Tracker",
      description:
        "Expense Tracker is a sleek web app to manage and visualize your daily income and expenses in real time.",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      github: "https://github.com/SamratDesai7/Expense-Tracker",
      live: "https://samratdesai7.github.io/Expense-Tracker/",
    },
    {
      title: "Portfolio",
      description:
        "Personal Portfolio showcasing my projects, skills, and resume with smooth navigation, interactive UI, and modern responsive design.",
      tech: "React, CSS",
      github: "https://github.com/SamratDesai7/portfolio.git",
      live: "https://portfolio-wheat-alpha-21.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="project-cards">
          {projectList.map((project, idx) => (
            <article className="project-card" key={idx}>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="tech">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <div className="project-buttons">
                <a
                  className="btn"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  GitHub Repo
                </a>
                {project.live && (
                  <a
                    className="btn btn-outline"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
