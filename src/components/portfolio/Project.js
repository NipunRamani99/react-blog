import React from "react";
import ProjectEntry from "./ProjectEntry";
import projectList from "../../projects.json"
import "../../styles/Project.css"
function Project() {

  return (
    <div class="container mt-4" style={{maxWidth:"1000px"}}>
  
    <div className="me-auto ms-auto">
    <h3>Projects</h3>
    <div className="d-flex flex-wrap m-1">
    { projectList && projectList.map((project)=>{
       return(<ProjectEntry project={project} />);
      })
    }
    </div>
    </div>
    </div>
  );
}

export default Project;
