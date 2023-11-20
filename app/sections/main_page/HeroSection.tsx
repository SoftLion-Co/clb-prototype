import React from "react";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import HeroTestImage from "@/images/home-hero-test.png"
import classNames from "classnames";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations("homePage")

  return (
    <div className={classNames(s.hero, s.container)}>
      <div className={s.hero__text}>
        <h1 className={s.hero__heading}>{t("hero")}</h1>
        <p className={s.hero__paragraph}>{t("heroText")}</p>
        <MainButtonComponent text="Our Services"/>
      </div>
      <div className={s.hero__image}>
        <Image src={HeroTestImage} alt="Hero Image"/>
      </div>
    </div>
  );
}
export default HeroSection;
