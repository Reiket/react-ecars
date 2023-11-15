import React from 'react';
import FavoriteItem from "./FavoriteItem";
import NotFoundFav from "./NotFoundFav";

import FavoritesLoader from "../Other/Loader/FavoritesLoader";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, selectIsLoading} from "../../redux/selectors/favorites-selector";
import {selectFilters} from "../../redux/selectors/offers-selector";
import {fetchFavorites} from "../../redux/reducers/favorites-reducer";
import {AppDispatch} from "../../redux/store";

const Favorites: React.FC = () => {
    const favItems = useSelector(selectFavorites)
    const isLoading = useSelector(selectIsLoading)
    const {shipNumber, currency} = useSelector(selectFilters)
    const dispatch: AppDispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchFavorites(shipNumber))
    }, [dispatch, shipNumber]);

    return isLoading ? (
        <section className="section__favorites favorites">
            <div className="favorites__container">
                <h2 className="favorites__title title">Favorites</h2>
                <div className="favorites__body">
                    {[...Array(4)].map((_, id) => <FavoritesLoader key={id}/>)}
                </div>
            </div>
        </section>
    ) : favItems.length > 0 ? (
        <section className="section__favorites favorites">
            <div className="favorites__container">
                <h2 className="favorites__title title">Favorites</h2>
                <div className="favorites__body">
                    {favItems.map((item, id) => (
                        <FavoriteItem key={id} favItems={favItems} item={item} currency={currency}/>
                    ))}
                </div>
            </div>
        </section>
    ) : <NotFoundFav/>
}

export default Favorites;