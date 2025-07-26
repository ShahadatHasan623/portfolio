import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolioPhoto from "../../assets/Portfolio.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-16">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-lg font-light text-gray-300">Hello, I'm</p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Md. Shahadat Hossain
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">
          And I'm a{" "}
          <span className="text-primary font-bold">
            <Typewriter
              words={[
                "Frontend Web Developer",
                "MERN Stack Web Developer",
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

        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed px-2 sm:px-0">
          I craft responsive and interactive websites using modern technologies
          like React, Tailwind CSS, and JavaScript. My passion is turning ideas
          into user-friendly digital experiences. Let’s build something amazing
          together!
        </p>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 mt-6 px-2 sm:px-0">
          <a
            href="#about"
            className="relative inline-block px-8 py-3 font-semibold text-white overflow-hidden rounded-lg group bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 transition duration-300"
          >
            <span className="relative z-10">About Me</span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-lg blur-md group-hover:opacity-20 transition duration-300"></span>
          </a>

          {/* Social Icons */}
          <a
            href="https://www.facebook.com/shahadat.shariar.2024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-blue-600 transition duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shahadat-hasan-988b7b372/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/ShahadatHasan623"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-100 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0" data-aos="fade-left">
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition-transform duration-500 shadow-xl">
          <img
            src={portfolioPhoto}
            alt="Shahadat Portfolio"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-900"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-pink-400 opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
