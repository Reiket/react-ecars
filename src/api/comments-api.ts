import axios from "axios";
import {CommentsType} from "../redux/reducers/comments-reducer";

export const commentsAPI = {
    getComments() {
        return axios.get<Array<CommentsType>>("https://64e4b50dc55563802913a54c.mockapi.io/comments")
    }
}