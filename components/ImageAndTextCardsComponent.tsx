import React from "react";
import s from "./ImageAndTextCardsComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";

interface ImageAndTextCardsProps {
  text: string;
  image: string;
  alt: string;
  rotate?: boolean;
  rotateMobile?: boolean;
  border?: boolean;
  color?: "blue" | "white" | "green";
  smallFont?: boolean;
  articlePadding?: boolean;
}

function ImageAndTextCardsComponent(props: ImageAndTextCardsProps) {
  const {
    text,
    image,
    alt,
    rotate,
    rotateMobile,
    border = false,
    color = "green",
    smallFont = false,
    articlePadding = false,
  } = props;

  // Function which handles different colors and borders from props

  const getContainerStyles = () => {
    const defaultStyle = {
      border: border ? "2px solid #565F51" : "none",
    };

    const colorStyles = {
      blue: {
        backgroundColor: "#ECF1F6",
        color: "#2A4563",
      },
      white: {
        backgroundColor: "#fff",
        color: "#565F51",
      },
      green: {
        backgroundColor: "#EBECE6",
        color: "#565F51",
      },
    };

    const selectedColorStyle = colorStyles[color] || colorStyles.green;

    return {
      ...defaultStyle,
      ...selectedColorStyle,
    };
  };

  // Classes for elements

  const articleClasses = classNames(
    s.article,
    { [s.article__rotate]: rotate },
    { [s.article__rotate_mobile]: rotateMobile }
  );

  const quoteContainerClasses = classNames(s.quote__container, {
    [s.articlePadding]: articlePadding,
  });

  const containerStyles = getContainerStyles();

  const quoteClasses = classNames(s.quote, { [s.quote__smallFont]: smallFont });

  return (
    <div className={articleClasses}>
      <div className={quoteContainerClasses} style={containerStyles}>
        <h3 className={quoteClasses}>{text}</h3>
      </div>

      <div className={s.quote__image__container}>
        <Image
          src={image}
          alt={alt}
          width={400}
          height={300}
          className={s.quote__image}
        />
      </div>
    </div>
  );
}

export default ImageAndTextCardsComponent;
