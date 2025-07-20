import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/favicon.png"; // ✅ Ensure correct path

const navItems = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    const body = document.body;

    if (!isMobileMenuOpen) {
      body.classList.add("menu-open"); // Disable background scroll
    } else {
      body.classList.remove("menu-open");
    }

    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
      document.body.classList.remove("menu-open"); // Re-enable scroll
    } else {
      console.warn(`Element with ID "${id}" not found.`);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="logo"
        role="button"
        tabIndex={0}
        onClick={() => handleNavClick("home")}
        onKeyDown={(e) => e.key === "Enter" && handleNavClick("home")}
      >
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="logo-text">Samrat Desai</span>
      </div>

      {/* Hamburger Icon (☰ always visible) */}
      <div
        className="menu-icon"
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              role="button"
              tabIndex={0}
              className={activeSection === item ? "active" : ""}
              onClick={() => handleNavClick(item)}
              onKeyDown={(e) => e.key === "Enter" && handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
