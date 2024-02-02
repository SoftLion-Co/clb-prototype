"use client";
import React from "react";
import s from "./OurCoreServices.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/commodity_brokerage_page/OurCoreServicesComponent";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";

function OurCoreServices() {
  const t = useTranslations("commodityBrokerage");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MotionWrapper variants>
            <MainTitleComponent
              title={t("ourCoreServicesTitle")}
              className={s.services__title}
              left
              color="blue"
              mobileLeft
            />
          </MotionWrapper>

          <OurCoreServicesComponent />
        </MotionWrapper>
      </div>
    </section>
  );
}

export default OurCoreServices;
