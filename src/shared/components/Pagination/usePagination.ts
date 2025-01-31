import { PaginationFunction } from "./types/pagination.types";

export const usePagination = (
  total: number,
  size: number,
  onClick: PaginationFunction,
  currentPage: number,
) => {
  const totalCountPage = Math.ceil(total / size);
  const pages = [];
  for (let i = 1; i <= totalCountPage; i++) {
    pages.push(i);
  }
  const prevPageHandler = () => {
    if (currentPage > 1) {
      onClick(currentPage - 1);
    }
  };
  const nextPageHandler = () => {
    if (currentPage < totalCountPage) {
      onClick(currentPage + 1);
    }
  };

  const onClickPageHandler = (page: number) => {
    if (page >= 1 && page <= totalCountPage) {
      onClick(page);
    }
  };
  return {
    totalCountPage,
    pages,
    prevPageHandler,
    nextPageHandler,
    onClickPageHandler,
  };
};
