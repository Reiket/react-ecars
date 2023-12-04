import {ItemsType} from "../../../../../../../../shared/types/types";
import {FiltersType} from "../types/offers-reducer.types";

export const actions = {
    setOffers: (items: Array<ItemsType>) => ({type: "SET_OFFERS", items} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
    toggleIsFetchingItemsById: (isFetchingItemsById: boolean) => ({type: "TOGGLE_IS_FETCHING_ITEMS_BY_ID", isFetchingItemsById} as const),
    setIOfferById: (itemById: ItemsType) => ({type: "SET_ITEM_BY_ID", itemById} as const),
    setFilters: (filters: FiltersType) => ({type: "SET_FILTERS", payload: filters} as const),
}