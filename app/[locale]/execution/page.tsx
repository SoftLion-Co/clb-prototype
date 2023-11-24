import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import PageTitleComponent from "@/components/PageTitleComponent";
import { useTranslations } from "next-intl";

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
        <ThreeCardsComponent imagePosition={2} smallText={t("heroSmallText")} bigText={t("heroBigText")} />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Execution;
