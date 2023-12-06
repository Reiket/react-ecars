import {ItemsType} from "../../../../../../../../shared/types/types";
import {FiltersType} from "../types/offers-reducer.types";

export const actions = {
    setOffers: (items: Array<ItemsType>) => ({type: "SET_OFFERS", items} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
    setFilters: (filters: FiltersType) => ({type: "SET_FILTERS", payload: filters} as const),
}