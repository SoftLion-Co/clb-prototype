"use client";

import React from "react";
import { Helmet } from "react-helmet";
import BlogSection from "@/app/sections/blog_page/BlogSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import useBlogsData from "@/hooks/useBlogsData";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";

export async function generateMetadata({}) {
  return { title: "Blog" };
}

export default function Blog({}) {
  const { blogs, loading, error } = useBlogsData();

  return (
    <React.Fragment>
      <div>
        {blogs.length === 0 && <BlogSkeleton />}
        {error && <p>Error: {error}</p>}
        <BlogSection blogs={blogs} />
      </div>

      <ContactUsSection />
    </React.Fragment>
  );
}
