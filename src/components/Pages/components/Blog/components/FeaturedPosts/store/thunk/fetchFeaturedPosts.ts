import {Thunk} from "../types/featured-posts-reducer.types";
import {actions} from "../actions/featured-posts-actions";
import {blogAPI} from "../../../../store/api/blog-api";

export const fetchFeaturedPosts = (): Thunk => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            let {data} = await blogAPI.getFeaturedPosts();
            dispatch(actions.setPosts(data.data))
        } catch (err) {
            console.log("Some error:", err)
        }
    }
}