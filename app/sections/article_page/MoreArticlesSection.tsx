"use client";
import React, { useState } from "react";
import pagination from "@/components/PaginationComponent.module.scss";
import s from "./MoreArticlesSection.module.scss";
import SmallCardBlogComponent from "@/components/blog/SmallCardBlogComponent";
import useBlogsData from "@/hooks/useBlogsData";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";

interface MoreArticlesSectionProps {
  blogId: string;
  locale: string;
}

const MoreArticlesSection: React.FC<MoreArticlesSectionProps> = ({
  blogId,
  locale,
}) => {
  const { blogs, loading, error } = useBlogsData();
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
    <div className={s.articles}>
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
  );
};

export default MoreArticlesSection;
