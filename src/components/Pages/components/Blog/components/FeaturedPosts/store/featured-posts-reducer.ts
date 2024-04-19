import {Reducer} from "redux";
import {Actions, InitialState} from "./types/featured-posts-reducer.types";
import {BlogPost} from "../../../../../../../app/api/types/blog.types";

export let initialState = {
    posts: [] as BlogPost[],
    isLoading: true
}

const featuredPostsReducer: Reducer<InitialState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case "featured/posts":
            return {
                ...state,
                posts: action.posts,
                isLoading: false
            }
        case "featured/loading":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: {
            return state
        }
    }
}

export default featuredPostsReducer;