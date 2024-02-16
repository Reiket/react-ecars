import {ItemsType} from "../../../../../shared/types/types";
import {instance} from "../../../../../app/api/api";


export const detailsAPI = {
    async getOfferCardById(id: number) {
        return await instance.get<ItemsType>("/offers/" + id)
    }
}