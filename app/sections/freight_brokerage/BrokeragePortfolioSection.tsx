"use client";
import React from "react";
import ListCardsComponent from "@/components/ListCardsComponent";
import useBrokeragePortfolio from "@/hooks/useBrokeragePortfolio";
import { useLocale } from "next-intl";

function ProductPortfolioSection() {
  const locale = useLocale();
  const { portfolio } = useBrokeragePortfolio(locale);
  const reversed = portfolio.reverse()

  return (
    <div>
      <ListCardsComponent data={reversed} container />
    </div>
  );
}
export default ProductPortfolioSection;
