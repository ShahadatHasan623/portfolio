import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolioPhoto from "../../assets/Portfolio.png";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-10 my-16">
      {/* Text Section */}
      <div className="space-y-5 text-center md:text-left">
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

        <p className="text-white max-w-xl">
          I craft responsive and interactive websites using modern technologies
          like React, Tailwind CSS, and JavaScript. My passion is turning ideas
          into user-friendly digital experiences. Let’s build something amazing
          together!
        </p>

        <a
          href="#_"
          className="relative px-5 py-2 mt-2 font-medium text-white group inline-block"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
          <span className="relative">About Me</span>
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center">
        <img
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full object-cover shadow-2xl border-4 border-primary"
          src={portfolioPhoto}
          alt="Shahadat Portfolio"
        />
      </div>
    </div>
  );
};

export default HeroSection;
