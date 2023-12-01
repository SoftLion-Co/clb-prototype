import React from "react";
import s from "./ImageAndTextCardsComponent.module.scss";
import Image from "next/image";

interface ImageAndTextCardsProps {
  text: string;
  image: string;
  alt: string;
  rotate?: boolean;
  border?: boolean;
}

function ImageAndTextCardsComponent({
  text,
  image,
  alt,
  rotate,
  border = false,
}: ImageAndTextCardsProps) {
  const containerStyle = {
    border: border ? "2px solid #565F51" : "none",
    backgroundColor: border ? "#ffffff" : "#EBECE6",
    color: border ? "#171717" : "#565F51",
  };

  return (
    <div className={s.article__cards}>
      {rotate ? (
        <div className={s.quote__image_container}>
          <Image
            src={image}
            alt={alt}
            width={400}
            height={300}
            className={s.quote__image}
          />
        </div>
      ) : null}
      <div className={s.quote__container} style={containerStyle}>
        <h3 className={rotate ? s.quote__rotated : s.quote}>{text}</h3>
      </div>
      {!rotate ? (
        <div className={s.quote__image_container}>
          <Image
            src={image}
            alt={alt}
            width={400}
            height={300}
            className={s.quote__image}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ImageAndTextCardsComponent;
