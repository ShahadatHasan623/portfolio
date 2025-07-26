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
    <div className="my-16 max-w-7xl mx-auto px-6 py-8">
      {/* Project Title */}
      <h1 className="text-5xl font-extrabold text-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-center mb-14 select-none">
        {name}
      </h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
        {[image, image2, image3].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`project-screenshot-${index + 1}`}
            className="w-full h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transform transition-transform duration-500 cursor-pointer"
            loading="lazy"
          />
        ))}
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-14">
        {/* Left Side - Project Details */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-2/3 space-y-10"
        >
          {/* Description */}
          <section>
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3 border-b-2 border-cyan-400 inline-block pb-1">
              Description
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3 border-b-2 border-cyan-400 inline-block pb-1">
              Tech Stack
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-lg">
              {techStack?.map((tech, idx) => (
                <li key={idx} className="hover:text-cyan-400 transition-colors duration-300">
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3 border-b-2 border-cyan-400 inline-block pb-1">
              Challenges
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{challenges}</p>
          </section>

          {/* Future Plans */}
          <section>
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3 border-b-2 border-cyan-400 inline-block pb-1">
              Future Plans
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{futurePlans}</p>
          </section>
        </div>

        {/* Right Side - Links */}
        <aside
          data-aos="fade-left"
          className="md:w-1/3 space-y-10 flex flex-col justify-start"
        >
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-4 rounded-xl border-2 border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-colors duration-300 shadow-md"
          >
            🔗 Visit Live Site
          </a>

          <a
            href={client}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-4 rounded-xl border-2 border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-colors duration-300 shadow-md"
          >
            🔗 Visit Client Repo
          </a>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetails;
