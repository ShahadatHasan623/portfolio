import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between my-16">
      <div className="space-y-3">
        <p className="text-lg  font-light text-white">Hello, I'm</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white ">
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
        <p className=" text-white">
          I craft responsive and interactive websites using modern technologies
          like React, Tailwind CSS, and JavaScript. My passion is turning ideas
          into user-friendly digital experiences. Let’s build something amazing
          together!
        </p>
        <a href="#_" class="relative px-5 py-2 mt-5 font-medium text-white group">
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>

          <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
          <span class="relative">About Me</span>
        </a>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
