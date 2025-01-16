import React, { useEffect, useState } from "react";
import { gsap } from "gsap"; // Importing GSAP
import "../styles/Page3.css"; // Updated styles for Page3
import { Button } from "@/components/ui/button";
import one from "../assets/one.png"; // Correctly importing the image
import two from "../assets/Screenshot 2025-01-16 at 10.27.47 AM.png"; // Correctly importing the image
import three from "../assets/Screenshot 2025-01-16 at 10.28.12 AM.png";
import four from "../assets/Screenshot 2025-01-16 at 10.36.04 AM.png"; // Correctly importing the image
import five from "../assets/Screenshot 2025-01-16 at 10.37.24 AM.png";
import six from "../assets/Screenshot 2025-01-16 at 10.38.44 AM.png";
import seven from "../assets/Screenshot 2025-01-16 at 10.38.51 AM.png";
import eight from "../assets/Screenshot 2025-01-16 at 10.39.04 AM.png";

export default function Page3() {
  const [currentIndexes, setCurrentIndexes] = useState([]); // Array to track current image index for each card
  const [hasAnimated, setHasAnimated] = useState(false); // State to track animation
  const [isPageReady, setIsPageReady] = useState(false); // State to track page readiness

  const handlePrev = (index) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        newIndexes[index] === 0 ? projects[index].images.length - 1 : newIndexes[index] - 1;
      return newIndexes;
    });
  };

  const handleNext = (index) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        newIndexes[index] === projects[index].images.length - 1 ? 0 : newIndexes[index] + 1;
      return newIndexes;
    });
  };

  useEffect(() => {
    if (!hasAnimated) {
      // Initialize currentIndexes state with zeros for all projects
      setCurrentIndexes(projects.map(() => 0));

      // GSAP animation for initial fade-in of project names and descriptions
      gsap.fromTo(
        ".skill-category",
        {
          opacity: 1, // Start with opacity 0
          y: 50,
        },
        {
          opacity: 1, // Animate to opacity 1
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

      // GSAP hover effects
      const projectCards = document.querySelectorAll(".skill-category");

      projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card.querySelector(".hover-content"), {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(card, {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            duration: 0.2,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector(".hover-content"), {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            duration: 0.2,
          });
        });
      });

      setHasAnimated(true); // Set animation flag to true after it runs once
      setIsPageReady(true); // Page is ready for viewing
    }
  }, [hasAnimated]);

  const projects = [
    {
      name: "Crick Buzz Clone",
      description:
        "Created a Crickbuzz clone using React.js to provide live match details.",
      link: "https://crickbuzz-clone-delta.vercel.app/home",
      images: [one, two, three],
    },
    {
      name: "Calculator App",
      description: "Built a fully functional calculator using JavaScript.",
      link: "https://saiyaswanthpasupuleti.github.io/10ktasks/calculator/cal.html",
      images: [four],
    },
    {
      name: "Weather Forecasting App",
      description:
        "Created a weather forecasting app that fetches real-time weather data from an API.",
      link: "https://saiyaswanthpasupuleti.github.io/10ktasks/weatherApp/weather.html",
      images: [five],
    },
    {
      name: "Car Rental Application",
      description:
        "Developed a car rental platform that allows users to browse and book vehicles.",
      link: "https://saiyaswanthpasupuleti.github.io/10ktasks/Car_Rental_App_Demo/index.html",
      images: [six, seven, eight],
    },
    {
      name: "Crop Yield Seasonality Measurement",
      description:
        "Developed a web-based solution to help farmers monitor crop yield seasonality using real-time data.",
      link: "#",
      images: [
        "https://via.placeholder.com/280x150/2C3E50/FFFFFF?text=Crop+Yield+1",
        "https://via.placeholder.com/280x150/BDC3C7/FFFFFF?text=Crop+Yield+2",
      ],
    },
  ];

  return (
    <div className={`skills-page ${isPageReady ? "fade-in" : "hidden"}`}>
      <div className="skills-header">
        <h1 className="skills-heading">My Projects</h1>
      </div>
      <div className="skills-container">
        {projects.map((project, index) => (
          <div key={index} className="skill-category">
            <div className="card-content">
              <h3>{project.name}</h3>
              <ul>
                <li className="skill-item">{project.description}</li>
              </ul>
            </div>
            <div className="image-slider">
              <button className="prev" onClick={() => handlePrev(index)}>
                &lt;
              </button>
              <img
                src={project.images[currentIndexes[index]]}
                alt={`Slide ${currentIndexes[index]}`}
                className="slider-image"
              />
              <button className="next" onClick={() => handleNext(index)}>
                &gt;
              </button>
            </div>
            <div className="hover-content">
              <Button
                variant="ghost"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Live Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
