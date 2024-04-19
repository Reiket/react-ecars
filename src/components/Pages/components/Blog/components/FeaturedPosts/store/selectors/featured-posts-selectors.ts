import {AppStateType} from "../../../../../../../../app/store/types/store.types";

export const featuredPostsSelector = (state: AppStateType) => state.blog.featuredPosts
