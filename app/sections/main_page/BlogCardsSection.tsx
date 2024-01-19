"use client";
import React, { useState, useEffect } from "react";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";

import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";

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

          <div className={s.blog__cards}>
            {latestBlogs.slice(0, cardsToRender).map((blog, index) => (
              <div key={index}>
                <SmallCardBlogComponent info={blog} locale={locale} />
              </div>
            ))}
          </div>

          <MainButtonComponent
            text={t1("moreOurNews")}
            href={"/blog"}
            typeButton="MainArrowButton"
            className={s.blog__button}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogCardsSection;
