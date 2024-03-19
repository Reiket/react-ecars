import {instance} from "../../../../../app/api/api";
import {ItemsType} from "../../../shared/components/Card/types/card.types";

export const favoritesAPI = {
    async getFavorites(number = 0) {
        return instance.get<Array<ItemsType>>(`/favorites?ship=${number}`)
    },
    addToFavorites(item: ItemsType) {
        return instance.post<Array<ItemsType>>("/favorites", item)
    },
    removeToFavorites(id: number) {
        return instance.delete(`/favorites/${id}`)
    }
}