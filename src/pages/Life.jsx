import React from "react";
import "./Life.css";

export default function Life() {
  return (
    <section className="life-section">
      <h2>My Life</h2>
      <p className="life-intro">
        Here's a peek into my journey outside of code — the passions, stories, and moments that shape me.
      </p>

      <div className="life-grid">
        <div className="life-card">
          <h3>🌿 Hobbies & Interests</h3>
          <p>
            I enjoy painting, reading fiction, and exploring new cafes. I often document my thoughts in journals or short poetry.
          </p>
        </div>
        <div className="life-card">
          <h3>💬 Personal Journey</h3>
          <p>
            My path into tech wasn’t linear. I’ve grown through self-learning, late-night bug fixes, and the joy of building something meaningful from scratch.
          </p>
        </div>
        <div className="life-card">
          <h3>🧳 Travel & Exploration</h3>
          <p>
            Traveling is something I deeply enjoy. Each place adds to my perspective and inspires new ideas and creativity.
          </p>
        </div>
        <div className="life-card">
          <h3>🎯 Goals</h3>
          <p>
            I'm aiming to build impactful tools, become a better developer, and contribute meaningfully to communities I’m part of.
          </p>
        </div>
      </div>
    </section>
  );
}
