import React, { Component } from "react";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: [],
      currentTopic: "local"
    };
  }

  componentDidMount() {
    fetch("https://whats-new-api.herokuapp.com/api/v1/news")
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  searchStories = searchTerm => {
    const matchedStories = this.state[this.state.currentTopic].filter(story => {
      const regex = new RegExp(searchTerm, "gi");
      return story.headline.match(regex);
    });
    this.setState({
      search: matchedStories,
      currentTopic: "search"
    });
  };

  selectTopic = topic => {
    this.setState({ currentTopic: topic });
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
          <Menu
            selectTopic={this.selectTopic}
            currentTopic={this.state.currentTopic}
          />
          <div className="app">
            <NewsContainer articles={this.state[this.state.currentTopic]} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
