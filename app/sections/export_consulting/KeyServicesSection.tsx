"use client";
import React from "react";
import s from "./KeyServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import KeyServicesComponent from "@/components/export_consulting_page/KeyServicesComponent";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";

function KeyServices() {
  const t = useTranslations("exportConsulting");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MotionWrapper variants>
            <MainTitleComponent title={t("keyServicesTitle")} left mobileLeft />
          </MotionWrapper>
          <KeyServicesComponent />
        </MotionWrapper>
      </div>
    </section>
  );
}

export default KeyServices;
