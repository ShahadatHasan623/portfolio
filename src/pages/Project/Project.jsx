import React, { use } from "react";
import MyProject from "./MyProject";

const project = fetch("http://localhost:3000/project").then((res) =>
  res.json()
);
const Project = () => {
  const projectData = use(project);
  return (
    <div>
      <h1 data-aos="zoom-in-right" className="text-primary uppercase text-4xl text-center custome-font font-bold mb-5">
        Project
      </h1>
      <p data-aos="zoom-in-left" className="text-white text-center">
        Below are some of the projects I’ve built using modern web technologies. <br />
        These showcase my skills in frontend and backend development, <br /> responsive
        design, and user experience.
      </p>
      <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 max-w-7xl mx-auto my-16 lg:0 px-4">
        {projectData.map((projectD) => (
          <MyProject key={projectD._id} project={projectD}></MyProject>
        ))}
      </div>
    </div>
  );
};

export default Project;
