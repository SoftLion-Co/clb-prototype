import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations } from "next-intl";

const data = {
  "By Car": [
    "Self-unloading hoppers",
    "Tent-covered semi-trailers with bogie containers",
  ],
  "By Rail": ["Hopper cars", "Closed type cars"],
  "By River": [
    "Vessels from the Danube ports",
    "Mixed type “river-sea” vessels",
  ],
  "By Sea": ["Vessels for bulk cargo for one or more trips"],
};

function ProductPortfolioSection() {
  const t = useTranslations("freightBrokerage");
  return (
    <div>
      <MainTitleComponent title={t("productPortfolioTitle")} className={s.subtitle} />
      <ListCardsComponent data={data} />
    </div>
  );
}
export default ProductPortfolioSection;
