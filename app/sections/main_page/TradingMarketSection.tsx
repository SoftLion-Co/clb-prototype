"use client";
import React, { useState } from "react";
import MapChart from "@/components/MapChart";
import s from "./TradingMarketSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import { useTranslations } from "next-intl";
import MapBoxComponent from "@/components/MapBoxComponent";

const TradingMarketSection = () => {
  const t = useTranslations("homePage");

  const culturesData = [
    { name: "Wheat" },
    { name: "Barley" },
    { name: "Corn" },
    { name: "Sorghum" },
    { name: "Rye" },
    { name: "Oats" },
    { name: "Sunflower" },
    { name: "Soybean" },
    { name: "Rapeseed" },
    { name: "Linseed" },
  ];

  const deliveryOptions = [
    { option: "CIF" },
    { option: "FAC" },
    { option: "FCA" },
    { option: "CFR" },
  ];

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
              <h2 className={s.map__title}>Germany</h2>

              <ul className={s.map__list}>
                <p className={s.map__subtitle}>Cultures:</p>
                {culturesData.map((item, index) => (
                  <li className={s.map__item} key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className={s.map__delivery}>
                <p className={s.map__subtitle}>Delivery options:</p>

                <ul className={s.map__options}>
                  {deliveryOptions.map((item, index) => (
                    <li className={s.map__items} key={index}>
                      {item.option}
                      {","}
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
