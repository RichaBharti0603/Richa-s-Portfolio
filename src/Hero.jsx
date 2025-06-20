import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#fff8fb",
        padding: "4rem 2rem",
        textAlign: "center",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(255, 111, 145, 0.3)",
        maxWidth: "600px",
        margin: "2rem auto",
      }}
    >
      <div
        style={{
          width: "160px",
          height: "160px",
          margin: "0 auto 1.5rem",
          borderRadius: "50%",
          backgroundColor: "#ffd1e6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(255, 111, 145, 0.4)",
        }}
      >
        {/* Placeholder for your picture */}
        <img
  src="/your-photo.jpg"  // replace with your image path
  alt="Richa Bharti"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
/>

      </div>
      <h1 style={{ color: "#ff6f91", fontSize: "2.8rem", marginBottom: "0.5rem" }}>
        Hi, I'm Richa Bharti
      </h1>
      <p
        style={{
          color: "#ff8fab",
          fontSize: "1.3rem",
          maxWidth: "400px",
          margin: "0 auto",
          lineHeight: "1.5",
        }}
      >
     Here you can explore my projects, skills, and passions.
      </p>
    </section>
  );
}
