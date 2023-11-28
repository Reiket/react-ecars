import React from 'react';
import NotFoundFav from "./components/NotFoundFav/NotFoundFav";
import FavoritesLoader from "../../../Other/Loader/FavoritesLoader";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, selectIsLoading} from "../../../../redux/selectors/favorites-selector";
import {selectFilters} from "../../../../redux/selectors/offers-selector";
import {fetchFavorites} from "../../../../redux/reducers/favorites-reducer";
import {AppDispatch} from "../../../../redux/store";
import Card from "../../../Shared/components/CarsCard/Card";
import Title from "../../../Shared/components/Title";

const Favorites: React.FC = () => {
    const favItems = useSelector(selectFavorites)
    const isLoading = useSelector(selectIsLoading)
    const {shipNumber, currency} = useSelector(selectFilters)
    const dispatch: AppDispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchFavorites(shipNumber))
    }, [dispatch, shipNumber]);
    const renderFavoritesContent = () => {
        if (isLoading) {
            return (
                <div className="favorites__body">
                    {[...Array(4)].map((_, id) => <FavoritesLoader key={id}/>)}
                </div>
            );
        }

        if (favItems.length > 0) {
            return (
                <div className="favorites__body">
                    {favItems.map((item, id) => (
                        <Card classnames={"favorites__item item-favorites"} key={id} favItems={favItems} item={item} currency={currency}/>
                    ))}
                </div>
            );
        }
        return <NotFoundFav/>;
    };
    return (
        <section className="section__favorites favorites">
            <div className="favorites__container">
                {favItems.length > 0 && <Title text={"Favorites"}/>}
                {renderFavoritesContent()}
            </div>
        </section>
    );

}


export default Favorites;