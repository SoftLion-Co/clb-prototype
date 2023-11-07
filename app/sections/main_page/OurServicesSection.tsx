import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";

const OurServicesSection = () => {
  return (
    <section className={s.container}>
      <MainTitleComponent title="Our Services" className={s.services__title} />
    </section>
  );
};

export default OurServicesSection;
