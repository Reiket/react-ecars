import {initialState} from "../comments-reducer";
import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/comments-actions";

export type InitialStateType = typeof initialState
export type CommentsType = {
    id: number
    avatar: string
    fullName: string
    model: string
    comment: string
    rating: number
}

export type ActionsType = InferActionsType<typeof actions>

export type ThunkType = BaseThunkType<ActionsType>
