import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#ffe6f0", textAlign: "center" }}>
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/projects" style={{ margin: "0 10px" }}>Projects</Link>
        <Link to="/skills" style={{ margin: "0 10px" }}>Skills</Link>
        <Link to="/experience" style={{ margin: "0 10px" }}>Experience</Link>
        <Link to="/education" style={{ margin: "0 10px" }}>Education</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        <Link to="/gallery" style={{ margin: "0 10px" }}>Gallery</Link>
        <Link to="/life">Life</Link>

      </nav>
    </header>
  );
}
