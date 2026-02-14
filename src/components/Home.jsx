/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/profile.jpeg";

const Home = () => {
  const topBracketPath = `
    M 77 200
    L 77 175
    Q 77 150 94 140 
    L 233 60 
    Q 250 50 267 60 
    L 406 140 
    Q 423 150 423 175 
    L 423 200
  `;

  const bottomBracketPath = `
    M 423 300 
    L 423 325 
    Q 423 350 406 360 
    L 267 440 
    Q 250 450 233 440 
    L 94 360 
    Q 77 350 77 325 
    L 77 300
  `;

  // Slightly smaller clip path to create spacing from border
  const fullHexagonPath = `
    M 100 200
    L 100 190 
    Q 100 170 115 160 
    L 233 95 
    Q 250 85 267 95 
    L 385 160 
    Q 400 170 400 190 
    L 400 310 
    Q 400 330 385 340 
    L 267 405 
    Q 250 415 233 405 
    L 115 340 
    Q 100 330 100 310 
    L 100 250
    Z
  `;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1220]"
    >
      {/* Background Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#111827]" />

      {/* Diagonal Right Overlay */}
      <div className="absolute inset-0">
        <div className="absolute left-320 top-0 w-[20%] h-full bg-[#0f1f33] skew-x-[-40deg] origin-top-right opacity-60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            HI, I'M SAMRAT! <br />
            <span className="text-white">
              <span className="text-[#34d399]"> JAVA FULL STACK </span>DEVELOPER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-gray-400 leading-relaxed max-w-lg text-lg"
          >
            I’m a passionate Full Stack Developer focused on building scalable
            web applications with clean UI and smooth user experiences. I love
            transforming ideas into powerful digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href="/Samrat_Desai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#34d399] text-black font-bold rounded-lg hover:bg-[#2eb885] transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-[#34d399] text-[#34d399] rounded-md font-medium hover:bg-[#34d399] hover:text-black transition duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-[320px] sm:w-[400px] lg:w-[480px] aspect-square">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <defs>
                <clipPath id="hexClip">
                  <path d={fullHexagonPath} />
                </clipPath>
              </defs>

              {/* IMAGE */}
              <image
                href={ProfileImg}
                x="70"
                y="70"
                width="400"
                height="515"
                clipPath="url(#hexClip)"
                preserveAspectRatio="xMidYMid slice"
              />

              {/* TOP BORDER */}
              <path
                d={topBracketPath}
                fill="none"
                stroke="#34d399"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* BOTTOM BORDER */}
              <path
                d={bottomBracketPath}
                fill="none"
                stroke="#34d399"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
