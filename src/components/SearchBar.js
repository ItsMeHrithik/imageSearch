import React from "react";
import { Search } from "react-bootstrap-icons";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/searchBarCss.css";

function SearchBar({
  searchQuery,
  setQuery,
  setSearchQuery,
  setLoadImages,
  setSearchLoadImages,
}) {
  const searchImage = () => {
    setQuery(searchQuery);
    setLoadImages(0);
    setSearchLoadImages(8);
  };
  return (
    <div className="container">
      <div
        className="input-group"
        style={{ marginLeft: "60px", marginTop: "100px" }}
      >
        <input
          style={{ height: "45px" }}
          className="form-control"
          placeholder="Search for photos"
          type="text"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
        <button
          style={{ marginLeft: "20px", marginRight: "140px", width: "10%" }}
          className="btn btn-dark"
          onClick={searchImage}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
