import { useState, useEffect } from "react";
import axios from "axios";

function FetchImages() {
  const clientId = "_qWu8K8xtvqk_aeA45XS3nmeg7BFsMjAsnzBTuir-sI";
  const [imagesData, setImagesData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos?client_id=${clientId}`)
      .then((images) => {
        setImagesData(images.data);
      });
  }, []);

  return imagesData;
}

function SearchImagesWithQuery(query) {
  const clientId = "_qWu8K8xtvqk_aeA45XS3nmeg7BFsMjAsnzBTuir-sI";
  const [imagesData, setImagesData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`
      )
      .then((searchImageData) => {
        setImagesData(searchImageData.data.results)
      });
  }, [query]);

  return imagesData;
}

export { FetchImages, SearchImagesWithQuery };
