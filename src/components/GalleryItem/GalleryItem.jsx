function GalleryItem({galleryItem}){
    console.log(galleryItem)
    return (
        <img src={galleryItem.path}/>
    )
}

export default GalleryItem;