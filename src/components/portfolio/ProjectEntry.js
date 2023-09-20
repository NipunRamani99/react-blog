import React from 'react'

const ProjectEntry = ({project}) => {
  return (
    <div class="project-entry d-md-flex flex-md-row">
    <div class="project-header">
      <img
        src={project.preview}
        class="project-img"
        width="100%"
        height="100%"
      />
    </div>
    <div class="project-body d-flex flex-column ms-md-2">
      <div class="project-title">{project.title}</div>
      <div class="project-text">
      {project.text}
      </div>
      <div class="project-tag">
        {
            project.skills.forEach((skill)=>{
                return (
                    <div class="skill-tag"> {skill} </div>
                )
            })
        }
      </div>
    </div>
  </div>
  )
}

export default ProjectEntry;