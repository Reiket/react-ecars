
import {detailsAPI} from "../../api/details-api";
import {ThunkType} from "../types/details-reducer.types";
import {actions} from "../actions/details-actions";

export const fetchOfferById = (id: number): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsFetchingDetail(true))
            let {data} = await detailsAPI.getOfferCardById(id);
            dispatch(actions.toggleIsFetchingDetail(false))
            dispatch(actions.setDetail(data));
        } catch (err) {
            alert("Something went wrong with fetch items.Please, try later! " + err);
            console.log("Error:" + err);
        }
    }
}