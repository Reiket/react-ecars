import {ThunkType} from "../types/comments-reducer.types";
import {commentsAPI} from "../../api/comments-api";
import {actions} from "../actions/comments-actions";

export const fetchComments = (): ThunkType => {
    return async (dispatch) => {
        try {
            let {data} = await commentsAPI.getComments();
            dispatch(actions.setComments(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}