import React from "react";
import s from "./KeyServices.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import KeyServicesComponent from "@/components/export_consulting_page/KeyServicesComponent";
import { useTranslations } from "next-intl";

function KeyServices() {
  const t = useTranslations("exportConsulting");

  return (
    <div className={s.services}>
      <MainTitleComponent
        title={t("keyServicesTitle")}
        left
      />
      <KeyServicesComponent />
    </div>
  );
}

export default KeyServices;
