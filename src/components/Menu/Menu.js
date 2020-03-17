import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super();
  }

  handleClick = e => {
    this.props.selectTopic(e.target.getAttribute("section"));
  };

  render() {
    return (
      <aside>
        <div onClick={e => this.handleClick(e)} section="local">
          Local news
        </div>
        <div onClick={e => this.handleClick(e)} section="technology">
          Technology
        </div>
        <div onClick={e => this.handleClick(e)} section="entertainment">
          Entertainment
        </div>
        <div onClick={e => this.handleClick(e)} section="science">
          Science
        </div>
        <div onClick={e => this.handleClick(e)} section="health">
          Health
        </div>
      </aside>
    );
  }
}

export default Menu;
