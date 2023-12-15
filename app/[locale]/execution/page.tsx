import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import PageTitleComponent from "@/components/PageTitleComponent";
import { useTranslations } from "next-intl";
import Incoterms from "@/images/incoterms.svg"
import Image from "next/image";

const Execution = () => {
  const t = useTranslations("execution");

  return (
    <div className={s.execution}>
      <div className={s.container}>
        <PageTitleComponent
          title={t("executionTitle")}
          text={t("executionSubtitle")}
          className={s.execution__title}
        />
        <ThreeCardsComponent
          imagePosition={2}
          smallText={t("heroSmallText")}
          bigText={t("heroBigText")}
          color="blue"
        />
        <Image className={s.execution__incoterms} src={Incoterms} alt="Incoterms" width={2000} height={2000}/>
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Execution;
