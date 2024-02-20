"use client";

import React from "react";
import { Helmet } from "react-helmet";
import BlogSection from "@/app/sections/blog_page/BlogSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import useBlogsData from "@/hooks/useBlogsData";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";

export default function Blog() {
  const { blogs, loading, error } = useBlogsData(true);

  const latestBlogs = blogs.slice(0, 3);

  return (
    <React.Fragment>
      <div>
        {loading && <BlogSkeleton />}
        {error && <p>Error: {error}</p>}
        {!loading && <BlogSection blogs={latestBlogs} />}
      </div>

      <ContactUsSection />
    </React.Fragment>
  );
}
