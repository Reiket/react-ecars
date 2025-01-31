import { Thunk } from "../types/find-reducer.types";
import { actions } from "../actions/find-actions";
import { findAPI } from "../api/find-api";

export const fetchCars = (currentPage: number, pageSize: number): Thunk => {
  return async (dispatch) => {
    dispatch(actions.toggleIsLoading(true));
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.setPageSize(pageSize));
    let { data } = await findAPI.getCars(currentPage, pageSize);
    dispatch(actions.setCars(data.data));
    console.log(data.meta!.pagination.total);
    dispatch(actions.setTotalCars(data.meta!.pagination.total));
  };
};
