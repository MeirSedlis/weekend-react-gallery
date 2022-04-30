import { useState } from "react";

function GalleryItem({ galleryItem }) {

    const [showPhoto, setShowPhoto] = useState(true);

    const flipPhoto = () =>{
        setShowPhoto(!showPhoto)
    }
    const renderGalleryItem = () => {
        if(showPhoto){
            return (<img src={galleryItem.path} />)
        } else{
            return ( <div class='galleryItem'>
            <br />
             <p>Description:</p>
           {galleryItem.description}
           <p>Likes:</p>
           {galleryItem.likes} <br /> <br />
           <button>👍 Like</button>
         </div>)
        }
    }
  const photo = <img src={galleryItem.path} />;

  console.log(galleryItem);
  return (
   <div  onClick={flipPhoto}>
    {renderGalleryItem()}
   </div>
  );
}

export default GalleryItem;
