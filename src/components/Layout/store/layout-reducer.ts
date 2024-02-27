import {ActionsType, TInitialState} from "./types/layout.types";

export let initialState = {
    isOpenPopup: false
}
const layoutReducer = (state = initialState, action: ActionsType): TInitialState => {
    switch (action.type) {
        case "TOGGLE_IS_POPUP_OPEN":
            return {
                ...state,
                isOpenPopup: action.isOpenPopup
            }
        default: {
            return state
        }
    }
}


export default layoutReducer;

