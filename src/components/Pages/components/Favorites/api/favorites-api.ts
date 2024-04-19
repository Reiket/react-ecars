import {instance} from "../../../../../app/api/api";
import {ItemsType} from "../../../shared/components/Card/types/card.types";
import axios from "axios";
import {API} from "../../../../../app/api/types/api.types";

export const favoritesAPI = {
    async getFavorites(number = 0) {
        return instance.get<API<ItemsType[]>>(`/favorites`,)
    },
    addToFavorites(item: ItemsType) {
        return instance.post<API<ItemsType[]>>("/favorites", item)
    },
    removeToFavorites(id: number) {
        return axios.delete(`/api/offers/${id}/remove-from-favorites`)
    }
}