import React, { useState, useEffect } from "react";
import s from "./BlogSection.module.scss";
import classNames from "classnames";
import PageTitleComponent from "@/components/PageTitleComponent";
import BigCardBlogComponent from "@/components/blog/BigCardBlogComponent";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import pagination from "@/components/PaginationComponent.module.scss";

import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import useScrollToTop from "@/hooks/useScrollToTop";

import ReactPaginate from "react-paginate";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";
import { useMediaQuery } from "@mantine/hooks";

interface BlogSectionProps {
  blogs: Array<any>;
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279.98px)"
  );
  const { setScrollToTop } = useScrollToTop();

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    setScrollToTop();
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = blogs.slice(startIndex, endIndex);

  return (
    <div className={s.box}>
      <div className={s.background}>
        <PageTitleComponent
          className={s.blog__title}
          title={t("blogTitle")}
          text={t("blogSubtitle")}
        />

        <div className={classNames(s.container, s.blog__cards)}>
          {visibleItems.map((data: any, index: number) => (
            <>
              {isMobile ? (
                <SmallCardBlogComponent info={data} locale={locale} />
              ) : isTablet ? (
                <>
                  {index === 0 || index === 3 || index === 4 ? (
                    <BigCardBlogComponent info={data} locale={locale} />
                  ) : (
                    <SmallCardBlogComponent info={data} locale={locale} />
                  )}
                </>
              ) : (
                <>
                  {index === 0 || index === 3 || index === 4 ? (
                    <BigCardBlogComponent info={data} locale={locale} />
                  ) : (
                    <SmallCardBlogComponent info={data} locale={locale} />
                  )}
                </>
              )}
            </>
          ))}
        </div>

        <ReactPaginate
          previousLabel={
            <div
              className={classNames(pagination.pagination__arrow_previous, {
                [pagination.pagination__arrow_disabled]: currentPage === 0,
              })}
            >
              <Image
                className={pagination.pagination__arrow_image}
                src={Arrow}
                alt="arrow"
              />
            </div>
          }
          nextLabel={
            <div
              className={classNames(pagination.pagination__arrow_next, {
                [pagination.pagination__arrow_disabled]:
                  currentPage === Math.ceil(blogs.length / itemsPerPage) - 1,
              })}
            >
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
      </div>
    </div>
  );
};

export default BlogSection;
