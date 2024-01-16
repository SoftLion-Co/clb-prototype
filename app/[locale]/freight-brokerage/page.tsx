import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "../../sections/freight_brokerage/BrokeragePortfolioSection";
import { useTranslations } from "next-intl";
import classNames from "classnames";

const Freight = () => {
  const t = useTranslations("freightBrokerage");

  return (
    <div>
      <div className={s.box}>
        <section className={classNames(s.background, s.freight)}>
          <PageTitleComponent
            title={t("freightBrokerageTitle")}
            text={t("freightBrokerageSubtitle")}
            className={s.freight__title}
          />
          <ThreeCardsComponent
            className={classNames(s.container, s.freight__cards)}
            imagePosition={3}
            smallText={t("heroSmallText")}
            bigText={t("heroBigText")}
            color="blue"
          />
          <ProductPortfolioSection />
        </section>
      </div>

      <ContactUsSection />
    </div>
  );
};

export default Freight;
