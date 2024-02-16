import {BrandsType} from "../store/types/brands-reducer.types";
import {instance} from "../../../../../../../app/api/api";

export const carsAPI = {
    async getCarsInfo() {
        return await instance.get<BrandsType[]>("/brands")
    }
}