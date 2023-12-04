import axios from "axios";
import {CommentsType} from "../store/types/comments-reducer.types";
export const commentsAPI = {
    getComments() {
        return axios.get<Array<CommentsType>>("https://64e4b50dc55563802913a54c.mockapi.io/comments")
    }
}