import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations } from "next-intl";

const data = {
  Grains: ["Wheat", "Barley", "Corn", "Sorghum", "Rye", "Oats"],
  Oils: ["Sunflower", "Soybean", "Rapeseed", "Linseed"],
  Fertilizers: [
    "Nitrogen Fertilizers",
    "Phosphorus Fertilizers",
    "Potassium Fertilizers",
    "Various combinations thereof",
  ],
  "Processed Products": [
    "Sunflower meal",
    "Rape meal",
    "Soybean meal",
    "Sunflower and soybean bran",
    "Wheat bran",
    "Sunflower, soybean, and rape oil",
  ],
};

function ProductPortfolioSection() {
  const t = useTranslations("commodityBrokerage");

  return (
    <div>
      <MainTitleComponent
        title={t("productPortfolioTitle")}
        className={s.subtitle}
      />
      <ListCardsComponent data={data} />
    </div>
  );
}
export default ProductPortfolioSection;
