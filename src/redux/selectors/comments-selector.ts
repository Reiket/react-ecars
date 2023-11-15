import {AppStateType} from "../store";

export const selectComments = (state: AppStateType) => {
    return state.comments.comments;
}
