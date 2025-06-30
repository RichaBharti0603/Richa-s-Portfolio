import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";
import Typed from "typed.js";
import "./Home.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const typedRef = useRef(null);
  const [visitCount, setVisitCount] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xcccccc,
          backgroundColor: 0x0e101a,
          maxDistance: 20,
          spacing: 18,
          showDots: true,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Dreamer", "Builder", "Creator"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
  fetch("http://localhost:5000/api/visitors")  // or your deployed backend URL
    .then((res) => res.json())
    .then((data) => setVisitorCount(data.count))
    .catch((err) => console.error("Visitor count error:", err));
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("Thanks! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section" ref={vantaRef}>
        <div className="intro-card">
          <div className="profile-pic-placeholder">R</div>
          <h1>Hello, I'm Richa Bharti</h1>
          <h3>
            I am a <span ref={typedRef} className="typed-text"></span>
          </h3>
          <p>
            I’m Richa — a Computer Science undergrad, full-stack developer, and
            a passionate problem solver. Whether it’s sustainability, empathy,
            or inclusion — I build for impact and purpose.
          </p>
          <div className="social-icons">
            <a href="https://github.com/RichaBharti0603" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/richa-bharti-508ba0283/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/RichaBhart67374" target="_blank" rel="noreferrer"><FaXTwitter /></a>
            <a href="https://www.instagram.com/richajha917/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="visitor-count">🔢 Visitors so far: {visitCount}</div>

      <div className="notable-projects">
        <h2>✨ Notable Projects</h2>

        <div className="project-card">
  <h3>🗳️ Nagrik - Civic Engagement Platform</h3>
  <p>
    A web platform that connects citizens with local representatives to raise
    concerns, share ideas, and improve accountability in governance. Designed
    with simplicity and transparency in mind using MERN stack.
  </p>
  <div className="project-links">
    <a href="https://github.com/RichaBharti0603/Nagrik-citizen-" target="_blank" rel="noreferrer">
      GitHub Repo
    </a>
    <a href="nagrik-citizen.vercel.app" target="_blank" rel="noreferrer">
      Live Demo
    </a>
  </div>
</div>


        <div className="project-card">
          <h3>💌 Vandana - Holiday Dating & Gathering App</h3>
          <p>
            Vandana connects people away from family during holidays to celebrate
            virtually or locally. Includes swiping, holiday planning, recipe sharing,
            and group chats. Built with MERN stack and cozy design in mind.
          </p>
          <div className="youtube-embed">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HEdpZArRrRQ"
              title="Vandana Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="sections-preview">
        {[
          {
            title: "Projects 🚀",
            link: "/projects",
            desc: (
              <>
                <p>
                  I love turning ideas into reality using clean, scalable code. From
                  sustainability to civic tech, I build tools that make a difference.
                </p>
                <p>
                  All projects are responsive, modern, and many are open-source.
                </p>
              </>
            ),
          },
          {
            title: "Skills 🛠️",
            link: "/skills",
            desc: (
              <>
                <p>
                  Frontend (React, Tailwind), Backend (Node, Express), AI/ML
                  (TensorFlow), and dev practices like Git, Agile, CI/CD.
                </p>
              </>
            ),
          },
          {
            title: "Experience 💼",
            link: "/experience",
            desc: (
              <>
                <p>
                  Internship, leadership roles, and hackathons — I’ve built,
                  managed, and collaborated on real-world apps and teams.
                </p>
              </>
            ),
          },
          {
            title: "Education 🎓",
            link: "/education",
            desc: (
              <>
                <p>
                  B.Tech (2023–27) in Computer Science at Dronacharya College,
                  Gurgaon. Core focus on data structures, software engineering, and
                  AI.
                </p>
              </>
            ),
          },
          {
            title: "Gallery 🌈",
            link: "/gallery",
            desc: (
              <>
                <p>
                  Glimpses from my journey — hackathons, design mockups,
                  achievements, and happy tech moments.
                </p>
              </>
            ),
          },
          {
  title: "Life 🌻",
  link: "/life",
  desc: (
    <>
      <p>
        Tech is just one side — here I share poems, reflections,
        hobbies, and everything that makes me who I am.
      </p>  
    </>
  )
},

          {
            title: "Contact 📬",
            link: "/contact",
            desc: (
              <>
                <p>
                  Want to collaborate or talk? Fill out the message form below, or use
                  the links above.
                </p>
              </>
            ),
          },
        ].map((section, index) => (
          <SectionPreview key={index} {...section} />
        ))}
      </div>

      <div className="contact-form-container">
        <h2>Send me a message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>

      <footer className="site-footer">
        <p>© 2025 Richa Bharti · Built with ❤️ and React</p>
      </footer>
    </div>
  );
}

function SectionPreview({ title, desc, link }) {
  return (
    <div className="section-preview">
      <h2>{title}</h2>
      <div className="desc-text">{desc}</div>
      <Link to={link}>Explore {title.replace(/[^a-zA-Z ]/g, "")}</Link>
    </div>
  );
}
