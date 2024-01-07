import s from "./page.module.scss";
import classNames from "classnames";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import PageTitleComponent from "@/components/PageTitleComponent";
import { useTranslations } from "next-intl";
import Incoterms from "@/images/incoterms.svg";
import Image from "next/image";

const Execution = () => {
  const t = useTranslations("execution");

  return (
    <div>
      <div className={s.box}>
        <div className={classNames(s.background, s.execution)}>
          <PageTitleComponent
            title={t("executionTitle")}
            text={t("executionSubtitle")}
            className={s.execution__title}
          />
          <ThreeCardsComponent
            className={s.execution__cards}
            imagePosition={2}
            smallText={t("heroSmallText")}
            bigText={t("heroBigText")}
            color="blue"
          />
          <Image
            className={classNames(s.execution__incoterms, s.container)}
            src={Incoterms}
            alt="Incoterms"
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <ContactUsSection />
    </div>
  );
};

export default Execution;
