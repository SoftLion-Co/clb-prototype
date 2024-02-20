"use client";
import React, { useState, useEffect } from "react";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";

import Link from "next/link";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import MotionWrapper from "@/hooks/MotionWrapper";
import MainTitleComponent from "@/components/MainTitleComponent";

const BlogCardsSection = () => {
  const t = useTranslations("blog");
  const t1 = useTranslations("components");
  const [cardsToRender, setCardsToRender] = useState(3);
  const { blogs: latestBlogs, loading, error } = useBlogsData(true);
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
        <MotionWrapper
          className={classNames(s.container, s.blog__container)}
          initial
          viewport
        >
          <MainTitleComponent
            className={s.blog__title}
            title={t("blogTitle")}
            color="black"
            left
          />

          {latestBlogs.length !== 0 && (
            <MotionWrapper initial className={s.blog__cards} viewport>
              {latestBlogs
                .slice(0, cardsToRender)
                .map((blog: any, index: any) => (
                  <MotionWrapper key={index} variants custom={index}>
                    <SmallCardBlogComponent info={blog} locale={locale} />
                  </MotionWrapper>
                ))}
            </MotionWrapper>
          )}
          <MotionWrapper initial viewport variants className={s.blog__button}>
            <Link href={`/${locale}/blog`} >
              <MainButtonComponent
                text={t1("moreOurNews")}
                typeButton="MainArrowButton"
              />
            </Link>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default BlogCardsSection;
