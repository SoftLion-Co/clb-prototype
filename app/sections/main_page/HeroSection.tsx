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
  const { effectiveType } = useNetwork(); // Get the user's connection type
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
        {effectiveType === "slow-2g" ||
        effectiveType === "2g" ||
        effectiveType === "3g" ? ( // Render photo if the connection is bad
          <GetHeroImageComponent />
        ) : (
          // Render video if the connection is good
          <GetHeroVideoComponent />
        )}

        <div className={s.hero__content}>
          <MotionWrapper tag={"h1"} className={titleClass} variants custom={1}>
            {t("hero")}
          </MotionWrapper>
          <div className={s.hero__text_wrapper}>
            <MotionWrapper tag={"p"} className={textClass} variants custom={2}>
              {t("heroText1")}
            </MotionWrapper>
            <MotionWrapper
              tag={"p"}
              className={textClass}
              variants
              custom={2.5}
            >
              {t("heroText2")}
            </MotionWrapper>
          </div>
          <MotionWrapper className={s.hero__button} variants custom={3}>
            <MainButtonComponent
              text={t1("ourSercvicesButton")}
              typeButton="MainUsualButton"
              defaultTo="servicesSection"
            />
          </MotionWrapper>
        </div>
      </div>
    </MotionWrapper>
  );
}

export default HeroSection;
