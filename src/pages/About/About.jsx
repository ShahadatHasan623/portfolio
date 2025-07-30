import React from "react";
import { Typewriter } from "react-simple-typewriter";
import photo1 from "../../assets/img1.jpg";
import photo2 from "../../assets/img2.jpg";
import photo3 from "../../assets/img3.jpg";
import portfolio from "../../assets/Portfolio.png";

const About = () => {
  const photos = [photo1, photo2, photo3];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4" id="about">
      <h1 className="text-primary text-center custome-font text-4xl uppercase font-extrabold mb-10 tracking-wide">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left - Photos */}
        <div className="flex justify-center items-center h-[500px] gap-4">
          {photos.map((img, i) => (
            <div
              key={i}
              className={`relative group img-border-anim w-36 h-64 rounded-xl ${
                i === 0 ? "self-start" : i === 1 ? "self-center" : "self-end"
              } hidden lg:block`}
            >
              <img
                data-aos={
                  i === 0 ? "flip-right" : i === 1 ? "flip-up" : "flip-left"
                }
                src={img}
                alt={`photo${i + 1}`}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          ))}

          {/* Mobile Responsive Image */}
          <img
            src={portfolio}
            alt="portfolio"
            className="lg:hidden w-65 h-100 border-tr-red-500 border-4 border-rounded-4xl  hover:shadow-[0_0_25px_#10b981] transition-all duration-500 hover:scale-105 max-w-sm rounded-tl-[40px] rounded-br-[40px] border-b-8 border-primary border-s-8 shadow-2xl"
          />
        </div>

        {/* Right - Text */}
        <div className="space-y-6 text-center md:text-left max-w-2xl">
          <h2 className="text-white text-xl font-medium">
            And I'm a{" "}
            <span className="text-primary text-2xl font-bold">
              <Typewriter
                words={[
                  "Frontend Web Developer",
                  "MERN Stack Developer",
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

          <h1 className="text-3xl md:text-4xl text-white font-bold leading-tight">
            I Can Design Anything You Want
          </h1>

          <p
            data-aos="fade-right"
            className="text-white leading-relaxed text-sm md:text-base"
          >
            I specialize in crafting responsive, user-friendly websites using React,
            Tailwind CSS, and modern web technologies. My goal is to build web
            experiences that are fast, accessible, and visually appealing. I love
            turning ideas into reality through code. Currently, I’m focused on
            building single-page apps and backend integration using Node.js and
            MongoDB.
          </p>

          <ul data-aos="fade-right" className="text-white text-sm grid gap-2">
            <li className="flex gap-2">
              <span className="font-semibold w-24">Name</span>: Md. Shahadat Hossain
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Age</span>: 20
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Number</span>: +8801301608623
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Address</span>: Bhola, Barisal,
              Bangladesh
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Email</span>: shahadathasan743599@gmail.com
            </li>
          </ul>

          {/* Buttons */}
          <div
            data-aos="fade-right"
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href="#_"
              className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white font-semibold transition bg-secondary rounded group"
            >
              <span className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative group-hover:text-primary z-10">Hire Me</span>
            </a>

            <a
              href="https://github.com/ShahadatHasan623"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white font-semibold transition border border-secondary rounded group"
            >
              <span className="absolute inset-0 w-full h-full bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
              <span className="relative z-10 group-hover:text-black">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
