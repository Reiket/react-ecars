import {ItemsType} from "../../../../shared/components/Card/types/card.types";

export const actions = {
    setFavorites: (item: Array<ItemsType>) => ({type: "GET_FAVORITES", item} as const),
    addToFavorites: (item: Array<ItemsType>) => ({type: "ADD_TO_FAVORITES", item} as const),
    removeFromFavorites: (id: number) => ({type: "REMOVE_FROM_FAVORITES", id} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "TOGGLE_IS_LOADING", isLoading} as const)
}