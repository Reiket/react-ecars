import axios from "axios";

import {PostType} from "../store/types/news-reducer.types";

export const newsAPI = {
    getNewsPosts() {
        return axios.get<Array<PostType>>("https://64e4b50dc55563802913a54c.mockapi.io/news")
    }
}