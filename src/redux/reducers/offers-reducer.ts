import {ItemsType} from "../../types/types";
import {BaseThunkType, InferActionsType} from "../store";
import {offerAPI} from "../../api/offers-api";
type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
export type FiltersType = {
    currency: number
    shipNumber: number
}
let initialState = {
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
type ThunkType = BaseThunkType<ActionsType>
export const actions = {
     setOffers: (items: Array<ItemsType>) => ({type: "SET_OFFERS", items} as const),
     toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
     toggleIsFetchingItemsById: (isFetchingItemsById: boolean) => ({type: "TOGGLE_IS_FETCHING_ITEMS_BY_ID", isFetchingItemsById} as const),
     setIOfferById: (itemById: ItemsType) => ({type: "SET_ITEM_BY_ID", itemById} as const),
     setFilters :(filters: FiltersType) => ({type: "SET_FILTERS", payload: filters} as const),
}



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

export const fetchOfferById = (id: number) : ThunkType => {
    return async (dispatch) => {
       try {
           dispatch(actions.toggleIsFetchingItemsById(true))
           let {data} = await offerAPI.getOfferCardById(id);
           dispatch(actions.toggleIsFetchingItemsById(false))
           dispatch(actions.setIOfferById(data));
       }  catch (err) {
           alert("Something went wrong with fetch items.Please, try later! " + err);
           console.log("Error:" + err);
       }
    }
}


export default offersReducer;