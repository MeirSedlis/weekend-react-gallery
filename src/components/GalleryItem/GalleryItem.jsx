import { useState } from "react";

function GalleryItem({ galleryItem }) {
  const [showPhoto, setShowPhoto] = useState(true);

  const flipPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  //uses conditional formatting to render either the photo 
    // or the description
  const renderGalleryItem = () => {
    if (showPhoto) {
      return <img src={galleryItem.path} />;
    } else {
      return (
        <div class="galleryItem">
          <br />
          <p>Description:</p>
          {galleryItem.description}
        </div>
      );
    }
  };

  // uses conditional formatting to render the number of reactions
  const renderReactions = () => {
      
    if (galleryItem.reactions) {
      return (
        <div>
          <p>{galleryItem.reactions} people have reacted to this photo!</p>
          <button>React!</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>No one has reacted to this yet!</p>
          <button>React!</button>
        </div>
      );
    }
  };

  return (
    <div onClick={flipPhoto}>
      {renderGalleryItem()}
      {renderReactions()}
    </div>
  );
}

export default GalleryItem;
