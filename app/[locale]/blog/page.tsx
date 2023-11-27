"use client";
import s from "./page.module.scss";
import pagination from "@/components/PaginationComponent.module.scss";
import React, { useState } from "react";
import classNames from "classnames";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import PageTitleComponent from "@/components/PageTitleComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import useScrollToTop from "@/hooks/useScrollToTop";
import useBlogsData from "@/hooks/useBlogsData";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";


export default function Blog() {
  const t = useTranslations("blog")

  const { blogs, loading, error } = useBlogsData();
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(0);
  const { setScrollToTop } = useScrollToTop();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    setScrollToTop();
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = blogs.slice(startIndex, endIndex);

  const firstBigCardIndex = 0;
  const lastBigCardIndex = Math.min(visibleItems.length - 1, 6);

  const locale = useLocale();

  return (
    <section className={classNames(s.blog, s.container)}>
      <PageTitleComponent
        className={s.blog__title}
        title={t("blogTitle")}
        text={t("blogSubtitle")}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {blogs.length > 0 && (
        <div className={s.blog__cards}>
          {visibleItems.map((data, index) => (
            <div key={index} className={s.blog__grid}>
              {blogs.length === 2 ? (
                index === 0 ? (
                  <BigCardBlogComponent info={data} locale={locale}/>
                ) : (
                  <SmallCardBlogComponent info={data} locale={locale}/>
                )
              ) : (
                <>
                  {index === firstBigCardIndex ||
                  (index === lastBigCardIndex && visibleItems.length > 6) ? (
                    <BigCardBlogComponent info={data} locale={locale}/>
                  ) : (
                    <SmallCardBlogComponent info={data} locale={locale}/>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}

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
    </section>
  );
}
