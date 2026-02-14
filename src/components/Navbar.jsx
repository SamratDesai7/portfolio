import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["home", "about", "projects", "contact"];

const navContainer = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/95 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={navItem}
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex flex-col leading-tight">
            <span className="text-white text-xl font-semibold tracking-wider">
              SAMRAT
            </span>
            <span className="text-xs text-gray-400">
              Java Full Stack Developer
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {navItems.map((item) => (
            <motion.li key={item} variants={navItem}>
              <button
                onClick={() => handleNavClick(item)}
                className={`cursor-pointer capitalize transition-all duration-300 hover:text-[#34d399] ${
                  activeSection === item ? "text-[#34d399]" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          variants={navItem}
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isMobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#0b1220] border-t border-gray-800"
      >
        <div className="flex flex-col items-center gap-6 py-6 text-gray-300 text-lg">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`capitalize transition duration-300 hover:text-[#34d399] ${
                activeSection === item ? "text-[#34d399]" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
