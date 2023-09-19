import React from 'react';
import {
    selectCurrency,
    selectIsFetchingOffers,
    selectItems, selectSearchValue,
    selectShipNumber
} from "../../../redux/selectors/offers-selector";
import { connect } from "react-redux";
import Offers from "./Offers";
import {fetchOffers} from "../../../redux/reducers/offers-reducer";
import {
    fetchAddToFav,
    fetchFavorites,
    fetchRemoveFromFav,
} from "../../../redux/reducers/favorites-reducer";
import {selectFavorites, selectIsLoading} from "../../../redux/selectors/favorites-selector";

const OffersContainer = ({ items, searchValue, isLoading, fetchOffers, fetchFavorites, isFetching, currency, shipNumber, fetchAddToFav, favorites,fetchRemoveFromFav }) => {
    console.log(searchValue)
    React.useEffect(() => {
        fetchOffers(shipNumber, searchValue);
        fetchFavorites(shipNumber)

    }, [fetchOffers, currency, shipNumber, fetchAddToFav, fetchRemoveFromFav, fetchFavorites, searchValue]);
    return (
        <Offers isLoading={isLoading} fetchFavorites={fetchFavorites} favorites={favorites} items={items} isFetching={isFetching} currency={currency} fetchAddToFav={fetchAddToFav} fetchRemoveFromFav={fetchRemoveFromFav}/>
    );
};

let mapStateToProps = (state) => ({
    items: selectItems(state),
    isFetching: selectIsFetchingOffers(state),
    currency: selectCurrency(state),
    shipNumber: selectShipNumber(state),
    favorites: selectFavorites(state),
    isLoading: selectIsLoading(state),
    searchValue: selectSearchValue(state),
});

export default connect(mapStateToProps, {fetchOffers, fetchAddToFav, fetchFavorites, fetchRemoveFromFav})(OffersContainer);