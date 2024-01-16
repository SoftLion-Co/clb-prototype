"use client";
import React from "react";
import ListCardsComponent from "@/components/ListCardsComponent";
import useBrokeragePortfolio from "@/hooks/useBrokeragePortfolio";
import { useLocale } from "next-intl";

function ProductPortfolioSection() {
  const locale = useLocale();
  const { portfolio } = useBrokeragePortfolio(locale);

  return (
    <>
      <ListCardsComponent data={portfolio} container />
    </>
  );
}
export default ProductPortfolioSection;
