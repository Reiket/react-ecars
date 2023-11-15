import axios from "axios";
import {ItemsType} from "../types/types";

export const offerAPI = {
    getOffersCard(number = 0) {
        return axios.get<Array<ItemsType>>(`http://localhost:3000/offers?ship=${number}`)
    },
    getOfferCardById(id: number) {
        return axios.get<ItemsType>("http://localhost:3000/offers/" + id);
    }
}