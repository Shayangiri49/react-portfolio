import React from "react";
import Section from "./common/Section";

import html from "../assets/html.jpg";
import reactjs from "../assets/reactjs.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwindcss.png";
import bootstrap from "../assets/bootstrap.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: html,
      title: "HTML",
    },
    {
      id: 2,
      image: css,
      title: "CSS",
    },
    {
      id: 3,
      image: javascript,
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      image: reactjs,
      title: "REACTJS",
    },
    {
      id: 4,
      image: tailwindcss,
      title: "TAILWIND CSS",
    },
    {
      id: 4,
      image: bootstrap,
      title: "BOOTSTRAP",
    },
  ];

  return (
    <Section
      title="Skills"
      subtitle="Here are all the skills that I have. I hope I have the skills that you are looking for."
    >
      <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 max-[500px]:grid-cols-2">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
