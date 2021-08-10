import React from "react";
import ArticleList from "../components/ArticleList";
import articles from "./article-content";

const HomePage = () => {
  return (
    <>
      <h1>
        <b>Walter Ogozaly's Data Blog</b>
      </h1>
      <h4>
        A place to highlight my work and document what I'm learning and doing.
      </h4>
      <hr />
      <h1>
        <b>Articles</b>
      </h1>
      <ArticleList articles={articles} />
    </>
  );
};

export default HomePage;
