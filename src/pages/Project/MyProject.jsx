import React from "react";
import { Link } from "react-router";

const MyProject = ({ project }) => {
  const { name, image, _id, description } = project;

  return (
    <div className="max-w-4xl mx-auto group relative bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 p-[2px] rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
      <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
        {/* 🖼 Project Image */}
        <div className="overflow-hidden rounded-t-3xl">
          <img
            src={image}
            alt={name}
            className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* 📄 Project Content */}
        <div className="p-6 md:p-8 space-y-4">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight"
            data-aos="fade-up"
          >
            {name}
          </h2>

          <p
            className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
            data-aos="fade-up"
          >
            {description?.slice(0, 160)}
            {description?.length > 160 && "..."}
          </p>

          <div className="flex justify-end" data-aos="fade-up">
            <Link
              to={`/project-details/${_id}`}
              className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 transition-all duration-300"
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
    </div>
  );
};

export default MyProject;
