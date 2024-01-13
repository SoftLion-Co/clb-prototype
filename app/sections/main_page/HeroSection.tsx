"use client"
import React from "react";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useTranslations } from "next-intl";
import GetHeroVideoComponent from "@/components/main_page/GetHeroVideoComponent";
import GetHeroImageComponent from "@/components/main_page/GetHeroImageComponent";
import { useNetwork } from '@mantine/hooks'; // Import the useNetwork hook

function HeroSection() {
  const t = useTranslations("homePage");
  const t1 = useTranslations("components");
  const { effectiveType } = useNetwork(); // Get the user's connection type

  return (
    <section className={s.box}>
      <div className={s.hero}>
      {effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g" ? ( // Render photo if the connection is bad
          <GetHeroImageComponent />
        ) : ( // Render video if the connection is good
          <GetHeroVideoComponent />
        )}
        <div className={s.hero__content}>
          <h1 className={s.hero__title}>{t("hero")}</h1>
          <div className={s.hero__text_wrapper}>
            <p className={s.hero__text}>{t("heroText1")}</p>
            <p className={s.hero__text}>{t("heroText2")}</p>
          </div>
          <MainButtonComponent
            text={t1("ourSercvicesButton")}
            className={s.hero__button}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;