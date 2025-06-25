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
            Hey there! I’m Richa — a Computer Science student, full-stack
            developer, and builder at heart with a mission to create
            user-centered tech that empowers lives and solves real problems.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/RichaBharti0603"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/richa-bharti-508ba0283/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/RichaBhart67374"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/richajha917/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="sections-preview">
        <SectionPreview
          title="Projects"
          link="/projects"
          desc="Explore my full-stack projects solving real-world problems."
        />
        <SectionPreview
          title="Skills"
          link="/skills"
          desc="Languages, frameworks, and tools I use to build amazing things."
        />
        <SectionPreview
          title="Experience"
          link="/experience"
          desc="From internships to volunteering — where I've contributed and grown."
        />
        <SectionPreview
          title="Education"
          link="/education"
          desc="My academic background and technical journey."
        />
        <SectionPreview
          title="Gallery"
          link="/gallery"
          desc="Glimpses of my design work, memories, and achievements."
        />
        <SectionPreview
          title="Life"
          link="/life"
          desc="A peek into my personal reflections, hobbies, and stories."
        />
        <SectionPreview
          title="Contact"
          link="/contact"
          desc="Let’s connect! I’m open to collaborations and conversations."
        />
      </div>
    </div>
  );
}

function SectionPreview({ title, desc, link }) {
  return (
    <div className="section-preview">
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link to={link}>Explore {title}</Link>
    </div>
  );
}
