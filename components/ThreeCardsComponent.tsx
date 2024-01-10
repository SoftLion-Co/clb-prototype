import React, { FC } from "react";
import s from "./ThreeCardsComponent.module.scss";
import Image from "next/image";

import executionImage from "@/images/home-hero-test.png";
import exportConsultingImage from "@/images/home-hero-test.png";
import freightBrokerageImage from "@/images/home-hero-test.png";
import ourStoryImage from "@/images/home-hero-test.png";
import classNames from "classnames";

const images = {
  execution: executionImage,
  exportConsulting: exportConsultingImage,
  freightBrokerage: freightBrokerageImage,
  ourStory: ourStoryImage,
};

interface ThreeCardsProps {
  bigText: string;
  smallText: string;
  imageSrc?: "execution" | "exportConsulting" | "freightBrokerage" | "ourStory";
  imagePosition?: 1 | 2 | 3;
  color?: "blue" | "green";
  className?: string;
}

const ThreeCardsComponent: FC<ThreeCardsProps> = ({
  bigText,
  smallText,
  imageSrc = "execution",
  imagePosition = 1,
  color = "green",
  className,
}) => {
  const selectedImage = images[imageSrc];

  const cardStyle = {
    backgroundColor: color === "blue" ? "#ECF1F6" : "#EBECE6",
    color: color === "blue" ? "#2A4563" : "#565F51",
  };

  return (
    <div className={classNames(s.cards, className)}>
      {imagePosition === 1 ? (
        <>
          <div className={s.cards__image}>
            <Image
              src={selectedImage}
              alt="Card Image"
              className={s.cards__image}
              width={1400}
              height={1400}
            />
          </div>
          <div className={s.cards__card} style={cardStyle}>
            <h2 className={s.cards__large_text}>{bigText}</h2>
          </div>
          <div className={s.cards__card} style={cardStyle}>
            <p className={s.cards__small_text}>{smallText}</p>
          </div>
        </>
      ) : imagePosition === 2 ? (
        <>
          <div className={s.cards__card} style={cardStyle}>
            <h2 className={classNames(s.cards__large_text, s.tabletCard)}>
              {bigText}
            </h2>
          </div>
          <div className={classNames(s.cards__image, s.tabletImage)}>
            <Image
              src={selectedImage}
              alt="Card Image"
              className={s.cards__image}
              width={1400}
              height={1400}
            />
          </div>
          <div
            className={classNames(s.cards__card, s.tabletCard)}
            style={cardStyle}
          >
            <p className={s.cards__small_text}>{smallText}</p>
          </div>
        </>
      ) : (
        <>
          <div className={s.cards__card} style={cardStyle}>
            <h2 className={s.cards__large_text}>{bigText}</h2>
          </div>
          <div className={s.cards__card} style={cardStyle}>
            <p className={s.cards__small_text}>{smallText}</p>
          </div>
          <div className={s.cards__image}>
            <Image
              src={selectedImage}
              alt="Card Image"
              className={s.cards__image}
              width={1400}
              height={1400}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ThreeCardsComponent;
