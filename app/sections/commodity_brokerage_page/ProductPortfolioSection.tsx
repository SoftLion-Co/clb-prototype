import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations } from "next-intl";

function ProductPortfolioSection() {
  const t = useTranslations("commodityBrokerage");

  const grains = t("grains");
  const grainsList = {
    Wheat: t("grainsList.wheat"),
    Barley: t("grainsList.barley"),
    Corn: t("grainsList.corn"),
    Sorghum: t("grainsList.sorghum"),
    Rye: t("grainsList.rye"),
    Oats: t("grainsList.oats"),
  };

  const oils = t("oils");
  const oilsList = {
    Sunflower: t("oilsList.sunflower"),
    Soybean: t("oilsList.soybean"),
    Rapeseed: t("oilsList.rapeseed"),
    Linseed: t("oilsList.linseed"),
  };

  const fertilizers = t("fertilizers");
  const fertilizersList = {
    "Nitrogen Fertilizers": t("fertilizersList.nitrogen"),
    "Phosphorus Fertilizers": t("fertilizersList.phosphorus"),
    "Potassium Fertilizers": t("fertilizersList.potassium"),
    Various: t("fertilizersList.various"),
  };

  const processedProducts = t("processedProducts");
  const processedProductsList = {
    "Sunflower meal": t("processedProductsList.sunflowerMeal"),
    "Rape meal": t("processedProductsList.rapeMeal"),
    "Soybean meal": t("processedProductsList.soybeanMeal"),
    "Sunflower and soybean bran": t(
      "processedProductsList.sunflowerAndSoybeanBran"
    ),
    "Wheat bran": t("processedProductsList.wheatBran"),
    "Sunflower, soybean, and rape oil": t(
      "processedProductsList.SunflowerSoybeanAndRapeOil"
    ),
  };

  const data = {
    [grains]: grainsList,
    [oils]: oilsList,
    [fertilizers]: fertilizersList,
    [processedProducts]: processedProductsList,
  };

  return (
    <div>
      <MainTitleComponent title={t("productPortfolioTitle")} color="black"/>
      <ListCardsComponent data={data} />
    </div>
  );
}
export default ProductPortfolioSection;
