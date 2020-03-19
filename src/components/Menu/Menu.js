import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super();
  }

  handleClick = e => {
    console.log(this.props);
    this.props.selectTopic(e.target.getAttribute("section"));
  };

  render() {
    return (
      <aside>
        <div
          onClick={e => this.handleClick(e)}
          section="local"
          className={this.props.currentTopic === "local" ? "active" : ""}
        >
          Local news
        </div>
        <div
          onClick={e => this.handleClick(e)}
          section="technology"
          className={this.props.currentTopic === "technology" ? "active" : ""}
        >
          Technology
        </div>
        <div
          onClick={e => this.handleClick(e)}
          section="entertainment"
          className={
            this.props.currentTopic === "entertainment" ? "active" : ""
          }
        >
          Entertainment
        </div>
        <div
          onClick={e => this.handleClick(e)}
          section="science"
          className={this.props.currentTopic === "science" ? "active" : ""}
        >
          Science
        </div>
        <div
          onClick={e => this.handleClick(e)}
          section="health"
          className={this.props.currentTopic === "health" ? "active" : ""}
        >
          Health
        </div>
      </aside>
    );
  }
}

export default Menu;
