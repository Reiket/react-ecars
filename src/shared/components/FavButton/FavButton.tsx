import React from 'react';
import {checkInFavorites} from "../../utils";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useSelector} from "react-redux";
import {
    selectFavorites,
    selectIsLoading
} from "../../../components/Pages/components/Favorites/store/selector/favorites-selector";
import {useFavorites} from "../../hooks/useFavorites";
import {TFavButton} from "./types/fav.btn.types";

const FavButton: React.FC<TFavButton> = ({text,item, classnames}) => {
    const isLoading = useSelector(selectIsLoading)
    const favorites = useSelector(selectFavorites)
    const {onClickToFavorite} = useFavorites();
    return <button disabled={isLoading}
                   onClick={() => onClickToFavorite(item)}
                   className={classnames}>
        {checkInFavorites(item.id, favorites) ? <AiFillHeart /> : <AiOutlineHeart />}
        {text}
    </button>
};

export default FavButton;