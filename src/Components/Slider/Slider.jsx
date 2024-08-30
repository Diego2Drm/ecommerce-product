import React, { useState } from "react";
import style from "./Slider.module.css";
import btnPrevious from "../../assets/Icons/icon-previous.svg";
import btnNext from "../../assets/Icons/icon-next.svg";

function Slider() {
  const images = [
    "https://i.ibb.co/jbnsxFZ/image-product-1-thumbnail.jpg",
    "https://i.ibb.co/27QGTP0/image-product-2-thumbnail.jpg",
    "https://i.ibb.co/k1hX2G0/image-product-3-thumbnail.jpg",
    "https://i.ibb.co/vxBpwxp/image-product-4-thumbnail.jpg",
  ];

  const [imageCurrent, setImageCurrent] = useState(0);
  const imageLength = images?.length;

  if (!Array.isArray(images) || imageLength == 0) return;

  const NextImage = () => {
    setImageCurrent(imageCurrent == imageLength - 1 ? 0 : imageCurrent + 1);
  };
  const PreviousImage = () => {
    setImageCurrent(imageCurrent == 0 ? imageLength - 1 : imageCurrent - 1);
  };

  return (
    <section>
      <div className={style.container}>
        <button
          className={`${style.btn} ${style.btnPrevious}`}
          onClick={PreviousImage}
        >
          <img src={btnPrevious} alt="btnPrevious" />
        </button>

        {images.map((image, index) => (
          <div
            key={index}
            className={
              imageCurrent == style.slide
            } >
            {imageCurrent == index && (
              <img key={index} src={image} alt={index} className={style.img} />
            )}
          </div>
        ))}

        <button className={`${style.btn} ${style.btnNext}`} onClick={NextImage}>
          <img src={btnNext} alt="btnNext" />
        </button>
      </div>
    </section>
  );
}

export { Slider };
