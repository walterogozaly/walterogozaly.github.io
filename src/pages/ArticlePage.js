import React from "react";
import articles from "./article-content";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router-dom";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articles.find((article) => article.name === name);
  const other_articles = articles.filter((article) => article.name !== name);

  if (!article) return <NotFoundPage />;

  return (
    <div>
      <div className="article-info-container">
        <h1 className="article_title">{article.title}</h1>
        <i>
          {article.date} by{" "}
          <Link to="/about" className="author">
            {article.author}
          </Link>
        </i>
      </div>

      {article.content.map((paragraph, key) => (
        <div key={key}>
          <p>{paragraph}</p>
        </div>
      ))}
      <br />
      <hr />
      <h1>Other Articles</h1>
      <ArticleList articles={other_articles} />
    </div>
  );
};

export default ArticlePage;
