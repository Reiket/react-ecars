import {initialState} from "../featured-posts-reducer";
import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/featured-posts-actions";

export type InitialState = typeof initialState

export type Actions = InferActionsType<typeof actions>

export type Thunk = BaseThunkType<Actions, void>