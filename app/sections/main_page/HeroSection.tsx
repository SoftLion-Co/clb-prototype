"use client";
import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useTranslations } from "next-intl";
import GetHeroVideoComponent from "@/components/main_page/GetHeroVideoComponent";
import GetHeroImageComponent from "@/components/main_page/GetHeroImageComponent";
import { useNetwork } from "@mantine/hooks";
import useHeroTextColor from "@/hooks/useHeroTextColor";
import MotionWrapper from "@/hooks/MotionWrapper";

function HeroSection() {
  const t = useTranslations("homePage");
  const t1 = useTranslations("components");
  const { effectiveType } = useNetwork();
  const color = useHeroTextColor();

  const titleClass = classNames(s.hero__title, {
    [s.lightTitle]: color === "light",
  });

  const textClass = classNames(s.hero__text, {
    [s.lightText]: color === "light",
  });

  return (
    <MotionWrapper tag={"section"} className={s.box} initial>
      <div className={s.hero}>
        <h1 className={titleClass}>{t("hero")}</h1>

        {effectiveType === "slow-2g" ||
        effectiveType === "2g" ||
        effectiveType === "3g" ? ( // Render photo if the connection is bad
          <GetHeroImageComponent />
        ) : (
          // Render video if the connection is good
          <GetHeroVideoComponent />
        )}

        <div className={s.hero__content}>
          <div className={s.hero__text_wrapper}>
            <p className={textClass}>{t("heroText1")}</p>
            <p className={textClass}>{t("heroText2")}</p>
          </div>
          <MainButtonComponent
            className={s.hero__button}
            text={t1("ourSercvicesButton")}
            typeButton="MainUsualButton"
            defaultTo="servicesSection"
          />
        </div>
      </div>
    </MotionWrapper>
  );
}

export default HeroSection;
