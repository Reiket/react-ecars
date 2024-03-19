import {instance} from "../../../../../../../app/api/api";
import {ItemsType} from "../../../../../shared/components/Card/types/card.types";

export const offerAPI = {
    async getOffersCard(number = 0) {
        return await instance.get<ItemsType[]>(`/offers?ship=${number}`)
    }
}