import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const PartnersSection = () => {
  const t = useTranslations("homePage");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("partnersHeading")} color="black" left />
          <GetPartnersComponent />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
