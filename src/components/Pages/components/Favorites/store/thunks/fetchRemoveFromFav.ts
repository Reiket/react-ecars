import {favoritesAPI} from "../../api/favorites-api";
import {ThunkType} from "../types/favorites-reducer.types";
import {actions} from "../actions/favorites-actions";

export const fetchRemoveFromFav = (id: number): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            await favoritesAPI.removeToFavorites(id);
            dispatch(actions.toggleIsLoading(false))
            dispatch(actions.removeFromFavorites(id));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong with remove from favorites! Please, try again!")
        }
    };
};