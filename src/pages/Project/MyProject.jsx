import React from "react";
import { Link } from "react-router";

const MyProject = ({ project }) => {
  const { name, image, _id, description } = project;

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 shadow-lg transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl animated-border">
        <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden relative">
          {/* 🖼 Project Image */}
          <div className="overflow-hidden rounded-t-3xl relative">
            <img
              src={image}
              alt={name}
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
            />
          </div>

          {/* 📄 Project Content */}
          <div className="p-6 md:p-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight group-hover:text-green-600 transition-colors duration-300">
              {name}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {description?.slice(0, 160)}
              {description?.length > 160 && "..."}
            </p>

            <div className="flex justify-end">
              <Link
                to={`/project-details/${_id}`}
                className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
              >
                View Details
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 🔥 Animated glowing border ring */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-[-1] animate-glow-ring" />
      </div>
    </div>
  );
};

export default MyProject;
