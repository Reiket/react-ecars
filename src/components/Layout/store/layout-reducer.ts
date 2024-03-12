import {ActionsType, TInitialState} from "./types/layout.types";

export let initialState = {
    isOpenGetPopup: false,
    isOpenContactPopup: false
}
const layoutReducer = (state = initialState, action: ActionsType): TInitialState => {
    switch (action.type) {
        case "TOGGLE_IS_OPEN_GET_POPUP":
            return {
                ...state,
                isOpenGetPopup: action.isOpenGetPopup
            }
        case "TOGGLE_IS_OPEN_CONTACT_POPUP":
            return {
                ...state,
                isOpenContactPopup: action.isOpenContactPopup
            }
        default: {
            return state
        }
    }
}


export default layoutReducer;

