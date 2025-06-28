import React from "react";
import { Typewriter } from "react-simple-typewriter";
import photo1 from "../../assets/img1.jpg";
import photo2 from "../../assets/img2.jpg";
import photo3 from "../../assets/img3.jpg";
import portfolio from "../../assets/Portfolio.png";

const About = () => {
  return (
    <div className="my-12   max-w-7xl mx-auto" id="about">
      <h1 className="text-primary text-center custome-font text-3xl uppercase font-extrabold mb-8">
        About Me
      </h1>

      {/* Left & Right section with gap-16 */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-5">
        {/* Left Side - Photos */}
        <div className="flex justify-center items-center h-[500px] gap-4">
          <img
            data-aos="flip-right"
            src={photo1}
            alt="photo1"
            className="w-45 h-[300px] object-cover rounded-xl shadow-xl self-start lg:block hidden"
          />
          <img
            data-aos="flip-up"
            src={photo2}
            alt="photo2"
            className="w-45 h-[300px] object-cover rounded-xl shadow-xl self-center lg:block hidden"
          />
          <img
            data-aos="flip-left"
            src={photo3}
            alt="photo3"
            className="w-45 h-[300px] object-cover rounded-xl shadow-xl self-end lg:block hidden"
          />
          <img
            src={portfolio}
            alt="portfolio"
            className="lg:hidden block rounded-full border-3 border-primary"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-4 text-center md:text-left max-w-2xl">
          <h2 className="font-normal text-white">
            And I'm a{" "}
            <span className="text-primary text-2xl font-bold">
              <Typewriter
                words={[
                  "Frontend Web Developer",
                  "Mern Stack Developer",
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
          <h1 className="text-4xl text-white font-bold">
            I Can Design Anything You Want
          </h1>
          <p data-aos="fade-right" className="text-white">
            I specialize in crafting responsive, user-friendly websites using
            React, Tailwind CSS, and modern web technologies. My goal is to
            build web experiences that are fast, accessible, and visually
            appealing. I love turning ideas into reality through code.
            Currently, I’m focused on building fully functional single-page
            applications and learning backend integration using Node.js and
            MongoDB. Outside of coding, I enjoy learning new design trends and
            continuously improving my skills to deliver high-quality web
            solutions.
          </p>
          <ul data-aos="fade-right" className="text-white list-none grid gap-2">
            <li className="flex gap-2">
              <span className="font-semibold w-24">Name</span> : Md. Shahadat
              Hossain
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Age</span> : 20
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Number</span> :
              +8801301608623
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Address</span> :
              Bhola,Barisal,Bangladesh
            </li>
            <li className="flex gap-2">
              <span className="font-semibold w-24">Email</span> :
              shahadathasan743599@gmail.com
            </li>
          </ul>
          <div data-aos="fade-right">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Hire Me
              </span>
            </a>
            <a
              href="https://github.com/ShahadatHasan623"
              target="_blank"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 mx-5 ease-in-out rounded hover:pl-10 hover:pr-6  group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Github
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
