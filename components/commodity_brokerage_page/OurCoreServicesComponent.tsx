import React from "react";
import s from "./OurCoreServicesComponent.module.scss";
import image from "@/images/home-hero-test.png";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { useTwoLinesTitle } from "@/hooks/useTwoLinesTitle";

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

  const serviceCards = [
    { title: data.title1, text: data.text1, imageSrc: undefined },
    { title: data.title2, text: data.text2, imageSrc: undefined },
    { title: data.title3, text: data.text3, imageSrc: undefined },
    { title: data.title4, text: data.text4, imageSrc: undefined },
    { title: undefined, text: undefined, imageSrc: image },
    { title: data.title5, text: data.text5, imageSrc: undefined },
  ];

  const cardsWithBorders = [0, 1, 4];

  const imgaeStyling = {
    backgroundImage: `url(${image.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={s.services}>
      {serviceCards.map(({ title, text, imageSrc }, index) => (
        <React.Fragment key={index}>
          {imageSrc !== undefined ? (
            <div className={s.card} style={imgaeStyling}></div>
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
        </React.Fragment>
      ))}
    </div>
  );
}

export default OurCoreServicesComponent;
