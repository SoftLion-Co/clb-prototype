import s from "./page.module.scss";
import classNames from "classnames";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import PageTitleComponent from "@/components/PageTitleComponent";
import { useTranslations } from "next-intl";
import Incoterms from "@/app/sections/execution_page/Incoterms";
import MotionWrapper from "@/hooks/MotionWrapper";

const Execution = () => {
  const t = useTranslations("execution");

  return (
    <div>
      <div className={s.box}>
        <MotionWrapper
          initial
          viewportLarge
          className={classNames(s.background, s.execution)}
        >
          <PageTitleComponent
            title={t("executionTitle")}
            text={t("executionSubtitle")}
            className={s.execution__title}
          />
          <ThreeCardsComponent
            className={classNames(s.container, s.execution__cards)}
            imagePosition={2}
            smallText={t("heroSmallText")}
            bigText={t("heroBigText")}
            color="blue"
          />

          <Incoterms />
        </MotionWrapper>
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Execution;
