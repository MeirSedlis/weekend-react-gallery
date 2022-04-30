import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    fetchGallery();
  }, [])

  const [galleryList, setGalleryList] = useState([]);
  
  // This GETs data from the "gallery" table:
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery broke:', error);
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reaction Animals</h1>
        </header>
        <GalleryList />
       
      </div>
    );
}

export default App;
