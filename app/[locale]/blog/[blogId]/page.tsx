"use client";
import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MainArticleSection from "@/app/sections/article_page/MainArticleSection";
import MoreArticlesSection from "@/app/sections/article_page/MoreArticlesSection";
import useBlogData from "@/hooks/useBlogData";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";

interface BlogArticleParams {
  blogId: string;
}

const BlogArticle: FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogId = params.blogId;
  const { blog, loading, error } = useBlogData(blogId);
  const [title, setTitle] = useState("");

  async function generateMetadata({ heading_en }: { heading_en: string }) {
    return { title: heading_en };
  }

  useEffect(() => {
    async function fetchData() {
      if (blog) {
        const metadata = await generateMetadata({
          heading_en: blog.acf.heading_en,
        });
        setTitle(metadata.title);
      }
    }

    fetchData();
  }, [blog]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <MainArticleSection data={blog} />
      <MoreArticlesSection blogName={blogId} />
      <ContactUsSection />
    </React.Fragment>
  );
};

export default BlogArticle;
