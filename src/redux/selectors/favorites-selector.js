export const selectFavorites = (state) => {
    return state.favorites.items;
}

export const selectIsLoading = (state) => {
    return state.favorites.isLoading;
}