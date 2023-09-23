import React from "react";
import { Link } from "react-router-dom";

const ProjectEntry = ({ project }) => {
  return (
    <Link to={project.link} className="project-card">
      <div className="project-card-bg-image">
      <img width="100%" height="100%" src={project.preview} style={{borderRadius:"10px"}} />
      </div>
      <div className="project-card-description">
      
      <div class="project-card-title">{project.title}</div>
      
      <div class="project-card-text">{project.text}</div>
      </div>
    </Link>
  );
};

// const ProjectEntry = ({project}) => {
//   return (
//     <div class="project-entry d-md-flex flex-md-row mb-3">
//     <div class="project-header">
//       <img
//         src={project.preview}
//         class="project-img"
//         style={{minHeight:"180px", minWidth:"200px"}}
//       />
//     </div>
//     <div class="project-body d-flex flex-column ms-md-2">
//       <Link to={project.link}>
//       <div class="project-title">{project.title}</div>
//       </Link>
//       <div class="project-text">
//       {project.text}
//       </div>
//       <div class="project-tag">
//         {
//             project.skills.forEach((skill)=>{
//                 return (
//                     <div class="skill-tag"> {skill} </div>
//                 )
//             })
//         }
//       </div>
//     </div>

//   </div>
//   )
// }

export default ProjectEntry;
