import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";
import GetServicesComponent from "@/components/main_page/GetServicesComponent";

const OurServicesSection = () => {
  const t = useTranslations("homePage");

  return (
    <section id="servicesSection" className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={classNames(s.container, s.services)}
          initial
          viewport
        >
          <MotionWrapper variants>
            <MainTitleComponent title={t("servicesHeading")} color="black" />
            <GetServicesComponent />
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OurServicesSection;
