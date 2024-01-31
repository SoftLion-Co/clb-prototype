import React from "react";
import s from "./ImageAndTextCardsComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import MotionWrapper from "@/hooks/MotionWrapper";

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
  mobileTextCenter?: boolean;
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
    mobileTextCenter = false,
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

  const quoteClasses = classNames(
    s.quote,
    { [s.quote__smallFont]: smallFont },
    { [s.quote__mobileCenter]: mobileTextCenter }
  );

  return (
    <MotionWrapper
      className={articleClasses}
      initial
      viewport={{ margin: "20% 0% -20% 0%" }}
    >
      <MotionWrapper
        className={quoteContainerClasses}
        style={containerStyles}
        initial
        viewport={{ margin: "20% 0% -20% 0%" }}
        variants
        custom={rotate ? 2 : 1}
      >
        <h3 className={quoteClasses}>{text}</h3>
      </MotionWrapper>

      <MotionWrapper
        className={s.quote__image__container}
        initial
        viewport={{ margin: "20% 0% -20% 0%" }}
        variants
        custom={rotate ? 1 : 2}
      >
        <Image
          src={image}
          alt={alt}
          width={1000}
          height={1000}
          className={s.quote__image}
        />
      </MotionWrapper>
    </MotionWrapper>
  );
}

export default ImageAndTextCardsComponent;
