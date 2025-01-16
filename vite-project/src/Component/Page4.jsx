import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import "../styles/Page4.css"; // Reuse the provided styles

export default function Page4() {
  useEffect(() => {
    // GSAP animation for fade-in of educational cards
    gsap.fromTo(
      ".skill-category",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".skills-page",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  // Educational Details Array
  const educationDetails = [
    {
      title: "Bharath University, Chennai",
      duration: "Oct 2020 - Apr 2024",
      stream: "B-Tech",
      cgpa: "CGPA: 8.9/10",
    },
    {
      title: "Narayana College, Tenali",
      duration: "2018 - 2020",
      stream: "MPC",
      cgpa: "CGPA: 8.07/10",
    },
    {
      title: "Narayana School, Tenali",
      duration: "2017 - 2018",
      stream: "SSC",
      cgpa: "CGPA: 9.0/10",
    },
  ];

  return (
    <div className="skills-page">
      {/* Page Heading */}
      <div className="skills-header">
        <h1 className="skills-heading">My Education</h1>
      </div>

      {/* Education Details Cards */}
      <div className="skills-container" >
        {educationDetails.map((edu, index) => (
          <div key={index} className="skill-category">
            <div className="card-content">
              <h3>{edu.title}</h3>
              <ul>
                <li className="skill-item">{edu.stream || edu.institution}</li>
                <li className="skill-item">{edu.duration}</li>
                <li className="skill-item">{edu.cgpa}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
