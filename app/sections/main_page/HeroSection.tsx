"use client";
import React from "react";
import s from "./HeroSection.module.scss";
import { MMainButtonComponent } from "@/components/MainButtonComponent";
import { useTranslations } from "next-intl";
import GetHeroVideoComponent from "@/components/main_page/GetHeroVideoComponent";
import GetHeroImageComponent from "@/components/main_page/GetHeroImageComponent";
import { useNetwork } from "@mantine/hooks"; // Import the useNetwork hook
import useHeroTextColor from "@/hooks/useHeroTextColor";
import classNames from "classnames";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

function HeroSection() {
  const t = useTranslations("homePage");
  const t1 = useTranslations("components");

  const { effectiveType } = useNetwork(); // Get the user's connection type
  const color = useHeroTextColor();

  const defaultAnimation = useFramerAnimations();

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
        <motion.div
          className={s.hero__content}
          initial={"hidden"}
          whileInView={"visible"}
        >
          <motion.h1
            variants={defaultAnimation}
            className={titleClass}
            custom={3}
          >
            {t("hero")}
          </motion.h1>
          <div className={s.hero__text_wrapper}>
            <motion.p
              custom={6}
              variants={defaultAnimation}
              className={textClass}
            >
              {t("heroText1")}
            </motion.p>
            <motion.p
              custom={6.5}
              variants={defaultAnimation}
              className={textClass}
            >
              {t("heroText2")}
            </motion.p>
          </div>
          <div className={s.hero__button}>
            <MMainButtonComponent
              custom={8}
              variants={defaultAnimation}
              text={t1("ourSercvicesButton")}
              type="MainUsualButton"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
