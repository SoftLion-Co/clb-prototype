import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import image from "@/images/commodity_brokerage/1.jpg";
import { useLocale, useTranslations } from "next-intl";
import PageTitleComponent from "@/components/PageTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import MotionWrapper from "@/hooks/MotionWrapper";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export interface HeroData {
  id: number;
  acf: Acf;
}
export interface Acf {
  hero_image: string;
  hero_title_en: string;
  hero_subtitle_en: string;
  hero_text_en: string;
  hero_title_es: string;
  hero_subtitle_es: string;
  hero_text_es: string;
  hero_title_de: string;
  hero_subtitle_de: string;
  hero_text_de: string;
  hero_title_ua: string;
  hero_subtitle_ua: string;
  hero_text_ua: string;
}

const HeroSection = async () => {
  const reqUrl = `https://wp.cl-brokers.com/wp-json/wp/v2/commodity-hero?acf_format=standard&_fields=id,acf#`;

  const req = await fetch(reqUrl);
  const heroData: HeroData[] = await req.json();
  const locale = useLocale();

  const t1 = await getTranslations("header");

  return (
    <section className={classNames(s.box)}>
      <div className={s.background}>
        <PageTitleComponent
          title={(heroData[0].acf as any)[`hero_title_${locale}`]}
          className={s.hero__title}
        />
        <MotionWrapper
          className={classNames(s.hero, s.container)}
          initial
          viewport
        >
          <div className={s.hero__texts}>
            <MotionWrapper
              tag="h2"
              className={s.hero__heading}
              variants
              custom={1}
            >
              {(heroData[0].acf as any)[`hero_subtitle_${locale}`]}
            </MotionWrapper>
            <MotionWrapper tag="p" variants custom={2} className={s.hero__text}>
              {(heroData[0].acf as any)[`hero_text_${locale}`]}
            </MotionWrapper>
            <MotionWrapper variants custom={3}>
              <MainButtonComponent
                text={t1("getInTouch")}
                defaultTo="contactUsSection"
                typeButton="MainUsualButton"
              />
            </MotionWrapper>
          </div>
          <MotionWrapper variants custom={1.5}>
            <Image
              className={s.hero__image}
              src={heroData[0].acf.hero_image}
              alt="Hero image"
              width={720}
              height={575}
            />
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
