"use client";
import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MainArticleSection from "@/app/sections/article_page/MainArticleSection";
import MoreArticlesSection from "@/app/sections/article_page/MoreArticlesSection";
import useBlogData from "@/hooks/useBlogData";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";

export async function generateMetadata({}) {
  return { title: "Article" };
}

interface BlogArticleParams {
  blogId: string;
}

const BlogArticle: FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogId = params.blogId;
  const { blog, loading, error } = useBlogData(blogId);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const metadata = await generateMetadata({});
      setTitle(metadata.title);
    }

    fetchData();
  }, []);

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
