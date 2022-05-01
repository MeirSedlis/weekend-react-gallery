import { useState } from "react";

function GalleryItem({ galleryItem, updateReaction }) {
  const [showPhoto, setShowPhoto] = useState(true);

  const flipPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const handleReaction = (e) => {
    e.preventDefault();
    updateReaction(galleryItem.id);
  };

  //uses conditional formatting to render either the photo
  // or the description
  const renderGalleryItem = () => {
    if (showPhoto) {
      return <img src={galleryItem.path} onClick={flipPhoto}/>;
    } else {
      return (
        <div className="galleryItem" onClick={flipPhoto}>
          <br />
          <p>Description:</p>
          {galleryItem.description}
        </div>
      );
    }
  };

  // uses conditional formatting to render the number of reactions
  const renderReactions = () => {
    if (galleryItem.reactions > 1) {
      return (
        <div>
          <p>{galleryItem.reactions} people have reacted to this photo!</p>
          <button onClick={handleReaction}>React!</button>
        </div>
      );
    } else if(galleryItem.reactions === 0){
      return (
        <div>
          <p>No one has reacted to this yet!</p>
          <button onClick={handleReaction}>React!</button>
        </div>
      );
    } else if (galleryItem.reactions === 1){
      return(
        <div>
          <p>{galleryItem.reactions} person has reacted to this photo!</p>
          <button onClick={handleReaction}>React!</button>
        </div>
      )
    }
  };

  return (
    <div className="itemCard">
      {renderGalleryItem()}
      {renderReactions()}
    </div>
  );
}

export default GalleryItem;
