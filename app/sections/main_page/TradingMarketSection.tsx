"use client";
import React, { useState, useCallback, useMemo } from "react";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MapBoxComponent from "@/components/map_component/MapBoxComponent";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";

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

  const handleCountrySelect = useCallback((countryData: CountryInfo | null) => {
    setSelectedCountry(countryData);
  }, []);

  const agriculturalCropsList = useMemo(() => {
    return selectedCountry ? (
      <div className={s.map__cultures}>
        <h4 className={s.map__subtitle}>{t("agriculturalCropsTitle")}:</h4>
        <ul className={s.map__list}>
          {selectedCountry.agriculturalCrops.map((crop) => (
            <li className={s.map__item} key={crop}>
              {crop}
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }, [selectedCountry, t]);

  const deliveryOptionsList = useMemo(() => {
    return selectedCountry ? (
      <div className={s.map__delivery}>
        <h4 className={s.map__subtitle}>{t("deliveryOptionsTitle")}:</h4>
        <ul className={s.map__options}>
          {selectedCountry.deliveryOptions.map((option, index) => (
            <li className={s.map__items} key={option}>
              {index === selectedCountry.deliveryOptions.length - 1
                ? `${option}.`
                : `${option},`}
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }, [selectedCountry, t]);

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport>
          <MainTitleComponent title={t("tradingMarketsTitle")} color="black" />

          <MotionWrapper className={s.map} initial viewport>
            <MotionWrapper className={s.map__container} variants>
              <MapBoxComponent onCountrySelect={handleCountrySelect} />
            </MotionWrapper>

            <MotionWrapper className={s.map__content} variants>
              {selectedCountry ? (
                <>
                  <h3 className={s.map__title}>{selectedCountry.country}</h3>
                  {agriculturalCropsList}
                  {deliveryOptionsList}
                </>
              ) : (
                <div className={s.map__box}>
                  <p className={s.map__message}>{t("tradingMarketsMessage")}</p>
                </div>
              )}
            </MotionWrapper>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default TradingMarketSection;
