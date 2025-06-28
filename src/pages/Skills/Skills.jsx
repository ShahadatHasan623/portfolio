import React from "react";
import "../../index.css";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiVercel } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
const Skills = () => {
  return (
    <div className="my-12" id="skills" >
      <div>
        <h1
          data-aos="zoom-in-right"
          className="text-primary custome-font text-4xl font-extrabold uppercase text-center"
        >
          Skills
        </h1>
        <h1
          data-aos="zoom-in-left"
          className="text-white text-center mt-2 text-blod"
        >
          Skills are the expertise or talent needed in order to do a job or
          task.
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-2xl mx-auto mt-12 px-4">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <FaHtml5 />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">HTML5</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <FaCss3Alt />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">CSS3</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <RiTailwindCssFill />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Tailwind Css</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <IoLogoJavascript />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Javascript</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <FaReact />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">React js</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <SiExpress />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Express js</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <FaNodeJs />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Node js</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <BiLogoMongodb />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Mongodb</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <SiVercel />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Vercel</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="w-32 h-32 bg-[#071529] text-accent rounded-xl flex items-center justify-center 
                transition-transform duration-500 relative overflow-hidden group cursor-pointer 
                shadow-[0px_10px_25px_rgba(0,0,0,0.6)]"
        >
          {/* Icon */}
          <div className="text-5xl absolute z-10 group-hover:-translate-y-16 transition-transform duration-500">
            <IoLogoFirebase />
          </div>

          {/* On hover - show HTML5 */}
          <div className="absolute text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 z-20">
            <p className="text-lg font-bold">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
