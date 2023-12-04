import {offerAPI} from "../../api/offers-api";
import {actions} from "../actions/offers-actions";
import {ThunkType} from "../types/offers-reducer.types";

export const fetchOfferById = (id: number): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsFetchingItemsById(true))
            let {data} = await offerAPI.getOfferCardById(id);
            dispatch(actions.toggleIsFetchingItemsById(false))
            dispatch(actions.setIOfferById(data));
        } catch (err) {
            alert("Something went wrong with fetch items.Please, try later! " + err);
            console.log("Error:" + err);
        }
    }
}