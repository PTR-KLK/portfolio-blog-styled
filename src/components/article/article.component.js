import React from "react";
import { ArticleContainer } from "./article.style";
import { dummyText } from "../../resources/dummyText"

function Article() {
  return (
    <ArticleContainer id="blog">
        <h1>Tytuł jakiegoś posta</h1>
        {dummyText}
    </ArticleContainer>
  );
}

export default Article;
