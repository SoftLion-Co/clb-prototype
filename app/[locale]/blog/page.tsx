"use client";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogSection from "@/app/sections/blog_page/BlogSection";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import useBlogsData from "@/hooks/useBlogsData";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";

export async function generateMetadata({}) {
  return { title: "Blog" };
}

export default function Blog() {
  const [metadata, setMetadata] = useState({ title: "" });
  const { blogs, loading, error } = useBlogsData();

  useEffect(() => {
    const fetchData = async () => {
      const data = await generateMetadata({});
      setMetadata(data);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <div>
        {blogs.length === 0 && <BlogSkeleton />}
        {error && <p>Error: {error}</p>}
        <BlogSection blogs={blogs} />
      </div>

      <ContactUsSection />
    </React.Fragment>
  );
}
