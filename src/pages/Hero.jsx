import React from "react";
import "./Hero.css"; // we'll make a soft gradient here

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        {/* Replace with your image URL */}
        <img
          src="https://via.placeholder.com/160"
          alt="Richa Bharti"
          className="hero-image"
        />
      </div>
      <h1 className="hero-title">Hi, I'm Richa Bharti</h1>
      <p className="hero-subtitle">
        Welcome to my cute & lively portfolio!  
        Let’s explore my world of projects, experiences, and creativity.
      </p>
      <a href="/projects" className="explore-button">
        ✨ Explore My Work
      </a>
    </section>
  );
}
