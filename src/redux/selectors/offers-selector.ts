import {AppStateType} from "../store";

export const selectItems = (state: AppStateType) => {
    return state.offers.items;
}

export const selectItemById = (state: AppStateType) => {
    return state.offers.itemById;
}

export const selectIsFetchingOffers = (state: AppStateType) => {
    return state.offers.isFetching;
}


export const selectFilters = (state: AppStateType) => {
    return state.offers.filters;
}

export const selectIsFetchingItemsById = (state: AppStateType) => {
    return state.offers.isFetchingItemsById;
}

