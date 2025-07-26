import React from "react";
import "../../index.css";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiVercel } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#e44d26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#264de4" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <IoLogoJavascript />, name: "JavaScript", color: "#f0db4f" },
  { icon: <FaReact />, name: "React JS", color: "#61dbfb" },
  { icon: <SiExpress />, name: "Express JS", color: "#ffffff" },
  { icon: <FaNodeJs />, name: "Node JS", color: "#3c873a" },
  { icon: <BiLogoMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
  { icon: <IoLogoFirebase />, name: "Firebase", color: "#FFA611" },
];

const Skills = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="text-center mb-12">
        <h1
          data-aos="zoom-in-right"
          className="text-primary custome-font text-4xl font-extrabold uppercase"
        >
          Skills
        </h1>
        <p
          data-aos="zoom-in-left"
          className="text-gray-300 mt-3 font-medium max-w-2xl mx-auto text-sm sm:text-base"
        >
          Skills are the expertise or talent needed in order to do a job or task.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative bg-[#101b2e] rounded-xl h-28 flex items-center justify-center shadow-md overflow-hidden group transition duration-500 cursor-pointer hover:scale-105 hover:shadow-xl"
          >
            {/* Halo Glow */}
            <div
              className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-opacity-30 blur-xl opacity-0 group-hover:opacity-60 transition duration-500"
              style={{ backgroundColor: skill.color }}
            ></div>

            {/* Icon */}
            <div
              className="text-3xl sm:text-4xl z-10 transition-transform duration-500 group-hover:scale-125"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            {/* Skill Name */}
            <div className="absolute bottom-2 text-xs sm:text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-500">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
