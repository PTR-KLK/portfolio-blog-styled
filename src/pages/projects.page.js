import React from "react";
import { projects } from "../resources/projects.resource";
import { Header, Subheader, FullPageHeight } from "../App.style";
import Card from "../components/card/card.component";

function Projects() {
  return (
    <>
      <FullPageHeight fullPage={false} />
      <Header>{projects.header}</Header>
      <Subheader>{projects.subheader}</Subheader>
      {projects.arr.map((e, idx) => {
        return (
          <Card
            key={e.title}
            invertOrder={idx % 2 === 0 ? 0 : 1}
            title={e.title}
            demo={e.demo}
            repo={e.repo}
            image={e.image}
            imageAlt={e.imageAlt}
            description={e.description}
          />
        );
      })}
    </>
  );
}

export default Projects;
