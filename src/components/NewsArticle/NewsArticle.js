import React from "react";
import "./NewsArticle.css";
import addDefaultSrc from "./addDefaultSrc";

const NewsArticle = props => {
  return (
    <div className="news-article">
      <img src={props.img} onError={addDefaultSrc} alt="" />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <button>
        <a href={props.url}>Read more</a>
      </button>
    </div>
  );
};

export default NewsArticle;
