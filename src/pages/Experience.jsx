import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <h2>Experience</h2>

      <div className="experience-card">
        <h3>Software Development Intern</h3>
        <h4>PetSaver | Remote</h4>
        <p className="exp-duration">May 2024 – Present</p>
        <p>
          Contributing to the development of an animal rescue platform. Responsibilities include backend development using Node.js and Express, integrating MongoDB for database management, and collaborating on real-time location-based alert features.
        </p>
      </div>

      <div className="experience-card">
        <h3>Social Media Volunteer</h3>
        <h4>Technical Club | MNIT Jaipur</h4>
        <p className="exp-duration">Aug 2023 – Jan 2024</p>
        <p>
          Managed content and engagement on official social media platforms. Designed creative posts, handled event promotions, and helped increase online visibility and student participation for tech events.
        </p>
      </div>
    </div>
  );
}
