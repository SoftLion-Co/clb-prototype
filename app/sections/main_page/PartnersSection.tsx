import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";

const PartnersSection = () => {
  const t = useTranslations("homePage");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MainTitleComponent title={t("partnersHeading")} color="black" left />
          <MotionWrapper variants></MotionWrapper>
          <GetPartnersComponent />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default PartnersSection;
