import React from "react";
import "./NewsContainer.css";
import NewsArticle from "../NewsArticle/NewsArticle";

const NewsContainer = props => {
  return props.articles.map(article => (
    <NewsArticle
      headline={article.headline}
      description={article.description}
      url={article.url}
      img={article.img}
    />
  ));
};

export default NewsContainer;
