import {CommentsType} from "../store/types/comments-reducer.types";
import {instance} from "../../../../../../../app/api/api";
import {APITypes} from "../../../../../../../app/api/types/api.types";

export const commentsAPI = {
    async getComments() {
        const response = await instance.get<APITypes<CommentsType>>("/comments")
        return response.data
    }
}