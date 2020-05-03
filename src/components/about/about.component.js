import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutSubheader,
  AboutParagraph,
  AboutLinks,
} from "../about/about.style";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <AboutContainer>
      <AboutHeader>John Doe</AboutHeader>
      <AboutSubheader>Some description</AboutSubheader>
      <AboutParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptate tenetur odio dolorem dignissimos nisi quis quia maxime
        aspernatur fuga debitis, modi delectus. Natus nobis ducimus blanditiis
        quis, accusamus eveniet!
      </AboutParagraph>
      <AboutLinks>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="4x" icon={faLinkedin} color="#333" />
        </a>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="4x" icon={faGithubSquare} color="#333" />
        </a>
        <a
          href="https://github.com/PTR-KLK/portfolio-blog-styled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="4x" icon={faEnvelopeSquare} color="#333" />
        </a>
      </AboutLinks>
    </AboutContainer>
  );
}

export default About;
