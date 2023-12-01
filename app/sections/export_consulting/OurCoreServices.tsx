import React from "react";
import s from "./OurCoreServices.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/OurCoreServicesComponent";
import { useTranslations } from "next-intl";

function OurCoreServices() {
  const t = useTranslations("exportConsulting");

  return (
    <div className={s.services}>
      <MainTitleComponent
        title={t("coreServicesTitle")}
        left
      />
      <OurCoreServicesComponent />
    </div>
  );
}

export default OurCoreServices;
