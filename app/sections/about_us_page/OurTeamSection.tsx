"use client";
import React, { useState } from "react";
import classNames from "classnames";
import s from "./OurTeamSection.module.scss";
import pagination from "@/components/PaginationComponent.module.scss";

import ReactPaginate from "react-paginate";
import Image from "next/image";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurTeamComponent from "@/components/about_us/OurTeamComponent";
import Arrow from "@/images/vectors/arrow.svg";
import useOurTeamData from "@/hooks/useOurTeamData";

const OurTeamSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const { team, loading, error } = useOurTeamData();

  const pageCount = Math.ceil(team.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    if (selected === 0) {
      // Якщо користувач обирає першу сторінку, переходимо до останньої
      setCurrentPage(pageCount - 1);
    } else if (selected === pageCount - 1) {
      // Якщо користувач обирає останню сторінку, переходимо до першої
      setCurrentPage(0);
    } else {
      setCurrentPage(selected);
    }
  };

  const displayedData = team.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className={classNames(s.container, s.team)}>
      <MainTitleComponent className={s.team__title} title="our team" />
      <OurTeamComponent teamMembers={displayedData} />

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
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={pagination.pagination}
        pageClassName={pagination.pagination__pages}
        activeClassName={pagination.pagination__active}
        pageLinkClassName={pagination.hidden}
      />
    </section>
  );
};

export default OurTeamSection;
