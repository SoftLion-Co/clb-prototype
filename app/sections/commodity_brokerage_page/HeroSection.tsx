"use client";
import React from "react";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import image from "@/images/commodity_brokerage/1.jpg";
import { useTranslations } from "next-intl";
import PageTitleComponent from "@/components/PageTitleComponent";
import MainButtonComponent, {
  MMainButtonComponent,
} from "@/components/MainButtonComponent";
import classNames from "classnames";
import { motion } from "framer-motion";
import { MCommodityHeroImage } from "@/components/commodity_brokerage_page/CommodityHeroImage";

function HeroSection() {
  const t = useTranslations("commodityBrokerage");
  const t1 = useTranslations("header");

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

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
              variants={textAnimation}
              custom={1}
            >
              {t("commodityBrokerageSubtitle")}
            </motion.h2>
            <motion.p
              className={s.hero__text}
              variants={textAnimation}
              custom={2}
            >
              {t("heroText")}
            </motion.p>
            <MMainButtonComponent
              text={t1("getInTouch")}
              variants={textAnimation}
              custom={3}
            />
          </div>
          <MCommodityHeroImage
            className={s.hero__image}
            src={image}
            alt="Hero image"
            width={1000}
            height={1000}
            variants={textAnimation}
            custom={1.5}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
