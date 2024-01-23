import s from "./OurServicesSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

import GrainsImage from "@/images/icons/Grains.svg";
import BySeaImage from "@/images/icons/BySea.svg";
import Execution from "@/images/icons/Execution.svg";
import ExportConsulting from "@/images/icons/ExportConsulting.svg";
import ScrollAnimationWrapper from "@/hooks/ScrollAnimationWrapper";

const OurServicesSection = () => {
  const t = useTranslations("homePage");

  const servicesCards = [
    {
      title: t("servicesCards.0.title"),
      text: t("servicesCards.0.text"),
      image: GrainsImage,
    },
    {
      title: t("servicesCards.1.title"),
      text: t("servicesCards.1.text"),
      image: BySeaImage,
    },
    {
      title: t("servicesCards.2.title"),
      text: t("servicesCards.2.text"),
      image: Execution,
    },
    {
      title: t("servicesCards.3.title"),
      text: t("servicesCards.3.text"),
      image: ExportConsulting,
    },
  ];

  return (
    <section className={s.box}>
      <div className={s.background}>
          <div className={classNames(s.container, s.services)}>
          <ScrollAnimationWrapper>
            <MainTitleComponent title={t("servicesHeading")} color="black" />
            </ScrollAnimationWrapper>
            <div className={s.services__cards}>
              {servicesCards.map((item, index) => (
                <ScrollAnimationWrapper animationType="high">
                <OurServicesCardComponent
                  key={index}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                /></ScrollAnimationWrapper>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
