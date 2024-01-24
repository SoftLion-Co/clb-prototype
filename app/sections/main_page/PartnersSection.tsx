"use client";
import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

const PartnersSection = () => {
  const t = useTranslations("homePage");
  const defaultAnimation = useFramerAnimations()

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={s.container}
          initial={"hidden"}
          whileInView={"visible"}
          variants={defaultAnimation}
        >
          <MainTitleComponent title={t("partnersHeading")} color="black" left />
          <GetPartnersComponent />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
