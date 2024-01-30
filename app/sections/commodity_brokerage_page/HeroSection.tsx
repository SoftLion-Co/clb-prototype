"use client";
import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import image from "@/images/commodity_brokerage/1.jpg";
import { useTranslations } from "next-intl";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import PageTitleComponent from "@/components/PageTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";

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
              defaultTo="contactUsSection"
              text={t1("getInTouch")}
              typeButton="MainUsualButton"
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
