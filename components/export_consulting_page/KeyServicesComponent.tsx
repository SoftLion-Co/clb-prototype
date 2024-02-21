import React from "react";
import s from "./KeyServicesComponent.module.scss";
import { useLocale } from "next-intl";
import classNames from "classnames";
import { useTwoLinesTitle } from "@/hooks/useTwoLinesTitle";
import MotionWrapper from "@/hooks/MotionWrapper";

interface KeyServices {
  acf: Acf;
}

interface Acf {
  [key: string]: string; 
}

interface Card {
  title: string;
  text1: string;
  text2: string;
}

const KeyServicesComponent = async () => {
  const reqUrl =
    "https://wp.cl-brokers.com/wp-json/wp/v2/key-services?acf_format=standard&_fields=acf";
  const req = await fetch(reqUrl);
  const keyServices: KeyServices[] = await req.json();
  const locale = useLocale();

  const serviceCards = mapKeyServicesToCards(keyServices, locale);

  const cardsWithBorder = [0, 2, 4];
  const whiteCards = [4];

  return (
    <div className={s.services}>
      {serviceCards.map(({ title, text1, text2 }, index) => (
        <MotionWrapper
          initial
          viewport
          variants
          custom={index}
          className={classNames(s.card, {
            [s.cardWithBorder]: cardsWithBorder.includes(index),
            [s.whiteCard]: whiteCards.includes(index),
          })}
          key={index}
        >
          <h3 className={s.card__title}>{useTwoLinesTitle(title)}</h3>
          <ul className={s.card__list}>
            <li className={s.card__item}>{text1}</li>
            {text2 && <li className={s.card__item}>{text2}</li>}
          </ul>
        </MotionWrapper>
      ))}
    </div>
  );
};

const mapKeyServicesToCards = (keyServices: KeyServices[], locale: string): Card[] => {
  const serviceCards: Card[] = [];
  keyServices.forEach((keyService: KeyServices) => {
    for (let i = 1; i <= 6; i++) {
      const titleKey = `card${i}_title_${locale}` as keyof Acf;
      const text1Key = `card${i}_text1_${locale}` as keyof Acf;
      const text2Key = `card${i}_text2_${locale}` as keyof Acf;
      const card: Card = {
        title: keyService.acf[titleKey],
        text1: keyService.acf[text1Key],
        text2: keyService.acf[text2Key],
      };
      serviceCards.push(card);
    }
  });
  return serviceCards;
};

export default KeyServicesComponent;
