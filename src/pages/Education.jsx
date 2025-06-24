import React from "react";
import "./Education.css";
import collegeImage from "../assets/college.jpg"; // <-- adjust filename

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Dronacharya College of Engineering, Gurgaon",
      duration: "2023 - 2027",
      description:
        "Pursuing my undergraduate degree with a strong focus on software development, data structures, and building impactful projects.",
      image: collegeImage, // new field
    },
  ];

  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <img
              src={edu.image}
              alt={`${edu.institution} logo`}
              className="education-image"
            />
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

