"use client";
import s from "./page.module.scss";
import MainArticleSection from "@/app/sections/article_page/MainArticleSection";
import SocialLinksSection from "@/app/sections/article_page/SocialLinksSection";
import MoreArticlesSection from "@/app/sections/article_page/MoreArticlesSection";
import useBlogData from "@/hooks/useBlogData";
import ContactUsSection from "@/app/sections/main_page/ContactUsSection";
import classNames from "classnames";

interface BlogArticleParams {
  blogId: string;
}

const BlogArticle: React.FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogId = params.blogId;
  const { blog, loading, error } = useBlogData(blogId);

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
    <div>
      <div className={classNames(s.article, s.container)}>
        <MainArticleSection data={blog} />
        <SocialLinksSection />
        <MoreArticlesSection blogId={blogId} />
      </div>
      <ContactUsSection />
    </div>
  );
};

export default BlogArticle;
