import React, { useState, useEffect, FC } from "react";
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
import BrandElement from "@/images/vectors/brand-element-5.svg";
import { useMediaQuery } from "@mantine/hooks";
import useBlogHero from "@/hooks/useBlogHero";

interface HeroData {
  id: number;
  acf: Acf;
}

interface Acf {
  hero_title_en: string;
  hero_text_en: string | undefined;
  hero_title_es: string;
  hero_text_es: string | undefined;
  hero_title_de: string;
  hero_text_de: string | undefined;
  hero_title_ua: string;
  hero_text_ua: string | undefined;
}

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  onClick,
  disabled,
  children,
  className,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classNames(s.paginationButton, className)}
  >
    {children}
  </button>
);

interface BlogSectionProps {
  blogs: Array<any>;
}

const BlogSection: FC<BlogSectionProps> = ({ blogs }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279.98px)"
  );
  const { setScrollToTop } = useScrollToTop();
  const [currentPage, setCurrentPage] = useState(0);
  const blogHero = useBlogHero();
  const itemsPerPage = 6;
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    setScrollToTop();
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setScrollToTop();
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(blogs.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
      setScrollToTop();
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = blogs.slice(startIndex, endIndex);

  const [gridRows, setGridRows] = useState(0);

  useEffect(() => {
    const rowsForMobile = Math.ceil(visibleItems.length / 1);
    const rowsForTablet = Math.ceil(visibleItems.length / 2);

    if (isMobile) {
      setGridRows(rowsForMobile);
    } else {
      setGridRows(rowsForTablet);
    }
  }, [visibleItems.length, isMobile, isTablet]);

  const renderTabletCard = (data: any, index: number) => {
    const tabletOrder = [0, 3, 6];
    if (tabletOrder.includes(index % 7)) {
      return <BigCardBlogComponent info={data} locale={locale} />;
    } else {
      return <SmallCardBlogComponent info={data} locale={locale} />;
    }
  };

  if (!blogHero || blogHero.length === 0) {
    return null; // Повертаємо нуль, якщо дані ще не завантажені або відсутні
  }

  return (
    <section className={s.box}>
      <div className={s.background}>
        <PageTitleComponent
          className={s.blog__title}
          title={(blogHero[0].acf as any)[`hero_title_${locale}`]}
          text={(blogHero[0].acf as any)[`hero_text_${locale}`]}
        />
        <div
          className={classNames(s.container, s.blog__cards)}
          style={{ gridTemplateRows: `repeat(${gridRows}, 1fr)` }}
        >
          {visibleItems.map((data: any, index: number) => (
            <>
              {isMobile ? (
                <SmallCardBlogComponent info={data} locale={locale} />
              ) : isTablet ? (
                renderTabletCard(data, index)
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

        <div className={classNames(s.container, pagination.pagination)}>
          <PaginationButton
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={classNames(pagination.pagination__button, {
              [pagination.pagination__arrow_disabled]: currentPage === 0,
            })}
          >
            <Image
              className={pagination.pagination__arrow_image}
              src={Arrow}
              alt="Previous"
            />
          </PaginationButton>

          <ReactPaginate
            breakLabel={"•••"}
            breakClassName={pagination.pagination__break}
            pageCount={Math.ceil(blogs.length / itemsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={pagination.pagination__content}
            activeLinkClassName={pagination.pagination__page}
            pageClassName={pagination.pagination__pages}
            activeClassName={pagination.active}
            previousLabel={""}
            nextLabel={""}
            forcePage={currentPage}
          />

          <PaginationButton
            className={classNames(pagination.pagination__button, {
              [pagination.pagination__arrow_disabled]:
                currentPage === Math.ceil(blogs.length / itemsPerPage) - 1,
            })}
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(blogs.length / itemsPerPage) - 1
            }
          >
            <Image
              className={pagination.pagination__arrow_image}
              src={Arrow}
              alt="Next"
            />
          </PaginationButton>
        </div>

        <Image
          className={s.brand__element}
          src={BrandElement}
          alt="brand element"
        />
      </div>
    </section>
  );
};

export default BlogSection;
