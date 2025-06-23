import React from "react";
import "./Hero.css"; // make sure this exists or create it next

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        {/* Placeholder - replace src with your picture later */}
        <img
          src="https://via.placeholder.com/250"
          alt="Richa Bharti"
          className="hero-image"
        />
      </div>
      <h1 className="hero-title">Hi, I'm Richa Bharti</h1>
      <p className="hero-subtitle">
        Welcome to my cute & lively portfolio! Explore my journey, projects, and passions.
      </p>
    </section>
  );
}
