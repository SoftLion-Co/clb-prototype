"use client";
import React, { useState, useEffect } from "react";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";

import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent, {
  MMainButtonComponent,
} from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import { motion } from "framer-motion";

const BlogCardsSection = () => {
  const t = useTranslations("blog");
  const t1 = useTranslations("components");
  const [cardsToRender, setCardsToRender] = useState(3);
  const { latestBlogs } = useBlogsData();
  const locale = useLocale();

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      if (width <= 767.98) setCardsToRender(1);
      else if (width >= 768 && width < 1280) setCardsToRender(2);
      else setCardsToRender(3);
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);

    return () => {
      window.removeEventListener("resize", updateCardCount);
    };
  }, []);

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
      delay: 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      delay: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={classNames(s.container, s.blog__container)}>
          <MainTitleComponent
            className={s.blog__title}
            title={t("blogTitle")}
            color="black"
            left
          />

          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            className={s.blog__cards}
            viewport={{ margin: "20% 0% -20% 0%" }}
          >
            {latestBlogs.slice(0, cardsToRender).map((blog, index) => (
              <motion.div key={index} variants={textAnimation} custom={index}>
                <SmallCardBlogComponent info={blog} locale={locale} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ margin: "20% 0% -20% 0%" }}
          >
            <MMainButtonComponent
              variants={textAnimation}
              text={t1("moreOurNews")}
              href={"/blog"}
              type="MainArrowButton"
              className={s.blog__button}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogCardsSection;
