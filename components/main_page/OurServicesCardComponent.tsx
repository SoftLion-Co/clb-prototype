import s from "./OurServicesCardComponent.module.scss";
import ReadMoreComponent from "@/components/ReadMoreComponent";
import { useTranslations } from "next-intl";

const OurServicesCardComponent = () => {
  const  t  = useTranslations("homePage");

  const servicesCards = [
    {
      title: t("servicesCards.0.title"),
      text: t("servicesCards.0.text"),
    },
    {
      title: t("servicesCards.1.title"),
      text: t("servicesCards.1.text"),
    },
    {
      title: t("servicesCards.2.title"),
      text: t("servicesCards.2.text"),
    },
    {
      title: t("servicesCards.3.title"),
      text: t("servicesCards.3.text"),
    },
  ];

  return (
    <div className={s.card}>
      {servicesCards.map((service, index) => (
        <div className={s.card__container} key={index}>
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
