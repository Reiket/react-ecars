import React from 'react';
import NotFoundFav from "./components/NotFoundFav/NotFoundFav";
import {selectFavorites, selectIsLoading} from "./store/selector/favorites-selector";
import {selectFilters} from "../Home/components/Offers/store/selector/offers-selector";
import Title from "../../../../shared/components/Title/Title";
import Card from "../../../../shared/components/Card/Card";
import {useAppSelector} from "../../../../app/store/hooks";
import {Icons} from "../../../../shared/components/Icons/Icons";

const Favorites: React.FC = () => {
    const favItems = useAppSelector(selectFavorites)
    const isLoading = useAppSelector(selectIsLoading)
    const {currency} = useAppSelector(selectFilters)
    const renderFavoritesContent = () => {
        if (favItems.length > 0) {
            return <div className="favorites__body">
                {favItems.map((item, id) => (
                    <Card classnames={"favorites__item item-favorites"} key={id} item={item} currency={currency}/>
                ))}
            </div>
        }
        return <NotFoundFav/>
    };
    return isLoading ? <Icons.loader/>  : <section className="section__favorites favorites">
        <div className="favorites__container">
            {favItems.length > 0 && <Title text={"Favorites"}/>}
            {renderFavoritesContent()}
        </div>
    </section>

}


export default Favorites;