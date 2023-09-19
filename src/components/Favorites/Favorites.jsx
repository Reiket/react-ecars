import React from 'react';
import FavoriteItem from "./FavoriteItem";
import NotFoundFav from "./NotFoundFav";

import FavoritesLoader from "../Loader/FavoritesLoader";

const Favorites = ({items, fetchRemoveFromFav, isLoading}) => {

    return isLoading ? (
        <section className="section__favorites favorites">
            <div className="favorites__container">
                <h2 className="favorites__title title">Favorites</h2>
                <div className="favorites__body">
                    {[...Array(4)].map((_, id) => <FavoritesLoader key={id}/>)}
                </div>
            </div>
        </section>
    ) : items.length > 0 ? (
        <section className="section__favorites favorites">
            <div className="favorites__container">
                <h2 className="favorites__title title">Favorites</h2>
                <div className="favorites__body">
                    {items.map((item, id) => (
                        <FavoriteItem key={id} fetchRemoveFromFav={fetchRemoveFromFav} items={items} {...item} />
                    ))}
                </div>
            </div>
        </section>
    ) : <NotFoundFav/>
}

export default Favorites;