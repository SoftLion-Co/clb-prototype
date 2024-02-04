"use client";
import React, { useState, useEffect } from "react";
import s from "./BlogCardSection.module.scss";
import classNames from "classnames";

import Link from "next/link";
import { MMainTitleComponent } from "@/components/MainTitleComponent";
import MainTitleComponent from "@/components/MainTitleComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import useFramerAnimations from "@/hooks/useFramerAnimations";
import MotionWrapper from "@/hooks/MotionWrapper";

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
        <MotionWrapper
          className={classNames(s.container, s.blog__container)}
          initial
          viewport
        >
          <MotionWrapper variants>
            <MainTitleComponent
              className={s.blog__title}
              title={t("blogTitle")}
              color="black"
              left
            />
          </MotionWrapper>

          {
            //TODO: Skeleton when latestBlogs.length === 0}
          }

          {latestBlogs.length !== 0 && (
            <MotionWrapper initial className={s.blog__cards} viewport>
              {latestBlogs.slice(0, cardsToRender).map((blog, index) => (
                <MotionWrapper key={index} variants custom={index}>
                  <SmallCardBlogComponent info={blog} locale={locale} />
                </MotionWrapper>
              ))}
            </MotionWrapper>
          )}
          <MotionWrapper initial viewport className={s.blog__button}>
            <Link href={`/${locale}/blog`}>
              <MMainButtonComponent
                variants={defaultAnimation}
                text={t1("moreOurNews")}
                typeButton="MainArrowButton"
              />
            </Link>

          <MotionWrapper initial viewport variants animation="footer" className={s.blog__button}>
            <MainButtonComponent
              text={t1("moreOurNews")}
              href={"/blog"}
              typeButton="MainArrowButton"
            />
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default BlogCardsSection;
