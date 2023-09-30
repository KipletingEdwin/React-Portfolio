import React from "react";
import projects from "../data/projects.json";
import ProjectContainer from "./ProjectContainer";

function Projects() {
  return (
    <section className="projectContainer">
      <h2> Projects </h2>
      <div className="projects" id="projects">
        {projects.map((project, id) => {
          return <ProjectContainer key={id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
