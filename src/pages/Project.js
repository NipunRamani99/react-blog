import React from "react";

function Project() {
  return (
    <div className="parent container mx-auto" style={{ width: "800px" }}>
      <div class="container">
        <div class="project-entry">
          <div class="project-header">
            {" "}
            <img
              src="/img/mach/bridge_train.gif"
              class="project-img"
              width="100%"
              height="100%"
            />
          </div>
          <div class="project-body d-flex flex-column">
            <div class="project-title">Mach</div>
            <div class="project-text">
              Mach is a physics engine made in C++. It comes with a sandbox in
              which user can play with physics objects.
            </div>
            <div class="project-tag">
              <div class="skill-tag"> C++ </div>
              <div class="skill-tag"> Visual Studio </div>
              <div class="skill-tag"> CMake </div>
              <div class="skill-tag"> gTest </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
