"use client";
import React, { useState, useEffect } from "react";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";

import {
  MMainTitleComponent,
} from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent, {
  MMainButtonComponent,
} from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import { motion } from "framer-motion";
import useFramerAnimations from "@/hooks/useFramerAnimations";

const BlogCardsSection = () => {
  const t = useTranslations("blog");
  const t1 = useTranslations("components");
  const defaultAnimation = useFramerAnimations();
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

  return (
    <section className={s.box}>
      <div className={s.background}>
        <motion.div
          className={classNames(s.container, s.blog__container)}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ margin: "20% 0% -20% 0%" }}
        >
          <MMainTitleComponent
            variants={defaultAnimation}
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
              <motion.div
                key={index}
                variants={defaultAnimation}
                custom={index}
              >
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
              variants={defaultAnimation}
              text={t1("moreOurNews")}
              href={"/blog"}
              type="MainArrowButton"
              className={s.blog__button}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCardsSection;
