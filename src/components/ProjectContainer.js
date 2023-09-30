import React from "react";

function ProjectContainer({ project }) {
  return (
    <div className="myProjectContainer ">
      <img src={project.imageSrc} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul >
        {project.skills.map((skill, id) => {
          return <li key={id}> {skill}</li>;
        })}
      </ul>
      <div className="myLinks">
        <a href={project.demo}>Demo</a>
        <a href={project.source}>Source</a>
      </div>
    </div>
  );
}

export default ProjectContainer;
