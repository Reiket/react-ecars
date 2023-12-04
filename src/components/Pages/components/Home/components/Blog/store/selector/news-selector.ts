import {AppStateType} from "../../../../../../../../app/store/types/store.types";

export const selectNewsPosts = (state: AppStateType) => {
    return state.news.posts;
}