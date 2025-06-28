import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science",
      institute: "Barisal Polytechnic Institute,Barisal",
      year: "2022 - 2023",
      status: "Running",
    },
    {
      degree: "SSC",
      institute: "HazirHat T.A Secondary School",
      year: "2020 - 2022",
      status: "Completed",
    },
  ];

  return (
    <section className=" text-white py-16 px-4 max-w-7xl mx-auto" id="education">
      <h2 data-aos="fade-right" className="text-4xl font-extrabold text-center text-primary mb-5 uppercase tracking-wider custome-font">
        Education
      </h2>
      <h1 data-aos="fade-left" className="text-center uppercase text-4xl font-bold mb-16">Educational Qualifications</h1>

      {/* Wrapper with vertical line */}
      <div className="relative max-w-5xl mx-auto">
        {/* Middle vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-emerald-500 z-0" />

        {/* Education items */}
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center relative z-10 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Content Card */}
            <div  data-aos="zoom-in" className="w-full md:w-1/2 px-6">
              <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border-l-4 border-pink-500 hover:scale-105 hover:border-emerald-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-emerald-400 mb-1 flex items-center gap-2">
                  <FaGraduationCap className="text-pink-500" />
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-300">{edu.institute}</p>
                <p className="text-xs text-gray-400 mt-1">{edu.year}</p>
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-pink-600 text-white text-xs tracking-wider">
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Circle on the line */}
            <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="w-5 h-5 bg-white rounded-full border-4 border-pink-500 shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
