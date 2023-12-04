import {PostType} from "../types/news-reducer.types";

export const actions = {
    setNews: (posts: Array<PostType>) => ({type: "GET_NEWS", posts} as const)
}