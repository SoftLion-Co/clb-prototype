import React from "react";
import Image from "next/image";
import s from "./OurCoreServices.module.scss";
import BrandElement from "@/images/vectors/brand-element-4.svg";
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
          <MainTitleComponent
            title={t("ourCoreServicesTitle")}
            className={s.services__title}
            left
            color="blue"
            mobileLeft
          />

          <OurCoreServicesComponent />

          <Image
            className={s.brand__element}
            src={BrandElement}
            alt={"brand element"}
          />
        </MotionWrapper>
      </div>
    </section>
  );
}

export default OurCoreServices;
