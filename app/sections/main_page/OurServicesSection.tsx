import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const OurServicesSection = () => {
  const t = useTranslations("homePage");

  return (
    <section className={s.box}>
      <div className={s.services}>
        <div className={classNames(s.container, s.services__cards)}>
          <MainTitleComponent title={t("servicesHeading")} />
          <OurServicesCardComponent />
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
