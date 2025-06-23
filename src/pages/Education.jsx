import React from "react";
import "./Education.css";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Your College Name",
      duration: "2021 - 2025",
      description:
        "Pursuing my undergraduate degree with a strong focus on software development, data structures, and building impactful projects.",
    },
  ];

  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="edu-duration">{edu.duration}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
