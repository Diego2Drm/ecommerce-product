import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import style from "./ImagesCarousel.module.css"

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://i.ibb.co/4f97gXN/image-product-1.jpg",
    thumbnail: "https://i.ibb.co/jbnsxFZ/image-product-1-thumbnail.jpg",
  },
  {
    original: "https://i.ibb.co/2yDrYTq/image-product-2.jpg",
    thumbnail: "https://i.ibb.co/27QGTP0/image-product-2-thumbnail.jpg",
  },
  {
    original: "https://i.ibb.co/89h1xN8/image-product-3.jpg",
    thumbnail: "https://i.ibb.co/k1hX2G0/image-product-3-thumbnail.jpg",
  },
  {
    original: "https://i.ibb.co/gt9mtjv/image-product-4.jpg",
    thumbnail: "https://i.ibb.co/vxBpwxp/image-product-4-thumbnail.jpg",
  },
];

function ImagesCarousel(){

  return( 
    <section className={style.imageContainer}>
      <ImageGallery items={images} showPlayButton={false} />
    </section>
   )
}


export { ImagesCarousel };
