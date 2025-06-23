import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const galleryImages = [
    { id: 1, alt: "Project Moment", src: "https://via.placeholder.com/300x200?text=Memory+1" },
    { id: 2, alt: "College Life", src: "https://via.placeholder.com/300x200?text=Memory+2" },
    { id: 3, alt: "Hackathon", src: "https://via.placeholder.com/300x200?text=Memory+3" },
    { id: 4, alt: "Travel", src: "https://via.placeholder.com/300x200?text=Memory+4" },
    { id: 5, alt: "Friends", src: "https://via.placeholder.com/300x200?text=Memory+5" },
    { id: 6, alt: "Cultural Fest", src: "https://via.placeholder.com/300x200?text=Memory+6" },
  ];

  return (
    <section className="gallery-section">
      <h2>My Gallery</h2>
      <p>A glimpse into moments and memories I cherish ✨</p>
      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} className="gallery-img" />
        ))}
      </div>
    </section>
  );
}
