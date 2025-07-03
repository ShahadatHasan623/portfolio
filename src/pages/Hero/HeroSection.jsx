import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolioPhoto from "../../assets/Portfolio.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-6 lg:px-0 px-4 py-12">
      {/* Text Section */}
      <div className="space-y-5 text-center md:text-left w-full md:w-1/2">
        <p className="text-lg font-light text-white">Hello, I'm</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Md. Shahadat Hossain
        </h1>

        <h2 className="font-normal text-white">
          And I'm a{" "}
          <span className="text-primary text-2xl font-bold">
            <Typewriter
              words={[
                "Frontend Web Developer",
                "React Web Developer",
                "Web Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p
          className="text-white max-w-xl mx-auto md:mx-0"
          data-aos="fade-right"
        >
          I craft responsive and interactive websites using modern technologies
          like React, Tailwind CSS, and JavaScript. My passion is turning ideas
          into user-friendly digital experiences. Let’s build something amazing
          together!
        </p>

        <div className="flex items-center gap-3">
          <a
            data-aos="flip-up"
            href="#about"
            className="relative px-5 py-2 mt-2 font-medium text-white group inline-block"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
            <span className="relative">About Me</span>
          </a>
          <a
            data-aos="zoom-in-right"
            target="_blank"
            href="https://www.facebook.com/shahadat.shariar.2024"
            className="text-white"
          >
            <FaFacebook size={35} />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            href="https://www.linkedin.com/in/shahadat-hasan-988b7b372/"
            className="text-white"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            data-aos="zoom-in-left"
            target="_blank"
            href="https://github.com/ShahadatHasan623"
            className="text-white"
          >
            <FaGithub size={35} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center w-full md:w-1/2" data-aos="fade-left">
        <img
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-primary"
          src={portfolioPhoto}
          alt="Shahadat Portfolio"
        />
      </div>
    </div>
  );
};

export default HeroSection;
