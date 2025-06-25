import React from "react";
import "./Certifications.css";

export default function Certifications() {
  const leetcodeBadges = [
    "https://leetcode.com/medal/?showImg=0&id=7240971&isLevel=false",
    "https://leetcode.com/medal/?showImg=0&id=6852292&isLevel=false",
    "https://leetcode.com/medal/?showImg=0&id=7168123&isLevel=false",
    "https://leetcode.com/medal/?showImg=0&id=6932822&isLevel=false",
    "https://leetcode.com/medal/?showImg=0&id=6868448&isLevel=false",
    "https://leetcode.com/medal/?showImg=0&id=6801985&isLevel=false",
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

      {/* Placeholder for future certs */}
      <h3>🎓 Other Certifications (LinkedIn, Coursera, etc.)</h3>
      <p>Coming soon...</p>
    </div>
  );
}
