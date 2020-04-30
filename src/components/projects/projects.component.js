import React from "react";
import { ProjectsContainer, Header, Subheader } from "../projects/projects.style";
import Project from "../project/project.component";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <Header>Projects</Header>
      <Subheader>Recent work</Subheader>
      <Project />
      <Project />
      <Project />
    </ProjectsContainer>
  );
}

export default Projects;
