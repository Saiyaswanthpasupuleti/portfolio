import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import "../styles/Page2.css";
import htmlimage from "../assets/html.webp";
import cssimage from "../assets/cssss.png";
import jsimage from "../assets/js.png";
import tsimage from "../assets/typescript.png";
import nodeimage from "../assets/nodejs.png";
import expressimage from "../assets/express-js.png";
import reactnative from "../assets/react-native-1.svg";
import bootstrap from "../assets/bootstrap.png";
import shadcn from "../assets/shadcn.webp";
import reactjs from "../assets/Reactjs.webp";
import git from "../assets/git6963.jpg";
import github from "../assets/github pages.png";
import ec2 from "../assets/ec2.png";
import iam from "../assets/IAM.webp";
import mongo from "../assets/m0ngo.png";
import sql from "../assets/sql.png";
import postman from "../assets/pstman.png";
import vscode from "../assets/vs code.png";
import vercel from "../assets/vercel.avif";
import githubpages from "../assets/github pages.png";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function Page2() {
  useEffect(() => {
    // Initial page load fade-in effect
    gsap.fromTo(
      ".skills-page",
      { opacity: 0 }, // Start with opacity 0
      {
        opacity: 1,
        duration: 1.5, // Duration of the fade-in effect
        ease: "power3.out", // Smooth easing
      }
    );

    // Scroll-triggered animation for skill categories
    gsap.fromTo(
      ".skills-page",
      { opacity: 1 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-page",
          start: "top bottom", // Trigger when the top of the element hits the bottom of the viewport
          end: "bottom top", // End when the bottom of the element reaches the top of the viewport
          scrub: true, // Makes the animation smooth during scroll
        },
      }
    );

    gsap.fromTo(
      ".skill-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-item",
          start: "top 80%", // Start when the element comes within 80% of the viewport
          toggleActions: "play none none reverse", // Actions to trigger when the element enters and leaves the viewport
        },
      }
    );

    gsap.fromTo(
      ".skills-heading",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="skills-page">
      {/* Page Heading */}
      <div className="skills-header">
        <h1 className="skills-heading">Technical Skills</h1>
      </div>

      {/* Skills List */}
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li className="skill-item">
              <img src={htmlimage} alt="HTML5" className="skill-icon" />
              HTML5
            </li>
            <li className="skill-item">
              <img src={cssimage} alt="CSS3" className="skill-icon" />
              CSS3
            </li>
            <li className="skill-item">
              <img src={jsimage} alt="JavaScript" className="skill-icon" />
              JavaScript (ES6+)
            </li>
            <li className="skill-item">
              <img src={tsimage} alt="TypeScript" className="skill-icon" />
              TypeScript
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend Development</h3>
          <ul>
            <li className="skill-item">
              <img src={nodeimage} alt="Node.js" className="skill-icon" />
              Node.js
            </li>
            <li className="skill-item">
              <img src={expressimage} alt="Express.js" className="skill-icon" />
              Express.js
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>App Development</h3>
          <ul>
            <li className="skill-item">
              <img src={reactnative} alt="React Native" className="skill-icon" />
              React Native
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li className="skill-item">
              <img src={bootstrap} alt="Bootstrap" className="skill-icon" />
              Bootstrap
            </li>
            <li className="skill-item">
              <img src={shadcn} alt="ShadowCN" className="skill-icon" />
              ShadCN
            </li>
            <li className="skill-item">
              <img src={reactjs} alt="React.js" className="skill-icon" />
              React.js
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Version Control & Collaboration</h3>
          <ul>
            <li className="skill-item">
              <img src={git} alt="Git" className="skill-icon" />
              Git
            </li>
            <li className="skill-item">
              <img src={github} alt="GitHub" className="skill-icon" />
              GitHub
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Cloud Computing</h3>
          <ul>
            <li className="skill-item">
              <img src={ec2} alt="AWS EC2" className="skill-icon" />
              AWS EC2
            </li>
            <li className="skill-item">
              <img src={iam} alt="IAM User Management" className="skill-icon" />
              IAM User Management
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Database Management</h3>
          <ul>
            <li className="skill-item">
              <img src={mongo} alt="MongoDB" className="skill-icon" />
              MongoDB
            </li>
            <li className="skill-item">
              <img src={sql} alt="SQL" className="skill-icon" />
              SQL
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>API Development and Testing</h3>
          <ul>
            <li className="skill-item">
              <img src={postman} alt="Postman" className="skill-icon" />
              Postman
            </li>
          </ul>
        </div>

        {/* <div className="skill-category">
          <h3>Development Tools</h3>
          <ul>
            <li className="skill-item">
              <img src={vscode} alt="VS Code" className="skill-icon" />
              VS Code
            </li>
          </ul>
        </div> */}

        <div className="skill-category">
          <h3>Deployment Tools</h3>
          <ul>
            <li className="skill-item">
              <img src={vercel} alt="Vercel" className="skill-icon" />
              Vercel
            </li>
            <li className="skill-item">
              <img src={githubpages} alt="GitHub Pages" className="skill-icon" />
              GitHub Pages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
