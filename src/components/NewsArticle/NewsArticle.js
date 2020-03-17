import React from "react";
import "./NewsArticle.css";

const NewsArticle = props => (
  <div className="news-article">
    <img src={props.img} alt="" />
    <h2>{props.headline}</h2>
    <p>{props.description}</p>
    <button>
      <a href={props.url}>Read more</a>
    </button>
  </div>
);

export default NewsArticle;
