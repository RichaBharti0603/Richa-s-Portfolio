import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Gallery 🌈</h1>
      <p className="gallery-intro">
        A visual journey through my experiences — from hackathons and projects to college memories and design explorations.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src="/images/college-life.jpg"
            alt="College Life"
            className="college-photo"
          />
          <p>College Life – A moment of learning & laughter 📚✨</p>
        </div>

        {/* 🔧 Add more <div className="gallery-item"> here for more images */}
      </div>
    </div>
  );
}
