import React from "react";
import s from "./WhyChoose.module.scss";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import image from "@/images/home-hero-test.png";
import MainTitleComponent from "@/components/MainTitleComponent";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface WhyChooseProps {
  text1: string;
  text2: string;
  text3: string;
}

function WhyChoose({ text1, text2, text3 }: WhyChooseProps) {
  const t = useTranslations("exportConsulting.whyChoose");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={classNames(s.container, s.choose)}>
          <MainTitleComponent title={t("whyChooseTitle")} color="blue" />
          <ImageAndTextCardsComponent
            text={text1}
            image={image.src}
            alt="image"
            color="blue"
            border
          />
          <ImageAndTextCardsComponent
            text={text2}
            image={image.src}
            alt="image"
            rotate
            color="white"
            border
          />
          <ImageAndTextCardsComponent
            text={text3}
            image={image.src}
            alt="image"
            color="white"
            border
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
