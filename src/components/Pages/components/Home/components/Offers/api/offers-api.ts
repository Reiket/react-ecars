import {ItemsType} from "../../../../../../../shared/types/types";
import {instance} from "../../../../../../../app/api/api";

export const offerAPI = {
    async getOffersCard(number = 0) {
        return await instance.get<ItemsType[]>(`/offers?ship=${number}`)
    }
}