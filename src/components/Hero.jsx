simport React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";
import avatar from "../assets/avatar.jpg";

const Hero = () => {
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
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">
        Shayan Giri
      </h2>
      <h3 className="py-3 text-2xl">Web Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl anim">👋</span> welcome to
        my site. I am a software engineer. I love to work on Web dev projects.
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600 "
          >
            {icon}
          </a>
        ))}
      </div>
      {/* avatar and resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-82 md:h-82  object-cover bg-gradient-to-b from-rose-600 rounded-xl animate-pulse"
        />
        <a
          href="/Shayan-resume.pdfs"
          download={true}
          className="flex items-center justify-center mt-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
