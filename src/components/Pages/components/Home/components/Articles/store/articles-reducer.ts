import {Actions, InitialState} from "./types/artlcles-reducer.types";
import {BlogPost} from "../../../../../../../app/api/types/blog.types";
import {Reducer} from "redux";

export let initialState = {
    articlePosts: [] as BlogPost[],
    countArticlePosts: 3,
    isLoading: true
}
const articlesReducer: Reducer<InitialState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case "articles/articlePosts":
            return {
                ...state,
                articlePosts: action.articlePosts,
                isLoading: false,
            }
        case "articles/loading":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default : {
            return state;
        }
    }
}
export default articlesReducer;