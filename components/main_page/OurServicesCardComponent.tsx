import s from "./OurServicesCardComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import { useTranslations } from "next-intl";

import GrainsImage from "@/images/icons/Grains.svg";
import BySeaImage from "@/images/icons/BySea.svg";
import Execution from "@/images/icons/Execution.svg";
import ExportConsulting from "@/images/icons/ExportConsulting.svg";

import Image from "next/image";

const OurServicesCardComponent = () => {
  const  t  = useTranslations("homePage");

  const servicesCards = [
    {
      title: t("servicesCards.0.title"),
      text: t("servicesCards.0.text"),
      image: GrainsImage
    },
    {
      title: t("servicesCards.1.title"),
      text: t("servicesCards.1.text"),
      image: BySeaImage
    },
    {
      title: t("servicesCards.2.title"),
      text: t("servicesCards.2.text"),
      image: Execution
    },
    {
      title: t("servicesCards.3.title"),
      text: t("servicesCards.3.text"),
      image: ExportConsulting
    },
  ];

  return (
    <div className={s.card}>
      {servicesCards.map((service, index) => (
        <div className={s.card__container} key={index}>
          <Image className={s.card__image} src={service.image} alt="" />
          <h3 className={s.card__title}>{service.title}</h3>
          <div className={s.card__content}>
            <p className={s.card__text}>{service.text}</p>
            <div className={s.card__box}>
              <ReadMoreComponent href="/" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServicesCardComponent;
