import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  updateState = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleKeyUp = event => {
    if (event.which === 13) {
      this.props.searchStories(this.state.searchTerm);
    }
  };

  submitSearchTerm = event => {
    event.preventDefault();
    this.props.searchStories(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search"
          onChange={this.updateState}
          onKeyUp={this.handleKeyUp}
        ></input>
        <button className="search-btn" onClick={this.submitSearchTerm}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
