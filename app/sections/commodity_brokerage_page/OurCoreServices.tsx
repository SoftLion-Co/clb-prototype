"use client";
import React from "react";
import s from "./OurCoreServices.module.scss";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/commodity_brokerage_page/OurCoreServicesComponent";
import { useTranslations } from "next-intl";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

function OurCoreServices() {
  const t = useTranslations("commodityBrokerage");
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={s.container}
          initial
          viewport
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
        </MotionWrapper>
      </div>
    </section>
  );
}

export default OurCoreServices;
