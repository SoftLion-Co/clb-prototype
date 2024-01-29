"use client";
import React from "react";
import s from "./OurCoreServices.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/commodity_brokerage_page/OurCoreServicesComponent";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

function OurCoreServices() {
  const t = useTranslations("commodityBrokerage");
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
            title={t("ourCoreServicesTitle")}
            className={s.services__title}
            left
            color="blue"
            mobileLeft
            variants={defaultAnimation}
          />
          <OurCoreServicesComponent />
        </motion.div>
      </div>
    </section>
  );
}

export default OurCoreServices;
