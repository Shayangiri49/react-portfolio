import React from "react";
import Section from "./common/Section";
import contact from "../assets/mobile.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://github.com/Shayangiri49",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/shayan-giri-556757114/",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "https://twitter.com/Shayangiri?t=B9TgmkpOMgZj9WKYVDw9VQ&s=09",
      icon: <FaTwitter />,
    },
    {
      id: 4,
      link: "https://www.facebook.com/profile.php?id=100064683410394&mibextid=ZbWKwL",
      icon: <FaFacebook />,
    },
    {
      id: 5,
      link: "https://www.instagram.com/___0shaan0___/",
      icon: <FaInstagram />,
    },
  ];
  return (
    <Section
      title="Contact"
      subtitle="These are the ways you can get in touch with me. Hope to hear from you soon"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img
            src={contact}
            alt="conatct info"
            className="w-32 h-32 pl-8 animate-bounce"
          />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            I am open to talk regarding freelancing or full-time opportunities.
            Fell free to contact me using your preferred medium.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-rose-600 animate-bounce"
            >
              {icon}
            </a>
          ))}
        </div>
        {/* bottom form */}
        <div className="p-8 text-left w-full">
          <form
            action="https://getform.io/f/358d2b9c-5d2f-478e-8b07-4847f827a759"
            method="POST"
          >
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
