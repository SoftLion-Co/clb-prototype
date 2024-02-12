import React from "react";
import s from "./OurCoreServicesComponent.module.scss";
import { useLocale } from "next-intl";
import classNames from "classnames";
import { useTwoLinesTitle } from "@/hooks/useTwoLinesTitle";
import MotionWrapper from "@/hooks/MotionWrapper";

export interface CoreServices {
  acf: Acf;
}

export interface Acf {
  card_5_photo: string;
  card_titles: CardTitle[];
  card_texts: CardText[];
}

export interface CardTitle {
  en: string;
  es: string;
  de: string;
  ua: string;
}

export interface CardText {
  en: string;
  es: string;
  de: string;
  ua: string;
}

const OurCoreServicesComponent = async () => {
  const reqUrl =
    "https://softlion.blog/wp-json/wp/v2/core-services?acf_format=standard&_fields=acf";
  const req = await fetch(reqUrl);
  const coreServices: CoreServices[] = await req.json();
  const locale = useLocale();

  const serviceCards = [];

  for (let i = 1; i <= 6; i++) {
    serviceCards.push({
      title: (coreServices[0].acf as any)[`card${i}_title_${locale}`],
      text: (coreServices[0].acf as any)[`card${i}_text_${locale}`],
      image: i === 5 ? true : false,
    });
  }

  const cardsWithBorders = [0, 1, 4];

  const imageStyling = {
    backgroundImage: `url(${coreServices[0].acf.card_5_photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  return (
    <div className={s.services}>
      {serviceCards.map(({ title, text, image }, index) => (
        <MotionWrapper key={index} initial viewport variants>
          {image === true ? (
            <div className={s.card} style={imageStyling}></div>
          ) : (
            <div
              className={classNames(s.card, {
                [s.cardWithBorder]: cardsWithBorders.includes(index),
              })}
            >
              <h3 className={s.card__title}>{useTwoLinesTitle(title)}</h3>
              <p className={s.card__text}>{text}</p>
            </div>
          )}
        </MotionWrapper>
      ))}
    </div>
  );
};

export default OurCoreServicesComponent;
