import {Thunk} from "../types/brands-reducer.types";
import {actions} from "../actions/brands-actions";
import {brandsAPI} from "../../api/brands-api";

export const fetchBrands = (hasMore: boolean): Thunk => {
    return async (dispatch) => {
        dispatch(actions.toggleIsLoading(true))
        let {data} = await brandsAPI.getBrands(hasMore);
        dispatch(actions.setBrands(data.data))
    }
}