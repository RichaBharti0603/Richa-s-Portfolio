import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "C++", "Python", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git & GitHub", "MongoDB", "Firebase", "Vercel", "Postman"],
    },
    {
      category: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Communication", "Creativity"],
    },
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((section, index) => (
          <div className="skill-card" key={index}>
            <h3>{section.category}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>🌟 {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
