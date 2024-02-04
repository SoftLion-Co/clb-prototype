import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesCardComponent from "@/components/main_page/OurServicesCardComponent";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";
import GrainsImage from "@/images/icons/Grains.svg";
import BySeaImage from "@/images/icons/BySea.svg";
import Execution from "@/images/icons/Execution.svg";
import ExportConsulting from "@/images/icons/ExportConsulting.svg";

const OurServicesSection = () => {
  const t = useTranslations("homePage");

  const servicesCards = [
    {
      title: t("servicesCards.0.title"),
      text: t("servicesCards.0.text"),
      image: GrainsImage,
      href: "commodity-brokerage",
    },
    {
      title: t("servicesCards.1.title"),
      text: t("servicesCards.1.text"),
      image: BySeaImage,
      href: "freight-brokerage",
    },
    {
      title: t("servicesCards.2.title"),
      text: t("servicesCards.2.text"),
      image: Execution,
      href: "execution",
    },
    {
      title: t("servicesCards.3.title"),
      text: t("servicesCards.3.text"),
      image: ExportConsulting,
      href: "export-consulting",
    },
  ];

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
          </MotionWrapper>
          <div className={s.services__cards}>
            {servicesCards.map((item, index) => (
              <MotionWrapper initial viewport>
                <MotionWrapper variants custom={index}>
                  <OurServicesCardComponent
                    href={item.href}
                    key={index}
                    title={item.title}
                    text={item.text}
                    image={item.image}
                  />
                </MotionWrapper>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default OurServicesSection;
