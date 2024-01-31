"use client";
import React, { useState } from "react";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent, { MMainTitleComponent } from "@/components/MainTitleComponent";
import MapBoxComponent from "@/components/map_component/MapBoxComponent";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/hooks/MotionWrapper";
import useFramerAnimations from "@/hooks/useFramerAnimations";
interface CountryInfo {
  country: string;
  agriculturalCrops: string[];
  deliveryOptions: string[];
}

const TradingMarketSection = () => {
  const t = useTranslations("homePage.tradingMarkets");
  const defaultAnimation = useFramerAnimations();

  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(
    null
  );

  const handleCountrySelect = (countryData: CountryInfo | null) => {
    setSelectedCountry(countryData);
  };

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial viewport={{ margin: "20% 0% -20% 0%" }}>
          <MMainTitleComponent title={t("tradingMarketsTitle")} color="black" variants={defaultAnimation}/>
          <MotionWrapper className={s.map} initial viewport={{ margin: "20% 0% -20% 0%" }}>
            <MotionWrapper className={s.map__container} variants>
              <MapBoxComponent onCountrySelect={handleCountrySelect} />
            </MotionWrapper>

            <MotionWrapper className={s.map__content} variants>
              {selectedCountry ? (
                <>
                  <h2 className={s.map__title}>{selectedCountry?.country}</h2>

                  <div className={s.map__cultures}>
                    <p className={s.map__subtitle}>
                      {t("agriculturalCropsTitle")}:
                    </p>
                    <ul className={s.map__list}>
                      {selectedCountry?.agriculturalCrops.map((crop) => (
                        <li className={s.map__item} key={crop}>
                          {crop}
                        </li>
                      ))}
                    </ul>
                  </div>

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
            </MotionWrapper>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default TradingMarketSection;
