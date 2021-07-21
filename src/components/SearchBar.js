import React from "react";
import { useState, useEffect } from "react";

function SearchBar({ searchQuery, setQuery, setSearchQuery }) {
  const searchImage = () => {
    setQuery(searchQuery);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>
      <button onClick={searchImage}>Search</button>
    </div>
  );
}

export default SearchBar;
