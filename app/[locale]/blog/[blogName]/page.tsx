"use client";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MainArticleSection from "@/app/sections/article_page/MainArticleSection";
import MoreArticlesSection from "@/app/sections/article_page/MoreArticlesSection";
import useBlogData from "@/hooks/useBlogData";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";

// export async function generateMetadata({}) {
//   return { title: "Article" };
// }

interface BlogArticleParams {
  blogName: string;
}

const BlogArticle: FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogName = params.blogName;
  const { blog, loading, error } = useBlogData(blogName);
  
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
      <MainArticleSection data={blog} />
      <MoreArticlesSection blogId={blogName} />
      <ContactUsSection />
    </React.Fragment>
  );
};

export default BlogArticle;
