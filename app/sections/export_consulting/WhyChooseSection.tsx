import React from "react";
import s from "./WhyChooseSection.module.scss";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";
import MainTitleComponent from "@/components/MainTitleComponent";
import { useLocale } from "next-intl";
import {getTranslations} from 'next-intl/server';

import MotionWrapper from "@/hooks/MotionWrapper";

export interface WhyChooseUs {
  acf: Acf;
}
export interface Acf {
  image1: string;
  image2: string;
  image3: string;
  card1_en: string;
  card2_en: string;
  card3_en: string;
  card1_es: string;
  card2_es: string;
  card3_es: string;
  card1_de: string;
  card2_de: string;
  card3_de: string;
  card1_ua: string;
  card2_ua: string;
  card3_ua: string;
}

const WhyChoose = async () => {
  const reqUrl = `https://softlion.blog/wp-json/wp/v2/why-choose-us?acf_format=standard&_fields=acf`

  const req = await fetch(reqUrl);
  const whyChooseData: WhyChooseUs[] = await req.json();
  const locale = useLocale();
  const t = await getTranslations("exportConsulting.whyChoose");

  const { acf } = whyChooseData[0];

  const card1Text = (acf as any)[`card1_${locale}`];
  const card1Image = acf.image1;
  const card2Text = (acf as any)[`card2_${locale}`];
  const card2Image = acf.image2;
  const card3Text = (acf as any)[`card3_${locale}`];
  const card3Image = acf.image3;

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MotionWrapper variants>
            <MainTitleComponent title={t("whyChooseTitle")} color="blue" />
          </MotionWrapper>
          <div className={s.choose}>
            <ImageAndTextCardsComponent
              text={card1Text}
              image={card1Image}
              alt="image"
              color="blue"
              border
              rotateMobile
            />
            <ImageAndTextCardsComponent
              text={card2Text}
              image={card2Image}
              alt="image"
              color="white"
              border
              rotate
              rotateMobile
            />
            <ImageAndTextCardsComponent
              text={card3Text}
              image={card3Image}
              alt="image"
              color="white"
              border
              rotateMobile
            />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default WhyChoose;
