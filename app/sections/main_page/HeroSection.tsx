"use client";
import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useTranslations } from "next-intl";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import GetHeroVideoComponent from "@/components/main_page/GetHeroVideoComponent";
import GetHeroImageComponent from "@/components/main_page/GetHeroImageComponent";
import { useNetwork } from "@mantine/hooks"; // Import the useNetwork hook
import useHeroTextColor from "@/hooks/useHeroTextColor";

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
          <ScrollLink
            to="servicesSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={s.hero__button}
          >
            <MainButtonComponent
              text={t1("ourSercvicesButton")}
              typeButton="MainUsualButton"
            />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
