import { instance } from "src/app/api/api";
import { API_PATH } from "src/app/api/api-path";
import { API } from "src/app/api/types/api.types";
import { CarType } from "src/app/api/types/cars.types";

export const findAPI = {
  async getCars(currentPage = 1, pageSize = 10) {
    return await instance.get<API<CarType[]>>(
      `${API_PATH.catalogCars}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
    );
  },
};
