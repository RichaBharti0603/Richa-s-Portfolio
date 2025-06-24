// At the top – same as before
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
          color: 0xcccccc, // light grey net lines
          backgroundColor: 0x0e101a, // deep navy
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
    <div ref={vantaRef} className="home-container">
      <div className="intro-card">
        <div className="profile-pic-placeholder">R</div>
        <h1>Hello, I'm Richa Bharti</h1>
        <h3>Crafting code with care — for people, planet, and purpose.</h3>
        <p>Hey there! I’m Richa Bharti — a Computer Science student, full-stack developer, and builder at heart with a mission to make technology more empathetic, inclusive, and impactful. Whether it’s developing AI-powered platforms like Prakriti to encourage sustainable living, designing warm digital spaces like Vandana to connect people during the holidays, or building civic tools that bridge communities and governance — I code with purpose. I love turning real-world problems into thoughtful digital experiences, blending meaningful design with solid engineering. Hackathons, social good projects, and community-centered innovation keep me energized. If it touches lives, tells a story, or solves something real — I’m all in.

</p>
        <div className="social-icons">
          <a href="https://github.com/RichaBharti0603" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/richa-bharti-508ba0283/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/RichaBhart67374" target="_blank" rel="noreferrer"><FaXTwitter /></a>
          <a href="https://www.instagram.com/richajha917/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* Section previews - same as before */}
      <div className="sections-preview">
        <SectionPreview title="Projects" link="/projects" desc="A showcase of my top work, with links to GitHub and live demos." />
        <SectionPreview title="Skills" link="/skills" desc="A rundown of my technical & creative skillset." />
        <SectionPreview title="Experience" link="/experience" desc="Professional & volunteer experiences that shaped my journey." />
        <SectionPreview title="Education" link="/education" desc="My academic background and learnings." />
        <SectionPreview title="Gallery" link="/gallery" desc="A visual space for highlights and memories." />
        <SectionPreview title="Life" link="/life" desc="Stories, reflections & moments beyond tech." />
        <SectionPreview title="Contact" link="/contact" desc="Let’s connect! I’m just a click away." />
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
