import {TActions, TInitialState} from "./types/layout.types";
import {Reducer} from "redux";

export let initialState = {
    isOpenGetPopup: false,
    isOpenContactPopup: false,
    isBurger: false
}
const layoutReducer: Reducer<TInitialState, TActions> = (state = initialState, action) => {
    switch (action.type) {
        case "layout/getPopup":
            return {
                ...state,
                isOpenGetPopup: action.isOpenGetPopup
            }
        case "layout/contactPopup":
            return {
                ...state,
                isOpenContactPopup: action.isOpenContactPopup,
            }
        case "layout/burger":
            return {
                ...state,
                isBurger: action.isBurger
            }
        default: {
            return state
        }
    }
}


export default layoutReducer;

