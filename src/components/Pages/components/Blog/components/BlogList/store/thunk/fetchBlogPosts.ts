import {blogAPI} from "../../../../store/api/blog-api";
import {Thunk} from "../types/blog-list-reducer.types";
import {actions} from "../actions/blog-list-actions";

export const fetchBlogPosts = (category: string | null, currentPage: number = 1, pageSize: number = 5): Thunk => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            dispatch(actions.setCurrentPage(currentPage))
            dispatch(actions.setCategory(category))
            let {data} = await blogAPI.getBlogPosts(category, currentPage, pageSize)
            dispatch(actions.setBlogPosts(data.data))
            dispatch(actions.setTotalBlogPosts(data.meta!.pagination.total))
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}