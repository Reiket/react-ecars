import React, { FC } from "react";
import CatalogFilters from "./components/CatalogFilters/CatalogFilters";
import CatalogInfo from "./components/CatalogInfo";
import CatalogList from "./components/CatalogList";
import Section from "src/shared/components/Section/Section";
import Pagination from "src/shared/components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import {
  currentPageCarsSelector,
  isLoadingSelector,
  pageSizeCarsSelector,
  totalCarsCountSelector,
} from "../../store/selectors/find-selectors";
import { fetchCars } from "../../store/thunks/fetchCars";
import { useLocation } from "react-router-dom";
import { useNavigateSearch } from "src/shared/hooks/useNavigateSearch";
import qs from "qs";
import { BlogQueryParams } from "../../../Blog/components/BlogList/types/blog-list.types";
import { ROUTES } from "src/app/router/router";

interface CatalogProps {
  onClick: () => void;
}

const Catalog: FC<CatalogProps> = ({ onClick }) => {
  const currentPage = useAppSelector(currentPageCarsSelector);
  const totalPageCount = useAppSelector(totalCarsCountSelector);
  const pageSize = useAppSelector(pageSizeCarsSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigateSearch();

  React.useEffect(() => {
    const parsed = qs.parse(location.search.substring(1)) as BlogQueryParams;
    const actualPage = parsed.page ? Number(parsed.page) : 1;
    dispatch(fetchCars(actualPage, pageSize));
  }, []);

  React.useEffect(() => {
    const query: Partial<BlogQueryParams> = {};
    if (currentPage !== 1) query.page = String(currentPage);
    navigate(ROUTES.find, qs.stringify(query));
  }, [currentPage]);
  const onClickHandler = (page: number) => {
    dispatch(fetchCars(page, pageSize));
  };

  return (
    <Section name={"catalog"}>
      <CatalogInfo />
      <CatalogFilters onClick={onClick} />
      <CatalogList />
      <Pagination
        currentPage={currentPage}
        total={totalPageCount}
        size={pageSize}
        isLoading={isLoading}
        onClick={onClickHandler}
      />
    </Section>
  );
};

export default Catalog;
