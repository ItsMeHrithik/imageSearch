import React from "react";
import ImageCard from "./ImageCard";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/ImgContainer.css";

function ImageContainer({
  imageData,
  searchImageData,
  loadImage,
  searchLoadImage,
  setLoadImages,
  setSearchLoadImages,
  query,
}) {
  const searchLoadImages = () => {
    setLoadImages((prevValue) => prevValue + 8);
    setSearchLoadImages((prevValue) => prevValue + 8);
  };

  const imageMakerCard = (img) => {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="hovereffects">
          <ImageCard className="img boxShadow" url={img.urls.thumb} />
        </div>
      </div>
    );
  };

  const itemMakerCard = (img) => {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="hovereffects">
          <ImageCard className="img" url={img.urls.thumb} />
        </div>
      </div>
    );
  };

  return (
    <div className="container fontLink">
      <div
        className="row"
        style={{
          textAlign: "left",
          fontSize: "30px",
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>{query}</strong>
        </p>
      </div>

      <div
        className="row fontLink"
        style={{
          textAlign: "left",
          fontSize: "15px",
          marginTop: "-15px",
          marginLeft: "50px",
          marginRight: "50px",
          color : 'gray'
        }}
      >
        <p>{`${
          imageData.length + searchImageData.length
        } images has been found`}</p>
      </div>

      <div className="row imageContainers">
        {searchImageData
          .slice(0, searchLoadImage)
          .map((itemObj) => itemMakerCard(itemObj))}

        {imageData
          .slice(0, loadImage)
          .map((itemObj) => imageMakerCard(itemObj))}
        <div className="text-center fontLink ">
          <button
            style={{
              width: "auto",
              height: "50px",
              marginBottom: "50px",
              marginTop: "50px",
            }}
            className="btn btn-dark boxShadow"
            onClick={searchLoadImages}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
