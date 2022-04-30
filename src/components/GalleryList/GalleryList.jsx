import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({galleryList}) {
  return (
    <div>
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem} />
        )
      })}
    </div>
  )
  
}

export default GalleryList;
