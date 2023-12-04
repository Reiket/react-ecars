import {AppStateType} from "../../../../../../app/store/types/store.types";

export const selectFavorites = (state: AppStateType) => {
    return state.favorites.items;
}

export const selectIsLoading = (state: AppStateType) => {
    return state.favorites.isLoading;
}