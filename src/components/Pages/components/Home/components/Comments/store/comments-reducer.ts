import {ActionsType, CommentsType, InitialStateType} from "./types/comments-reducer.types";
export let initialState = {
    comments: [] as Array<CommentsType>,
}
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
export default commentsReducer;