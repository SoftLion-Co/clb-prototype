"use client";
import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations } from "next-intl";
import useProductPortfolio from "@/hooks/useProductPortfolio";

function ProductPortfolioSection() {
  const t = useTranslations("commodityBrokerage");
  const product = useProductPortfolio("en");

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent
            title={t("productPortfolioTitle")}
            color="black"
          />
          <ListCardsComponent data={product} />
        </div>
      </div>
    </section>
  );
}
export default ProductPortfolioSection;
