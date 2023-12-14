import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const OurServicesSection = () => {
  const t = useTranslations("homePage");

  return (
    <section className={classNames(s.container, s.services)}>
      <MainTitleComponent
        title={t("servicesHeading")}
        className={s.services__title}
      />
      <OurServicesCardComponent />
    </section>
  );
};

export default OurServicesSection;
