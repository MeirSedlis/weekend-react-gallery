import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";

function App () {
  useEffect(() => {
    fetchGallery();
  }, [])

  const [galleryList, setGalleryList] = useState([]);

  // This GETs data from the "gallery" table:
  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log(response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("GET /gallery broke:", error);
      });
    }
    // PUT function

    const updateReaction = (imageId) => {
      console.log("this will update!");
      axios({
        method: "PUT",
        url: `/gallery/reaction/${imageId}`,
      })
        .then(function (response) {
          console.log(response);
          fetchGallery();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction Animals</h1>
        </header>
        <GalleryList
          galleryList={galleryList}
          updateReaction={updateReaction}
        />
      </div>
    );
  };

export default App;
