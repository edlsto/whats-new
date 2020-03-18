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
    const searchTerm = this.state.searchTerm;
    if (event.which === 13) {
      this.setState({ searchTerm: "" });
      this.props.searchStories(searchTerm);
    }
  };

  submitSearchTerm = event => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    this.setState({ searchTerm: "" });

    this.props.searchStories(searchTerm);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search"
          onChange={this.updateState}
          onKeyUp={this.handleKeyUp}
          value={this.state.searchTerm}
        ></input>
        <button className="search-btn" onClick={this.submitSearchTerm}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
