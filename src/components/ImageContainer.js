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
  query
}) {
  const searchLoadImages = () => {
    setLoadImages((prevValue) => prevValue + 8);
    setSearchLoadImages((prevValue) => prevValue + 8);
  };

  const imageMakerCard = (img) => {
    return (
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="hovereffects">
          <ImageCard className="img" url={img.urls.thumb} />
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
    <div className="container">
      <div
        className="row"
        style={{
          textAlign: "left",
          fontSize: "30px",
          marginLeft: "50px",
          marginRight: "50px",
          marginTop : "20px"
        }}
      >
        <p>
          <strong>{query}</strong>
        </p>
      </div>

      <div
        className="row"
        style={{
          textAlign: "left",
          fontSize: "15px",
          marginTop: "-15px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <p>{`${
          imageData.length + searchImageData.length
        } images has been found`}</p>
      </div>

      <div
        className="row"
        style={{
          textAlign: "left",
          fontSize: "1px",
          marginLeft: "2px",
          marginRight: "2px",
          marginTop: "-10px",
        }}
      >
        <p>{`${
          searchImageData.length + imageData.length
        } images has been found`}</p>
      </div>
      <div className="row imageContainers">
        {/* {searchImageData.map((img, key) => (
        <ImageCard  className="col-sm-6" url={img.urls.thumb} key={key} />
      ))} */}
        {searchImageData
          .slice(0, searchLoadImage)
          .map((itemObj) => itemMakerCard(itemObj))}
        {imageData
          .slice(0, loadImage)
          .map((itemObj) => imageMakerCard(itemObj))}
        <div className="text-center">
          <button
            style={{ width: "15%", height : "50px", marginBottom : "50px", marginTop: "50px" }}
            className="btn btn-dark "
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
