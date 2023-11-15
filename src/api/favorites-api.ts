import axios from "axios";
import {ItemsType} from "../types/types";

export const favoritesAPI = {
    getFavorites(number = 0) {
        return axios.get<Array<ItemsType>>(`http://localhost:3000/posts?ship=${number}`)
    },
    addToFavorites(item: ItemsType) {
        return axios.post<Array<ItemsType>>(" http://localhost:3000/posts", item)
    },
    removeToFavorites(id: number) {
        return axios.delete(`http://localhost:3000/posts/${id}`)
    }
}