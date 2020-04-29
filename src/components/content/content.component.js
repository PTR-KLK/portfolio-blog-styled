import React from "react";
import { Main } from "./content.style";

function Content(props) {
  return (
    <Main>
        {props.children}
    </Main>
  );
}

export default Content;
