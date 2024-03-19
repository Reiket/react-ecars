import {ActionsType, InitialStateType} from "./types/details-reducer.types";
import {ItemsType} from "../../../shared/components/Card/types/card.types";

export let initialState = {
    detail: {} as ItemsType,
    isFetchingDetail: true,
}

const detailsReducer = (state = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "TOGGLE_IS_FETCHING_DETAIL":
            return {
                ...state,
                isFetchingDetail: action.isFetchingDetail,
            }
        case "SET_DETAIL":
            return {
                ...state,
               detail: action.detail,
            }
        default: {
            return state
        }
    }
}


export default  detailsReducer;