import React, { use } from "react";
import MyProject from "./MyProject";

const project =fetch('http://localhost:3000/project').then(res=>res.json())
const Project = () => {
    const projectData =use(project)
  return (
    <div>
      <h1 className="text-primary uppercase text-4xl text-center custome-font font-bold my-16">
        Project
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {
            projectData.map(projectD=><MyProject key={projectD._id} project={projectD}></MyProject>)
        }
      </div>
    </div>
  );
};

export default Project;
