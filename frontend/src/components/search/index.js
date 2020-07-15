import React from "react";
// import { NavLink } from "react-router-dom";

console.log("Search componentd loaded");

const Search = () => {
  return (
    <>
      <div className="search-bar">
        <div className="search-bar-items">
          <div className="icon-background">
            <i className="fas fa-search"></i>
          </div>
          <input
            className="search"
            type="text"
            placeholder="What do you search?"
          ></input>
        </div>
      </div>
    </>
  );
};
export default Search;
