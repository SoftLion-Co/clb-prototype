import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";

const OurServicesSection = () => {
  return (
    <section className={classNames(s.container, s.services)}>
      <MainTitleComponent title="Our Services" className={s.services__title} />
      <OurServicesCardComponent />
    </section>
  );
};

export default OurServicesSection;
