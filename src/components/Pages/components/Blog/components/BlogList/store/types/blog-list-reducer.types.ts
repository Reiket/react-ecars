import {initialState} from "../blog-list-reducer";
import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/blog-list-actions";

export type InitialState = typeof initialState

export type Actions = InferActionsType<typeof actions>

export type Thunk = BaseThunkType<Actions, void>

