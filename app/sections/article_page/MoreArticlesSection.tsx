"use client";
import React, { useState } from "react";
import pagination from "@/components/PaginationComponent.module.scss";
import s from "./MoreArticlesSection.module.scss";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import useBlogsData from "@/hooks/useBlogsData";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import useLocale from "@/hooks/useLocale";
import MainTitleComponent from "@/components/MainTitleComponent";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface MoreArticlesSectionProps {
  blogId: string;
}

const MoreArticlesSection: React.FC<MoreArticlesSectionProps> = ({
  blogId,
}) => {
  const locale = useLocale();
  const { blogs, loading, error } = useBlogsData();
  const t = useTranslations("components");
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const filteredBlogs = blogs.filter(
    (blog) => blog.id !== parseInt(blogId, 10)
  );
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={classNames(s.container, s.articles)}>
          <MainTitleComponent title={t("moreArticles")} left color="green" />
          <div className={s.articles__cards}>
            {visibleItems.map((blog, index) => (
              <div key={index}>
                <SmallCardBlogComponent info={blog} locale={locale} />
              </div>
            ))}
          </div>

          {/* ReactPaginate */}
          {blogs.length > itemsPerPage && (
            <ReactPaginate
              previousLabel={
                <div className={pagination.pagination__arrow_previous}>
                  <Image
                    className={pagination.pagination__arrow_image}
                    src={Arrow}
                    alt="arrow"
                  />
                </div>
              }
              nextLabel={
                <div className={pagination.pagination__arrow_next}>
                  <Image
                    className={pagination.pagination__arrow_image}
                    src={Arrow}
                    alt="arrow"
                  />
                </div>
              }
              breakLabel={"..."}
              breakClassName={pagination.pagination__break}
              pageCount={Math.ceil(blogs.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={pagination.pagination}
              pageClassName={pagination.pagination__pages}
              activeClassName={pagination.active}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MoreArticlesSection;
