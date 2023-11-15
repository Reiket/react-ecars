import {BaseThunkType, InferActionsType} from "../store";
import {commentsAPI} from "../../api/comments-api";
type InitialStateType = typeof initialState
export type CommentsType = {
    id: number
    avatar: string
    fullName: string
    model: string
    comment: string
    rating: number
}
let initialState = {
    comments: [] as Array<CommentsType>,
}
type ActionsType = InferActionsType<typeof actions>
const commentsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state,
                comments: action.comments,
            }
        default : {
            return state;
        }
    }
}
type ThunkType = BaseThunkType<ActionsType>
const actions = {
    setComments: (comments: Array<CommentsType>) => ({type: "GET_COMMENTS", comments} as const)
}


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

export default commentsReducer;