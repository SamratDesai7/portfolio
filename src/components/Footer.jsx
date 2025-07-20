import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a
            href="https://github.com/SamratDesai7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub style={{ marginRight: "6px" }} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/samratdesai7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin style={{ marginRight: "6px" }} />
            LinkedIn
          </a>
          <a
            href="mailto:samratdesai7@gmail.com"
            aria-label="Email Samrat"
          >
            <FaEnvelope style={{ marginRight: "6px" }} />
            Email
          </a>
        </div>
        <div className="footer-right">
          <span>
            © {new Date().getFullYear()} <strong>Samrat Desai</strong>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
