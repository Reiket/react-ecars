import { AppStateType } from "src/app/store/types/store.types";

export const carsSelector = (state: AppStateType) => {
  return state.find.cars;
};

export const isLoadingSelector = (state: AppStateType) => {
  return state.find.isLoading;
};

export const currentPageCarsSelector = (state: AppStateType) => {
  return state.find.currentPage;
};

export const totalCarsCountSelector = (state: AppStateType) => {
  return state.find.totalCarsCount;
};

export const pageSizeCarsSelector = (state: AppStateType) => {
  return state.find.pageSize;
};
