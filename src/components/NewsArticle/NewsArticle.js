import React, { Component } from "react";
import "./NewsArticle.css";

class NewsArticle extends Component {
  constructor(props) {
    super();
  }

  addDefaultSrc(e) {
    e.target.src = "https://bitsofco.de/content/images/2018/12/broken-1.png";
  }

  render() {
    return (
      <div className="news-article">
        <img src={this.props.img} onError={this.addDefaultSrc} alt="" />
        <h2>{this.props.headline}</h2>
        <p>{this.props.description}</p>
        <button>
          <a href={this.props.url}>Read more</a>
        </button>
      </div>
    );
  }
}

export default NewsArticle;
