import {selectFavorites} from "../../components/Favorites/store/selector/favorites-selector";
import {checkInFavorites} from "../../../../shared/utils";
import {fetchRemoveFromFav} from "../../components/Favorites/store/thunks/fetchRemoveFromFav";
import {fetchAddToFav} from "../../components/Favorites/store/thunks/fetchAddToFav";
import {useAppDispatch, useAppSelector} from "../../../../app/store/hooks";
import {ItemsType} from "../components/Card/types/card.types";

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