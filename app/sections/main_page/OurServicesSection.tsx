"use client";
import s from "./OurServicesSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import { MOurServicesCardComponent } from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

import GrainsImage from "@/images/icons/Grains.svg";
import BySeaImage from "@/images/icons/BySea.svg";
import Execution from "@/images/icons/Execution.svg";
import ExportConsulting from "@/images/icons/ExportConsulting.svg";
import { motion } from "framer-motion";

const OurServicesSection = () => {
  const t = useTranslations("homePage");

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
    <section className={s.box}>
      <div className={s.background}>
        <motion.div initial={"hidden"} whileInView={"visible"}>
          <div className={classNames(s.container, s.services)}>
            <MainTitleComponent title={t("servicesHeading")} color="black" />
            <div className={s.services__cards}>
              {servicesCards.map((item, index) => (
                <motion.div
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ margin: "20% 0% -20% 0%" }}
                >
                  <MOurServicesCardComponent
                    key={index}
                    title={item.title}
                    text={item.text}
                    image={item.image}
                    variants={textAnimation}
                    custom={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
