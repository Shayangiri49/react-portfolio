import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "React-Weather-App",
      github: "https://github.com/Shayangiri49/React-weather-app",
      demo: "https://react-weather-app-rosy-omega.vercel.app/",
    },
    {
      id: 2,
      image: p2,
      title: "Weather-App",
      github: "https://github.com/Shayangiri49/shayan-weather-app",
      demo: "https://shayan-weather-application.netlify.app",
    },
    {
      id: 3,
      image: p3,
      title: "Custom-Indicator",
      github: "https://github.com/Shayangiri49/Custom-Indicator",
      demo: " https://shayangiri49.github.io/Custom-Indicator/",
    },
    {
      id: 4,
      image: p4,
      title: "MeditationApp",
      github: "https://github.com/Shayangiri49/MeditationApp",
      demo: "https://shayangiri49.github.io/MeditationApp/",
    },
    {
      id: 5,
      image: p5,
      title: "Animated-Email-collection-Form",
      github: "https://github.com/Shayangiri49/Animated-Email-collection-Form",
      demo: "https://shayangiri49.github.io/Animated-Email-collection-Form/",
    },
    {
      id: 6,
      image: p6,
      title: "Movie_Website",
      github: "https://github.com/Shayangiri49/Movie_website",
      demo: "https://shayangiri49.github.io/Movie_website/",
    },
  ];
  return (
    <Section
      title="Portfolio"
      subtitle="These are all the projects that i have worked on. Some of them i have worked before i gained some experience. So go gentle on them."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
