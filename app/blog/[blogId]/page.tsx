"use client";
import classNames from "classnames";
import s from "./page.module.scss";
import Image from "next/image";
import useBlogsData from "@/hooks/useBlogsData";
import MainArticleSection from "@/app/sections/article_page/MainArticleSection";
import SocialLinksSection from "@/app/sections/article_page/SocialLinksSection";
import MoreArticlesSection from "@/app/sections/article_page/MoreArticlesSection";

interface BlogArticleParams {
  blogId: string;
}

const BlogArticle: React.FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogId = params.blogId;
  const { blogs, loading, error } = useBlogsData();

  const selectedBlog = blogs.find((blog) => blog.id.toString() === blogId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!selectedBlog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className={s.container}>
      <MainArticleSection data={selectedBlog} />
      <SocialLinksSection />
      <MoreArticlesSection blogId={blogId} />
    </div>
  );
};

export default BlogArticle;
