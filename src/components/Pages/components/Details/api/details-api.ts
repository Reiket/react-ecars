import {instance} from "../../../../../app/api/api";
import {ItemsType} from "../../../shared/components/Card/types/card.types";


export const detailsAPI = {
    async getOfferCardById(id: number) {
        return await instance.get<ItemsType>("/offers/" + id)
    }
}