import React, { Component } from "react";
import local from "../../data/local";
import entertainment from "../../data/entertainment";
import health from "../../data/health";
import technology from "../../data/technology";
import science from "../../data/science";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: local
    };
  }

  selectTopic = topic => {
    this.setState({ content: topic });
  };

  render() {
    return (
      <div>
        <header>What's New</header>
        <main>
          <Menu selectTopic={this.selectTopic} />
          <div className="app">
            <NewsContainer articles={this.state.content} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
