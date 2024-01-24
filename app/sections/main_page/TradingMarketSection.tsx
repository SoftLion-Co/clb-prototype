"use client";
import React, { useState } from "react";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MapBoxComponent from "@/components/map_component/MapBoxComponent";
import { useTranslations } from "next-intl";
import countriesData from "@/components/map_component/countriesData";

const TradingMarketSection = () => {
  const t = useTranslations("homePage");

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (countryData: any) => {
    setSelectedCountry(countryData);
  };

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("tradingMarkets")} color="black" />
          <div className={s.map}>
            <div className={s.map__container}>
              <MapBoxComponent onCountrySelect={handleCountrySelect} />
            </div>

            <div className={s.map__content}>
              {selectedCountry && (
                <>
                  <h2 className={s.map__title}>{selectedCountry.country}</h2>
                  <ul className={s.map__list}>
                    <p className={s.map__subtitle}>Cultures:</p>
                    {selectedCountry.agriculturalCrops.map((crop, index) => (
                      <li key={index} className={s.map__item}>
                        {crop}
                      </li>
                    ))}
                  </ul>
                  <div className={s.map__delivery}>
                    <p className={s.map__subtitle}>Delivery options:</p>
                    <ul className={s.map__options}>
                      {selectedCountry.deliveryOptions.map((option, index) => (
                        <li key={index} className={s.map__items}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingMarketSection;
