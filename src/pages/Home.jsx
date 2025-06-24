import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";
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

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xcccccc, // subtle net color
          backgroundColor: 0x0e101a, // dark background for intro only
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

  return (
    <>
      <div ref={vantaRef} className="home-container">
        <div className="intro-card">
          <div className="profile-pic-placeholder">R</div>
          <h1>Hello, I'm Richa Bharti</h1>
          <h3>Crafting code with care — for people, planet, and purpose.</h3>
          <p>
            Hey there! I’m Richa Bharti — a Computer Science student, full-stack
            developer, and builder at heart with a mission to make technology
            more empathetic, inclusive, and impactful.
          </p>
          <p>
            Whether it’s developing AI-powered platforms like <b>Prakriti</b>,
            designing warm digital spaces like <b>Vandana</b>, or building civic
            tools like <b>Nagrik</b> — I code with purpose. I love turning
            real-world problems into thoughtful digital experiences, blending
            design with solid engineering.
          </p>
          <p>
            Hackathons, social good, and community-centered innovation keep me
            energized. If it touches lives, tells a story, or solves something
            real — I’m all in.
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

      {/* Section Previews - Separate from animated background */}
      <div className="sections-preview">
        <SectionPreview
          title="Projects"
          link="/projects"
          desc="A showcase of my top work, with GitHub and live demos."
        />
        <SectionPreview
          title="Skills"
          link="/skills"
          desc="A rundown of my technical & creative skills."
        />
        <SectionPreview
          title="Experience"
          link="/experience"
          desc="Professional and volunteer experiences that shaped my journey."
        />
        <SectionPreview
          title="Education"
          link="/education"
          desc="My academic background and key learnings."
        />
        <SectionPreview
          title="Gallery"
          link="/gallery"
          desc="A visual archive of highlights and moments."
        />
        <SectionPreview
          title="Life"
          link="/life"
          desc="Stories, reflections, and experiences beyond code."
        />
        <SectionPreview
          title="Contact"
          link="/contact"
          desc="Let’s connect — I’m just a message away!"
        />
      </div>
    </>
  );
}

function SectionPreview({ title, desc, link }) {
  return (
    <div className="section-preview">
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link to={link} className="section-link">
        Explore {title}
      </Link>
    </div>
  );
}
