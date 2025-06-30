import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Nagrik",
    description: "Civic engagement platform empowering users to raise local issues, vote on solutions, and interact with authorities.",
    github: "https://github.com/RichaBharti0603/Nagrik-citizen-",
    live: "https://nagrik-citizen.vercel.app/",
  },
  {
    title: "Finance Tracking Website",
    description: "Track income, expenses, and budgets visually using charts and graphs with full CRUD operations.",
    github: "https://github.com/yourusername/finance-tracker",
    live: "https://finance-tracker-demo.vercel.app",
  },
  {
    title: "Mental Health Chatbot",
    description: "An AI chatbot to assess mental health and guide users with personalized emotional support.",
    github: "https://github.com/yourusername/mental-health-chatbot",
    live: "https://mentalhealthchatbot.vercel.app",
  },
  {
    title: "Food Recommendation System",
    description: "A personalized food recommender based on mood, weather, and dietary preferences using ML.",
    github: "https://github.com/yourusername/food-recommendation",
    live: "https://foodrecommendation.vercel.app",
  },
  {
    title: "Web Check",
    description: "Tool to evaluate website performance, accessibility, and SEO with real-time audits.",
    github: "https://github.com/yourusername/web-check",
    live: "https://webcheck.vercel.app",
  },
  {
    title: "Education Hub",
    description: "A centralized learning platform offering free resources, tutorials, and skill-based filtering.",
    github: "https://github.com/yourusername/education-hub",
    live: "https://educationhub.vercel.app",
  },
  {
    title: "Vandana",
    description: "A holiday-themed dating-style web app helping people celebrate festivals through online meetups.",
    github: "https://github.com/yourusername/vandana",
    live: "https://vandana.vercel.app",
  },
  {
    title: "Disaster Management System",
    description: "A real-time alert and coordination system for managing natural disasters with map integration.",
    github: "https://github.com/yourusername/disaster-management",
    live: "https://disastermanagement.vercel.app",
  },
  {
    title: "FullStack Auth App",
    description: "User authentication system with JWT, password hashing, and role-based access using MERN stack.",
    github: "https://github.com/yourusername/fullstack-auth",
    live: "https://fullstackauth.vercel.app",
  },
  {
    title: "Solana Voting DApp",
    description: "A decentralized voting application built on the Solana blockchain using Rust and Anchor.",
    github: "https://github.com/yourusername/solana-voting-dapp",
    live: "https://solanavoting.vercel.app",
  },
  {
    title: "PetSaver",
    description: "A platform for reporting lost pets and adopting rescued animals using geolocation and alerts.",
    github: "https://github.com/yourusername/petsaver",
    live: "https://petsaver.vercel.app",
  },
  
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Work & Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src="/project-placeholder.png" alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="project-btn github">GitHub Repo</button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button className="project-btn live">Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
