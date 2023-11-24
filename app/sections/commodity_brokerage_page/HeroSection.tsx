import React from "react";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import image from "@/images/home-hero-test.png";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations("commodityBrokerage");
  return (
    <div className={s.hero}>
      <div className={s.hero__text}>
        {t("heroText")}
      </div>
      <Image
        className={s.hero__image}
        src={image}
        alt="Hero image"
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default HeroSection;
