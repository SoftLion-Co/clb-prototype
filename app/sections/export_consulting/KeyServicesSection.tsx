import React from "react";
import s from "./KeyServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import KeyServicesComponent from "@/components/export_consulting_page/KeyServicesComponent";
import { useTranslations } from "next-intl";

function KeyServices() {
  const t = useTranslations("exportConsulting");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("keyServicesTitle")} left mobileLeft/>
          <KeyServicesComponent />
        </div>
      </div>
    </section>
  );
}

export default KeyServices;
