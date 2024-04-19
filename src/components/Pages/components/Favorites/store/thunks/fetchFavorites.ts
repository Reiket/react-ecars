import {favoritesAPI} from "../../api/favorites-api";
import {ThunkType} from "../types/favorites-reducer.types";
import {actions} from "../actions/favorites-actions";

export const fetchFavorites = (num: number): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            let {data} = await favoritesAPI.getFavorites(num);
            dispatch(actions.toggleIsLoading(false))
            dispatch(actions.setFavorites(data.data))
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}