import React, { useState } from "react";
import "./Gallery.css";

const galleryData = {
  "College Life": [
    {
      src: "/images/college/college1.jpg",
      caption: "A fun campus walk between classes 📚🌳",
    },
    {
      src: "/images/college/college2.jpg",
      caption: "Friends who made college feel like home ❤️",
    },
    {
      src: "/images/college/college3.jpg",
      caption: "Lab hours and laughter – engineering life! 💻🔧",
    },
  ],
  "Hackathons": [
    {
      src: "/images/hackathons/hack1.jpg",
      caption:
        "A click after my first ever hackathon ft. Priti (couldn't have survived college or hackathon without her) 👩‍💻",
    },
    {
      src: "/images/hackathons/hack2.jpg",
      caption: "Celebrating our win at Sphinx’24 🏆",
    },
  ],
};

export default function Gallery() {
  const [openFolder, setOpenFolder] = useState(null);

  const toggleFolder = (folder) => {
    setOpenFolder(openFolder === folder ? null : folder);
  };

  return (
    <div className="gallery-container">
      <h1>Gallery 🌈</h1>
      <p>Explore glimpses from different parts of my tech and student journey:</p>

      <div className="folder-list">
        {Object.entries(galleryData).map(([folderName, images]) => (
          <div key={folderName} className="gallery-folder">
            <button onClick={() => toggleFolder(folderName)} className="folder-button">
              📁 {folderName}
            </button>

            {openFolder === folderName && (
              <div className="image-grid">
                {images.map((img, idx) => (
                  <div className="image-item" key={idx}>
                    <img src={img.src} alt={folderName + " " + idx} className="gallery-image" />
                    <p className="image-caption">{img.caption}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
