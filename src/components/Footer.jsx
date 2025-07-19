// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="https://github.com/SamratDesai7" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/samratdesai7" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:samratdesai7@gmail.com">Email</a>
        </div>
        <div className="footer-right">
          © {new Date().getFullYear()} <strong>Samrat Desai</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
