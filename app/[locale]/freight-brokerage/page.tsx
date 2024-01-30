import s from "./page.module.scss";
import classNames from "classnames";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "@/app/sections/freight_brokerage/BrokeragePortfolioSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import { useTranslations } from "next-intl";

const Freight = () => {
  const t = useTranslations("freightBrokerage");

  return (
    <div>
      <div className={classNames(s.box, s.desktop)}>
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
            imageSrc="freightBrokerage"
          />
          <ProductPortfolioSection />
        </section>
      </div>

      <div className={s.mobile}>
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
              imageSrc="freightBrokerage"
            />
          </section>
        </div>
        <div className={s.box}>
          <section className={classNames(s.background, s.freight)}>
            <ProductPortfolioSection />
          </section>
        </div>
      </div>

      <ContactUsSection />
    </div>
  );
};

export default Freight;
