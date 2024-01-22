"use client";
import s from "./OurServicesSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import GrainsImage from "@/images/icons/Grains.svg";
import BySeaImage from "@/images/icons/BySea.svg";
import Execution from "@/images/icons/Execution.svg";
import ExportConsulting from "@/images/icons/ExportConsulting.svg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const OurServicesSection = () => {
  const t = useTranslations("homePage");
  const { animationProps } = useScrollAnimation();

  const servicesCards = [
    {
      title: t("servicesCards.0.title"),
      text: t("servicesCards.0.text"),
      image: GrainsImage,
    },
    {
      title: t("servicesCards.1.title"),
      text: t("servicesCards.1.text"),
      image: BySeaImage,
    },
    {
      title: t("servicesCards.2.title"),
      text: t("servicesCards.2.text"),
      image: Execution,
    },
    {
      title: t("servicesCards.3.title"),
      text: t("servicesCards.3.text"),
      image: ExportConsulting,
    },
  ];

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          {...animationProps}
          className={classNames(s.container, s.services)}
        >
          <MainTitleComponent title={t("servicesHeading")} color="black" />

          <div className={s.services__cards}>
            {servicesCards.map((item, index) => (
              <OurServicesCardComponent
                key={index}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
