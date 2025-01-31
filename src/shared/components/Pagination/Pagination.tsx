import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { PaginationProps } from "./types/pagination.types";
import Section from "../Section/Section";
import { usePagination } from "./usePagination";
import PaginationBtn from "./PaginationBtn";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onClick,
  total,
  size,
  isLoading,
}) => {
  const {
    pages,
    totalCountPage,
    prevPageHandler,
    onClickPageHandler,
    nextPageHandler,
  } = usePagination(total, size, onClick, currentPage);
  const isPrevButtonDisabled = currentPage === 1 || isLoading;
  const isNextButtonDisabled = currentPage === totalCountPage || isLoading;
  return (
    <Section name={"pagination"}>
      <div className="pagination__body">
        <PaginationBtn
          isDisabled={isPrevButtonDisabled}
          onClick={prevPageHandler}
        >
          <IoIosArrowRoundBack />
        </PaginationBtn>
        {pages.map((page) => {
          const isActiveButton = currentPage === page && !isLoading;
          return (
            <PaginationBtn
              key={page}
              isActiveButton={isActiveButton}
              isDisabled={isLoading}
              onClick={() => onClickPageHandler(page)}
            >
              {page}
            </PaginationBtn>
          );
        })}
        <PaginationBtn
          isDisabled={isNextButtonDisabled}
          onClick={nextPageHandler}
        >
          <IoIosArrowRoundForward />
        </PaginationBtn>
      </div>
    </Section>
  );
};

export default Pagination;
