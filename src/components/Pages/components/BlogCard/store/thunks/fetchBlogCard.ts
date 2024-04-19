import {Thunk} from "../types/blog-card-reducer.types";
import {actions} from "../actions/blog-card-actions";
import {blogAPI} from "../../../Blog/store/api/blog-api";

export const fetchBlogCard = (id: number) : Thunk => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsLoading(true))
            let {data} = await blogAPI.getBlogCard(id)
            dispatch(actions.setBlogCard(data.data))
        } catch (err) {
            alert("Some error" + err)
            console.log(err)
        }
    }
}