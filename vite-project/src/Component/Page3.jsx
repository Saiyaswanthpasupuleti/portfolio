import React, { useEffect } from "react";
import { gsap } from "gsap"; // Importing GSAP
import "../styles/Page2.css"; // Reuse the existing styles
import { Button } from "@/components/ui/button";

export default function Page3() {
  useEffect(() => {
    // GSAP animation for initial fade-in of project names and descriptions
    gsap.fromTo(
      ".skill-category",
      {
        opacity: 0, // Start with hidden state
        y: 50, // Start with a vertical offset
      },
      {
        opacity: 1, // Fade to visible
        y: 0, // Bring to normal position
        stagger: 0.2, // Apply stagger to create a sequential animation
        duration: 0.2, // Reduced duration of the animation
        scrollTrigger: {
          trigger: ".skills-page", // Trigger the animation on scroll
          start: "top 80%", // When the page scrolls 80% down
          end: "bottom top", // Ends when the bottom of the element reaches the top
          scrub: true, // Makes the animation smooth during scroll
        },
      }
    );

    // GSAP hover effect for showing the live demo button
    const projectCards = document.querySelectorAll(".skill-category");

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".hover-content"), {
          opacity: 1, // Make hover content visible on hover
          duration: 0.3, // Reduced duration
        });
        gsap.to(card, {
          scale: 1.05, // Slight zoom effect
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)", // Enhanced shadow effect
          duration: 0.2, // Reduced duration
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".hover-content"), {
          opacity: 0, // Make hover content invisible when not hovered
          duration: 0.3, // Reduced duration
        });
        gsap.to(card, {
          scale: 1, // Return to normal size
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Original shadow
          duration: 0.2, // Reduced duration
        });
      });
    });
  }, []);

  // Array of projects
  const projects = [
    {
      name: "Crick Buzz Clone",
      description:
        "Created a Crickbuzz clone using React.js to provide live match details.",
      link: "https://crickbuzz-clone-delta.vercel.app/home",
    },
    {
      name: "Calculator App",
      description:
        "Built a fully functional calculator using JavaScript.",
      link: "https://saiyaswanthpasupuleti.github.io/10ktasks/calculator/cal.html",
    },
    {
      name: "Weather Forecasting App",
      description:
        "Created a weather forecasting app that fetches real-time weather data from an API.",
      link: "https://saiyaswanthpasupuleti.github.io/10ktasks/weatherApp/weather.html",
    },
    {
      name: "Car Rental Application",
      description:
        "Developed a car rental platform that allows users to browse and book vehicles.",
      link: "https://saiyaswanthpasupuleti.github.io/10ktasks/Car_Rental_App_Demo/index.html",
    },
    {
      name: "Crop Yield Seasonality Measurement",
      description:
        "Developed a web-based solution to help farmers monitor crop yield seasonality using real-time data.",
      link: "#", // Add the link here if applicable
    },
  ];

  return (
    <div className="skills-page">
      {/* Page Heading */}
      <div className="skills-header">
        <h1 className="skills-heading">My Projects</h1>
      </div>

      {/* Projects List */}
      <div className="skills-container">
        {projects.map((project, index) => (
          <div key={index} className="skill-category">
            <div className="card-content">
              <h3>{project.name}</h3>
              <ul>
                <li className="skill-item">{project.description}</li>
              </ul>
            </div>
            <div className="hover-content">
              <Button variant="ghost" onClick={() => window.open(project.link, "_blank")}>
                View Live Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
