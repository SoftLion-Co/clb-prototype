import s from "./page.module.scss";
import classNames from "classnames";
import PageTitleComponent from "@/components/PageTitleComponent";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "@/app/sections/freight_brokerage/BrokeragePortfolioSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import { useTranslations } from "next-intl";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const Freight = () => {

  return (
    <div>
      <div className={classNames(s.box, s.desktop)}>
        <section className={classNames(s.background, s.freight)}>
          <GetHeroComponent path="freight-hero" className={s.freight__title}/>
          <ThreeCardsComponent
            className={classNames(s.container, s.freight__cards)}
            path="freight-cards"
          />
          <ProductPortfolioSection />
        </section>
      </div>

      <div className={s.mobile}>
        <div className={s.box}>
          <section className={classNames(s.background, s.freight)}>
          <GetHeroComponent path="freight-hero" className={s.freight__title}/>
            <ThreeCardsComponent
              className={classNames(s.container, s.freight__cards)}
              path="freight-cards"
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
