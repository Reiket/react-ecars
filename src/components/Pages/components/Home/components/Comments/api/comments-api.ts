import {CommentsType} from "../store/types/comments-reducer.types";
import {instance} from "../../../../../../../app/api/api";

export const commentsAPI = {
    async getComments() {
        return await instance.get<CommentsType[]>("/comments")
    }
}