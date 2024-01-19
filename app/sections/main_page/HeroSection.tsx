"use client";
import React from "react";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useTranslations } from "next-intl";
import GetHeroVideoComponent from "@/components/main_page/GetHeroVideoComponent";
import GetHeroImageComponent from "@/components/main_page/GetHeroImageComponent";
import { useNetwork } from "@mantine/hooks"; // Import the useNetwork hook
import useHeroTextColor from "@/hooks/useHeroTextColor";
import classNames from "classnames";

function HeroSection() {
  const t = useTranslations("homePage");
  const t1 = useTranslations("components");
  const { effectiveType } = useNetwork(); // Get the user's connection type
  const color = useHeroTextColor();

  const titleClass = classNames(
    s.hero__title, // Existing title class
    { [s.lightTitle]: color === "light" } // New class if color is light
  );

  const textClass = classNames(
    s.hero__text, // Existing text class
    { [s.lightText]: color === "light" } // New class if color is light
  );

  return (
    <section className={s.box}>
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
          <h1 className={titleClass}>{t("hero")}</h1>
          <div className={s.hero__text_wrapper}>
            <p className={textClass}>{t("heroText1")}</p>
            <p className={textClass}>{t("heroText2")}</p>
          </div>
          <MainButtonComponent
            text={t1("ourSercvicesButton")}
            className={s.hero__button}
            typeButton="MainUsualButton"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
