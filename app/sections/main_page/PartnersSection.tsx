"use client";
import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const t = useTranslations("homePage");

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
        <motion.div
          className={s.container}
          initial={"hidden"}
          whileInView={"visible"}
          variants={textAnimation}
        >
          <MainTitleComponent title={t("partnersHeading")} color="black" left />
          <GetPartnersComponent />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
