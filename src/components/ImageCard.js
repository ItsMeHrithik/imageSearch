import React from "react";

function ImageCard({ url }) {
  return (
    <div>
      <img style={{height :"150px", width : "150px"}} src={url} alt="random" />
    </div>
  );
}

export default ImageCard;
