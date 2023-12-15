import React from "react";
import s from "./OurCoreServices.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/commodity_brokerage_page/OurCoreServicesComponent";
import { useTranslations } from "next-intl";

function OurCoreServices() {
  const t = useTranslations("commodityBrokerage");

  return (
    <div className={s.services}>
      <MainTitleComponent
        title={t("ourCoreServicesTitle")}
        className={s.services__title}
        left
        color="blue"
      />
      <OurCoreServicesComponent />
    </div>
  );
}

export default OurCoreServices;
