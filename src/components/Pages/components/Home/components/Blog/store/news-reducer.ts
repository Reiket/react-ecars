import {ActionsType, InitialStateType, PostType} from "./types/news-reducer.types";
export let initialState = {
    posts: [] as Array<PostType>,
}
const newsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                posts: action.posts,
            }
        default : {
            return state;
        }
    }
}
export default newsReducer;