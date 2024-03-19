import React from 'react';
import {checkInFavorites} from "../../utils";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {
    selectFavorites,
    selectIsLoading
} from "../../../components/Pages/components/Favorites/store/selector/favorites-selector";
import {useFavorites} from "../../../components/Pages/shared/hooks/useFavorites";
import {TFavButton} from "./types/fav.btn.types";
import {useAppSelector} from "../../../app/store/hooks";

const FavButton: React.FC<TFavButton> = ({text,item, classnames}) => {
    const isLoading = useAppSelector(selectIsLoading)
    const favorites = useAppSelector(selectFavorites)
    const {onClickToFavorite} = useFavorites();
    return <button disabled={isLoading}
                   onClick={() => onClickToFavorite(item)}
                   className={classnames}>
        {checkInFavorites(item.id, favorites) ? <AiFillHeart /> : <AiOutlineHeart />}
        {text}
    </button>
};

export default FavButton;