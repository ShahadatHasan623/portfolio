import React from "react";
import { useLoaderData } from "react-router";

const ProjectDetails = () => {
  const data = useLoaderData();
  const {
    name,
    image,
    image2,
    image3,
    description,
    techStack,
    challenges,
    futurePlans,
    live,
    client,
  } = data;

  return (
    <div className="my-16 max-w-7xl mx-auto px-4 py-6">
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        {name}
      </h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[image, image2, image3].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`project-screenshot-${index + 1}`}
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side - Project Details */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-2/3 space-y-6"
        >
          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">
              Description
            </h2>
            <p className="text-white leading-relaxed">{description}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">
              Tech Stack
            </h2>
            <ul className="list-disc list-inside text-white space-y-1">
              {techStack?.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">
              Challenges
            </h2>
            <p className="text-white">{challenges}</p>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className="text-2xl font-semibold text-accent mb-2">
              Future Plans
            </h2>
            <p className="text-white">{futurePlans}</p>
          </div>
        </div>

        {/* Right Side - Links */}
        <div data-aos="fade-left" className="md:w-1/3 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-accent mb-4">
              Live Preview
            </h2>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-white py-4 rounded-full border-2 border-white hover:bg-accent hover:text-black transition-all duration-300 font-semibold"
            >
              🔗 Visit Live Site
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent mb-4">
              Repo Preview
            </h2>
            <a
              href={client}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-white py-4 rounded-full border-2 border-white hover:bg-accent hover:text-black transition-all duration-300 font-semibold"
            >
              🔗 Visit Client Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
