"use client";
import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import MainTitleComponent from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations, useLocale } from "next-intl";
import useProductPortfolio from "@/hooks/useProductPortfolio";
import MotionWrapper from "@/hooks/MotionWrapper";

function ProductPortfolioSection() {
  const locale = useLocale();
  const t = useTranslations("commodityBrokerage");
  const { portfolio } = useProductPortfolio(locale);
  const reversed = portfolio.reverse();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper className={s.container} initial>
          <MainTitleComponent
            title={t("productPortfolioTitle")}
            color="black"
          />

          <ListCardsComponent data={reversed} />
        </MotionWrapper>
      </div>
    </section>
  );
}
export default ProductPortfolioSection;
