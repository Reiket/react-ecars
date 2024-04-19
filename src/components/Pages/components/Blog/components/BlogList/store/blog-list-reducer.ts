import {BlogPost} from "../../../../../../../app/api/types/blog.types";
import {Reducer} from "redux";
import {Actions, InitialState} from "./types/blog-list-reducer.types";

export const initialState = {
    blogPosts: [] as BlogPost[],
    isLoading: true,
    category: null as null | string,
    currentPage: 1,
    pageSize: 5,
    totalBlogPosts: 0,
}

const blogListReducer: Reducer<InitialState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case "blogList/posts":
            return {
                ...state,
                blogPosts: action.blogPosts,
                isLoading: false
            }
        case "blogList/loading":
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case "blogList/currentPage":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "blogList/category":
            return {
                ...state,
                category: action.category
            }
        case "blogList/totalBlogPosts":
            return {
                ...state,
                totalBlogPosts: action.totalBlogPosts
            }
        default : {
            return  state
        }
    }
}

export default blogListReducer;