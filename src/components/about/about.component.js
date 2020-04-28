import React from "react";
import { Author, Header, Subheader, Links } from "../about/about.style";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <Author>
      <Header>John Doe</Header>
      <Subheader>Some description</Subheader>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptate tenetur odio dolorem dignissimos nisi quis quia maxime
        aspernatur fuga debitis, modi delectus. Natus nobis ducimus blanditiis
        quis, accusamus eveniet!
      </p>
      <Links>
        <a href="" target="_blank"><FontAwesomeIcon size='4x' icon={faLinkedin} color="#333" /></a>
        <a href="" target="_blank"><FontAwesomeIcon size='4x' icon={faGithubSquare} color="#333" /></a>
        <a href="" target="_blank"><FontAwesomeIcon size='4x' icon={faEnvelopeSquare} color="#333" /></a>
      </Links>
    </Author>
  );
}

export default About;
