import React from "react";
import "./Menu.css";
import handleClick from "./handleClick";

const Menu = props => {
  return (
    <aside>
      <div
        onClick={e => handleClick(props, e)}˝
        section="local"
        className={props.currentTopic === "local" ? "active" : ""}
      >
        Local news
      </div>
      <div
        onClick={e => handleClick(props, e)}
        section="technology"
        className={props.currentTopic === "technology" ? "active" : ""}
      >
        Technology
      </div>
      <div
        onClick={e => handleClick(props, e)}
        section="entertainment"
        className={props.currentTopic === "entertainment" ? "active" : ""}
      >
        Entertainment
      </div>
      <div
        onClick={e => handleClick(props, e)}
        section="science"
        className={props.currentTopic === "science" ? "active" : ""}
      >
        Science
      </div>
      <div
        onClick={e => handleClick(props, e)}
        section="health"
        className={props.currentTopic === "health" ? "active" : ""}
      >
        Health
      </div>
    </aside>
  );
};

export default Menu;
