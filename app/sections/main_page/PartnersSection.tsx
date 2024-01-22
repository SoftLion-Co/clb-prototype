"use client"
import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const PartnersSection = () => {
  const t = useTranslations("homePage");
  const { animationProps } = useScrollAnimation();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div {...animationProps} className={s.container}>
          <MainTitleComponent title={t("partnersHeading")} color="black" left />
          <GetPartnersComponent />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
