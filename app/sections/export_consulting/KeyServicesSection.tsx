"use client";
import React from "react";
import s from "./KeyServicesSection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import KeyServicesComponent from "@/components/export_consulting_page/KeyServicesComponent";
import { useTranslations } from "next-intl";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

function KeyServices() {
  const t = useTranslations("exportConsulting");
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={s.container}
          initial
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("keyServicesTitle")}
            left
            mobileLeft
            variants={defaultAnimation}
          />
          <KeyServicesComponent />
        </MotionWrapper>
      </div>
    </section>
  );
}

export default KeyServices;
