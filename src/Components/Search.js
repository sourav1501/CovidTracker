import React from "react";
import * as Icon from "react-feather";
import "../css/Search.css";

export default function Search() {
  return (
    <div className="search">
      <label>Search your city, resources, etc</label>
      <div className="line"></div>

      <input type="text" />

      <div className={`search-button`}>
        <Icon.Search />
      </div>
    </div>
  );
}