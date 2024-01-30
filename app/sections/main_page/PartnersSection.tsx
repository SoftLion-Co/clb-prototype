"use client";
import React from "react";
import s from "./PartnersSection.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import { useTranslations } from "next-intl";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

const PartnersSection = () => {
  const t = useTranslations("homePage");

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
            title={t("partnersHeading")}
            color="black"
            left
            variants={defaultAnimation}
          />
          <GetPartnersComponent />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default PartnersSection;
