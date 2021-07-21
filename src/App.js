import React from "react";
import SearchBar from "./components/SearchBar";
import ImageContainer from "./components/ImageContainer";

function App() {
  return (
    <div>
      {/*Search Bar*/}
      <SearchBar />
      {/**Images on searching */}
      <ImageContainer />
    </div>
  );
}

export default App;
