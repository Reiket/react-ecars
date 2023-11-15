import {ItemsType} from "../../types/types";
import {BaseThunkType, InferActionsType} from "../store";
import {favoritesAPI} from "../../api/favorites-api";
type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
let initialState = {
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

const actions = {
    setFavorites: (item: Array<ItemsType>) => ({type: "GET_FAVORITES", item} as const),
    addToFavorites: (item: Array<ItemsType>) => ({type: "ADD_TO_FAVORITES", item} as const),
    removeFromFavorites: ( id: number ) => ({type: "REMOVE_FROM_FAVORITES", id} as const),
    toggleIsLoading: (isLoading: boolean) => ({type: "TOGGLE_IS_LOADING", isLoading} as const)
}
type ThunkType = BaseThunkType<ActionsType>
export const fetchFavorites = (num: number) : ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            let {data} = await favoritesAPI.getFavorites(num);
            dispatch(actions.toggleIsLoading(false))
            dispatch(actions.setFavorites(data))
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}

export const fetchAddToFav = (item: ItemsType) : ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            let {data} = await favoritesAPI.addToFavorites(item);
            dispatch(actions.toggleIsLoading(false))
            dispatch(actions.addToFavorites(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong with add to favorites! Please, try again!")
        }
    }
}
export const fetchRemoveFromFav = (id: number) : ThunkType => {
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



export default favoritesReducer;









