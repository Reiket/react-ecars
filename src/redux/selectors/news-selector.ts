import {AppStateType} from "../store";

export const selectNewsPosts = (state: AppStateType) => {
    return state.news.posts;
}