import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "../../sections/freight_brokerage/ProductPortfolioSection";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";

const Freight = () => {
  const t = useTranslations("freightBrokerage");
  const locale = useLocale();
  return (
    <div className={s.freight}>
      <div className={s.container}>
        <PageTitleComponent
          title={t("freightBrokerageTitle")}
          text={t("freightBrokerageSubtitle")}
          className={s.freight__title}
        />
        <ThreeCardsComponent
          imagePosition={1}
          smallText={t("heroSmallText")}
          bigText={t("heroBigText")}
        />
        <ProductPortfolioSection />
      </div>
      <ContactUsSection locale={locale} />
    </div>
  );
};

export default Freight;
