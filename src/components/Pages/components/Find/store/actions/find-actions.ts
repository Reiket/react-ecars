import { CarType } from "src/app/api/types/cars.types";

export const actions = {
  setCars: (cars: CarType[]) => ({ type: "find/cars", cars }) as const,
  toggleIsLoading: (isLoading: boolean) =>
    ({ type: "find/loading", isLoading }) as const,
  setTotalCars: (totalCarsCount: number) =>
    ({ type: "find/totalCarsCount", totalCarsCount }) as const,
  setPageSize: (pageSize: number) =>
    ({ type: "find/pageSize", pageSize }) as const,
  setCurrentPage: (currentPage: number) =>
    ({ type: "find/currentPage", currentPage }) as const,
};
