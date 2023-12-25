import React from "react";
import s from "./OurCoreServicesComponent.module.scss";
import image from "@/images/home-hero-test.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

function OurCoreServicesComponent() {
  const t = useTranslations("commodityBrokerage.services");

  const data: {
    title1: string;
    text1: string;
    title2: string;
    text2: string;
    title3: string;
    text3: string;
    title4: string;
    text4: string;
    title5: string;
    text5: string;
  } = {
    title1: t("title1"),
    text1: t("text1"),
    title2: t("title2"),
    text2: t("text2"),
    title3: t("title3"),
    text3: t("text3"),
    title4: t("title4"),
    text4: t("text4"),
    title5: t("title5"),
    text5: t("text5"),
  };

  const serviceCards = Array.from({ length: 5 }, (_, index) => ({
    title: data[`title${index + 1}` as keyof typeof data], 
    text: data[`text${index + 1}` as keyof typeof data],   
  }));

  const mainCards = serviceCards.slice(0, -1);
  const lastServiceCard = serviceCards.slice(-1)[0];

  const cardsWithBorders = [0, 1, 4];

  return (
    <div className={s.services}>
      {mainCards.map(({ title, text }, index) => (
        <div className={`${s.card} ${cardsWithBorders.includes(index) ? s.cardWithBorder : ''}`} key={index}>
          <h3 className={s.card__title}>{title}</h3>
          <p className={s.card__text}>{text}</p>
        </div>
      ))}
      <div>
        <Image
          src={image}
          alt="Hero"
          className={s.card__image}
          width={800}
          height={800}
        />
      </div>
      <div className={`${s.card} ${cardsWithBorders.includes(serviceCards.length - 1) ? s.cardWithBorder : ''}`} key={serviceCards.length - 1}>
        <h3 className={s.card__title}>{lastServiceCard.title}</h3>
        <p className={s.card__text}>{lastServiceCard.text}</p>
      </div>
    </div>
  );
}

export default OurCoreServicesComponent;
