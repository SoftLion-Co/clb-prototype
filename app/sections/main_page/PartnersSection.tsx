"use client";
import React from "react";
import s from "./PartnersSection.module.scss";
import {
  MMainTitleComponent,
} from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

const PartnersSection = () => {
  const t = useTranslations("homePage");

  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={s.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("partnersHeading")}
            color="black"
            left
            variants={defaultAnimation}
          />
          <GetPartnersComponent />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
