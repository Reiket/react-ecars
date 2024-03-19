import {favoritesAPI} from "../../api/favorites-api";
import {ThunkType} from "../types/favorites-reducer.types";
import {actions} from "../actions/favorites-actions";
import {ItemsType} from "../../../../shared/components/Card/types/card.types";

export const fetchAddToFav = (item: ItemsType): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            let {data}= await favoritesAPI.addToFavorites(item);
            dispatch(actions.toggleIsLoading(false))
            dispatch(actions.addToFavorites(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong with add to favorites! Please, try again!")
        }
    }
}