import React, { FC } from "react";
import s from "./ThreeCardsComponent.module.scss";
import Image from "next/image";
import classNames from "classnames";
import MotionWrapper from "@/hooks/MotionWrapper";
import { useLocale } from "next-intl";

export interface OurStory {
  acf: Acf;
}
export interface Acf {
  cardImage: string;
  image_position: string;
  color: string;
  big_text_en: string;
  small_text_en: string;
  big_text_es: string;
  small_text_es: string;
  big_text_de: string;
  small_text_de: string;
  big_text_ua: string;
  small_text_ua: string;
}


interface ThreeCardsProps {
  path: string;
  className?: string;
}

const ThreeCardsComponent: FC<ThreeCardsProps> =  async ({path, className}) => {

  const reqUrl = `https://softlion.blog/wp-json/wp/v2/${path}?acf_format=standard&_fields=acf`

  const req = await fetch(reqUrl);
  const storyData: OurStory[] = await req.json();
  const locale = useLocale();

  const imagePosition = parseInt(storyData[0].acf.image_position)
  const color = storyData[0].acf.color
  const bigText = (storyData[0].acf as any)[`big_text_${locale}`]
  const smallText = (storyData[0].acf as any)[`small_text_${locale}`]

  const cardStyle = {
    backgroundColor: color === "blue" ? "#ECF1F6" : "#EBECE6",
    color: color === "blue" ? "#2A4563" : "#565F51",
  };

  const image = (
    <MotionWrapper className={s.cards__image} variants custom={imagePosition}>
      <Image
        src={storyData[0].acf.cardImage}
        alt="Card Image"
        className={s.cards__image}
        width={1400}
        height={1400}
      />
    </MotionWrapper>
  );

  return (
    <MotionWrapper
      className={classNames(s.cards, className)}
      initial
      viewport
    >
      {imagePosition === 1 && image}
      <MotionWrapper
        className={classNames(s.cards__card, {
          [s.tabletCard]: imagePosition === 2,
        })}
        style={cardStyle}
        variants
        custom={imagePosition === 1 ? 2 : 1}
      >
        <h2 className={s.cards__large_text}>{bigText}</h2>
      </MotionWrapper>
      {imagePosition === 2 && (
        <div className={classNames(s.cards__image, s.tabletImage)}>{image}</div>
      )}
      <MotionWrapper
        className={classNames(s.cards__card, {
          [s.cards__small_card]: smallText,
        })}
        style={cardStyle}
        variants
        custom={imagePosition === 2 ? 3 : imagePosition === 1 ? 3 : 2}
      >
        <p className={s.cards__small_text}>{smallText}</p>
      </MotionWrapper>
      {imagePosition === 3 && image}
    </MotionWrapper>
  );
};

export default ThreeCardsComponent;
