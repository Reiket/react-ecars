import {BaseThunkType, InferActionsType} from "../store";
import {newsAPI} from "../../api/news-api";

type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
export type PostType = {
    id: number
    imageUrl: string
    category: number
    title: string
    text: string
}
let initialState = {
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
const actions = {
    setNews: (posts: Array<PostType>) => ({type: "GET_NEWS", posts} as const)
}
type ThunkType = BaseThunkType<ActionsType>

export const fetchNews = (): ThunkType => {
    return async (dispatch) => {
        try {
            let {data} = await newsAPI.getNewsPosts();
            dispatch(actions.setNews(data));
        } catch (error) {
            console.log("Error:" + error);
            alert("Something went wrong! Please, try again!")
        }
    }
}


export default newsReducer;