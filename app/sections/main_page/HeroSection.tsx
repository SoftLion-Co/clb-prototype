"use client";
import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import {
  MMainButtonComponent
} from "@/components/MainButtonComponent";
import { useTranslations } from "next-intl";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import GetHeroVideoComponent from "@/components/main_page/GetHeroVideoComponent";
import GetHeroImageComponent from "@/components/main_page/GetHeroImageComponent";
import { useNetwork } from "@mantine/hooks"; // Import the useNetwork hook
import useHeroTextColor from "@/hooks/useHeroTextColor";
import MotionWrapper from "@/hooks/MotionWrapper";
import useFramerAnimations from "@/hooks/useFramerAnimations";

function HeroSection() {
  const t = useTranslations("homePage");
  const t1 = useTranslations("components");
  const { effectiveType } = useNetwork(); // Get the user's connection type
  const color = useHeroTextColor();
  const defaultAnimation = useFramerAnimations();

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
          <ScrollLink
            to="servicesSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={s.hero__button}
          >
            <MMainButtonComponent
            className={s.hero__button}
            text={t1("ourSercvicesButton")}
            variants={defaultAnimation}
            custom={3}
            typeButton="MainUsualButton"
          />
          </ScrollLink>
        </div>
      </div>
    </MotionWrapper>
  );
}

export default HeroSection;
