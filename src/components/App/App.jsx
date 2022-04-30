import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {
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
