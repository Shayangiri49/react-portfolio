import React from "react";
import Section from "./common/Section";
import avatar1 from "../assets/avatar1.png";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar1,
      name: "Jhon Doe",
      comment:
        "Something ebony from pallas raven such nights,marvelled i fowl rare this i said tinkled soul door sir nodded",
    },
    {
      id: 2,
      image: avatar1,
      name: "Rahul",
      comment:
        "Shrieked is and seraphim and of my lining from and tis, only bends it was shore for then, there said.",
    },
    {
      id: 3,
      image: avatar1,
      name: "Robert",
      comment:
        "Rapping suddenly that he i was with my he of.if more the heard sculpture fiery no, what will gloating.",
    },
  ];

  return (
    <Section
      title="Testimonials"
      subtitle="This is what my other clients have to say about me. I accept clients from all around the world."
    >
      <div className="max-w-xl flex flex-col gap-8">
        {TESTIMONIALS.map(({ id, image, name, comment }) => (
          <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/3">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
