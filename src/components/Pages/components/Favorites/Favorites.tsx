import React from 'react';
import NotFoundFav from "./components/NotFoundFav/NotFoundFav";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, selectIsLoading} from "./store/selector/favorites-selector";
import {selectFilters} from "../Home/components/Offers/store/selector/offers-selector";
import Title from "../../../../shared/components/Title/Title";
import Card from "../../../../shared/components/Card/Card";
import {AppDispatch} from "../../../../app/store/types/store.types";
import {fetchFavorites} from "./store/thunks/fetchFavorites";
import CardLoader from "../../../../shared/components/Card/components/CardLoader/CardLoader";

const Favorites: React.FC = () => {
    const favItems = useSelector(selectFavorites)
    const isLoading = useSelector(selectIsLoading)
    const {shipNumber, currency} = useSelector(selectFilters)
    const dispatch: AppDispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchFavorites(shipNumber))
    }, [shipNumber]);
    const renderFavoritesContent = () => {
        if (isLoading) {
            return (
                <div className="favorites__body">
                    {[...Array(4)].map((_, id) => <CardLoader key={id}/>)}
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