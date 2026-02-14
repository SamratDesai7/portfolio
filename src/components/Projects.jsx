import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const projectList = [
    {
      title: "Inventory Management",
      description:
        "A Spring MVC based Inventory Management system that allows efficient tracking of products, stock levels, and records with full Create, Read, Update, and Delete functionality using JSP, Servlet, Hibernate, and JDBC.",
      tech: "Java, Spring MVC, JSP, Servlet, Hibernate, JDBC, MySQL",
      github: "https://github.com/SamratDesai7/SpringMvc-curd.git",
      live: "",
    },
    {
      title: "BOOKNEST",
      description:
        "BOOKNEST is a full-stack web application for managing and organizing book records efficiently. It allows users to add, update, view, and delete books with a structured backend and database integration.",
      tech: "HTML, CSS, JavaScript, PHP, Sql, MyPHPAdmin",
      github: "https://github.com/SamratDesai7/BOOKNEST.git",
      live: "",
    },
    {
      title: "Expense Tracker",
      description:
        "Expense Tracker is a sleek web app to manage and visualize your daily income and expenses in real time.",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      github: "https://github.com/SamratDesai7/Expense-Tracker",
      live: "https://samratdesai7.github.io/Expense-Tracker/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1220] py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#111827]" />

      {/* Diagonal Overlay */}
      <div className="absolute inset-0">
        <div className="absolute right-310 top-0 w-[20%] h-full bg-[#0f1f33] skew-x-[40deg] origin-top-left opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
      >
        <motion.h2
          variants={itemVariant}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariant}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project, idx) => (
            <motion.article
              key={idx}
              variants={itemVariant}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-[#34d399] transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="text-gray-400 text-sm mb-6">
                  <span className="font-semibold text-white">Tech Stack:</span>{" "}
                  {project.tech}
                </p>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#34d399] text-black text-sm font-semibold rounded-md hover:bg-[#2eb885] transition"
                >
                  GitHub Repo
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-500 text-white text-sm rounded-md hover:border-[#34d399] hover:text-[#34d399] transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
