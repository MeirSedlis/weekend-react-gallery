import { useState } from "react";

function GalleryItem({ galleryItem }) {
  const [showPhoto, setShowPhoto] = useState(true);

  const flipPhoto = () => {
    setShowPhoto(!showPhoto);
  };
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

  const renderLikes = () => {
    if (galleryItem.likes) {
      return (
        <div>
          <p>{galleryItem.likes} people like this photo!</p>
          <button>👍 Like</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>No one likes this yet!</p>
          <button>👍 Like</button>
        </div>
      );
    }
  };

  const photo = <img src={galleryItem.path} />;

  console.log(galleryItem);
  return (
    <div onClick={flipPhoto}>
      {renderGalleryItem()}
      {renderLikes()}
    </div>
  );
}

export default GalleryItem;
