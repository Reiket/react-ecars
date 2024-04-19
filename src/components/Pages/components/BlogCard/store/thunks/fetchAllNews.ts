
import {actions} from "../actions/blog-card-actions";
import {Thunk} from "../types/blog-card-reducer.types";
import {blogAPI} from "../../../Blog/store/api/blog-api";

export const fetchRelatedPosts = (category: string, id: number, count: number) : Thunk => {
    return async (dispatch) => {
        try {
          dispatch(actions.toggleIsRelatedLoading(true))
          let {data} = await blogAPI.getRelatedPosts(id, category, count)
          dispatch(actions.setRelatedPosts(data.data))
        } catch (err) {
            console.log("Some err" + err)
        }
    }
}