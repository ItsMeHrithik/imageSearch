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
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setQuery(searchQuery);
      setLoadImages(0);
      setSearchLoadImages(8);
    }
  };

  const searchImage = () => {
    setQuery(searchQuery);
    setLoadImages(0);
    setSearchLoadImages(8);
  };
  return (
    <div className="container fontLink">
      <div
        className="input-group"
        style={{ marginLeft: "60px", marginTop: "100px" }}
      >
        <input
          style={{ height: "45px", color: "gray" }}
          className="form-control boxShadow"
          placeholder="Search for photos"
          type="text"
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
        <button
          style={{ marginLeft: "20px", marginRight: "140px", width: "10%" }}
          className="btn btn-dark boxShadow"
          onClick={searchImage}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
