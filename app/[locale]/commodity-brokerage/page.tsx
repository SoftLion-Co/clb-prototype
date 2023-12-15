import s from "./page.module.scss";
import ContactUsSection from "../../sections/main_page/ContactUsSection";
import PageTitleComponent from "@/components/PageTitleComponent";
import ProductPortfolioSection from "../../sections/commodity_brokerage_page/ProductPortfolioSection";

import HeroSection from "../../sections/commodity_brokerage_page/HeroSection";
import { useTranslations } from "next-intl";
import OurCoreServices from "@/app/sections/commodity_brokerage_page/OurCoreServices";

const Commodity = () => {
  const t = useTranslations("commodityBrokerage");

  return (
    <div className={s.commodity}>
      <div className={s.container}>
        <PageTitleComponent
          title={t("commodityBrokerageTitle")}
          className={s.commodity__title}
        />
        <HeroSection />
        <ProductPortfolioSection />
        <OurCoreServices />
      </div>
      <ContactUsSection/>
    </div>
  );
};

export default Commodity;
