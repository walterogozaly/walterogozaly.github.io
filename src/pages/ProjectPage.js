import React from "react";
import ArticleList from "../components/ArticleList";
import articles from "./article-content";

const ProjectPage = () => {
  const portfolioArticles = articles.filter((article) =>
    article.tags.includes("portfolio")
  );

  return (
    <div>
      <h1>
        <b>Projects</b>
      </h1>
      <ArticleList articles={portfolioArticles} />
    </div>
  );
};

export default ProjectPage;
