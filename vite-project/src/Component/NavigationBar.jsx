import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import image from "../assets/IMG_9470.png";
import "../styles/Navbars.css";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"; // Ensure the correct import for the icon

// Register GSAP plugin
gsap.registerPlugin(ScrollToPlugin);

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll to section using GSAP
  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1, scrollTo: sectionId, ease: "power2.inOut" });
    setIsMenuOpen(false); // Close menu after click (for mobile)
  };

  // Animations for elements on page load
  const animatePage = () => {
    gsap.fromTo(
      ".hero-text span",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-image",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".navbar-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Add animation for Resume Button
    gsap.fromTo(
      ".resume-link",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" }
    );
  };

  useEffect(() => {
    animatePage();
  }, []);

  return (
    <div className="navigation-bar">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="logo">
          <a href="/" className="logo-text">Portfolio</a>
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          {["home", "about", "projects", "blog", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="navbar-item"
              onClick={() => scrollToSection(`#${item}`)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span>{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>
            <span>Hey there! 👋</span>
            <span>I'm Sai Yaswanth,</span>
            <span className="highlight">Full Stack Web Developer</span>
            <span className="highlight">MERN Stack Developer</span>
            <span className="highlight">React Native Developer</span>
            <span>
              with a passion for creating modern, efficient, and user-friendly
              applications.
            </span>
          </h1>
          <div className="hero-buttons">
            {/* Wrap the button with an anchor tag to link to the Resume */}
            <a
              href="https://drive.google.com/file/d/1eYWz5qYAxIRoJdA3EszzBdNJGbQoOLb4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              <h2>Resume</h2>
              <Button variant="Ghost" size="icon">
                <ChevronRight />
              </Button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={image} alt="Sai Yaswanth" />
        </div>
      </div>
    </div>
  );
}
