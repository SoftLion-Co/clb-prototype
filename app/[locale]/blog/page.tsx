"use client";

import s from "./page.module.scss";
import React from "react";
import BlogSection from "@/app/sections/blog_page/BlogSection";
import BlogCardsSection from "@/app/sections/main_page/BlogCardsSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import useBlogsData from "@/hooks/useBlogsData";
import useLocale from "@/hooks/useLocale";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";
import classNames from "classnames";

export default function Blog() {
  const { blogs, loading, error } = useBlogsData();

  const locale = useLocale();

  return (
    <section>
      <div className={classNames(s.container, s.blog__container)}>
        {blogs.length === 0 && <BlogSkeleton />}
        {error && <p>Error: {error}</p>}

        <BlogSection blogs={blogs} />
      </div>

      <ContactUsSection />
    </section>
  );
}
