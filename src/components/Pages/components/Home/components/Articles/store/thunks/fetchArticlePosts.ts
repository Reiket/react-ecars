import {Thunk} from "../types/artlcles-reducer.types";
import {actions} from "../actions/articles-actions";
import {blogAPI} from "../../../../../Blog/store/api/blog-api";

export const fetchArticlePosts = (count: number): Thunk => {
    return async (dispatch) => {
        try {
          let {data} = await blogAPI.getArticlePosts(count);
          dispatch(actions.setArticlePosts(data.data))

        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}