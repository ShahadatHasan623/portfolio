import React from "react";

const MyProject = ({ project }) => {
  const { name, image, _id, description } = project;
  return (
    <div className="flex flex-col max-w-5xl space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div>
        <img
          src={image}
          alt=""
          className=" w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <div data-aos="fade-right" className="px-6">
          <h2 className="mb-1 text-xl font-semibold">{name}</h2>
          <p className="text-sm dark:text-gray-600">{description}</p>
        </div>

        {/* 🔧 Updated Button Section */}
        <div data-aos="fade-right" className="flex justify-between items-center px-6 py-4">
          <button
            type="button"
            className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition"
          >
            Link
          </button>
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
