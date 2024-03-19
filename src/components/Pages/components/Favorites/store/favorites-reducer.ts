import {ActionsType, InitialStateType} from "./types/favorites-reducer.types";
import {ItemsType} from "../../../shared/components/Card/types/card.types";

export let initialState = {
    items: [] as Array<ItemsType>,
    isLoading: false,
}
const favoritesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case  "GET_FAVORITES":
            return {
                ...state,
                items: action.item,
            }
        case  "ADD_TO_FAVORITES":
            return {
                ...state,
                items: [...state.items, action.item] as Array<ItemsType>,
            }
        case "REMOVE_FROM_FAVORITES":
            return  {
                ...state,
                items: state.items.filter((item) => Number(item.id) !== Number(action.id)),
            }
        case "TOGGLE_IS_LOADING":
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default : {
            return state;
        }
    }
}



export default favoritesReducer;









