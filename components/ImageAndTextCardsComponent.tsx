import React from "react";
import s from "./ImageAndTextCardsComponent.module.scss";
import Image from "next/image";

interface ImageAndTextCardsProps {
  text: string;
  image: string;
  alt: string;
  rotate?: boolean;
  border?: boolean;
  color?: "blue" | "white" | "green";
  fontSize?: number;
  fontWeight?: number;
}

function ImageAndTextCardsComponent({
  text,
  image,
  alt,
  rotate,
  border = false,
  color = "green",
  fontSize = 24,
  fontWeight = 500
}: ImageAndTextCardsProps) {
  const getContainerStyles = () => {
    const defaultStyle = {
      border: border ? "2px solid #565F51" : "none",
      fontSize,
      fontWeight,
    };

    switch (color) {
      case "blue":
        return {
          ...defaultStyle,
          backgroundColor: "#ECF1F6",
          color: "#2A4563",
        };
      case "white":
        return {
          ...defaultStyle,
          backgroundColor: "#fff",
          color: "#565F51",
        };
      case "green":
      default:
        return {
          ...defaultStyle,
          backgroundColor: "#EBECE6",
          color: "#565F51",
        };
    }
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
      <div className={s.quote__container} style={getContainerStyles()}>
        <h3 className={rotate ? s.quote__rotated : s.quote}>{text}</h3>
      </div>
      {!rotate ? (
        <div className={s.quote__image__container}>
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
