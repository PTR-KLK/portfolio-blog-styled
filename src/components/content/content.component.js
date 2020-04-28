import React from "react";
import { Main, Hardline } from "./content.style";
import Article from '../article/article.component';
import About from '../about/about.component';

function Content() {
  return (
    <Main>
        <About />
        <Hardline />
        <Article />
        <Hardline />
        <Article />
        <Hardline />
        <Article />
    </Main>
  );
}

export default Content;
