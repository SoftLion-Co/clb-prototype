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
import useFramerAnimations from "@/hooks/useFramerAnimations";

const OurServicesSection = () => {
  const t = useTranslations("homePage");
  const defaultAnimation = useFramerAnimations()

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
                    variants={defaultAnimation}
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
