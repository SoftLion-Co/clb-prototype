"use client";
import classNames from "classnames";
import s from "./page.module.scss";
import Image from "next/image";
import useBlogsData from "@/hooks/useBlogsData";

interface BlogArticleParams {
  blogId: string;
}

const BlogArticle: React.FC<{ params: BlogArticleParams }> = ({ params }) => {
  const blogId = params.blogId;
  const { blogs, loading, error } = useBlogsData();

  // Find the blog with the matching id
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
    <div className={classNames(s.container, s.article)}>
      <div className={s.article__wrapper}>
        <h1 className={classNames(s.h1Default, s.article__title)}>
          {selectedBlog.title.rendered}
        </h1>
        <p>{selectedBlog.acf.date}</p>
        <Image
          src={selectedBlog.acf.mainimage}
          alt={selectedBlog.title.rendered}
          width={400}
          height={300}
        />
        <p>{selectedBlog.acf.text1}</p>
        <h2>{selectedBlog.acf.subheading1}</h2>
        <p>{selectedBlog.acf.text2}</p>
        <h3>{selectedBlog.acf.quote}</h3>
        <Image
          src={selectedBlog.acf.secondimage}
          alt={selectedBlog.title.rendered}
          width={400}
          height={300}
        />
        <h2>{selectedBlog.acf.subheading2}</h2>
        <p>{selectedBlog.acf.text3}</p>
      </div>
    </div>
  );
};

export default BlogArticle;
