import {AppStateType} from "../../../../../../../../app/store/types/store.types";

export const selectItems = (state: AppStateType) => {
    return state.offers.items;
}

export const selectIsFetchingOffers = (state: AppStateType) => {
    return state.offers.isFetching;
}


export const selectFilters = (state: AppStateType) => {
    return state.offers.filters;
}



