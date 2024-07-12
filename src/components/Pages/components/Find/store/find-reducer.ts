import { CarType } from "src/app/api/types/cars.types";
import { Reducer } from "redux";
import { Actions, InitialState } from "./types/find-reducer.types";

export const initialState = {
  cars: [] as CarType[],
  isLoading: true,
  totalCarsCount: 0,
  currentPage: 1,
  pageSize: 12,
};

const findReducer: Reducer<InitialState, Actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "find/cars":
      return {
        ...state,
        cars: action.cars,
        isLoading: false,
      };
    case "find/loading":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "find/totalCarsCount":
      return {
        ...state,
        totalCarsCount: action.totalCarsCount,
      };
    case "find/currentPage":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "find/pageSize":
      return {
        ...state,
        pageSize: action.pageSize,
      };
    default: {
      return state;
    }
  }
};

export default findReducer;
