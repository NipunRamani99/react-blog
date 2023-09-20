import React from "react";
import ProjectEntry from "./ProjectEntry";
function Project() {
  const project = {
    preview: "/img/mach/bridge_train.gif",
    title: "Mach",
    text: "Mach is a physics engine made in C++. It comes with a sandbox in which user can play with physics objects.",
    skills: ["C++", "Visual Studio", "CMake", "gTest"]
  };
  return (
    <div class="container mt-4" style={{maxWidth:"800px"}}>
  
    <div className="me-auto ms-auto">
    <h3>Projects</h3>
        <ProjectEntry project={project} />
      </div>
    </div>
  );
}

export default Project;
