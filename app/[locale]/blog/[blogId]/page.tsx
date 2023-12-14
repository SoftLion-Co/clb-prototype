"use client";
import s from "./page.module.scss";
import useBlogsData from "@/hooks/useBlogsData";
import MainArticleSection from "@/app/sections/article_page/MainArticleSection";
import SocialLinksSection from "@/app/sections/article_page/SocialLinksSection";
import MoreArticlesSection from "@/app/sections/article_page/MoreArticlesSection";
import useLocale from "@/hooks/useLocale";
import useBlogData from "@/hooks/useBlogData";

interface BlogArticleParams {
  blogId: string;
}

const BlogArticle: React.FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogId = params.blogId;
  const { blog, loading, error } = useBlogData(blogId);
  const locale = useLocale(); // Move this hook call to the top level

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
    <div className={s.container}>
      <MainArticleSection data={blog} locale={locale} />
      <SocialLinksSection />
      <MoreArticlesSection blogId={blogId} locale={locale} />
    </div>
  );
};

export default BlogArticle;
