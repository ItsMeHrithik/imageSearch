import React from "react";
import ImageCard from "./ImageCard";

function ImageContainer({ imageData, searchImageData }) {
  return (
    <div>
      {searchImageData.map((img, key) => (
        <ImageCard url={img.urls.thumb} key={key} />
      ))}
      {imageData.map((img, key) => (
        <ImageCard url={img.urls.thumb} key={key} />
      ))}
    </div>
  );
}

export default ImageContainer;
