"use client";
import React from "react";
import s from "./KeyServicesSection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import KeyServicesComponent from "@/components/export_consulting_page/KeyServicesComponent";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

function KeyServices() {
  const t = useTranslations("exportConsulting");
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={s.container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("keyServicesTitle")}
            left
            mobileLeft
            variants={defaultAnimation}
          />
          <KeyServicesComponent />
        </motion.div>
      </div>
    </section>
  );
}

export default KeyServices;
