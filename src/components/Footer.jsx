import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-20 relative bg-[#0b1220] border-t border-gray-800"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#111827]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side - Social Links */}
        <motion.div
          variants={containerVariant}
          className="flex items-center gap-6 text-gray-400"
        >
          <motion.a
            variants={itemVariant}
            href="https://github.com/SamratDesai7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#34d399] transition duration-300"
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            variants={itemVariant}
            href="https://linkedin.com/in/samratdesai7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#34d399] transition duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

          <motion.a
            variants={itemVariant}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=samratdesai7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#34d399] transition duration-300"
          >
            <FaEnvelope />
            Email
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={itemVariant}
          className="text-gray-500 text-sm text-center md:text-right"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Samrat Desai</span>. All
          rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
