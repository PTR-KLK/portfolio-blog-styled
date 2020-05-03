import React from "react";
import { ProjectsContainer, ProjectsHeader, ProjectsSubheader } from "../projects/projects.style";
import Project from "../project/project.component";

function Projects() {

  return (
    <ProjectsContainer>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectsSubheader>Recent work</ProjectsSubheader>
      <hr style={{color: "#333"}}></hr>
      <Project />
      <Project />
      <Project />
    </ProjectsContainer>
  );
}

export default Projects;
