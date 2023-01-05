import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${import.meta.env.VITE_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setImages(data?.hits);
        setLoading(false);
        console.log("Hi data", data.hits);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {loading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {/* {images?.length?images?.map((image) => {
            <ImageCard key={image.id} image={image} />;
          }):<div>No Data</div>} */}

            {/* {images.length > 0 &&
            images.map((image) => (
              <div key={image.id}>
                <img src={image?.userImageURL} alt="" />
              </div>
            ))} */}
            {/* {images.length > 0 && images.map((image) => <ImageCard key={image.id} {...image?.userImageURL} />)} */}
            {images.length > 0 &&
              images.map((image) => <ImageCard key={image.id} {...image?.userImageURL} image={image} />)}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
