import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, key) => (
        <div key={key}>
          <Link className="article_link" to={`/article/${article.name}`}>
            <h2 className="article_title">{article.title}</h2>
            <i>
              {article.date} by{" "}
              <Link to="/about" className="author">
                {article.author}
              </Link>
            </i>
            {article.content.slice(0, 3).map((paragraph, key) => (
              <div key={key}>
                <p>{paragraph}</p>
              </div>
            ))}
            <p>...</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ArticleList;
