import {instance} from "../../../../../../../app/api/api";
import {ItemsType} from "../../../../../shared/components/Card/types/card.types";
import {API} from "../../../../../../../app/api/types/api.types";

export const offerAPI = {
    async getOffersCard(number = 0) {
        return await instance.get<API<ItemsType[]>>(`/offers`)
    }
}