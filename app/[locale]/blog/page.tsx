"use client";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogSection from "@/app/sections/blog_page/BlogSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import useBlogsData from "@/hooks/useBlogsData";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";

async function generateMetadata({}) {
  return { title: "Blog - Commodities & Logistics Brokers" };
}

export default function Blog({}) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const metadata = await generateMetadata({});
      setTitle(metadata.title);
    }

    fetchData();
  }, []);

  const { blogs, loading, error } = useBlogsData();

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {blogs.length === 0 && <BlogSkeleton />}
      {error && <p>Error: {error}</p>}
      <BlogSection blogs={blogs} />

      <ContactUsSection />
    </React.Fragment>
  );
}
