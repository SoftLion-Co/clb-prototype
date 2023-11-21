import React from "react";
import s from "./PartnersSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import GetPartnersComponent from "@/components/partners/GetPartnersComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const PartnersSection = () => {
  const t = useTranslations("homePage")

  return (
    <section className={classNames(s.container, s.partners)}>
      <MainTitleComponent title={t("partnersHeading")} className={s.partners__title} />
      <GetPartnersComponent />
    </section>
  );
};

export default PartnersSection;
