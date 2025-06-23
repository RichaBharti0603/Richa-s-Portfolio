import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="home-image">
          {/* Replace with actual photo later */}
          <img src="/profile-placeholder.png" alt="Richa" />
        </div>
        <div className="home-text">
          <h1>Hi, I’m Richa Bharti</h1>
          <p>
            Welcome to my space on the internet — where creativity meets code.
            I’m a passionate developer with a knack for designing meaningful,
            purposeful digital experiences.
          </p>
          <a href="/projects" className="home-button">Explore My Work</a>
        </div>
      </div>
      <div className="scroll-down">
        <span>Scroll to explore ↓</span>
      </div>
    </div>
  );
}
