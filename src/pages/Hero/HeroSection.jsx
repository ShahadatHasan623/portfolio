import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolioPhoto from "../../assets/Portfolio.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto  flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4 sm:px-6 py-12 sm:py-20">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-base sm:text-lg font-light text-gray-300">Hello, I'm</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Md. Shahadat Hossain
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-200">
          And I'm a{" "}
          <span className="text-primary font-bold">
            <Typewriter
              words={[
                "Frontend Web Developer",
                "MERN Stack Web Developer",
                "React Web Developer",
                "Web Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
          I craft responsive and interactive websites using modern technologies
          like React, Tailwind CSS, and JavaScript. My passion is turning ideas
          into user-friendly digital experiences. Let’s build something amazing together!
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mt-6">
          {/* About Me Button */}
          <a
            href="#about"
            className="relative inline-block px-8 py-3 text-sm sm:text-base font-semibold text-white overflow-hidden rounded-lg group bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 transition duration-300"
          >
            <span className="relative z-10">About Me</span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-lg blur-md group-hover:opacity-20 transition duration-300"></span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/shahadat.shariar.2024"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahadat-942577305/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ShahadatHasan623"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-left"
      >
        <div className="relative rounded-full p-[5px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition-transform duration-500 shadow-2xl">
          <img
            src={portfolioPhoto}
            alt="Shahadat Portfolio"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-gray-900"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-pink-400 opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
