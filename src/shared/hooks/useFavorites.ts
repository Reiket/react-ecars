import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../app/store/types/store.types";
import {selectFavorites} from "../../components/Pages/components/Favorites/store/selector/favorites-selector";
import {ItemsType} from "../types/types";
import {checkInFavorites} from "../utils";
import {fetchRemoveFromFav} from "../../components/Pages/components/Favorites/store/thunks/fetchRemoveFromFav";
import {fetchAddToFav} from "../../components/Pages/components/Favorites/store/thunks/fetchAddToFav";

export const useFavorites = () => {
    const dispatch: AppDispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    const onClickToFavorite = (item: ItemsType) => {
        if (checkInFavorites(item.id, favorites)) {
            dispatch(fetchRemoveFromFav(item.id))
        } else {
            dispatch(fetchAddToFav(item))
        }
    };
    return {onClickToFavorite}
}