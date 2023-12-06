import axios from "axios";
import {ItemsType} from "../../../../../shared/types/types";


export const detailsAPI = {
    getOfferCardById(id: number) {
        return axios.get<ItemsType>("http://localhost:3000/offers/" + id);
    }
}