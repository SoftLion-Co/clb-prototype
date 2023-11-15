import React, { FC } from "react";
import s from "./ThreeCardsComponent.module.scss";
import Image from "next/image";

import executionImage from "@/images/home-hero-test.png";
import exportConsultingImage from "@/images/footer/icon-facebook.svg";
import freightBrokerageImage from "@/images/footer/icon-instagram.svg";
import ourStoryImage from "@/images/home-hero-test.png";

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
}

const ThreeCardsComponent: FC<ThreeCardsProps> = ({
  bigText,
  smallText,
  imageSrc = "execution",
  imagePosition = 1,
}) => {
  const selectedImage = images[imageSrc];

  return (
    <div className={s.cards}>
      {imagePosition === 1 ? (
        <>
          <div className={s.cards__card_image}>
            <Image
              src={selectedImage}
              alt="Card Image"
              className={s.cards__image}
              width={1400}
              height={1400}
            />
          </div>
          <div className={s.cards__card}>
            <h2 className={s.cards__large_text}>{bigText}</h2>
          </div>
          <div className={s.cards__card}>
            <p className={s.cards__small_text}>{smallText}</p>
          </div>
        </>
      ) : imagePosition === 2 ? (
        <>
          <div className={s.cards__card}>
            <h2 className={s.cards__large_text}>{bigText}</h2>
          </div>
          <div className={s.cards__card_image}>
            <Image
              src={selectedImage}
              alt="Card Image"
              className={s.cards__image}
              width={1400}
              height={1400}
            />
          </div>
          <div className={s.cards__card}>
            <p className={s.cards__small_text}>{smallText}</p>
          </div>
        </>
      ) : (
        <>
          <div className={s.cards__card}>
            <h2 className={s.cards__large_text}>{bigText}</h2>
          </div>
          <div className={s.cards__card}>
            <p className={s.cards__small_text}>{smallText}</p>
          </div>
          <div className={s.cards__card_image}>
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
