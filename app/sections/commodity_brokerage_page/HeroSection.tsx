"use client";
import React from "react";
import classNames from "classnames";
import s from "./HeroSection.module.scss";
import image from "@/images/commodity_brokerage/1.jpg";
import { useTranslations } from "next-intl";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import PageTitleComponent from "@/components/PageTitleComponent";
import {
  MMainButtonComponent,
} from "@/components/MainButtonComponent";
import { motion } from "framer-motion";
import { MCommodityHeroImage } from "@/components/commodity_brokerage_page/CommodityHeroImage";
import useFramerAnimations from "@/hooks/useFramerAnimations";

function HeroSection() {
  const t = useTranslations("commodityBrokerage");
  const t1 = useTranslations("header");
  const defaultAnimation = useFramerAnimations()

  return (
    <div className={classNames(s.box)}>
      <div className={s.background}>
        <PageTitleComponent
          title={t("commodityBrokerageTitle")}
          className={s.hero__title}
        />
        <motion.div
          className={classNames(s.hero, s.container)}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <div className={s.hero__texts}>
            <motion.h2
              className={s.hero__heading}
              variants={defaultAnimation}
              custom={1}
            >
              {t("commodityBrokerageSubtitle")}
            </motion.h2>
            <motion.p variants={defaultAnimation}
              custom={2} className={s.hero__text}>{t("heroText")}</motion.p>
           

            <ScrollLink
              to="contactUsSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <MMainButtonComponent
              text={t1("getInTouch")}
              typeButton="MainUsualButton"
            />
            </ScrollLink>
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
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
