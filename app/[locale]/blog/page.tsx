"use client";

import s from "./page.module.scss";
import React from "react";
import BlogSection from "@/app/sections/blog_page/BlogSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import useBlogsData from "@/hooks/useBlogsData";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";
import classNames from "classnames";

export default function Blog() {
  const { blogs, loading, error } = useBlogsData();

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
