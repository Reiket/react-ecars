import {AppStateType} from "../../../../../../../../app/store/types/store.types";

export const selectComments = (state: AppStateType) => {
    return state.comments.comments;
}
