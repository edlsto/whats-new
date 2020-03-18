import React, { Component } from "react";
import local from "../../data/local";
import entertainment from "../../data/entertainment";
import health from "../../data/health";
import technology from "../../data/technology";
import science from "../../data/science";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        local: local,
        entertainment: entertainment,
        health: health,
        technology: technology,
        science: science,
        search: []
      },
      currentTopic: "local"
    };
  }

  searchStories = searchTerm => {
    const matchedStories = this.state.data[this.state.currentTopic].filter(
      story => {
        const regex = new RegExp(searchTerm, "gi");
        return story.headline.match(regex);
      }
    );
    this.setState({
      data: {
        local: local,
        entertainment: entertainment,
        health: health,
        technology: technology,
        science: science,
        search: matchedStories
      },
      currentTopic: "search"
    });
  };

  selectTopic = topic => {
    console.log(topic);
    this.setState({ currentTopic: topic });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="header-search-bar">
          <header>What's New</header>
          <div className="search-container">
            <SearchForm searchStories={this.searchStories} />
          </div>
        </div>
        <main>
          <Menu selectTopic={this.selectTopic} />
          <div className="app">
            <NewsContainer
              articles={this.state.data[this.state.currentTopic]}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
