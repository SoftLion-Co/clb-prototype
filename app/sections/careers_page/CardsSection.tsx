import s from "./CardsSection.module.scss";
import Image from "next/image";
import ImageAndTextCardsComponent from "@/components/ImageAndTextCardsComponent";

import BrandElement from "@/images/vectors/brand-element-5.svg";
import classNames from "classnames";
import { useLocale } from "next-intl";
import GetHeroComponent from "@/hooks/GetHeroComponent";

export interface CareersCards {
  acf: Acf;
}
export interface Acf {
  image1: string;
  image2: string;
  card1_en: string;
  card2_en: string;
  card1_es: string;
  card2_es: string;
  card1_de: string;
  card2_de: string;
  card1_ua: string;
  card2_ua: string;
}

const CardsSection = async () => {
  const reqUrl = `https://wp.cl-brokers.com/wp-json/wp/v2/careers-cards?acf_format=standard&_fields=acf`;

  const req = await fetch(reqUrl);
  const storyData: CareersCards[] = await req.json();
  const locale = useLocale();

  const { acf } = storyData[0];

  const card1Text = (acf as any)[`card1_${locale}`];
  const card1Image = acf.image1;
  const card2Text = (acf as any)[`card2_${locale}`];
  const card2Image = acf.image2;

  return (
    <section className={classNames(s.box, s.cards)}>
      <div className={s.background}>
        <div className={s.cards__title}>
          <GetHeroComponent path="careers-hero" className={s.careers__title} />
        </div>
        <div className={classNames(s.container, s.cards__container)}>
          <ImageAndTextCardsComponent
            text={card1Text}
            image={card1Image}
            alt={"Image"}
            mobileTextCenter
          />
          <ImageAndTextCardsComponent
            rotate
            text={card2Text}
            image={card2Image}
            alt={"Image"}
            color="white"
            border
            smallFont
          />
        </div>
        <Image
          className={s.brand__element}
          src={BrandElement}
          alt="brand element"
        />
      </div>
    </section>
  );
};

export default CardsSection;
