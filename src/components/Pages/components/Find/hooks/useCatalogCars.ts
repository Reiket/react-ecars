import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import {
  carsSelector,
  currentPageCarsSelector,
  isLoadingSelector,
  pageSizeCarsSelector,
} from "../store/selectors/find-selectors";
import { useEffect } from "react";
import { fetchCars } from "../store/thunks/fetchCars";

export const useCatalogCars = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(carsSelector);
  const currentPage = useAppSelector(currentPageCarsSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const pageSize = useAppSelector(pageSizeCarsSelector);
  useEffect(() => {
    dispatch(fetchCars(currentPage, pageSize));
  }, [dispatch, pageSize]);
  return { cars, isLoading };
};
