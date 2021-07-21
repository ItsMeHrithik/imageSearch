import React from "react";
import SearchBar from "./components/SearchBar";
import ImageContainer from "./components/ImageContainer";
import { FetchImages, SearchImagesWithQuery } from "./FetchImages";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState([]);
  const [query, setQuery] = useState([]);
  const imageData = FetchImages();
  const searchImageData = SearchImagesWithQuery(query);
  console.log(searchImageData);
  return (
    <div>
      {/*Search Bar*/}
      <SearchBar
        searchQuery={searchQuery}
        setQuery={setQuery}
        setSearchQuery={setSearchQuery}
      />
      {/**Images on searching */}
      <ImageContainer imageData={imageData} searchImageData={searchImageData} />
    </div>
  );
}

export default App;
