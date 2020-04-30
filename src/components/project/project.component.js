import React from "react";
import { ProjectHeader, ProjectFigure, ProjectImg, ProjectCaption } from "../project/project.style";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project() {
  return (
    <> 
      <ProjectHeader>Project #1</ProjectHeader>
      <ProjectFigure>
        <ProjectCaption>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio velit perferendis ut itaque, quasi laudantium voluptate laboriosam nobis nam repudiandae explicabo quaerat deleniti aliquid fugit in quo molestiae maiores totam.</p>
          <a href="https://github.com/PTR-KLK/portfolio-blog-styled" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='3x' icon={faGithubSquare} color="#333" /></a>
          <a href="https://github.com/PTR-KLK/portfolio-blog-styled" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='3x' icon={faWindowMaximize} color="#333" /></a>
        </ProjectCaption>
        <ProjectImg src="https://via.placeholder.com/1600x900?text=Project+image" alt="Project description"/>
      </ProjectFigure>
    </>
  );
}

export default Project;
