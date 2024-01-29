"use client";
import s from "./ProductPortfolioSection.module.scss";
import React from "react";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import ListCardsComponent from "@/components/ListCardsComponent";
import { useTranslations, useLocale } from "next-intl";
import useProductPortfolio from "@/hooks/useProductPortfolio";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

function ProductPortfolioSection() {
  const locale = useLocale();
  const t = useTranslations("commodityBrokerage");
  const { portfolio } = useProductPortfolio(locale);
  const reversed = portfolio.reverse();
  const defaultAnimation = useFramerAnimations();

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={s.container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            title={t("productPortfolioTitle")}
            color="black"
            variants={defaultAnimation}
          />
          <ListCardsComponent data={reversed} />
        </motion.div>
      </div>
    </section>
  );
}
export default ProductPortfolioSection;
