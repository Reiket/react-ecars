import {newsAPI} from "../../api/news-api";
import {ThunkType} from "../types/news-reducer.types";
import {actions} from "../actions/news-actions";

export const fetchNews = (): ThunkType => {
    return async (dispatch) => {
        try {
            let {data} = await newsAPI.getNewsPosts();
            dispatch(actions.setNews(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}