import {PostType} from "../store/types/news-reducer.types";
import {instance} from "../../../../../../../app/api/api";
import {APITypes} from "../../../../../../../app/api/types/api.types";

export const newsAPI = {
    async getNewsPosts() {
        const response = await instance.get<APITypes<PostType>>("/news");
        return response.data;
    }
}