import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}>Skills</Link>
        <Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>Experience</Link>
        <Link to="/education" className={location.pathname === "/education" ? "active" : ""}>Education</Link>
        <Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        <Link to="/life" className={location.pathname === "/life" ? "active" : ""}>Life</Link>
        <Link to="/certifications" className={location.pathname === "/certifications" ? "active" : ""}>Certifications</Link>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          📄 Resume
        </a>
      </nav>
    </header>
  );
}
