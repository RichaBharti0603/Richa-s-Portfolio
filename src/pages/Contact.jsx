import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch or just say hi, feel free to connect!</p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:richab820@gmail.com">richab820@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/richa-bharti-508ba0283/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/richa-bharti
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/RichaBharti0603"
            target="_blank"
            rel="noreferrer"
          >
            github.com/RichaBharti0603
          </a>
        </p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            instagram.com/yourusername
          </a>
        </p>
      </div>
    </section>
  );
}
