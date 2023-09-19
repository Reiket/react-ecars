import React from 'react';
import {selectFavorites, selectIsLoading} from "../../redux/selectors/favorites-selector";
import { connect } from "react-redux";
import {fetchFavorites, fetchRemoveFromFav, toggleIsLoading} from "../../redux/reducers/favorites-reducer";
import Favorites from "./Favorites";
import {selectCurrency, selectShipNumber} from "../../redux/selectors/offers-selector";

const FavoritesContainer = ({isLoading, toggleIsLoading, items, fetchFavorites, fetchRemoveFromFav, currency, shipNumber }) => {

    React.useEffect(() => {
        fetchFavorites(shipNumber)
    }, [fetchFavorites, currency, shipNumber]);

    return <Favorites toggleIsLoading={toggleIsLoading} isLoading={isLoading} items={items} currency={currency} fetchRemoveFromFav={fetchRemoveFromFav} />;
};

let mapStateToProps = (state) => ({
    items: selectFavorites(state),
    currency: selectCurrency(state),
    shipNumber: selectShipNumber(state),
    isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps, { fetchFavorites, fetchRemoveFromFav,toggleIsLoading })(FavoritesContainer);
