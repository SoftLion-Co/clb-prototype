import React from "react";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import image from "@/images/home-hero-test.png";
import { useTranslations } from "next-intl";
import PageTitleComponent from "@/components/PageTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import classNames from "classnames";

function HeroSection() {
  const t = useTranslations("commodityBrokerage");
  const t1 = useTranslations("header");
  return (
    <div className={classNames(s.box)}>
      <div className={s.background}>
        <PageTitleComponent
          title={t("commodityBrokerageTitle")}
          className={s.hero__title}
        />
        <div className={classNames(s.hero, s.container)}>
          <div className={s.hero__texts}>
            <h2 className={s.hero__heading}>
              {t("commodityBrokerageSubtitle")}
            </h2>
            <div className={s.hero__text}>{t("heroText")}</div>
            <MainButtonComponent
              text={t1("getInTouch")}
            />
          </div>
          <Image
            className={s.hero__image}
            src={image}
            alt="Hero image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
