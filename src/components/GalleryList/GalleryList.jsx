import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({galleryList, updateReaction}) {
  return (
    <div>
      {galleryList.map((galleryItem) => {
        return (
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            updateReaction={updateReaction} />
        )
      })}
    </div>
  )
  
}

export default GalleryList;
