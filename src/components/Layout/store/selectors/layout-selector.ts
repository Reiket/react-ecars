import {AppStateType} from "../../../../app/store/types/store.types";

export const selectIsOpenGetPopup = (state: AppStateType) =>  state.layout.isOpenGetPopup
export const selectIsOpenContactPopup = (state: AppStateType) => state.layout.isOpenContactPopup

export const isBurgerSelector = (state: AppStateType) => state.layout.isBurger
