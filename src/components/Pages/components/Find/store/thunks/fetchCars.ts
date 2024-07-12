import { Thunk } from "../types/find-reducer.types";
import { actions } from "../actions/find-actions";
import { findAPI } from "../api/find-api";

export const fetchCars = (currentPage: number, pageSize: number): Thunk => {
  return async (dispatch) => {
    dispatch(actions.toggleIsLoading(true));
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.setTotalCars(pageSize));
    let { data } = await findAPI.getCars(currentPage, pageSize);
    dispatch(actions.setCars(data.data));
    dispatch(actions.setCurrentPage(data.meta!.pagination.total));
  };
};
