import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations } from "next-intl";

function ProductPortfolioSection() {
  const t = useTranslations("freightBrokerage");

  const byCar = t("byCar");
  const byCarList = {
    "hoppers": t("byCarList.hoppers"),
    "semiTrailers": t("byCarList.semiTrailers"),
  };
  
  const byRail = t("byRail");
  const byRailList = {
    "hopperCars": t("byRailList.hopperCars"),
    "closedTypeCars": t("byRailList.closedTypeCars"),
  };
  
  const byRiver = t("byRiver");
  const byRiverList = {
    "vesselsFromTheDanubePorts": t("byRiverList.vesselsFromTheDanubePorts"),
    "mixedTypeRiverSeaVessels": t("byRiverList.mixedTypeRiverSeaVessels"),
  };
  
  const bySea = t("bySea");
  const bySeaList = {
    "Vessels for bulk cargo for one or more trips": t("bySeaList.vesselsForBulkCargo"),
  };

  const data={
    [byCar]: byCarList,
    [byRail]: byRailList,
    [byRiver]: byRiverList,
    [bySea]: bySeaList,
  }


  return (
    <div>
      {/* <MainTitleComponent
        title={t("productPortfolioTitle")}
        className={s.subtitle}
      /> */}
      <ListCardsComponent data={data} />
    </div>
  );
}
export default ProductPortfolioSection;
