"use client";
import React, { useState } from "react";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MapBoxComponent from "@/components/map_component/MapBoxComponent";
import { useTranslations } from "next-intl";
interface CountryInfo {
  country: string;
  agriculturalCrops: string[];
  deliveryOptions: string[];
}

const TradingMarketSection = () => {
  const t = useTranslations("homePage.tradingMarkets");

  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(
    null
  );

  const handleCountrySelect = (countryData: CountryInfo | null) => {
    setSelectedCountry(countryData);
  };

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent title={t("tradingMarketsTitle")} color="black" />
          <div className={s.map}>
            <div className={s.map__container}>
              <MapBoxComponent onCountrySelect={handleCountrySelect} />
            </div>

            <div className={s.map__content}>
              {selectedCountry ? (
                <>
                  <h2 className={s.map__title}>{selectedCountry?.country}</h2>
                  <ul className={s.map__list}>
                    <p className={s.map__subtitle}>
                      {t("agriculturalCropsTitle")}:
                    </p>
                    {selectedCountry?.agriculturalCrops.map((crop) => (
                      <li className={s.map__item} key={crop}>
                        {crop}
                      </li>
                    ))}
                  </ul>

                  <div className={s.map__delivery}>
                    <p className={s.map__subtitle}>
                      {t("deliveryOptionsTitle")}:
                    </p>
                    <ul className={s.map__options}>
                      {selectedCountry?.deliveryOptions.map((option, index) => (
                        <li className={s.map__items} key={option}>
                          {index === selectedCountry.deliveryOptions.length - 1
                            ? `${option}.`
                            : `${option},`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <div className={s.map__box}>
                  <p className={s.map__message}>{t("tradingMarketsMessage")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingMarketSection;
