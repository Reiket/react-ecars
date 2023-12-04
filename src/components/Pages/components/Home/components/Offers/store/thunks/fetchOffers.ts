import {offerAPI} from "../../api/offers-api";
import {actions} from "../actions/offers-actions";
import {ThunkType} from "../types/offers-reducer.types";

export const fetchOffers = (shipNumber: number): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsFetching(true));
            let {data} = await offerAPI.getOffersCard(shipNumber);
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setOffers(data));
        } catch (err) {
            alert("Something went wrong.Please, try later! " + err);
            console.log("Error:" + err);
        }
    }
}