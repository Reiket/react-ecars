import {PostType} from "../store/types/news-reducer.types";
import {instance} from "../../../../../../../app/api/api";

export const newsAPI = {
    async getNewsPosts() {
        return await instance.get<PostType[]>("/news")
    }
}