import React from "react";
import "./NewsArticle.css";

const NewsArticle = props => (
  <div>
    <div>{props.headline}</div>
    <div>{props.description}</div>
    <div>{props.url}</div>
    <div>
      <img src={props.img} alt="" width="100" height="100" />
    </div>
  </div>
);

export default NewsArticle;
