import React from "react";
import "./Certifications.css";

export default function Certifications() {
  const leetcodeBadges = [
    "/images/leetcode/badge1.png",
    "/images/leetcode/badge2.png",
    "/images/leetcode/badge3.png",
    "/images/leetcode/badge4.png",
    "/images/leetcode/badge5.png",
    "/images/leetcode/badge6.png",
    "/images/leetcode/badge7.png",
  ];

  return (
    <div className="certifications-container">
      <h2>Certifications & Badges</h2>

      <h3>🏅 LeetCode Badges</h3>
      <div className="badge-grid">
        {leetcodeBadges.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`LeetCode Badge ${index + 1}`}
            className="badge-img"
          />
        ))}
      </div>

      <h3>🎓 Other Certifications (LinkedIn, Coursera, etc.)</h3>
      <p>Coming soon...</p>
    </div>
  );
}
