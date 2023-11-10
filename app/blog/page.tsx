"use client";
import s from "./page.module.scss";
import React, { useState } from "react";
import classNames from "classnames";
import ReactPaginate from "react-paginate";
import Arrow from "@/images/vectors/arrow.svg";
import Image from "next/image";
import PageTitleComponent from "@/components/PageTitleComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";

import useScrollToTop from "@/hooks/useScrollToTop";

export default function Blog() {
  const cardData: Array<any> = [
    {
      title: "Article title 1",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 2",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 3",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 4",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 5",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 6",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 7",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 8",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 9",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 10",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 11",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 12",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 13",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      title: "Article title 14",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
  ].reverse();

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(0);
  const { setScrollToTop } = useScrollToTop();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    setScrollToTop(true);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = cardData.slice(startIndex, endIndex);

  const firstBigCardIndex = 0;
  const lastBigCardIndex = visibleItems.length - 1;

  return (
    <section className={classNames(s.blog, s.container)}>
      <div className={s.blog__content}>
        <PageTitleComponent
          className={s.blog__title}
          title="our news"
          text="lorem ipsum dolor sit amet consectetur."
        />

        <div className={s.blog__cards}>
          {visibleItems.map((data, index) => (
            <div key={index} className={s.blog__grid}>
              {index === firstBigCardIndex || index === lastBigCardIndex ? (
                <BigCardBlogComponent data={data} />
              ) : (
                <SmallCardBlogComponent data={data} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={s.paginationP}>
        <ReactPaginate
          previousLabel={
            <div className={s.paginationArrowPrevious}>
              <Image
                className={s.paginationArrowImage}
                src={Arrow}
                alt="arrow"
              />
            </div>
          }
          nextLabel={
            <div className={s.paginationArrowNext}>
              <Image
                className={s.paginationArrowImage}
                src={Arrow}
                alt="arrow"
              />
            </div>
          }
          breakLabel={"..."}
          breakClassName={s.break__me}
          pageCount={Math.ceil(cardData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={s.pagination}
          pageClassName={s.pagesPagination}
          activeClassName={s.active}
        />
      </div>
    </section>
  );
}
