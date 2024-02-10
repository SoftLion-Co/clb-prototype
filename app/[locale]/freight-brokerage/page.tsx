import React from "react";
import s from "./page.module.scss";
import classNames from "classnames";
import ThreeCardsComponent from "@/components/ThreeCardsComponent";
import ProductPortfolioSection from "@/app/sections/freight_brokerage/BrokeragePortfolioSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import GetHeroComponent from "@/hooks/GetHeroComponent";

const Freight = () => {
  return (
    <React.Fragment>
      <section className={classNames(s.box, s.desktop)}>
        <div className={classNames(s.background, s.freight)}>
          <GetHeroComponent path="freight-hero" className={s.freight__title} />
          <ThreeCardsComponent
            className={classNames(s.container, s.freight__cards)}
            path="freight-cards"
          />
          <ProductPortfolioSection />
        </div>
      </section>

      <section className={s.mobile}>
        <div className={classNames(s.box)}>
          <section className={classNames(s.background, s.freight)}>
            <GetHeroComponent
              path="freight-hero"
              className={s.freight__title}
            />
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
      </section>

      <ContactUsSection />
    </React.Fragment>
  );
};

export default Freight;
