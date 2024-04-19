import {AppStateType} from "../../../../../../../../app/store/types/store.types";

export const brandsSelector = (state: AppStateType) => {
    return state.home.brands.items
}

export const isLoadingSelector = (state: AppStateType) => {
    return state.home.brands.isLoading
}

export const hasMoreSelector = (state: AppStateType) => {
    return state.home.brands.hasMore
}