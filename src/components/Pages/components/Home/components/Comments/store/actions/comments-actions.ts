import {CommentsType} from "../types/comments-reducer.types";

export const actions = {
    setComments: (comments: Array<CommentsType>) => ({type: "GET_COMMENTS", comments} as const)
}