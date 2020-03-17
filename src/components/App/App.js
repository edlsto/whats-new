import React, { Component } from "react";
import local from "../../data/local";
import entertainment from "../../data/entertainment";
import health from "../../data/health";
import technology from "../../data/technology";
import science from "../../data/science";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      entertainment: entertainment,
      health: health,
      technology: technology,
      science: science
    };
  }

  render() {
    return (
      <div>
        <header>What's New</header>
        <main>
          <aside>
            <div>Local News</div>
            <div>Technology</div>
            <div>Entertainment</div>
            <div>Science</div>
            <div>Health</div>
          </aside>
          <div className="app">
            <NewsContainer articles={this.state.local} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
