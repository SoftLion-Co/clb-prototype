"use client";
import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations, useLocale } from "next-intl";
import useProductPortfolio from "@/hooks/useProductPortfolio";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

function ProductPortfolioSection() {
  const locale = useLocale();
  const t = useTranslations("commodityBrokerage");
  const { portfolio } = useProductPortfolio(locale);
  const reversed = portfolio.reverse();
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MotionWrapper
          className={s.container}
          initial
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("productPortfolioTitle")}
            color="black"
            variants={defaultAnimation}
          />
          <ListCardsComponent data={reversed} />
        </MotionWrapper>
      </div>
    </section>
  );
}
export default ProductPortfolioSection;
