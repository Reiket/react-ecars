import {ActionsType, InitialStateType} from "./types/offers-reducer.types";
import {ItemsType} from "../../../../../shared/components/Card/types/card.types";

export let initialState = {
    items: [] as Array<ItemsType>,
    isFetching: false,
    filters: {
        currency: 0,
        shipNumber: 0,
    }
}

const offersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_OFFERS":
            return {
                ...state,
                items: action.items,
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case "SET_FILTERS":
            return {
                ...state,
                filters: action.payload,
            }
        default: {
            return  state;
        }
    }
}



export default offersReducer;