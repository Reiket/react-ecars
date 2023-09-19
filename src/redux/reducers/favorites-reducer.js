import {favoritesAPI} from "../../api/api";
const GET_FAVORITES = "GET_FAVORITES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
    items: [],
    isLoading: false,
}
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  GET_FAVORITES:
            return {
                ...state,
                items: action.item,
            }
        case  ADD_TO_FAVORITES:
            return {
                ...state,
                items: [...state.items, action.item],
            }
        case REMOVE_FROM_FAVORITES:
            return  {
                ...state,
                items: state.items.filter((item) => Number(item.id) !== Number(action.item.id)),
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default : {
            return state;
        }
    }
}


const setFavorites = (item) => ({type: GET_FAVORITES, item});
const addToFavorites = (item) => ({type: ADD_TO_FAVORITES, item});
const removeToFavorites = (item) => ({type: REMOVE_FROM_FAVORITES, item});

export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const fetchFavorites = (num) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsLoading(true))
            let {data} = await favoritesAPI.getFavorites(num);
            dispatch(toggleIsLoading(false))
            dispatch(setFavorites(data))
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}

export const fetchAddToFav = (item) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsLoading(true))
            let {data} = await favoritesAPI.addToFavorites(item);
            dispatch(toggleIsLoading(false))
            dispatch(addToFavorites(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong with add to favorites! Please, try again!")
        }
    }
}
export const fetchRemoveFromFav = (id) => {
    return async (dispatch) => {
       try {
           dispatch(toggleIsLoading(true))
           await favoritesAPI.removeToFavorites(id);
           dispatch(toggleIsLoading(false))
           dispatch(removeToFavorites({ id }));
       } catch (error) {
           console.log("Error:" + error);
           alert("Something went wrong with remove from favorites! Please, try again!")
       }
    };
};



export default favoritesReducer;









