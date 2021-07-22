import React from "react";
import SearchBar from "./components/SearchBar";
import ImageContainer from "./components/ImageContainer";
import { FetchImages, SearchImagesWithQuery } from "./FetchImages";
import { useState } from "react";
import '../src/App.css'
function App() {
  const [searchQuery, setSearchQuery] = useState([]);
  const [query, setQuery] = useState(['Random']);
  const [loadImage, setLoadImages] = useState(0);
  const [searchLoadImage, setSearchLoadImages] = useState(8);
  const imageData = FetchImages();
  const searchImageData = SearchImagesWithQuery(query);
  return (
    <div>
      {/*Search Bar*/}
      <SearchBar
        searchQuery={searchQuery}
        setQuery={setQuery}
        setSearchQuery={setSearchQuery}
        setLoadImages={setLoadImages}
        setSearchLoadImages={setSearchLoadImages}
      />
      {/**Images on searching */}
      <ImageContainer
        imageData={imageData}
        searchImageData={searchImageData}
        loadImage={loadImage}
        searchLoadImage={searchLoadImage}
        setLoadImages={setLoadImages}
        setSearchLoadImages={setSearchLoadImages}
        query={query}
      />
    </div>
  );
}

export default App;
