"use client";
import s from "./OurServicesSection.module.scss";
import {
  MMainTitleComponent,
} from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
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

  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={classNames(s.container, s.services)}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("servicesHeading")}
            color="black"
            variants={defaultAnimation}
          />

          <motion.div
            className={s.services__cards}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "20% 0% -20% 0%" }}
          >
            {servicesCards.map((item, index) => (
              <motion.div variants={defaultAnimation}>
                <OurServicesCardComponent
                  key={index}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                />{" "}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
