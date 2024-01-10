import React from "react";
import s from "./OurCoreServices.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurCoreServicesComponent from "@/components/commodity_brokerage_page/OurCoreServicesComponent";
import { useTranslations } from "next-intl";

function OurCoreServices() {
  const t = useTranslations("commodityBrokerage");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent
            title={t("ourCoreServicesTitle")}
            className={s.services__title}
            left
            color="blue"
            mobileLeft
          />
          <OurCoreServicesComponent />
        </div>
      </div>
    </section>
  );
}

export default OurCoreServices;
