import {AppStateType} from "../../../../../../app/store/types/store.types";

export const selectIsFetchingDetail = (state: AppStateType) => {
    return state.details.isFetchingDetail;
}

export const selectDetail = (state: AppStateType) => {
    return state.details.detail;
}
