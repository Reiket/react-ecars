import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/news-actions";
import {initialState} from "../news-reducer";

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsType<typeof actions>
export type PostType = {
    id: number
    imageUrl: string
    category: string
    title: string
    text: string
}
export type ThunkType = BaseThunkType<ActionsType>