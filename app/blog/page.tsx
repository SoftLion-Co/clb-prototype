"use client";
import s from "./page.module.scss";
import pagination from "@/components/PaginationComponent.module.scss";
import React, { useState } from "react";
import classNames from "classnames";
import ReactPaginate from "react-paginate";
import Image from "next/image";

import Arrow from "@/images/vectors/arrow.svg";
import Picture from "@/images/home-hero-test.png";

import PageTitleComponent from "@/components/PageTitleComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";

import useScrollToTop from "@/hooks/useScrollToTop";

export default function Blog() {
  const cardData: Array<any> = [
    {
      imageSrc: Picture,
      title: "Article title 1",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 2",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 3",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 4",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 5",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 6",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 7",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 8",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 9",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 10",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 11",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 12",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 13",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
    {
      imageSrc: Picture,
      title: "Article title 14",
      text: "Lorem ipsum dolor sit amet consectetur. Nibh leo non luctus diam sed quam. Vitae donec enim rhoncus iaculis amet non semper. Ut enim vulputate proin laoreet rhoncus enim. Dictum mollis eu aliquam massa.",
    },
  ].reverse();

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(0);
  const { setScrollToTop } = useScrollToTop();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    setScrollToTop();
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = cardData.slice(startIndex, endIndex);

  const firstBigCardIndex = 0;
  const lastBigCardIndex = Math.min(visibleItems.length - 1, 6);

  return (
    <section className={classNames(s.blog, s.container)}>
      <PageTitleComponent
        className={s.blog__title}
        title="our news"
        text="lorem ipsum dolor sit amet consectetur."
      />

      <div className={s.blog__cards}>
        {visibleItems.map((data, index) => (
          <div key={index} className={s.blog__grid}>
            {cardData.length === 2 ? (
              index === 0 ? (
                <BigCardBlogComponent data={data} />
              ) : (
                <SmallCardBlogComponent data={data} />
              )
            ) : (
              <>
                {index === firstBigCardIndex ||
                (index === lastBigCardIndex && visibleItems.length > 6) ? (
                  <BigCardBlogComponent data={data} />
                ) : (
                  <SmallCardBlogComponent data={data} />
                )}
              </>
            )}
          </div>
        ))}
      </div>

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
        pageCount={Math.ceil(cardData.length / itemsPerPage)}
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
