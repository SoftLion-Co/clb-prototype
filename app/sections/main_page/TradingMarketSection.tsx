"use client";
import React from "react";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MapBoxComponent from "@/components/map_component/MapBoxComponent";
import { useTranslations } from "next-intl";
import countriesData from "@/components/map_component/countriesData";

const TradingMarketSection = () => {
  const t = useTranslations("homePage");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("tradingMarkets")} color="black" />
          <div className={s.map}>
            <div className={s.map__container}>
              <MapBoxComponent />
            </div>

            <div className={s.map__content}>
              <h2 className={s.map__title}>{/* here country name */}</h2>

              <ul className={s.map__list}>
                <p className={s.map__subtitle}>Cultures:</p>
                <li className={s.map__item}>{/* here agriculturalCrops */}</li>
              </ul>

              <div className={s.map__delivery}>
                <p className={s.map__subtitle}>Delivery options:</p>

                <ul className={s.map__options}>
                  <li className={s.map__items}>{/* here deliveryOptions */}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingMarketSection;
