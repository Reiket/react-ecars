import {Actions, InitialState} from "./types/blog-card-reducer.types";
import {BlogPost} from "../../../../../app/api/types/blog.types";
import {Reducer} from "redux";
export let initialState = {
    blogCard: {} as BlogPost,
    isLoading: true,
    relatedPosts: [] as BlogPost[],
    isRelatedLoading: true,
    countRelatedPosts: 4,
}
const blogCardReducer: Reducer<InitialState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case "blogCard/card":
            return {
                ...state,
                blogCard: action.blogCard,
                isLoading: false,
            }
        case "blogCard/loading":
            return {
                ...state,
                isLoading: action.isLoading
            }
        case "blogCard/relatedPosts":
            return {
                ...state,
                relatedPosts: action.relatedPosts,
                isRelatedLoading: false
            }
        case "blogCard/relatedPosts/loading":
            return {
                ...state,
                isRelatedLoading: action.isRelatedLoading
            }
        default: {
            return  state
        }
    }
}


export default blogCardReducer;
