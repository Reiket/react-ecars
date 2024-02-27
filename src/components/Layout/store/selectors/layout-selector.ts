import {AppStateType} from "../../../../app/store/types/store.types";

export const selectIsOpenPopup = (state: AppStateType) => {
    return state.layout.isOpenPopup
}