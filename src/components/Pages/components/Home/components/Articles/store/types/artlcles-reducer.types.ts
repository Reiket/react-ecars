import {BaseThunkType, InferActionsType} from "../../../../../../../../app/store/types/store.types";
import {actions} from "../actions/articles-actions";
import {initialState} from "../articles-reducer";

export type InitialState = typeof initialState
export type Actions = InferActionsType<typeof actions>
export type Thunk = BaseThunkType<Actions, void>