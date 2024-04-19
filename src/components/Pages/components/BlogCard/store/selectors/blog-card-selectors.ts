import {AppStateType} from "../../../../../../app/store/types/store.types";

export const blogCardSelector = (state: AppStateType) => {
    return state.blogCard.blogCard
}
export const isLoadingSelector = (state: AppStateType) => {
    return state.blogCard.isLoading
}

export const relatedPostsSelector = (state: AppStateType) => {
    return state.blogCard.relatedPosts
}

export const countRelatedPostsSelector = (state: AppStateType) => {
    return state.blogCard.countRelatedPosts
}
export const isLoadingRelatedSelector = (state: AppStateType) => {
    return state.blogCard.isRelatedLoading
}