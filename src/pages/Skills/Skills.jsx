import React from "react";
import "../../index.css";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiVercel } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React JS" },
  { icon: <SiExpress />, name: "Express JS" },
  { icon: <FaNodeJs />, name: "Node JS" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <IoLogoFirebase />, name: "Firebase" },
];

const Skills = () => {
  return (
    <div className="my-16 px-4" id="skills">
      <div className="text-center">
        <h1
          data-aos="zoom-in-right"
          className="text-primary custome-font text-4xl font-extrabold uppercase"
        >
          Skills
        </h1>
        <p
          data-aos="zoom-in-left"
          className="text-white mt-2 font-medium"
        >
          Skills are the expertise or talent needed in order to do a job or task.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mt-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="w-full h-28 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
              transition-transform duration-500 relative overflow-hidden group cursor-pointer 
              shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
          >
            {/* Icon */}
            <div className="text-4xl absolute z-10 group-hover:-translate-y-14 transition-transform duration-500">
              {skill.icon}
            </div>

            {/* Name */}
            <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
              <p className="text-base font-semibold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
