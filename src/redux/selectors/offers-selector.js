export const selectItems = (state) => {
    return state.offers.items;
}

export const selectIsFetchingOffers = (state) => {
    return state.offers.isFetching;
}

export const selectCurrency = (state) => {
    return state.offers.currency;
}

export const selectShipNumber = (state) => {
    return state.offers.shipNumber;
}


export const selectSearchValue = (state) => {
    return state.offers.searchValue;
}