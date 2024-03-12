import {AppStateType} from "../../../../app/store/types/store.types";

export const selectIsOpenGetPopup = (state: AppStateType) => {
    return state.layout.isOpenGetPopup
}
export const selectIsOpenContactPopup = (state: AppStateType) => {
    return state.layout.isOpenContactPopup
}