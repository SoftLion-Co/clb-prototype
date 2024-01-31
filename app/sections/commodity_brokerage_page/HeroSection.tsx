"use client";
import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import image from "@/images/commodity_brokerage/1.jpg";
import { useTranslations } from "next-intl";
import PageTitleComponent from "@/components/PageTitleComponent";
import { MMainButtonComponent } from "@/components/MainButtonComponent";
import { MCommodityHeroImage } from "@/components/commodity_brokerage_page/CommodityHeroImage";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

function HeroSection() {
  const t = useTranslations("commodityBrokerage");
  const t1 = useTranslations("header");
  const defaultAnimation = useFramerAnimations();

  return (
    <div className={classNames(s.box)}>
      <div className={s.background}>
        <PageTitleComponent
          title={t("commodityBrokerageTitle")}
          className={s.hero__title}
        />
        <MotionWrapper
          className={classNames(s.hero, s.container)}
          initial
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <div className={s.hero__texts}>
            <MotionWrapper tag="h2"
              className={s.hero__heading}
              variants
              custom={1}
            >
              {t("commodityBrokerageSubtitle")}
            </MotionWrapper>
            <MotionWrapper tag="p"
              variants
              custom={2}
              className={s.hero__text}
            >
              {t("heroText")}
            </MotionWrapper>
            <MMainButtonComponent
              text={t1("getInTouch")}
              typeButton="MainUsualButton"
              variants={defaultAnimation}
              custom={3}
            />
          </div>
          <MCommodityHeroImage
            className={s.hero__image}
            src={image}
            alt="Hero image"
            width={1000}
            height={1000}
            variants={defaultAnimation}
            custom={1.5}
          />
        </MotionWrapper>
      </div>
    </div>
  );
}

export default HeroSection;
