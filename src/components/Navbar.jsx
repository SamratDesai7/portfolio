import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      console.warn(`Element with ID "${id}" not found.`);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavClick("home")}>
        <span className="logo-text">Samrat Desai</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a onClick={() => handleNavClick("home")}>Home</a>
        </li>
        <li>
          <a onClick={() => handleNavClick("about")}>About</a>
        </li>
        <li>
          <a onClick={() => handleNavClick("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => handleNavClick("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
