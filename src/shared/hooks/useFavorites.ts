import {selectFavorites} from "../../components/Pages/components/Favorites/store/selector/favorites-selector";
import {ItemsType} from "../types/types";
import {checkInFavorites} from "../utils";
import {fetchRemoveFromFav} from "../../components/Pages/components/Favorites/store/thunks/fetchRemoveFromFav";
import {fetchAddToFav} from "../../components/Pages/components/Favorites/store/thunks/fetchAddToFav";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";

export const useFavorites = () => {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavorites)
    const onClickToFavorite = (item: ItemsType) => {
        if (checkInFavorites(item.id, favorites)) {
            dispatch(fetchRemoveFromFav(item.id))
        } else {
            dispatch(fetchAddToFav(item))
        }
    };
    return {onClickToFavorite}
}