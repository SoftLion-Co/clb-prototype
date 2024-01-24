"use client";
import React, { useState } from "react";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MapBoxComponent from "@/components/map_component/MapBoxComponent";
import { useTranslations } from "next-intl";
import countriesData from "@/components/map_component/countriesData";

interface CountryInfo {
  country: string;
  agriculturalCrops: string[];
  deliveryOptions: string[];
}

const TradingMarketSection = () => {
  const t = useTranslations("homePage");

  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(
    null
  );

  const handleCountrySelect = (countryData: CountryInfo) => {
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
              <h2 className={s.map__title}>{selectedCountry?.country}</h2>
              <ul className={s.map__list}>
                <p className={s.map__subtitle}>Cultures:</p>
                {selectedCountry?.agriculturalCrops.map((crop) => (
                  <li className={s.map__item} key={crop}>
                    {crop}
                  </li>
                ))}
              </ul>

              <div className={s.map__delivery}>
                <p className={s.map__subtitle}>Delivery options:</p>
                <ul className={s.map__options}>
                  {selectedCountry?.deliveryOptions.map((option) => (
                    <li className={s.map__items} key={option}>
                      {option}
                    </li>
                  ))}
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
