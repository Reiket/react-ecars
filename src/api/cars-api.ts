import axios from "axios";
import {BrandsType} from "../redux/reducers/cars-reducer";

export const carsAPI = {
    getCarsInfo() {
        return axios.get<Array<BrandsType>>("https://645e60678d08100293fe0ba5.mockapi.io/cars")
    }
}