import React, { useState } from "react";
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImg,
  ProjectParagraph,
  ProjectTitle,
  ProjectSummary,
  ProjectLinks,
} from "../project/project.style";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project() {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const onOpenChange = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle onClick={onOpenChange}>Project #1</ProjectTitle>
        <ProjectLinks>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="3x" icon={faGithubSquare} color="#333" />
        </a>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="3x" icon={faWindowMaximize} color="#333" />
        </a>
        </ProjectLinks>
      </ProjectHeader>
      <ProjectSummary isOpen={isAccordionOpen}>
        <ProjectImg
          src="https://via.placeholder.com/1600x900?text=Project+image"
          alt="Project description"
        />
        <ProjectParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio velit
          perferendis ut itaque, quasi laudantium voluptate laboriosam nobis nam
          repudiandae explicabo quaerat deleniti aliquid fugit in quo molestiae
          maiores totam.
        </ProjectParagraph>
      </ProjectSummary>
      <hr style={{color: "#333"}}></hr>
    </ProjectContainer>
  );
}

export default Project;
