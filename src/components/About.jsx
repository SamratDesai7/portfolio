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

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative min-h-screen flex items-center overflow-hidden bg-[#0b1220] py-20"
    >
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#111827]" />

      {/* Diagonal Overlay */}
      <div className="absolute inset-0">
        <div className="absolute right-147 top-0 w-[20%] h-full bg-[#0f1f33] skew-x-[-40deg] origin-top-right opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariant}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          About <span className="text-[#34d399]">Me</span>
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          variants={itemVariant}
          className="text-gray-400 max-w-3xl leading-relaxed mb-12 text-lg"
        >
          I'm a passionate{" "}
          <span className="text-[#34d399]">Full Stack Developer</span> with
          experience in building responsive, user-friendly, and performant web
          applications. I enjoy translating ideas into code, solving real-world
          problems, and continuously learning modern technologies.
        </motion.p>

        {/* Grid Boxes */}
        <motion.div
          variants={containerVariant}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Box 1 */}
          <motion.div
            variants={itemVariant}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-[#34d399] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Technical Skills
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>JavaScript, TypeScript</li>
              <li>React.js, Node.js</li>
              <li>Java, Spring Boot</li>
              <li>JSP, Servlet, Hibernate, JDBC</li>
              <li>MongoDB, MySQL</li>
              <li>Git, GitHub, VS Code</li>
            </ul>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            variants={itemVariant}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-[#34d399] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Tools & Platforms
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Postman, Figma</li>
              <li>Eclipse, Vercel</li>
              <li>Firebase, Render</li>
              <li>Linux, Windows</li>
            </ul>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            variants={itemVariant}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-[#34d399] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Soft Skills
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Team Collaboration</li>
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            variants={itemVariant}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-[#34d399] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Bachelor's in Computer Applications</li>
              <li>Java Full Stack Development</li>
              <li>Master of Computer Applications (Ongoing)</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
