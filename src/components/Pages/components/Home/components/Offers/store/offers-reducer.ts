import {ItemsType} from "../../../../../../../shared/types/types";
import {ActionsType, InitialStateType} from "./types/offers-reducer.types";

export let initialState = {
    items: [] as Array<ItemsType>,
    isFetching: false,
    isFetchingItemsById: false,
    itemById: {} as ItemsType,
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
        case "SET_ITEM_BY_ID":
            return {
                ...state,
                itemById: action.itemById,
            }
        case "TOGGLE_IS_FETCHING_ITEMS_BY_ID":
            return {
                ...state,
                isFetchingItemsById: action.isFetchingItemsById,
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